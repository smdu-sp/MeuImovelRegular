import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { RenderBlocks } from "./components/RenderBlocks";
import type { Media, Page } from "./payload-types";

const richText = (text: string) => ({
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text,
            type: "text",
            version: 1,
          },
        ],
        direction: null,
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: null,
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
});

const media: Media = {
  id: 1,
  alt: "Imagem de compatibilidade",
  createdAt: "2026-01-01T00:00:00.000Z",
  filename: "compat.png",
  filesize: 100,
  height: 600,
  mimeType: "image/png",
  updatedAt: "2026-01-01T00:00:00.000Z",
  url: "/api/media/file/compat.png",
  usage: "content",
  width: 900,
};

const legacyPage: Pick<Page, "layout" | "slug" | "title"> = {
  slug: "fixture-antiga",
  title: "Fixture antiga",
  layout: [
    {
      blockType: "hero",
      id: "legacy-hero",
      title: "Hero antigo",
      variant: "image",
    },
    {
      blockType: "richText",
      content: richText("Texto antigo"),
      id: "legacy-rich-text",
      variant: "wide",
      width: "content",
    },
    {
      blockType: "imageText",
      content: richText("Imagem e texto antigo"),
      id: "legacy-image-text",
      image: media.id,
      imagePosition: "right",
      title: "Media e texto antigo",
      variant: "left",
    },
    {
      action: {
        label: "Abrir servico",
        type: "external",
        url: "https://example.gov.br",
      },
      blockType: "cta",
      id: "legacy-cta",
      title: "CTA antigo",
      variant: "primary",
    },
    {
      blockType: "cards",
      id: "legacy-cards",
      items: [
        {
          description: "Card antigo permanece valido.",
          id: "legacy-card",
          title: "Card antigo",
        },
      ],
      title: "Cards antigos",
      variant: "unknown",
    },
  ] as unknown as Page["layout"],
};

const currentPage: Pick<Page, "layout" | "slug" | "title"> = {
  slug: "fixture-nova",
  title: "Fixture nova",
  layout: [
    {
      blockType: "iconGrid",
      id: "current-icon-grid",
      items: [{ description: "Item novo", id: "current-icon-item" }],
      title: "Icon Grid novo",
      variant: "compact",
    },
    {
      blockType: "faqAccordion",
      id: "current-faq",
      items: [
        {
          answer: richText("Resposta nova"),
          id: "current-faq-item",
          question: "Pergunta nova?",
        },
      ],
      title: "FAQ nova",
      variant: "default",
    },
    {
      blockType: "alertBox",
      content: richText("Alerta novo"),
      id: "current-alert",
      title: "Aviso novo",
      type: "warning",
    },
    {
      banners: [
        {
          appearance: "yellow",
          button: {
            label: "Ver detalhes",
            type: "external",
            url: "https://example.gov.br",
          },
          id: "current-banner",
          title: "Banner novo",
        },
      ],
      blockType: "actionBanners",
      id: "current-action-banners",
      title: "Action Banners novos",
      variant: "stacked",
    },
  ] as unknown as Page["layout"],
};

const renderLayout = (layout: Page["layout"]) =>
  renderToStaticMarkup(createElement(RenderBlocks, { blocks: layout }));

describe("SPEC-028 schema evolution compatibility", () => {
  it("renders persisted legacy block shapes with current fallbacks", () => {
    const markup = renderLayout(legacyPage.layout);

    assert.match(markup, /Hero antigo/);
    assert.match(markup, /Texto antigo/);
    assert.match(markup, /Media e texto antigo/);
    assert.match(markup, /CTA antigo/);
    assert.match(markup, /Cards antigos/);
  });

  it("renders current expanded block shapes beside legacy fixtures", () => {
    const markup = renderLayout(currentPage.layout);

    assert.match(markup, /Icon Grid novo/);
    assert.match(markup, /FAQ nova/);
    assert.match(markup, /Aviso novo/);
    assert.match(markup, /Action Banners novos/);
  });
});
