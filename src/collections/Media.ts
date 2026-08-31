import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Mídia",
    plural: "Mídias",
  },
  admin: {
    defaultColumns: ["alt", "caption", "updatedAt"],
    description:
      "Cadastre imagens usadas nos blocos, SEO e identidade visual. O texto alternativo e obrigatorio para acessibilidade.",
    useAsTitle: "alt",
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Texto alternativo",
      required: true,
      admin: {
        description:
          "Descreva objetivamente a imagem para pessoas que usam leitores de tela.",
      },
    },
    {
      name: "caption",
      type: "textarea",
      label: "Legenda",
      admin: {
        description:
          "Opcional. Use quando a imagem precisar de credito, contexto ou complemento editorial.",
      },
    },
  ],
};

