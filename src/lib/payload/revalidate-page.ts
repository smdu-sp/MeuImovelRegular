import { revalidatePath } from "next/cache";
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import { pageSlugToPath } from "../../domain/slug";
import type { Page } from "../../payload-types";

type PageCacheDocument = {
  slug?: unknown;
};

export function collectChangedPageSlugs(
  doc?: PageCacheDocument | null,
  previousDoc?: PageCacheDocument | null,
): string[] {
  const slugs = [previousDoc?.slug, doc?.slug].filter(
    (slug): slug is string => typeof slug === "string" && slug.trim().length > 0,
  );

  return Array.from(new Set(slugs));
}

export function revalidatePage(slug: unknown): void {
  if (typeof slug !== "string") {
    return;
  }

  try {
    revalidatePath(pageSlugToPath(slug));
  } catch {
    // Seeds and CLI scripts run outside the Next.js request/cache context.
  }
}

export function revalidateChangedPageSlugs(
  doc?: PageCacheDocument | null,
  previousDoc?: PageCacheDocument | null,
): void {
  for (const slug of collectChangedPageSlugs(doc, previousDoc)) {
    revalidatePage(slug);
  }
}

export const revalidateChangedPage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
}) => {
  revalidateChangedPageSlugs(doc, previousDoc);
};

export const revalidateDeletedPage: CollectionAfterDeleteHook<Page> = ({ doc }) => {
  revalidateChangedPageSlugs(doc);
};
