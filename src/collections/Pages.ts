import type { CollectionConfig } from "payload";
import { CardsBlock } from "../blocks/Cards/config.ts";
import { CTABlock } from "../blocks/CTA/config.ts";
import { HeroBlock } from "../blocks/Hero/config.ts";
import { ImageTextBlock } from "../blocks/ImageText/config.ts";
import { RichTextBlock } from "../blocks/RichText/config.ts";
import { normalizePageSlug, validatePageSlug } from "../domain/slug.ts";
import { revalidatePage } from "../lib/payload/revalidate-page.ts";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Página",
    plural: "Páginas",
  },
  admin: {
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    preview: (doc, { token }) => {
      if (!token || typeof doc.slug !== "string") {
        return null;
      }

      const params = new URLSearchParams({
        collection: "pages",
        slug: doc.slug,
        token,
      });

      return `${serverUrl}/api/draft?${params.toString()}`;
    },
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [({ doc }) => revalidatePage(doc.slug)],
    afterDelete: [({ doc }) => revalidatePage(doc.slug)],
  },
  versions: {
    drafts: {
      autosave: false,
    },
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
  ],
};
