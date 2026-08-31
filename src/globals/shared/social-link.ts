import type { Field, TextFieldValidation } from "payload";

export const createSocialLinkFields = (): Field[] => [
  {
    name: "label",
    type: "text",
    label: "Nome da rede",
    required: true,
    admin: {
      description:
        "Nome curto exibido para identificar o canal oficial, como Instagram ou YouTube.",
    },
  },
  {
    name: "url",
    type: "text",
    label: "URL oficial",
    required: true,
    admin: {
      description:
        "Endereco completo do perfil oficial, incluindo https://.",
    },
    validate: ((value) => {
      if (!value) return "Informe a URL oficial.";

      try {
        const url = new URL(value);
        return url.protocol === "https:"
          ? true
          : "Use uma URL oficial iniciada por https://.";
      } catch {
        return "Informe uma URL valida.";
      }
    }) satisfies TextFieldValidation,
  },
];
