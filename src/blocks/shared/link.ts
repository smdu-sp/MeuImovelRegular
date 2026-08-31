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
    label: "Texto do link",
    required,
    admin: {
      description:
        "Texto visivel para o usuario. Use uma acao clara, como Abrir pagina ou Saiba mais.",
    },
  },
  {
    name: "type",
    type: "select",
    label: "Destino do link",
    required,
    defaultValue: "internal",
    admin: {
      description:
        "Escolha pagina interna para navegar no portal ou URL externa para encaminhar a servico oficial.",
    },
    options: [
      { label: "Pagina interna", value: "internal" },
      { label: "URL externa", value: "external" },
    ],
  },
  {
    name: "page",
    type: "relationship",
    relationTo: "pages",
    label: "Pagina interna",
    admin: {
      condition: (_, siblingData) => siblingData?.type === "internal",
      description: "Pagina publicada ou em rascunho dentro deste CMS.",
    },
    validate: ((value, { siblingData }) => {
      const link = siblingData as LinkSiblingData;
      return link.type !== "internal" || (!required && !link.label) || value
        ? true
        : "Selecione uma pagina interna.";
    }) satisfies RelationshipFieldSingleValidation,
  },
  {
    name: "url",
    type: "text",
    label: "URL externa",
    admin: {
      condition: (_, siblingData) => siblingData?.type === "external",
      description:
        "Informe o endereco completo, incluindo http:// ou https://.",
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
        return "Informe uma URL valida.";
      }
    }) satisfies TextFieldValidation,
  },
  {
    name: "newTab",
    type: "checkbox",
    label: "Abrir em nova aba",
    defaultValue: false,
    admin: {
      description:
        "Recomendado para links externos, mantendo o portal aberto na aba atual.",
    },
  },
];
