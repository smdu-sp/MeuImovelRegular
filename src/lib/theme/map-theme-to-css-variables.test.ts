import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { isHexColor } from "./colors";
import { mapThemeToCssVariables } from "./map-theme-to-css-variables";

describe("theme mapping", () => {
  it("maps valid branding colors to css variables", () => {
    const variables = mapThemeToCssVariables({
      branding: {
        primaryColor: "#00529C",
        secondaryColor: "#103b3f",
        accentColor: "#fff4cc",
      },
    });

    assert.equal(variables["--color-primary"], "#00529c");
    assert.equal(variables["--color-brand"], "#00529c");
    assert.equal(variables["--color-secondary"], "#103b3f");
    assert.equal(variables["--color-accent"], "#fff4cc");
  });

  it("ignores invalid branding values so css defaults can apply", () => {
    const variables = mapThemeToCssVariables({
      branding: {
        primaryColor: "url(javascript:alert(1))",
        secondaryColor: "<script>",
        accentColor: "",
      },
    });

    assert.deepEqual(variables, {});
  });

  it("accepts only short or long hex colors", () => {
    assert.equal(isHexColor("#fff"), true);
    assert.equal(isHexColor("#ffffff"), true);
    assert.equal(isHexColor("rgb(0, 0, 0)"), false);
    assert.equal(isHexColor("#ffff"), false);
  });
});
