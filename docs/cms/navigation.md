# SPEC-021 - Sistema de navegacao

Esta nota registra a centralizacao do contrato de links usada por Header, Footer, SiteSettings e Blocks com CTA.

## Contrato unico

O helper `src/fields/link.ts` define os campos:

| Campo | Uso |
|---|---|
| `label` | Texto visivel para o usuario. |
| `type` | Define link `internal` ou `external`. |
| `page` | Relacionamento com `pages` para links internos. |
| `url` | URL validada para links externos. |
| `newTab` | Abre em nova aba quando necessario. |

Links internos usam relationship com Pages. Assim, alteracoes futuras de slug nao quebram o dado armazenado no CMS.

## Resolucao de links

`src/lib/navigation/resolve-link.ts` centraliza:

- conversao de Page relationship para caminho publico;
- uso de URL externa quando `type` e `external`;
- atributos seguros `target="_blank"` e `rel="noopener noreferrer"`;
- rejeicao de links incompletos.

`BlockLink` consome esse resolver, evitando regras duplicadas nos componentes.

## Aplicacao

| Area | Decisao |
|---|---|
| Header | `navigation` preserva o formato existente `label/page` para nao exigir migracao destrutiva no banco local. |
| Footer | `institutionalLinks` preserva o formato existente `label/url` para nao exigir migracao destrutiva no banco local. |
| SiteSettings | `officialLinks` preserva o formato existente `label/url` para nao exigir migracao destrutiva no banco local. |
| Blocks | Hero, Cards, CTA, ImageText, IconGrid, AlertBox e ActionBanners importam `createLinkFields` de `src/fields/link.ts`. |

O resolver central aceita tanto o contrato completo dos Blocks quanto os formatos legados dos Globals.

## Limites da SPEC-021

- Nenhum novo componente visual de menu foi criado.
- Nenhuma regra de navegacao hierarquica, breadcrumb ou active state foi criada.
- Nenhuma permissao editorial nova foi criada.
