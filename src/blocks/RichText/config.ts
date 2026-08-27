import type { Block } from "payload";

export const RichTextBlock: Block = {
  slug: "richText",
  interfaceName: "RichTextBlock",
  labels: {
    singular: "Texto rico",
    plural: "Textos ricos",
  },
  fields: [
    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
      required: true,
    },
    {
      name: "width",
      type: "select",
      label: "Largura",
      required: true,
      defaultValue: "content",
      options: [
        { label: "Leitura", value: "content" },
        { label: "Ampla", value: "wide" },
      ],
    },
  ],
};
