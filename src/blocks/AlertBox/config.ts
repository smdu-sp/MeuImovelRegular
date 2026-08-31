import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const AlertBoxBlock: Block = {
  slug: "alertBox",
  interfaceName: "AlertBoxBlock",
  labels: {
    singular: "Aviso editorial",
    plural: "Avisos editoriais",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titulo do aviso",
      admin: {
        description:
          "Opcional. Use quando o aviso precisar de uma chamada curta.",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "Conteudo do aviso",
      required: true,
      admin: {
        description:
          "Texto do aviso. Mantenha linguagem orientativa e evite conclusoes definitivas.",
      },
    },
    {
      name: "type",
      type: "select",
      label: "Tipo de aviso",
      required: true,
      defaultValue: "info",
      admin: {
        description:
          "Define apenas o tom visual do aviso dentro do Design System.",
      },
      options: [
        { label: "Informativo", value: "info" },
        { label: "Atencao", value: "warning" },
      ],
    },
    {
      name: "link",
      type: "group",
      label: "Link complementar",
      admin: {
        description:
          "Opcional. Use para encaminhar o usuario a uma pagina ou servico oficial.",
      },
      fields: createLinkFields(),
    },
  ],
};
