# SPEC-029 - Validacao final da fundacao CMS

Esta validacao encerra o ciclo CMS Foundation II. O objetivo e demonstrar que o CMS consegue montar os layouts mapeados sem depender de regras especificas das Specs 007 a 010.

## Cenarios de composicao

| Cenario | Composicao validada | Observacao |
|---|---|---|
| Pagina inicial | `hero` -> `richText` -> `cards` com variant `modalities` -> `actionBanners` | `hero` representa a abertura editorial. Countdown real permanece fora deste ciclo. |
| Beneficios | `imageText` -> `richText` -> `cards` -> `cta` | `imageText` cobre o destaque de midia; `cards` cobre a grade equivalente. |
| FAQ / informacao | `richText` -> `faqAccordion` -> `cards` -> `alertBox` | `cards` cobre Info Cards/Step-by-Step enquanto nao houver Block dedicado. |
| Modalidade | `richText` -> `iconGrid` -> `imageText` -> `cta` | Nao executa classificacao de modalidade. |

Esses cenarios estao fixados em `src/cms-foundation-validation.test.ts`.

## Validacoes cobertas

| Area | Evidencia |
|---|---|
| Blocks aprovados renderizam | `RenderBlocks` cobre todos os Blocks registrados em `Pages.layout`. |
| Links internos/externos | `src/lib/navigation/resolve-link.test.ts` valida resolucao e atributos seguros. |
| Header/Footer configuraveis | `src/cms-editing-ux.test.ts` e `src/cms-foundation-validation.test.ts` validam campos de logo, menu, contato, endereco, redes e links. |
| Media | `src/collections/Media.ts` restringe MIME types e `usage`; testes cobrem papeis editoriais. |
| SEO | `src/lib/seo/metadata.test.ts` cobre Page SEO, SEO padrao, robots, canonical, OpenGraph e sitemap. |
| Draft/Preview/Publish | `src/blocks/live-preview.test.ts` valida drafts, preview tradicional e Live Preview. |
| Validacoes editoriais | `src/blocks/content-validation.test.ts` cobre textos obrigatorios, rich text e enums fechados. |
| Permissoes | `src/access/roles.test.ts` cobre admin, editor e usuario nao autenticado. |
| Migrations/compatibilidade | `src/cms-schema-evolution.test.ts` renderiza fixture antiga e fixture nova. |

## Resultado

A fundacao CMS esta apta a representar os layouts editoriais mapeados com Pages, Media, Globals, Blocks, Design System, Preview, validacao, permissoes e estrategia de evolucao de schema.

## Limites

- `heroCountdown`, `mediaHighlight`, `benefitsGrid`, `infoCards` e `stepByStep` dedicados nao foram criados nesta SPEC.
- Nenhuma regra de elegibilidade, CEDI, documentos/outorga ou hardening de dominio foi implementada.
- Nenhuma classificacao de modalidade foi adicionada.
- Countdown dinamico e `counterNumbers` continuam fora deste ciclo.
