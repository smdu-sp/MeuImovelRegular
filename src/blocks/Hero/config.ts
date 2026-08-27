import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: {
    singular: "Hero",
    plural: "Heroes",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Chamada superior" },
    { name: "title", type: "text", label: "Título", required: true },
    { name: "description", type: "textarea", label: "Descrição" },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
      admin: {
        condition: (_, siblingData) => siblingData?.variant === "image",
      },
    },
    {
      name: "cta",
      type: "group",
      label: "Ação",
      fields: createLinkFields(),
    },
    {
      name: "variant",
      type: "select",
      label: "Variação",
      required: true,
      defaultValue: "default",
      options: [
        { label: "Padrão", value: "default" },
        { label: "Centralizado", value: "centered" },
        { label: "Com imagem", value: "image" },
      ],
    },
  ],
};
