# SPEC-023 - SEO Editorial

Esta nota registra a camada central de SEO administravel.

## Campos

`src/fields/seo.ts` define o grupo reutilizavel usado por Pages e `SiteSettings.defaultSEO`.

| Campo | Uso |
|---|---|
| `metaTitle` | Titulo para buscadores e compartilhamento. |
| `metaDescription` | Resumo curto para buscadores e cards sociais. |
| `socialImage` | Imagem de OpenGraph/Twitter via Media. |
| `canonical` | URL canonica absoluta, apenas em Pages. |
| `noIndex` | Robots para impedir indexacao, apenas em Pages. |
| `noFollow` | Robots para impedir follow de links, apenas em Pages. |

Campos legados `title`, `description` e `image` permanecem escondidos no schema para compatibilidade com conteudo ja persistido.

## Fallback

`src/lib/seo/metadata.ts` centraliza a resolucao:

```text
Page SEO
-> SiteSettings.defaultSEO
-> defaults de codigo
```

O helper tambem monta OpenGraph, Twitter e Robots. Em modo draft, a metadata fica `noindex/nofollow`.

## Sitemap

`src/app/(frontend)/sitemap.ts` gera um sitemap a partir de Pages publicadas e exclui paginas com `seo.noIndex`.

## Limites da SPEC-023

- Nenhuma imagem OpenGraph dinamica foi gerada.
- Nenhuma regra juridica ou editorial automatica foi criada.
- Canonical e opcional e deve ser preenchida apenas quando houver URL absoluta confirmada.
- O sitemap cobre apenas Pages publicadas do CMS.

## Checkpoint A - Content Architecture

| Pergunta | Resposta |
|---|---|
| Todas as paginas podem ser representadas com os Blocks atuais? | Parcialmente. As paginas principais ja podem ser compostas; `Hero Countdown`, `Media Highlight` e `Steps` seguem planejados para specs futuras. |
| Existem Blocks duplicando proposito? | Nao foi criada duplicacao direta; `Cards` recebeu variant de modalidades em vez de `ModalitiesCards`. |
| Links estao centralizados? | Sim para Blocks; Globals mantem schema compativel e usam resolver central. |
| Conteudo institucional recorrente esta centralizado? | Sim, em Header, Footer e SiteSettings. |
| Media e suficiente? | Sim para os papeis mapeados nesta etapa, sem SVG. |
| SEO esta administravel? | Sim, com Page SEO, defaultSEO, OpenGraph, robots e canonical opcional. |
| O CMS continua simples? | Sim; nao foram criadas colecoes genericas nem builders visuais livres. |
