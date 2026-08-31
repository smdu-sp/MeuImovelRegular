import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Field } from "payload";

import { CardsBlock } from "./blocks/Cards/config";
import { CTABlock } from "./blocks/CTA/config";
import { HeroBlock } from "./blocks/Hero/config";
import { ImageTextBlock } from "./blocks/ImageText/config";
import { RichTextBlock } from "./blocks/RichText/config";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { createLinkFields } from "./fields/link";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import { SiteSettings } from "./globals/SiteSettings";
import { createSocialLinkFields } from "./globals/shared/social-link";

type FieldLike = Field & {
  admin?: {
    condition?: unknown;
    description?: string;
  };
  label?: string;
  name?: string;
};

const fieldByName = (fields: Field[], name: string): FieldLike => {
  const field = fields.find((candidate) => "name" in candidate && candidate.name === name);

  assert.ok(field, `Expected field ${name} to exist`);
  return field as FieldLike;
};

const adminDescription = (field: FieldLike): string | undefined =>
  typeof field.admin?.description === "string"
    ? field.admin.description
    : undefined;

describe("CMS editing UX", () => {
  it("keeps Pages easy to identify and preview", () => {
    assert.equal(Pages.admin?.useAsTitle, "title");
    assert.deepEqual(Pages.admin?.defaultColumns, ["title", "slug", "_status", "updatedAt"]);

    const previewUrl = Pages.admin?.preview?.(
      { slug: "entenda-a-lei" },
      { token: "preview-token" } as Parameters<NonNullable<typeof Pages.admin.preview>>[1],
    );

    assert.equal(
      previewUrl,
      "http://localhost:3000/api/draft?collection=pages&slug=entenda-a-lei&token=preview-token",
    );
  });

  it("adds editor-facing descriptions to page structure fields", () => {
    const slug = fieldByName(Pages.fields, "slug");
    const layout = fieldByName(Pages.fields, "layout");
    const seo = fieldByName(Pages.fields, "seo");

    assert.equal(slug.label, "Endereco da pagina");
    assert.match(adminDescription(slug) ?? "", /home/);
    assert.match(adminDescription(layout) ?? "", /blocos prontos/i);
    assert.match(adminDescription(seo) ?? "", /buscadores/i);
  });

  it("describes block variants without exposing implementation vocabulary", () => {
    const variants = [
      fieldByName(HeroBlock.fields, "variant"),
      fieldByName(RichTextBlock.fields, "variant"),
      fieldByName(ImageTextBlock.fields, "variant"),
      fieldByName(CTABlock.fields, "variant"),
    ];

    for (const variant of variants) {
      assert.notEqual(variant.label, "Variacao");
      assert.ok(adminDescription(variant));
    }
  });

  it("keeps irrelevant link fields conditional and documented", () => {
    const fields = createLinkFields(true);
    const page = fieldByName(fields, "page");
    const url = fieldByName(fields, "url");

    assert.equal(page.label, "Pagina interna");
    assert.equal(url.label, "URL externa");
    assert.ok("admin" in page && page.admin?.condition);
    assert.ok("admin" in url && url.admin?.condition);
    assert.ok(adminDescription(page));
    assert.ok(adminDescription(url));
  });

  it("documents global settings and media fields for non-technical editors", () => {
    assert.ok(Media.admin?.description);
    assert.ok(Header.admin?.description);
    assert.ok(Footer.admin?.description);
    assert.ok(SiteSettings.admin?.description);

    const branding = fieldByName(SiteSettings.fields, "branding");
    const alt = fieldByName(Media.fields, "alt");

    assert.equal(branding.label, "Cores institucionais");
    assert.match(adminDescription(branding) ?? "", /CSS livre/);
    assert.match(adminDescription(alt) ?? "", /leitores de tela/);
  });

  it("keeps reusable Footer content configurable in Globals", () => {
    const phone = fieldByName(Footer.fields, "phone");
    const email = fieldByName(Footer.fields, "email");
    const address = fieldByName(Footer.fields, "address");
    const socialLinks = fieldByName(Footer.fields, "socialLinks");
    const institutionalLinks = fieldByName(Footer.fields, "institutionalLinks");

    assert.equal(phone.label, "Telefone");
    assert.equal(email.label, "E-mail");
    assert.equal(address.label, "Endereco fisico");
    assert.equal(socialLinks.label, "Redes sociais");
    assert.equal(institutionalLinks.label, "Links institucionais");
    assert.match(adminDescription(address) ?? "", /canais oficiais/);
    assert.match(adminDescription(socialLinks) ?? "", /institucionais ativos/);
  });

  it("keeps Global links compatible with existing Payload tables", () => {
    const navigation = fieldByName(Header.fields, "navigation");
    const institutionalLinks = fieldByName(Footer.fields, "institutionalLinks");
    const officialLinks = fieldByName(SiteSettings.fields, "officialLinks");
    const getNestedNames = (field: FieldLike): string[] =>
      "fields" in field && Array.isArray(field.fields)
        ? field.fields.map((nested) => "name" in nested ? String(nested.name) : "")
        : [];

    assert.deepEqual(getNestedNames(navigation), ["label", "page"]);
    assert.deepEqual(getNestedNames(institutionalLinks), ["label", "url"]);
    assert.deepEqual(getNestedNames(officialLinks), ["label", "url"]);
  });

  it("validates reusable social links without creating generic key value content", () => {
    const fields = createSocialLinkFields();
    const label = fieldByName(fields, "label");
    const url = fieldByName(fields, "url");
    const validate = "validate" in url ? url.validate : undefined;

    assert.equal(label.label, "Nome da rede");
    assert.equal(url.label, "URL oficial");
    assert.equal(typeof validate, "function");
  });

  it("keeps Cards variants closed and editor-facing", () => {
    const items = fieldByName(CardsBlock.fields, "items");
    const variant = fieldByName(CardsBlock.fields, "variant");
    const options = "options" in variant ? variant.options : [];
    const values = Array.isArray(options)
      ? options.map((option) => typeof option === "object" && "value" in option ? option.value : option)
      : [];

    assert.equal(CardsBlock.labels?.singular, "Lista de cards");
    assert.deepEqual(values, ["default", "modalities"]);
    assert.match(adminDescription(variant) ?? "", /modalidades/);
    assert.match(adminDescription(items) ?? "", /1 a 12 cards/);
  });

  it("keeps Cards free of arbitrary layout variants", () => {
    const variant = fieldByName(CardsBlock.fields, "variant");
    const options = "options" in variant ? variant.options : [];
    const values = Array.isArray(options)
      ? options.map((option) => typeof option === "object" && "value" in option ? option.value : option)
      : [];

    assert.equal(
      CardsBlock.fields.find(
      (field) => "name" in field && field.name === "variant",
      ),
      variant,
    );
    assert.equal(values.includes("custom"), false);
    assert.equal(values.includes("layout"), false);
  });
});
