import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const CardsBlock: Block = {
  slug: "cards",
  interfaceName: "CardsBlock",
  labels: {
    singular: "Cards",
    plural: "Cards",
  },
  fields: [
    { name: "title", type: "text", label: "Título" },
    { name: "description", type: "textarea", label: "Descrição" },
    {
      name: "items",
      type: "array",
      label: "Itens",
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        { name: "title", type: "text", label: "Título", required: true },
        {
          name: "description",
          type: "textarea",
          label: "Descrição",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Ícone",
        },
        {
          name: "link",
          type: "group",
          label: "Link",
          fields: createLinkFields(),
        },
      ],
    },
  ],
};
