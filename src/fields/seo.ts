import type { Field, TextFieldValidation } from "payload";

const validateOptionalAbsoluteUrl: TextFieldValidation = (value) => {
  if (!value) return true;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? true
      : "Use uma URL iniciada por http:// ou https://.";
  } catch {
    return "Informe uma URL absoluta valida.";
  }
};

type CreateSeoFieldsOptions = {
  includeCanonical?: boolean;
  includeRobots?: boolean;
  includeLegacyFields?: boolean;
};

export const createSeoFields = ({
  includeCanonical = false,
  includeRobots = false,
  includeLegacyFields = true,
}: CreateSeoFieldsOptions = {}): Field[] => [
  {
    name: "metaTitle",
    type: "text",
    label: "Titulo para buscadores",
    admin: {
      description:
        "Opcional. Se vazio, o titulo principal da pagina ou o SEO padrao continua sendo usado.",
    },
  },
  {
    name: "metaDescription",
    type: "textarea",
    label: "Descricao para buscadores",
    admin: {
      description:
        "Resumo curto usado por buscadores e cards de compartilhamento.",
    },
  },
  {
    name: "socialImage",
    type: "upload",
    relationTo: "media",
    label: "Imagem de compartilhamento",
    admin: {
      description:
        "Opcional. Use uma imagem institucional representativa para redes sociais e OpenGraph.",
    },
  },
  ...(includeCanonical
    ? [
        {
          name: "canonical",
          type: "text",
          label: "URL canonica",
          admin: {
            description:
              "Opcional. Informe apenas quando a pagina publica tiver uma URL canonica absoluta e confirmada.",
          },
          validate: validateOptionalAbsoluteUrl,
        } satisfies Field,
      ]
    : []),
  ...(includeRobots
    ? [
        {
          name: "noIndex",
          type: "checkbox",
          label: "Nao indexar",
          defaultValue: false,
          admin: {
            description:
              "Quando marcado, orienta buscadores a nao indexar esta pagina.",
          },
        } satisfies Field,
        {
          name: "noFollow",
          type: "checkbox",
          label: "Nao seguir links",
          defaultValue: false,
          admin: {
            description:
              "Quando marcado, orienta buscadores a nao seguir links desta pagina.",
          },
        } satisfies Field,
      ]
    : []),
  ...(includeLegacyFields
    ? [
        {
          name: "title",
          type: "text",
          label: "Titulo legado",
          admin: {
            hidden: true,
          },
        } satisfies Field,
        {
          name: "description",
          type: "textarea",
          label: "Descricao legada",
          admin: {
            hidden: true,
          },
        } satisfies Field,
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Imagem legada",
          admin: {
            hidden: true,
          },
        } satisfies Field,
      ]
    : []),
];
