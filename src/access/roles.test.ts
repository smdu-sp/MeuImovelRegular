import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Access, FieldAccess } from "payload";

import {
  adminFieldOnly,
  adminOnly,
  adminOrEditor,
  canEditContent,
  getUserRole,
  isAdmin,
  isEditor,
  publishedOrLoggedIn,
} from "./roles";

type TestUser = {
  id?: number | string;
  role?: "admin" | "editor" | null;
};

const accessArgs = (user?: TestUser | null, id?: number | string) =>
  ({
    id,
    req: {
      user,
    },
  }) as Parameters<Access>[0];

const fieldArgs = (user?: TestUser | null) =>
  ({
    req: {
      user,
    },
  }) as Parameters<FieldAccess>[0];

describe("CMS roles and permissions", () => {
  it("recognizes the initial role set", () => {
    assert.equal(getUserRole({ role: "admin" }), "admin");
    assert.equal(getUserRole({ role: "editor" }), "editor");
    assert.equal(getUserRole({ role: null }), null);
  });

  it("allows admins to manage sensitive CMS areas", () => {
    const admin = { id: 1, role: "admin" as const };

    assert.equal(isAdmin(admin), true);
    assert.equal(isEditor(admin), false);
    assert.equal(adminOnly(accessArgs(admin)), true);
    assert.equal(adminFieldOnly(fieldArgs(admin)), true);
  });

  it("allows editors to edit content but not sensitive areas", () => {
    const editor = { id: 2, role: "editor" as const };

    assert.equal(canEditContent(editor), true);
    assert.equal(adminOrEditor(accessArgs(editor)), true);
    assert.equal(adminOnly(accessArgs(editor)), false);
    assert.equal(adminFieldOnly(fieldArgs(editor)), false);
  });

  it("rejects unauthenticated writes and limits public page reads to published docs", () => {
    assert.equal(adminOnly(accessArgs(null)), false);
    assert.equal(adminOrEditor(accessArgs(null)), false);
    assert.deepEqual(publishedOrLoggedIn(accessArgs(null)), {
      _status: {
        equals: "published",
      },
    });
  });

  it("keeps existing users without role administratively compatible", () => {
    const legacyUser = { id: 1, role: null };

    assert.equal(isAdmin(legacyUser), true);
    assert.equal(adminOnly(accessArgs(legacyUser)), true);
  });
});
