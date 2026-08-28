import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Mídia",
    plural: "Mídias",
  },
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Texto alternativo",
      required: true,
    },
    {
      name: "caption",
      type: "textarea",
      label: "Legenda",
    },
  ],
};

