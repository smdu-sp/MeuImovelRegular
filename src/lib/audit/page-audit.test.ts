import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  createPageAuditLog,
  getChangedPageFields,
  resolvePageAuditAction,
} from "./page-audit";

describe("page audit logs", () => {
  it("resolves create, update, publish, unpublish and lifecycle actions", () => {
    assert.equal(resolvePageAuditAction("create", { _status: "draft" }), "create");
    assert.equal(
      resolvePageAuditAction(
        "update",
        { _status: "published" },
        { _status: "draft" },
      ),
      "publish",
    );
    assert.equal(
      resolvePageAuditAction(
        "update",
        { _status: "draft" },
        { _status: "published" },
      ),
      "unpublish",
    );
    assert.equal(
      resolvePageAuditAction(
        "update",
        { lifecycleStatus: "inactive" },
        { lifecycleStatus: "active" },
      ),
      "deactivate",
    );
    assert.equal(
      resolvePageAuditAction(
        "update",
        { lifecycleStatus: "active" },
        { lifecycleStatus: "inactive" },
      ),
      "reactivate",
    );
    assert.equal(
      resolvePageAuditAction(
        "update",
        { _status: "published", title: "Atual" },
        { _status: "published", title: "Anterior" },
      ),
      "update",
    );
  });

  it("summarizes changed page fields without storing full snapshots", () => {
    assert.deepEqual(
      getChangedPageFields(
        {
          _status: "published",
          lifecycleStatus: "inactive",
          slug: "nova",
          title: "Nova",
        },
        {
          _status: "draft",
          lifecycleStatus: "active",
          slug: "antiga",
          title: "Nova",
        },
      ),
      ["_status", "lifecycleStatus", "slug"],
    );
  });

  it("creates an immutable audit entry through the internal hook path", async () => {
    const calls: Array<{
      collection: string;
      data: {
        timestamp: string;
      } & Record<string, unknown>;
      overrideAccess: boolean;
      req: unknown;
    }> = [];
    const req = {
      payload: {
        create: async (args: (typeof calls)[number]) => {
          calls.push(args);
        },
      },
      user: {
        email: "admin@example.gov.br",
        id: 7,
      },
    };

    await createPageAuditLog({
      collection: {} as Parameters<typeof createPageAuditLog>[0]["collection"],
      context: {},
      data: {},
      doc: {
        _status: "published",
        id: 10,
        slug: "home",
        title: "Home",
      },
      operation: "update",
      previousDoc: {
        _status: "draft",
        id: 10,
        slug: "home",
        title: "Home",
      },
      req: req as Parameters<typeof createPageAuditLog>[0]["req"],
    });

    assert.equal(calls.length, 1);
    assert.deepEqual(calls[0], {
      collection: "audit-logs",
      data: {
        action: "publish",
        actor: 7,
        actorEmail: "admin@example.gov.br",
        changedFields: [{ field: "_status" }],
        collection: "pages",
        documentId: "10",
        documentTitle: "Home",
        timestamp: calls[0]?.data.timestamp,
        version: "published",
      },
      overrideAccess: true,
      req,
    });
  });
});
