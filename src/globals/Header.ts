import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  label: "Cabeçalho",
  admin: {
    description:
      "Configure a navegacao principal exibida no topo do portal.",
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
      admin: {
        description:
          "Opcional. Se vazio, o nome do site continua identificando o portal.",
      },
    },
    {
      name: "navigation",
      type: "array",
      label: "Links de navegacao",
      admin: {
        description:
          "Lista de paginas principais exibidas no cabecalho. Mantenha poucos itens para facilitar a leitura.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Texto do menu",
          required: true,
          admin: {
            description: "Texto curto exibido no cabecalho.",
          },
        },
        {
          name: "page",
          type: "relationship",
          relationTo: "pages",
          label: "Página",
          required: true,
          admin: {
            description: "Pagina de destino dentro do portal.",
          },
        },
      ],
    },
  ],
};

