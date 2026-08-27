import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Rodapé",
  fields: [
    {
      name: "phone",
      type: "text",
      label: "Telefone",
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
    },
    {
      name: "inPersonService",
      type: "textarea",
      label: "Atendimento presencial",
    },
    {
      name: "institutionalLinks",
      type: "array",
      label: "Links institucionais",
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
  ],
};

