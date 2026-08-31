---
spec: SPEC-018
title: Content & Component Audit
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-018 — Content & Component Audit

## 1. Objetivo

Reconciliar o catálogo já mapeado em `arquitetura-componentes-nextjs.md` com os Blocks, variants, primitives e Globals que realmente existem no projeto.

A auditoria visual não começa mais do zero. O trabalho agora é decidir, para cada padrão:

```text
já existe?
↓
pode ser reutilizado?
↓
precisa apenas de variant?
↓
precisa realmente de novo Block?
```

Esta Spec **não implementa novos componentes**.

## 2. Baseline obrigatório

| Padrão | Classificação inicial | Decisão a validar |
|---|---|---|
| Global Header | Global/layout | validar schema e responsabilidades |
| Global Footer | Global/layout | validar schema e responsabilidades |
| Hero Countdown | Page Block | comparar com Hero existente |
| Rich Text | Page Block | priorizar RichText existente |
| Modalities Cards | Page Block | comparar com Cards existente |
| Action Banners | Page Block | avaliar novo Block |
| Benefits Grid | Page Block | avaliar novo Block |
| FAQ / Accordion | Page Block | avaliar novo Block |
| Info Cards / Step-by-Step | Page Block | comparar com Cards/Steps |
| Alert Box | Page Block | avaliar novo Block |
| Media Highlight | Page Block | avaliar novo Block ou primitive especializada |
| Icon Grid | Page Block | forte candidato a novo Block |
| Media & Text | Page Block | comparar com ImageText |
| CTA final | Page Block | comparar com CTA existente |

## 3. Hipótese inicial de reconciliação

### Provável reutilização/evolução

```text
Rich Text → RichText
Media & Text → ImageText
CTA final → CTA ou variant
Modalities Cards → Cards ou variant
Info Cards / Step-by-Step → Cards, variant ou Steps
```

### Prováveis novos padrões

```text
Hero Countdown
Action Banners
Benefits Grid
FAQ / Accordion
Alert Box
Media Highlight
Icon Grid
```

Essa hipótese deve ser confirmada contra o código.

## 4. Passos

### Passo 1 — Inventariar a base atual

Criar uma tabela dos Blocks registrados em `Pages`:

| Block atual | Schema | Component | Variants | Uso |
|---|---|---|---|---|

### Passo 2 — Criar matriz de reconciliação

Para cada padrão visual, registrar:

| Padrão | Correspondente atual | Decisão | Justificativa |
|---|---|---|---|

Valores de decisão:

```text
reuse
evolve
variant
new-block
structural
global
reject
```

### Passo 3 — Validar composições de referência

Página inicial:

```text
Hero Countdown
Rich Text
Modalities Cards
Action Banners
```

Páginas informativas:

```text
Media Highlight
Benefits Grid
FAQ / Accordion
Info Cards / Step-by-Step
Alert Box
```

Páginas de modalidades:

```text
Icon Grid
Media & Text
CTA final
```

### Passo 4 — Detectar duplicação semântica

Para cada candidato, responder:

1. O conteúdo é realmente diferente ou apenas a aparência?
2. Um Block existente representa a mesma intenção?
3. Uma `variant` resolve sem tornar o schema confuso?
4. O ADM deve poder inserir/remover/reordenar esse elemento?
5. O nome expressa intenção editorial em vez de CSS?

### Passo 5 — Gerar backlog da SPEC-019

Separar em:

```text
REUSE
EVOLVE
VARIANT
NEW BLOCK
REJECT
```

Para cada `NEW BLOCK`, registrar nome técnico, label editorial, campos mínimos, variants, páginas onde aparece e prioridade.

## 5. Entregáveis

Criar/atualizar:

```text
docs/cms/component-audit.md
docs/cms/block-catalog.md
```

## 6. Fora de escopo

Não criar Blocks, modificar schema de `Pages`, implementar countdown real, adicionar regras jurídicas ou redesenhar o site.

## 7. Critérios de aceite

- [ ] todos os 12 padrões têm decisão explícita;
- [ ] Header/Footer estão classificados como globais/estruturais;
- [ ] RichText, ImageText, CTA e Cards foram avaliados antes de duplicação;
- [ ] backlog da SPEC-019 está definido;
- [ ] `component-audit.md` existe;
- [ ] `block-catalog.md` existe;
- [ ] nenhuma feature foi implementada nesta Spec.

---
