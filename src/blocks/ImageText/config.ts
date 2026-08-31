import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const ImageTextBlock: Block = {
  slug: "imageText",
  interfaceName: "ImageTextBlock",
  labels: {
    singular: "Imagem com texto",
    plural: "Imagens com texto",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo",
      required: true,
      admin: {
        description:
          "Titulo da secao que acompanha a imagem.",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "Conteudo",
      required: true,
      admin: {
        description:
          "Texto complementar exibido ao lado da imagem em telas maiores.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
      required: true,
      admin: {
        description:
          "Imagem principal do bloco. Em celulares, ela aparece antes do texto.",
      },
    },
    {
      name: "variant",
      type: "select",
      label: "Posicao da imagem no desktop",
      required: true,
      defaultValue: "image-left",
      admin: {
        description:
          "Escolha o lado da imagem em telas grandes. Em dispositivos moveis, imagem e texto ficam empilhados.",
      },
      options: [
        { label: "Imagem a esquerda", value: "image-left" },
        { label: "Imagem a direita", value: "image-right" },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "Acao complementar",
      admin: {
        description:
          "Link opcional exibido apos o texto.",
      },
      fields: createLinkFields(),
    },
  ],
};
