import type { CollectionConfig } from "payload";
import { CardsBlock } from "../blocks/Cards/config.ts";
import { CTABlock } from "../blocks/CTA/config.ts";
import { HeroBlock } from "../blocks/Hero/config.ts";
import { ImageTextBlock } from "../blocks/ImageText/config.ts";
import { RichTextBlock } from "../blocks/RichText/config.ts";
import { normalizePageSlug, validatePageSlug } from "../domain/slug.ts";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Página",
    plural: "Páginas",
  },
  admin: {
    defaultColumns: ["title", "slug", "status", "updatedAt"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Título",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          'Use "home" para a página inicial. O valor "/" também é normalizado para "home".',
      },
      hooks: {
        beforeValidate: [({ value }) => normalizePageSlug(value)],
      },
      validate: validatePageSlug,
    },
    {
      name: "layout",
      type: "blocks",
      label: "Conteúdo",
      blocks: [HeroBlock, RichTextBlock, ImageTextBlock, CardsBlock, CTABlock],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Título",
        },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagem",
        },
      ],
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Rascunho", value: "draft" },
        { label: "Publicado", value: "published" },
      ],
    },
  ],
};
