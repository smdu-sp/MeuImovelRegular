import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { buildPageLookupWhere } from "./get-page";
import { collectChangedPageSlugs } from "./revalidate-page";

describe("unpublish workflow", () => {
  it("keeps public page lookup restricted to active published docs", () => {
    assert.deepEqual(buildPageLookupWhere("entenda-a-lei"), {
      lifecycleStatus: {
        equals: "active",
      },
      slug: {
        equals: "entenda-a-lei",
      },
      _status: {
        equals: "published",
      },
    });
  });

  it("keeps authenticated preview lookup able to read drafts", () => {
    assert.deepEqual(buildPageLookupWhere("entenda-a-lei", { draft: true }), {
      lifecycleStatus: {
        equals: "active",
      },
      slug: {
        equals: "entenda-a-lei",
      },
    });
  });

  it("revalidates current and previous page paths after publish state changes", () => {
    assert.deepEqual(
      collectChangedPageSlugs(
        { slug: "novo-endereco" },
        { slug: "endereco-antigo" },
      ),
      ["endereco-antigo", "novo-endereco"],
    );
  });

  it("revalidates a page once when unpublish keeps the same slug", () => {
    assert.deepEqual(
      collectChangedPageSlugs(
        { slug: "entenda-a-lei" },
        { slug: "entenda-a-lei" },
      ),
      ["entenda-a-lei"],
    );
  });
});
