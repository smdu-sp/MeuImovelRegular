import type { CollectionAfterChangeHook } from "payload";

export const pageAuditActionOptions = [
  "create",
  "update",
  "publish",
  "unpublish",
  "deactivate",
  "reactivate",
] as const;

type PageAuditAction = (typeof pageAuditActionOptions)[number];

type PageAuditDoc = {
  _status?: "draft" | "published" | null;
  id?: number | string;
  lifecycleStatus?: "active" | "inactive" | null;
  slug?: string | null;
  title?: string | null;
};

type AuditActor = {
  email?: string | null;
  id?: number | string;
};

type PayloadCreate = {
  create: (args: {
    collection: string;
    data: Record<string, unknown>;
    overrideAccess?: boolean;
    req?: unknown;
  }) => Promise<unknown>;
};

const pageAuditFields = [
  "_status",
  "lifecycleStatus",
  "title",
  "slug",
  "layout",
  "seo",
] as const;

export const resolvePageAuditAction = (
  operation: "create" | "update",
  doc: PageAuditDoc,
  previousDoc?: PageAuditDoc,
): PageAuditAction => {
  if (operation === "create") {
    return "create";
  }

  if (
    previousDoc?.lifecycleStatus !== "inactive" &&
    doc.lifecycleStatus === "inactive"
  ) {
    return "deactivate";
  }

  if (
    previousDoc?.lifecycleStatus === "inactive" &&
    doc.lifecycleStatus !== "inactive"
  ) {
    return "reactivate";
  }

  if (previousDoc?._status !== "published" && doc._status === "published") {
    return "publish";
  }

  if (previousDoc?._status === "published" && doc._status !== "published") {
    return "unpublish";
  }

  return "update";
};

export const getChangedPageFields = (
  doc: PageAuditDoc,
  previousDoc?: PageAuditDoc,
): string[] => {
  if (!previousDoc) {
    return [];
  }

  return pageAuditFields.filter((field) => {
    const currentValue = doc[field as keyof PageAuditDoc];
    const previousValue = previousDoc[field as keyof PageAuditDoc];
    return JSON.stringify(currentValue) !== JSON.stringify(previousValue);
  });
};

export const createPageAuditLog: CollectionAfterChangeHook = async ({
  doc,
  operation,
  previousDoc,
  req,
}) => {
  const page = doc as PageAuditDoc;
  const previousPage = previousDoc as PageAuditDoc | undefined;
  const actor = req.user as AuditActor | null | undefined;
  const changedFields = getChangedPageFields(page, previousPage);
  const action = resolvePageAuditAction(operation, page, previousPage);

  await (req.payload as PayloadCreate).create({
    collection: "audit-logs",
    data: {
      action,
      actor: actor?.id,
      actorEmail: actor?.email,
      changedFields: changedFields.map((field) => ({ field })),
      collection: "pages",
      documentId: String(page.id ?? ""),
      documentTitle: page.title || page.slug || `Page ${String(page.id ?? "")}`,
      timestamp: new Date().toISOString(),
      version: page._status ?? undefined,
    },
    overrideAccess: true,
    req,
  });
};
