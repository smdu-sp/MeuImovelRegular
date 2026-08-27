import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Configurações do site",
  fields: [
    {
      name: "siteName",
      type: "text",
      label: "Nome do site",
      required: true,
    },
    {
      name: "deadline",
      type: "date",
      label: "Prazo institucional",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd/MM/yyyy",
        },
      },
    },
    {
      name: "officialLinks",
      type: "array",
      label: "Links oficiais",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Rótulo",
          required: true,
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
        },
      ],
    },
    {
      name: "defaultSEO",
      type: "group",
      label: "SEO padrão",
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

