import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Rodapé",
  admin: {
    description:
      "Configure informacoes institucionais e links exibidos no rodape do portal.",
  },
  fields: [
    {
      name: "phone",
      type: "text",
      label: "Telefone",
      admin: {
        description:
          "Opcional. Informe somente se houver canal oficial vigente para atendimento.",
      },
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
      admin: {
        description:
          "Opcional. Informe somente endereco institucional monitorado.",
      },
    },
    {
      name: "inPersonService",
      type: "textarea",
      label: "Atendimento presencial",
      admin: {
        description:
          "Texto livre para orientar sobre atendimento presencial ou informar que deve ser consultado nos canais oficiais.",
      },
    },
    {
      name: "institutionalLinks",
      type: "array",
      label: "Links institucionais",
      admin: {
        description:
          "Links para servicos e paginas oficiais relacionados ao portal.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Texto do link",
          required: true,
          admin: {
            description: "Texto curto exibido no rodape.",
          },
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
          admin: {
            description:
              "Endereco completo do servico ou pagina oficial, incluindo https://.",
          },
        },
      ],
    },
  ],
};

