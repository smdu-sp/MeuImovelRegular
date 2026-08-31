import { getPayload } from "payload";

import config from "../payload.config.ts";
import type { Page } from "../payload-types.ts";

type PageBlock = NonNullable<Page["layout"]>[number];
type LexicalContent = Extract<PageBlock, { blockType: "richText" }>["content"];

type Link = {
  label: string;
  newTab?: boolean;
  page?: number;
  type: "internal" | "external";
  url?: string;
};

type PageSeed = {
  description: string;
  layout: PageBlock[];
  slug: string;
  title: string;
};

const paragraph = (text: string) => ({
  type: "paragraph",
  children: [
    {
      type: "text",
      detail: 0,
      format: 0,
      mode: "normal",
      style: "",
      text,
      version: 1,
    },
  ],
  direction: null,
  format: "",
  indent: 0,
  version: 1,
});

const richText = (...paragraphs: string[]): LexicalContent => ({
  root: {
    type: "root",
    children: paragraphs.map(paragraph),
    direction: null,
    format: "",
    indent: 0,
    version: 1,
  },
});

const internalLink = (label: string, page?: number): Link => ({
  label,
  type: "internal",
  page,
  newTab: false,
});

const contentPage = (
  title: string,
  slug: string,
  description: string,
): PageSeed => ({
  title,
  slug,
  description,
  layout: [
    {
      blockType: "hero",
      eyebrow: "Meu Imovel Regular",
      title,
      description,
      variant: "default",
    },
    {
      blockType: "richText",
      content: richText(
        description,
        "Este conteudo inicial serve como base editorial do CMS e pode ser ajustado pelo administrador.",
      ),
      variant: "narrow",
    },
  ],
});

const homeSeed = (links: {
  automatica?: number;
  beneficios?: number;
  entendaALei?: number;
} = {}): PageSeed => ({
  title: "Home",
  slug: "home",
  description:
    "Orientacao preliminar para entender caminhos de regularizacao de imoveis no municipio.",
  layout: [
    {
      blockType: "hero",
      eyebrow: "Meu Imovel Regular",
      title: "Regularizacao imobiliaria com informacao clara",
      description:
        "Encontre orientacoes iniciais, modalidades e proximos passos antes de acessar os servicos oficiais.",
      ...(links.entendaALei
        ? { cta: internalLink("Entenda a lei", links.entendaALei) }
        : {}),
      variant: "centered",
    },
    {
      blockType: "richText",
      blockName: "Prazo institucional",
      content: richText(
        "Prazo institucional: consulte a data vigente nas configuracoes do site.",
        "Este aviso e conteudo inicial editavel pelo CMS. Datas e referencias oficiais devem ser mantidas no Payload.",
      ),
      variant: "narrow",
    },
    {
      blockType: "cards",
      title: "Orientacao inicial",
      description:
        "Acesse os principais caminhos editoriais para entender o tema antes da triagem.",
      variant: "default",
      items: [
        {
          title: "Entenda a lei",
          description:
            "Veja uma explicacao introdutoria sobre o marco legal e seus limites.",
          ...(links.entendaALei
            ? { link: internalLink("Abrir pagina", links.entendaALei) }
            : {}),
        },
        {
          title: "Beneficios",
          description:
            "Conheca efeitos esperados e pontos de atencao do processo.",
          ...(links.beneficios
            ? { link: internalLink("Abrir pagina", links.beneficios) }
            : {}),
        },
        {
          title: "Modalidades",
          description:
            "Compare os caminhos editoriais previstos para diferentes situacoes.",
          ...(links.automatica
            ? { link: internalLink("Abrir pagina", links.automatica) }
            : {}),
        },
      ],
    },
    {
      blockType: "cta",
      title: "Comece pela orientacao",
      description:
        "O portal informa e encaminha para servicos oficiais, sem criar protocolo administrativo.",
      action: links.entendaALei
        ? internalLink("Entenda a lei", links.entendaALei)
        : {
            label: "Portal de Licenciamento",
            type: "external",
            url: "https://licenciamento.prefeitura.sp.gov.br/",
            newTab: true,
          },
      variant: "brand",
    },
  ],
});

