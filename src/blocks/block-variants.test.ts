import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { normalizeCTAVariant } from "./CTA/Component";
import { normalizeHeroVariant } from "./Hero/Component";
import { normalizeImageTextVariant } from "./ImageText/Component";
import { normalizeRichTextVariant } from "./RichText/Component";

describe("block variant fallbacks", () => {
  it("keeps known Hero variants and maps the legacy image variant to split", () => {
    assert.equal(normalizeHeroVariant("default"), "default");
    assert.equal(normalizeHeroVariant("centered"), "centered");
    assert.equal(normalizeHeroVariant("split"), "split");
    assert.equal(normalizeHeroVariant("image"), "split");
    assert.equal(normalizeHeroVariant("unknown"), "default");
    assert.equal(normalizeHeroVariant(undefined), "default");
  });

  it("keeps known CTA variants and maps legacy values without breaking rendering", () => {
    assert.equal(normalizeCTAVariant("default"), "default");
    assert.equal(normalizeCTAVariant("brand"), "brand");
    assert.equal(normalizeCTAVariant("compact"), "compact");
    assert.equal(normalizeCTAVariant("primary"), "brand");
    assert.equal(normalizeCTAVariant("secondary"), "default");
    assert.equal(normalizeCTAVariant("unknown"), "default");
  });

  it("keeps ImageText variants and maps legacy image positions", () => {
    assert.equal(normalizeImageTextVariant("image-left"), "image-left");
    assert.equal(normalizeImageTextVariant("image-right"), "image-right");
    assert.equal(normalizeImageTextVariant("left"), "image-left");
    assert.equal(normalizeImageTextVariant("right"), "image-right");
    assert.equal(normalizeImageTextVariant("unknown"), "image-left");
  });

  it("keeps RichText variants and maps legacy widths", () => {
    assert.equal(normalizeRichTextVariant("default"), "default");
    assert.equal(normalizeRichTextVariant("narrow"), "narrow");
    assert.equal(normalizeRichTextVariant("content"), "narrow");
    assert.equal(normalizeRichTextVariant("wide"), "default");
    assert.equal(normalizeRichTextVariant("unknown"), "default");
  });
});
