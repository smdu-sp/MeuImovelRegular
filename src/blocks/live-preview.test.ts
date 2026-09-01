import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getPageLivePreviewUrl, Pages } from "../collections/Pages";

describe("SPEC-025 Live Preview", () => {
  it("keeps traditional preview and enables protected live preview for Pages", () => {
    assert.equal(typeof Pages.admin?.preview, "function");
    assert.equal(typeof Pages.admin?.livePreview?.url, "function");
    assert.deepEqual(
      Pages.admin?.livePreview?.breakpoints?.map(({ name }) => name),
      ["mobile", "tablet", "desktop"],
    );
  });

  it("builds a same-origin live preview entry URL only for identified pages", () => {
    assert.equal(
      getPageLivePreviewUrl({ slug: "entenda-a-lei" }),
      "http://localhost:3000/api/live-preview?slug=entenda-a-lei",
    );
    assert.equal(getPageLivePreviewUrl({}), null);
    assert.equal(getPageLivePreviewUrl({ slug: "" }), null);
  });

  it("keeps draft persistence and publishing controls enabled", () => {
    assert.ok(Pages.versions);
    assert.ok(typeof Pages.versions === "object" && Pages.versions.drafts);
  });
});
