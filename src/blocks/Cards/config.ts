import type { Block } from "payload";
import { createLinkFields } from "../../fields/link";

export const CardsBlock: Block = {
  slug: "cards",
  interfaceName: "CardsBlock",
  labels: {
    singular: "Lista de cards",
    plural: "Listas de cards",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo da lista",
      admin: {
        description:
          "Titulo opcional exibido antes dos cards.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Resumo da lista",
      admin: {
        description:
          "Texto opcional para explicar o conjunto de cards.",
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
          "Padrao cobre listas editoriais gerais; modalidades destaca opcoes de regularizacao sem criar outro tipo de bloco.",
      },
      options: [
        { label: "Padrao", value: "default" },
        { label: "Modalidades", value: "modalities" },
      ],
    },
    {
      name: "items",
      type: "array",
      label: "Itens",
      required: true,
      minRows: 1,
      maxRows: 12,
      admin: {
        description:
          "Adicione de 1 a 12 cards. O layout ajusta a quantidade de colunas conforme a largura da tela.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "title",
          type: "text",
          label: "Titulo do card",
          required: true,
          admin: {
            description:
              "Texto principal do card. Pode quebrar linha sem afetar os demais itens.",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Descricao do card",
          required: true,
          admin: {
            description:
              "Resumo ou orientacao exibida dentro do card.",
          },
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icone",
          admin: {
            description:
              "Opcional. Use imagem simples e com texto alternativo adequado.",
          },
        },
        {
          name: "link",
          type: "group",
          label: "Link do card",
          admin: {
            description:
              "Opcional. Use quando o card deve encaminhar para outra pagina ou servico.",
          },
          fields: createLinkFields(),
        },
      ],
    },
  ],
};
