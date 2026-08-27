import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const ImageTextBlock: Block = {
  slug: "imageText",
  interfaceName: "ImageTextBlock",
  labels: {
    singular: "Imagem e texto",
    plural: "Imagem e textos",
  },
  fields: [
    { name: "title", type: "text", label: "Título", required: true },
    {
      name: "content",
      type: "richText",
      label: "Conteúdo",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
      required: true,
    },
    {
      name: "imagePosition",
      type: "select",
      label: "Posição da imagem",
      required: true,
      defaultValue: "left",
      options: [
        { label: "Esquerda", value: "left" },
        { label: "Direita", value: "right" },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "Ação",
      fields: createLinkFields(),
    },
  ],
};
