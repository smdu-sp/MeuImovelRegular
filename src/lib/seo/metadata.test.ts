import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { Media, Page, SiteSetting } from "../../payload-types";
import { generatePageMetadata, generateSiteMetadata } from "./metadata";

const basePage = {
  id: 1,
  lifecycleStatus: "active",
  title: "Titulo da pagina",
  slug: "pagina",
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
} satisfies Page;

const socialImage = {
  id: 1,
  alt: "Imagem de compartilhamento",
  createdAt: "2026-01-01T00:00:00.000Z",
  filename: "social.jpg",
  height: 630,
  mimeType: "image/jpeg",
  filesize: 1000,
  updatedAt: "2026-01-01T00:00:00.000Z",
  url: "/api/media/file/social.jpg",
  usage: "content",
  width: 1200,
} satisfies Media;

describe("SEO metadata", () => {
  it("prefers Page SEO before SiteSettings and code defaults", () => {
    const metadata = generatePageMetadata(
      {
        ...basePage,
        seo: {
          metaTitle: "Titulo SEO",
          metaDescription: "Descricao SEO",
        },
      },
      {
        id: 1,
        deadline: "2026-12-31T12:00:00.000Z",
        siteName: "Site padrao",
        defaultSEO: {
          metaTitle: "Titulo padrao",
          metaDescription: "Descricao padrao",
        },
      } satisfies SiteSetting,
    );

    assert.equal(metadata.title, "Titulo SEO");
    assert.equal(metadata.description, "Descricao SEO");
    assert.deepEqual(metadata.robots, { follow: true, index: true });
  });

  it("falls back to SiteSettings default SEO", () => {
    const metadata = generatePageMetadata(
      basePage,
      {
        id: 1,
        deadline: "2026-12-31T12:00:00.000Z",
        siteName: "Site padrao",
        defaultSEO: {
          metaDescription: "Descricao padrao",
          metaTitle: "Titulo padrao",
        },
      } satisfies SiteSetting,
    );

    assert.equal(metadata.title, "Titulo padrao");
    assert.equal(metadata.description, "Descricao padrao");
  });

  it("uses configured social image in OpenGraph and Twitter metadata", () => {
    const metadata = generatePageMetadata(
      {
        ...basePage,
        seo: {
          socialImage,
        },
      },
      null,
    );

    assert.deepEqual(metadata.openGraph?.images, [
      { url: "/api/media/file/social.jpg" },
    ]);
    assert.deepEqual(metadata.twitter?.images, ["/api/media/file/social.jpg"]);
    assert.equal((metadata.twitter as { card?: string } | undefined)?.card, "summary_large_image");
  });

  it("honors robots settings and protects draft metadata", () => {
    assert.deepEqual(
      generatePageMetadata(
        {
          ...basePage,
          seo: {
            noFollow: true,
            noIndex: true,
          },
        },
        null,
      ).robots,
      { follow: false, index: false },
    );

    assert.deepEqual(generatePageMetadata(basePage, null, { draft: true }).robots, {
      follow: false,
      index: false,
    });
  });

  it("adds canonical only when configured", () => {
    assert.deepEqual(
      generatePageMetadata(
        {
          ...basePage,
          seo: {
            canonical: "https://example.com/pagina",
          },
        },
        null,
      ).alternates,
      { canonical: "https://example.com/pagina" },
    );

    assert.equal(generatePageMetadata(basePage, null).alternates, undefined);
  });

  it("generates site metadata from SiteSettings", () => {
    const metadata = generateSiteMetadata({
      id: 1,
      deadline: "2026-12-31T12:00:00.000Z",
      siteName: "Nome do site",
      defaultSEO: {
        metaDescription: "Descricao padrao",
        metaTitle: "Titulo padrao",
      },
    } satisfies SiteSetting);

    assert.equal(metadata.title, "Titulo padrao");
    assert.equal(metadata.description, "Descricao padrao");
    assert.equal((metadata.twitter as { card?: string } | undefined)?.card, "summary");
  });
});
