---
spec: SPEC-029
title: CMS Foundation Validation
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-029 — CMS Foundation Validation

## 1. Objetivo

Validar que a base CMS consegue representar os layouts mapeados sem depender das regras específicas das Specs 007–010.

Nenhuma feature nova deve ser adicionada.

## 2. Cenários de composição

### Cenário A — Página inicial

```text
Hero Countdown
↓
Rich Text
↓
Modalities Cards / Cards equivalente
↓
Action Banners
```

Validar edição, reordenação, mídia, links, variants, Preview e Publish.

### Cenário B — Benefícios

```text
Media Highlight
↓
Rich Text, quando necessário
↓
Benefits Grid
↓
CTA, quando aplicável
```

### Cenário C — FAQ / informação

```text
Rich Text
↓
FAQ / Accordion
↓
Info Cards / Step-by-Step
↓
Alert Box
```

### Cenário D — Modalidade

```text
Rich Text
↓
Icon Grid
↓
Media & Text / ImageText
↓
CTA final
```

Nenhum desses cenários precisa executar classificação de modalidade.

## 3. Globais

Validar Header com logo/menu/links e Footer com contato/endereço/redes/links, todos configuráveis.

## 4. Media

Testar background de Hero, logo, ícone, imagem de destaque e infográfico.

## 5. Admin UX

Um editor deve conseguir identificar Blocks, montar os quatro cenários, salvar Draft, usar Preview/Live Preview e publicar sem abrir o código.

## 6. Compatibilidade

Após migrations, uma Page criada antes da SPEC-019 deve continuar renderizando.

## 7. Testes automatizados

```text
lint
typecheck
unit
integration
build
```

Adicionar testes de schema/renderer para novos Blocks quando a infraestrutura atual permitir.

## 8. Dívida técnica

Atualizar `docs/cms/known-issues.md` separando:

```text
CMS foundation
visual fidelity
domain features deferred
```

## 9. Critérios finais

- [ ] os quatro tipos de página podem ser compostos no CMS;
- [ ] Header/Footer são configuráveis;
- [ ] Blocks aprovados renderizam;
- [ ] links internos/externos funcionam;
- [ ] todos os papéis de Media funcionam;
- [ ] SEO continua funcional;
- [ ] Draft/Preview/Publish funcionam;
- [ ] Live Preview funciona ou possui fallback;
- [ ] validações editoriais funcionam;
- [ ] permissões funcionam;
- [ ] migrations preservam conteúdo;
- [ ] nenhuma regra das Specs 007–010 foi necessária para demonstrar a base;
- [ ] pipeline passa.

---

# CHECKPOINT FINAL — CMS FOUNDATION COMPLETE

O CMS pode ser considerado estável quando:

```text
Conteúdo
✓

Design System
✓

Blocks
✓

Navigation
✓

Media
✓

SEO
✓

Admin UX
✓

Preview
✓

Validation
✓

Permissions
✓

Migrations
✓

Testes
✓
```

---

# 4. Critério para retomar Specs de domínio

Somente após a SPEC-029 voltar para:

```text
SPEC-007 — Eligibility
SPEC-008 — CEDI
SPEC-009 — Documents / Outorga
SPEC-010 — Hardening específico restante
```

A antiga SPEC-010 deve ser revisada antes de execução, pois parte de suas responsabilidades pode já ter sido absorvida pelas Specs 026–029.

---

# 5. Prompt base para Codex

```text
Implemente exclusivamente a SPEC-XXX descrita em:

docs/specs/XXX-nome.md

Antes de alterar arquivos:

1. Leia a Spec inteira.
2. Inspecione o projeto atual.
3. Liste os arquivos que pretende alterar.
4. Identifique conflitos com a arquitetura existente.
5. Informe se a Spec exige migration.
6. Não implemente funcionalidades previstas em Specs posteriores.
7. Não crie abstrações genéricas sem uso comprovado.
8. Preserve conteúdo existente.
9. Não adicione dependências sem justificativa.
10. Execute lint, typecheck, testes aplicáveis e build.

Ao finalizar, entregue:

## Implementação

### Arquivos criados

### Arquivos modificados

### Decisões arquiteturais

### Migrations

### Testes executados

### Resultado

### Critérios de aceite atendidos

### Critérios pendentes

### Desvios da Spec

### Dívida técnica encontrada

### O que NÃO foi implementado
```

---

# 6. Organização sugerida dos arquivos

```text
docs/
└── specs/
    ├── 018-content-component-audit.md
    ├── 019-structural-blocks-expansion.md
    ├── 020-reusable-content-architecture.md
    ├── 021-navigation-system.md
    ├── 022-media-library.md
    ├── 023-seo-editorial.md
    ├── 024-admin-ux-block-visualization.md
    ├── 025-live-preview.md
    ├── 026-content-validation.md
    ├── 027-roles-permissions.md
    ├── 028-schema-evolution-migrations.md
    └── 029-cms-foundation-validation.md
```

---

# 7. Resultado arquitetural esperado

```text
                   PAYLOAD CMS
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      Pages          Media          Globals
        │              │              │
        ├─────── Navigation ──────────┤
        │                             │
        ├──────── SEO ────────────────┤
        │                             │
        └──────── Blocks ─────────────┘
                      │
                      ▼
                 Design System
                      │
          ┌───────────┼───────────┐
          │           │           │
        Tokens     Primitives   Variants
          │           │           │
          └───────────┼───────────┘
                      ▼
                   Frontend

Editorial Layer
│
├── Validation
├── Preview
├── Live Preview
├── Roles
└── Admin UX

Reliability Layer
│
├── Migrations
├── Tests
├── Build validation
└── Known issues
```

O objetivo deste ciclo é encerrar a discussão de infraestrutura editorial básica antes de introduzir lógica específica do domínio.