const pageSeeds: PageSeed[] = [
  homeSeed(),
  contentPage(
    "Entenda a lei",
    "entenda-a-lei",
    "Conteudo introdutorio para explicar a base legal em linguagem acessivel.",
  ),
  contentPage(
    "Beneficios",
    "beneficios",
    "Resumo editorial dos beneficios esperados e dos limites do portal.",
  ),
  contentPage(
    "Regularizacao automatica",
    "modalidades/automatica",
    "Apresentacao da modalidade automatica em formato editavel pelo CMS.",
  ),
  contentPage(
    "Declaratoria simplificada",
    "modalidades/declaratoria-simplificada",
    "Apresentacao da modalidade declaratoria simplificada em formato editavel.",
  ),
  contentPage(
    "Declaratoria",
    "modalidades/declaratoria",
    "Apresentacao da modalidade declaratoria em formato editavel pelo CMS.",
  ),
  contentPage(
    "Comum",
    "modalidades/comum",
    "Apresentacao da modalidade comum em formato editavel pelo CMS.",
  ),
  contentPage(
    "FAQ",
    "faq",
    "Perguntas frequentes iniciais para orientar o usuario antes dos canais oficiais.",
  ),
  contentPage(
    "Cartilha",
    "cartilha",
    "Espaco editorial para materiais de apoio e orientacoes complementares.",
  ),
];

const payload = await getPayload({ config });

const findPage = async (slug: string) => {
  const result = await payload.find({
    collection: "pages",
    depth: 0,
    draft: true,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs[0] ?? null;
};

const pagesBySlug = new Map<string, Page>();

for (const seed of pageSeeds) {
  const existing = await findPage(seed.slug);
  const data = {
    title: seed.title,
    slug: seed.slug,
    layout: seed.layout,
    seo: {
      title: seed.title,
      description: seed.description,
    },
    _status: "published" as const,
  };

  const page = existing
    ? await payload.update({
        collection: "pages",
        id: existing.id,
        data,
        draft: false,
      })
    : await payload.create({
        collection: "pages",
        data,
        draft: false,
      });

  pagesBySlug.set(seed.slug, page);
}

const requirePageId = (slug: string): number => {
  const page = pagesBySlug.get(slug);

  if (!page) {
    throw new Error(`Pagina seed nao encontrada: ${slug}`);
  }

  return page.id;
};

const home = requirePageId("home");
const entendaALei = requirePageId("entenda-a-lei");
const beneficios = requirePageId("beneficios");
const automatica = requirePageId("modalidades/automatica");
const faq = requirePageId("faq");
const cartilha = requirePageId("cartilha");

await payload.update({
  collection: "pages",
  id: home,
  data: {
    layout: homeSeed({ automatica, beneficios, entendaALei }).layout,
  },
  draft: false,
});

for (const slug of pageSeeds.map((seed) => seed.slug).filter((slug) => slug !== "home")) {
  const page = pagesBySlug.get(slug);

  if (!page) continue;

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [
        page.layout?.[0],
        page.layout?.[1],
        {
          blockType: "cta",
          title: "Consulte os canais oficiais",
          description:
            "Use esta pagina como orientacao preliminar e confirme os detalhes nos servicos oficiais.",
          action: internalLink("Voltar ao inicio", home),
          variant: "compact",
        },
      ].filter(Boolean) as PageBlock[],
    },
    draft: false,
  });
}

await payload.updateGlobal({
  slug: "header",
  data: {
    navigation: [
      { label: "Inicio", page: home },
      { label: "Entenda a lei", page: entendaALei },
      { label: "Beneficios", page: beneficios },
      { label: "Modalidades", page: automatica },
      { label: "FAQ", page: faq },
      { label: "Cartilha", page: cartilha },
    ],
  },
});

await payload.updateGlobal({
  slug: "footer",
  data: {
    phone: "",
    email: "",
    address: "Rua Sao Bento, 405",
    inPersonService:
      "Atendimento presencial e canais oficiais devem ser configurados pelo administrador.",
    socialLinks: [],
    institutionalLinks: [
      {
        label: "Portal de Licenciamento",
        url: "https://licenciamento.prefeitura.sp.gov.br/",
      },
      {
        label: "Prefeitura de Sao Paulo",
        url: "https://www.prefeitura.sp.gov.br/",
      },
    ],
  },
});

await payload.updateGlobal({
  slug: "site-settings",
  data: {
    siteName: "Meu Imovel Regular",
    deadline: "2026-12-31T12:00:00.000Z",
    officialLinks: [
      {
        label: "Portal de Licenciamento",
        url: "https://licenciamento.prefeitura.sp.gov.br/",
      },
    ],
    defaultSEO: {
      title: "Meu Imovel Regular",
      description:
        "Orientacao preliminar sobre regularizacao imobiliaria e encaminhamento para servicos oficiais.",
    },
  },
});

await payload.destroy();

console.log("SPEC-006 editorial seed concluido.");
