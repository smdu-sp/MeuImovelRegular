---
spec: SPEC-032
title: Admin Localization & Block Catalog
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-032 — Admin Localization & Block Catalog

## Objetivo

Tornar o editor de páginas compreensível em português e melhorar a identificação visual dos Blocks dentro do Payload Admin.

---

# Parte A — Tradução

Traduzir labels editoriais.

Exemplo:

```text
Hero
→ Destaque principal

Rich Text
→ Conteúdo de texto

Image Text
→ Imagem e texto

Cards
→ Cartões

CTA
→ Chamada para ação

Icon Grid
→ Grade de informações

Alert
→ Aviso

FAQ
→ Perguntas frequentes
```

Os nomes técnicos devem permanecer estáveis.

Exemplo:

```ts
slug: 'iconGrid'
```

não precisa ser renomeado.

Somente:

```text
label
admin description
field labels
```

---

# Parte B — Visualização do Block

Uma Page extensa não deveria aparecer no Admin assim:

```text
Hero
Rich Text
Cards
Icon Grid
CTA
```

sem qualquer informação adicional.

Buscar apresentação equivalente a:

```text
Destaque principal
"Regularize seu imóvel"

Conteúdo de texto
"Entenda a regularização"

Grade de informações
"Impedimentos — 6 itens"

CTA
"Acesse o Portal"
```

---

## Informações de resumo

Cada Block deve definir um resumo editorial curto.

Exemplos:

### Hero

```text
Título principal
Variant
```

### Cards

```text
Título
Quantidade de itens
```

### FAQ

```text
Quantidade de perguntas
```

### Icon Grid

```text
Título
Quantidade de itens
```

---

## Ajuda de campos

Adicionar descrições apenas onde agregam informação.

Evitar transformar todo campo em um manual.

---

## Critérios de aceite

- [ ] Blocks possuem labels em português.
- [ ] campos principais possuem labels em português.
- [ ] nomes técnicos não foram alterados desnecessariamente.
- [ ] Blocks possuem identificação útil no editor.
- [ ] uma Page longa pode ser compreendida sem expandir todos os Blocks.
- [ ] nenhum schema existente foi quebrado.

---
