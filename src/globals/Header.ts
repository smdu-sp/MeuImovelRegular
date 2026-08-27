import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  label: "Cabeçalho",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
    },
    {
      name: "navigation",
      type: "array",
      label: "Navegação",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Rótulo",
          required: true,
        },
        {
          name: "page",
          type: "relationship",
          relationTo: "pages",
          label: "Página",
          required: true,
        },
      ],
    },
  ],
};

