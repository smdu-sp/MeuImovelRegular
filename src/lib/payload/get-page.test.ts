import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { activeLifecycleWhere } from "./get-page";

describe("page lifecycle public queries", () => {
  it("requires active lifecycle status for public page queries", () => {
    assert.deepEqual(activeLifecycleWhere, {
      lifecycleStatus: {
        equals: "active",
      },
    });
  });
});
