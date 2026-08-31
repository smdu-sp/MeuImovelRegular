---
spec: SPEC-019
title: Structural Blocks Expansion
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-019 — Structural Blocks Expansion

## 1. Objetivo

Implementar incrementalmente apenas os itens aprovados como `new-block`, `evolve` ou `variant` pela SPEC-018.

## 2. Regra principal

Não criar duplicações como:

```text
RichText + RichTextSection
ImageText + MediaText
CTA + FinalCTA
Cards + ModalitiesCards
```

sem diferença editorial comprovada. Diferença apenas visual deve preferir `variant`.

## 3. Fila inicial provável

### Alta prioridade

```text
Icon Grid
FAQ / Accordion
Alert Box
Action Banners
```

### Composição específica

```text
Benefits Grid
Media Highlight
Hero Countdown
```

### Reconciliar antes de criar

```text
Modalities Cards
Info Cards / Step-by-Step
Media & Text
CTA final
Rich Text
```

A fila final deve vir da SPEC-018.

## 4. Execução por sub-Spec

Se houver vários novos Blocks, dividir:

```text
SPEC-019A — Icon Grid
SPEC-019B — FAQ / Accordion
SPEC-019C — Alert Box
...
```

Evitar uma alteração monolítica.

## 5. Contratos iniciais

### Hero Countdown

Campos de referência:

```text
backgroundImage
logo
counterNumbers
```

Nesta fase `counterNumbers` é conteúdo de apresentação. Não implementar relógio, prazo, timezone ou regra jurídica.

### Modalities Cards

```text
sectionTitle
cards[]
  cardTitle
  cardDescription
  ctaButton
```

Antes de criar `ModalitiesCards`, validar se `Cards` existente pode ser evoluído.

### Action Banners

```text
banners[]
  title
  button
  appearance
```

As referências `green/yellow/blue` devem mapear para variants/tokens.

### Benefits Grid

```text
columns[]
  columnTitle
  benefitItems
```

Escolher `array` ou `richText` com base em consistência editorial.

### FAQ / Accordion

```text
faqItems[]
  question
  answer
```

Obrigatório: teclado, foco, semântica acessível e conteúdo seguro.

### Info Cards / Step-by-Step

```text
items[]
  title
  description
  icon?
```

Se a ordem processual for essencial, considerar `Steps`; caso contrário, reutilizar `Cards`.

### Alert Box

```text
content
type: warning | info
```

A aparência vem do Design System.

### Media Highlight

```text
image
```

Avaliar `caption` e variants somente se houver necessidade real.

### Icon Grid

```text
sectionTitle
items[]
  icon
  description
```

Recebe prioridade alta por ser o padrão mais reutilizado nas páginas de modalidades do mapeamento.

### Media & Text

```text
alignment
textContent
media
```

Comparar primeiro com `ImageText`.

### CTA final

```text
title
description
button
```

Comparar primeiro com CTA existente.

## 6. Processo técnico por Block

1. validar decisão da SPEC-018;
2. definir schema mínimo;
3. reutilizar fields compartilhados;
4. reutilizar Media;
5. usar tokens/primitives;
6. registrar em `Pages`;
7. registrar no renderer;
8. testar conteúdo extremo;
9. testar mobile;
10. validar Admin;
11. atualizar `block-catalog.md`.

## 7. Critérios de aceite

- [x] somente itens aprovados foram implementados;
- [x] não existem duplicações semânticas evitáveis;
- [x] Blocks usam Design System;
- [x] Action Banners não possuem cores hardcoded;
- [x] FAQ é acessível;
- [x] Hero Countdown não introduziu lógica de prazo;
- [x] conteúdo antigo continua funcionando;
- [x] catálogo foi atualizado;
- [x] build passa.

---
