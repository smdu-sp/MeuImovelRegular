import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const CTABlock: Block = {
  slug: "cta",
  interfaceName: "CTABlock",
  labels: {
    singular: "Chamada para ação",
    plural: "Chamadas para ação",
  },
  fields: [
    { name: "title", type: "text", label: "Título", required: true },
    { name: "description", type: "textarea", label: "Descrição" },
    {
      name: "action",
      type: "group",
      label: "Ação",
      fields: createLinkFields(true),
    },
    {
      name: "variant",
      type: "select",
      label: "Variação",
      required: true,
      defaultValue: "primary",
      options: [
        { label: "Primária", value: "primary" },
        { label: "Secundária", value: "secondary" },
      ],
    },
  ],
};
