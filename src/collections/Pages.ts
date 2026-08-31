import type { CollectionConfig } from "payload";
import { ActionBannersBlock } from "../blocks/ActionBanners/config.ts";
import { AlertBoxBlock } from "../blocks/AlertBox/config.ts";
import { CardsBlock } from "../blocks/Cards/config.ts";
import { CTABlock } from "../blocks/CTA/config.ts";
import { FAQBlock } from "../blocks/FAQ/config.ts";
import { HeroBlock } from "../blocks/Hero/config.ts";
import { IconGridBlock } from "../blocks/IconGrid/config.ts";
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
    description:
      "Crie e organize paginas editoriais do portal. Use rascunho, preview e publicacao para controlar o ciclo editorial.",
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
      admin: {
        description:
          "Nome exibido no CMS e usado como referencia principal da pagina.",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Endereco da pagina",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          'Use "home" para a pagina inicial. Para paginas internas, use letras minusculas, numeros e hifens. O valor "/" tambem vira "home".',
      },
      hooks: {
        beforeValidate: [({ value }) => normalizePageSlug(value)],
      },
      validate: validatePageSlug,
    },
    {
      name: "layout",
      type: "blocks",
      label: "Blocos de conteudo",
      blocks: [
        HeroBlock,
        RichTextBlock,
        ImageTextBlock,
        CardsBlock,
        CTABlock,
        IconGridBlock,
        FAQBlock,
        AlertBoxBlock,
        ActionBannersBlock,
      ],
      admin: {
        description:
          "Monte a pagina escolhendo blocos prontos. Cada bloco possui opcoes controladas pelo Design System.",
        initCollapsed: true,
      },
    },
    {
      name: "seo",
      type: "group",
      label: "SEO e compartilhamento",
      admin: {
        description:
          "Configure titulo, resumo e imagem usados por buscadores e compartilhamentos quando forem diferentes do conteudo principal.",
      },
      fields: [
        {
          name: "title",
          type: "text",
          label: "Titulo para buscadores",
          admin: {
            description:
              "Opcional. Se vazio, o titulo principal da pagina continua sendo usado.",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Descricao para buscadores",
          admin: {
            description:
              "Resumo curto da pagina para resultados de busca e cards de compartilhamento.",
          },
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagem de compartilhamento",
          admin: {
            description:
              "Opcional. Use uma imagem institucional representativa do conteudo.",
          },
        },
      ],
    },
  ],
};
