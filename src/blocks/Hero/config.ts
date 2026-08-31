import type { Block } from "payload";
import { createLinkFields } from "../shared/link";

export const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: {
    singular: "Abertura da pagina",
    plural: "Aberturas da pagina",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Chamada superior",
      admin: {
        description:
          "Texto curto acima do titulo, usado para contextualizar a pagina.",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Titulo principal",
      required: true,
      admin: {
        description:
          "Mensagem principal da pagina. Pode ser longo, mas prefira uma frase clara.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Resumo",
      admin: {
        description:
          "Texto opcional abaixo do titulo para orientar o usuario antes da acao.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem",
      admin: {
        condition: (_, siblingData) => siblingData?.variant === "split",
        description:
          "Usada apenas no modelo Imagem lateral. Em telas pequenas, a imagem fica empilhada abaixo do texto.",
      },
    },
    {
      name: "cta",
      type: "group",
      label: "Acao principal",
      admin: {
        description:
          "Link opcional exibido como botao principal da abertura.",
      },
      fields: createLinkFields(),
    },
    {
      name: "variant",
      type: "select",
      label: "Modelo de apresentacao",
      required: true,
      defaultValue: "default",
      admin: {
        description:
          "Padrao alinha o conteudo a esquerda; Centralizado destaca uma mensagem curta; Imagem lateral exibe texto e imagem lado a lado no desktop.",
      },
      options: [
        { label: "Padrao", value: "default" },
        { label: "Centralizado", value: "centered" },
        { label: "Imagem lateral", value: "split" },
      ],
    },
  ],
};
