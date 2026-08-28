import type { GlobalConfig } from "payload";
import { validateOptionalHexColor } from "../lib/theme/colors.ts";

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
      name: "branding",
      type: "group",
      label: "Branding",
      fields: [
        {
          name: "primaryColor",
          type: "text",
          label: "Cor primaria",
          defaultValue: "#007a73",
          validate: validateOptionalHexColor,
        },
        {
          name: "secondaryColor",
          type: "text",
          label: "Cor secundaria",
          defaultValue: "#103b3f",
          validate: validateOptionalHexColor,
        },
        {
          name: "accentColor",
          type: "text",
          label: "Cor de destaque",
          defaultValue: "#fff4cc",
          validate: validateOptionalHexColor,
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

