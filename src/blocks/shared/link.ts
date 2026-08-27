import type {
  Field,
  RelationshipFieldSingleValidation,
  TextFieldValidation,
} from "payload";

type LinkSiblingData = {
  label?: string | null;
  type?: "internal" | "external" | null;
};

export const createLinkFields = (required = false): Field[] => [
  {
    name: "label",
    type: "text",
    label: "Rótulo",
    required,
  },
  {
    name: "type",
    type: "select",
    label: "Tipo",
    required,
    defaultValue: "internal",
    options: [
      { label: "Página interna", value: "internal" },
      { label: "URL externa", value: "external" },
    ],
  },
  {
    name: "page",
    type: "relationship",
    relationTo: "pages",
    label: "Página",
    admin: {
      condition: (_, siblingData) => siblingData?.type === "internal",
    },
    validate: ((value, { siblingData }) => {
      const link = siblingData as LinkSiblingData;
      return link.type !== "internal" || (!required && !link.label) || value
          ? true
          : "Selecione uma página interna.";
    }) satisfies RelationshipFieldSingleValidation,
  },
  {
    name: "url",
    type: "text",
    label: "URL externa",
    admin: {
      condition: (_, siblingData) => siblingData?.type === "external",
    },
    validate: ((value, { siblingData }) => {
      const link = siblingData as LinkSiblingData;
      if (link.type !== "external") return true;
      if (!required && !link.label) return true;
      if (!value) return "Informe uma URL externa.";

      try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:"
          ? true
          : "Use uma URL iniciada por http:// ou https://.";
      } catch {
        return "Informe uma URL válida.";
      }
    }) satisfies TextFieldValidation,
  },
  {
    name: "newTab",
    type: "checkbox",
    label: "Abrir em nova aba",
    defaultValue: false,
  },
];
