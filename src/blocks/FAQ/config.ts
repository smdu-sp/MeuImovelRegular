import type { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faqAccordion",
  interfaceName: "FAQAccordionBlock",
  labels: {
    singular: "Perguntas frequentes",
    plural: "Perguntas frequentes",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo da secao",
      required: true,
      admin: {
        description:
          "Titulo exibido antes da lista de perguntas.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Resumo da secao",
      admin: {
        description:
          "Texto opcional para contextualizar as perguntas.",
      },
    },
    {
      name: "variant",
      type: "select",
      label: "Modelo da lista",
      required: true,
      defaultValue: "default",
      admin: {
        description:
          "Padrao usa mais espacamento; compacto favorece paginas densas.",
      },
      options: [
        { label: "Padrao", value: "default" },
        { label: "Compacto", value: "compact" },
      ],
    },
    {
      name: "items",
      type: "array",
      label: "Perguntas e respostas",
      required: true,
      minRows: 1,
      maxRows: 20,
      admin: {
        description:
          "Cada item vira uma linha expansivel acessivel por teclado.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "question",
          type: "text",
          label: "Pergunta",
          required: true,
          admin: {
            description: "Pergunta clara e direta exibida no acordeao.",
          },
        },
        {
          name: "answer",
          type: "richText",
          label: "Resposta",
          required: true,
          admin: {
            description:
              "Resposta editorial. Use links somente para canais oficiais ou paginas do portal.",
          },
        },
      ],
    },
  ],
};
