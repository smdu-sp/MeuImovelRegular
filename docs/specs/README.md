# Specs

Este diretorio registra guardrails, specs e decisoes de implementacao para o projeto Meu Imovel Regular.

As specs estao organizadas por dominio funcional. O numero da spec continua sendo a ordem canonica de execucao.

## Organizacao

```text
docs/specs/
  00-project/
  01-cms-core/
  02-domain/
  03-design-system/
  04-cms-foundation-ii/
```

## 00 Project

Specs transversais de guardrails e hardening.

| Spec | Arquivo | Tema |
|---|---|---|
| SPEC-000 | [spec-000-project-guardrails.md](./00-project/spec-000-project-guardrails.md) | Responsabilidades, limites e camadas arquiteturais. |
| SPEC-010 | [spec-010-production-hardening.md](./00-project/spec-010-production-hardening.md) | Hardening de producao e checklist transversal. |

## 01 CMS Core

Fundacao editorial inicial: Payload, Pages, Blocks, routing, drafts, seed e UX de edicao.

| Spec | Arquivo | Tema |
|---|---|---|
| SPEC-001 | [spec-001-payload-foundation.md](./01-cms-core/spec-001-payload-foundation.md) | Next.js e Payload na mesma aplicacao. |
| SPEC-002 | [spec-002-cms-content-model.md](./01-cms-core/spec-002-cms-content-model.md) | Modelo editorial administravel. |
| SPEC-003 | [spec-003-page-blocks.md](./01-cms-core/spec-003-page-blocks.md) | Paginas compostas por Blocks controlados. |
| SPEC-004 | [spec-004-cms-routing.md](./01-cms-core/spec-004-cms-routing.md) | Slugs do CMS gerando rotas reais. |
| SPEC-005 | [spec-005-drafts-preview-publishing.md](./01-cms-core/spec-005-drafts-preview-publishing.md) | Drafts, preview e publicacao. |
| SPEC-006 | [spec-006-editorial-baseline.md](./01-cms-core/spec-006-editorial-baseline.md) | Seed editorial inicial. |
| SPEC-017 | [spec-017-cms-editing-ux.md](./01-cms-core/spec-017-cms-editing-ux.md) | UX de edicao no Payload. |

## 02 Domain

Regras de negocio e integracoes oficiais, isoladas de React e do CMS visual.

| Spec | Arquivo | Tema |
|---|---|---|
| SPEC-007 | [spec-007-domain-eligibility.md](./02-domain/spec-007-domain-eligibility.md) | Elegibilidade de dominio. |
| SPEC-008 | [spec-008-cadi-situation-integration.md](./02-domain/spec-008-cadi-situation-integration.md) | Boundary de situacao/CEDI. |
| SPEC-009 | [spec-009-documents-and-outorga.md](./02-domain/spec-009-documents-and-outorga.md) | Documentos e outorga. |

## 03 Design System

Tema, tokens, primitives, variants e revisao visual dos Blocks.

| Spec | Arquivo | Tema |
|---|---|---|
| SPEC-011 | [spec-011-base-theme-readability.md](./03-design-system/spec-011-base-theme-readability.md) | Tema base de legibilidade. |
| SPEC-012 | [spec-012-design-tokens-foundation.md](./03-design-system/spec-012-design-tokens-foundation.md) | Tokens visuais base. |
| SPEC-013 | [spec-013-theme-global-branding.md](./03-design-system/spec-013-theme-global-branding.md) | Branding institucional via CMS. |
| SPEC-014 | [spec-014-ui-primitives.md](./03-design-system/spec-014-ui-primitives.md) | Primitives visuais reutilizaveis. |
| SPEC-015 | [spec-015-block-variants.md](./03-design-system/spec-015-block-variants.md) | Variantes fechadas de Blocks. |
| SPEC-016 | [spec-016-block-visual-pass.md](./03-design-system/spec-016-block-visual-pass.md) | Revisao visual controlada dos Blocks. |

## 04 CMS Foundation II

Segundo ciclo da base CMS: auditoria, expansao controlada, navegacao, media, SEO, preview, validacao, permissoes, migrations e validacao final.

| Spec | Arquivo | Tema |
|---|---|---|
| SPEC-018 | [spec-018-content-component-audit.md](./04-cms-foundation-ii/spec-018-content-component-audit.md) | Auditoria de conteudo e componentes. |
| SPEC-019 | [spec-019-structural-blocks-expansion.md](./04-cms-foundation-ii/spec-019-structural-blocks-expansion.md) | Expansao controlada de Blocks estruturais. |
| SPEC-020 | [spec-020-reusable-content-architecture.md](./04-cms-foundation-ii/spec-020-reusable-content-architecture.md) | Arquitetura de conteudo reutilizavel. |
| SPEC-021 | [spec-021-navigation-system.md](./04-cms-foundation-ii/spec-021-navigation-system.md) | Sistema de navegacao. |
| SPEC-022 | [spec-022-media-library.md](./04-cms-foundation-ii/spec-022-media-library.md) | Biblioteca de midia. |
| SPEC-023 | [spec-023-seo-editorial.md](./04-cms-foundation-ii/spec-023-seo-editorial.md) | SEO editorial. |
| SPEC-024 | [spec-024-admin-ux-block-visualization.md](./04-cms-foundation-ii/spec-024-admin-ux-block-visualization.md) | Visualizacao de Blocks no Admin. |
| SPEC-025 | [spec-025-live-preview.md](./04-cms-foundation-ii/spec-025-live-preview.md) | Live Preview. |
| SPEC-026 | [spec-026-content-validation.md](./04-cms-foundation-ii/spec-026-content-validation.md) | Validacao editorial de conteudo. |
| SPEC-027 | [spec-027-roles-permissions.md](./04-cms-foundation-ii/spec-027-roles-permissions.md) | Papeis e permissoes. |
| SPEC-028 | [spec-028-schema-evolution-migrations.md](./04-cms-foundation-ii/spec-028-schema-evolution-migrations.md) | Evolucao de schema e migrations. |
| SPEC-029 | [spec-029-cms-foundation-validation.md](./04-cms-foundation-ii/spec-029-cms-foundation-validation.md) | Validacao final da base CMS. |

## Convencoes

- Use o numero da spec para preservar a ordem historica.
- Mantenha nomes de arquivo em lowercase kebab-case ASCII.
- Ao adicionar uma spec, coloque-a na pasta de dominio correspondente e atualize este indice.
- Se uma spec mudar de dominio, mova o arquivo e atualize links internos relevantes.
