---
spec: SPEC-003
title: Page Blocks
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-003 — Page Blocks

## Objetivo

Permitir que o administrador componha páginas novas sem transformar o CMS em um construtor visual irrestrito.

---

## Princípio

O editor controla:

```text
conteúdo
ordem
variações permitidas
```

O código controla:

```text
design
layout
responsividade
tipografia
acessibilidade
```

---

## Blocks iniciais

Criar somente:

```text
Hero
RichText
ImageText
Cards
CTA
```

Não adicionar outros Blocks nesta fase.

---

## Hero

```text
eyebrow?
title
description?
image?
cta?
variant
```

Variações:

```text
default
centered
image
```

---

## RichText

```text
content
width
```

Não permitir HTML arbitrário.

---

## ImageText

```text
title
content
image
imagePosition
cta?
```

`imagePosition`:

```text
left
right
```

---

## Cards

```text
title?
description?
items[]
```

Cada item:

```text
title
description
icon?
link?
```

---

## CTA

```text
title
description?
action
variant
```

---

## Renderer

Criar:

```text
src/components/RenderBlocks/
```

Responsabilidade:

```ts
blockType → React Component
```

Um Block desconhecido não deve quebrar a página inteira.

---

## Estrutura sugerida

```text
src/blocks/
├── Hero/
│   ├── config.ts
│   └── Component.tsx
├── RichText/
├── ImageText/
├── Cards/
└── CTA/
```

---

## Critérios de aceite

O ADM deve conseguir criar:

```text
Hero
↓
RichText
↓
Cards
↓
CTA
```

reordenar os Blocks e visualizar a página renderizada corretamente.

---
