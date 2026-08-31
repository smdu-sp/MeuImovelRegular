import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const ActionBannersBlock: Block = {
  slug: "actionBanners",
  interfaceName: "ActionBannersBlock",
  labels: {
    singular: "Faixas de acao",
    plural: "Faixas de acao",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo da secao",
      admin: {
        description:
          "Opcional. Use quando o conjunto de faixas precisar de contexto.",
      },
    },
    {
      name: "variant",
      type: "select",
      label: "Modelo de exibicao",
      required: true,
      defaultValue: "grid",
      admin: {
        description:
          "Grade mostra faixas lado a lado; empilhado favorece chamadas longas.",
      },
      options: [
        { label: "Grade", value: "grid" },
        { label: "Empilhado", value: "stacked" },
      ],
    },
    {
      name: "banners",
      type: "array",
      label: "Faixas",
      required: true,
      minRows: 1,
      maxRows: 6,
      admin: {
        description:
          "Cada faixa deve ter uma acao clara e um tom escolhido do Design System.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "title",
          type: "text",
          label: "Titulo da faixa",
          required: true,
          admin: {
            description: "Mensagem curta da faixa de acao.",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Descricao da faixa",
          admin: {
            description:
              "Opcional. Use para explicar a acao antes do botao.",
          },
        },
        {
          name: "appearance",
          type: "select",
          label: "Tom visual",
          required: true,
          defaultValue: "primary",
          admin: {
            description:
              "Mapeia a faixa para tokens do Design System, sem cores livres.",
          },
          options: [
            { label: "Principal", value: "primary" },
            { label: "Institucional", value: "brand" },
            { label: "Apoio", value: "accent" },
          ],
        },
        {
          name: "button",
          type: "group",
          label: "Botao",
          fields: createLinkFields(true),
        },
      ],
    },
  ],
};
