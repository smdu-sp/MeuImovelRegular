import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Button, Container, Heading, Section, Text } from "./index";

describe("ui primitives", () => {
  it("Container centralizes width and lateral spacing", () => {
    const element = Container({ children: "content", size: "md" });

    assert.equal(element.type, "div");
    assert.match(element.props.className, /mx-auto/);
    assert.match(element.props.className, /max-w-container-md/);
    assert.match(element.props.className, /px-container/);
  });

  it("Section uses closed spacing and tone variants", () => {
    const element = Section({
      children: "section",
      spacing: "lg",
      tone: "brand",
    });

    assert.equal(element.type, "section");
    assert.match(element.props.className, /bg-secondary/);
    assert.match(element.props.className, /py-16/);
  });

  it("Heading separates semantic level from visual size", () => {
    const element = Heading({
      children: "Title",
      level: 1,
      size: "display",
    });

    assert.equal(element.type, "h1");
    assert.match(element.props.className, /text-display-md/);
  });

  it("Text exposes compact readable variants", () => {
    const element = Text({
      children: "Lead",
      tone: "inverse",
      variant: "lead",
    });

    assert.equal(element.type, "p");
    assert.match(element.props.className, /text-lg/);
    assert.match(element.props.className, /text-secondary-foreground/);
  });

  it("Button renders links and button controls with focus styles", () => {
    const link = Button({ children: "Go", href: "/teste", variant: "primary" });
    const button = Button({ children: "Send", type: "submit", variant: "outline" });

    assert.equal(link.props.href, "/teste");
    assert.match(link.props.className, /focus-visible:outline/);
    assert.equal(button.type, "button");
    assert.equal(button.props.type, "submit");
    assert.match(button.props.className, /border-border/);
  });
});
