---
spec: SPEC-024
title: Admin UX & Block Visualization
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-024 — Admin UX & Block Visualization

## 1. Objetivo

Tornar o catálogo consolidado compreensível no Payload Admin, reduzindo ambiguidade para editores não desenvolvedores.

## 2. Catálogo a tornar reconhecível

Conforme a decisão da SPEC-018, o editor poderá trabalhar com combinações de:

```text
Hero Countdown
Rich Text
Modalities Cards / Cards
Action Banners
Benefits Grid
FAQ / Accordion
Info Cards / Step-by-Step
Alert Box
Media Highlight
Icon Grid
Media & Text / ImageText
CTA
```

## 3. Passos

### Passo 1 — Labels editoriais

Exemplos:

```text
Hero Countdown → Destaque principal com contador
Icon Grid → Grade de ícones e informações
Alert Box → Caixa de aviso
Media Highlight → Imagem de destaque
```

### Passo 2 — Resumos dos Blocks

Quando suportado:

```text
FAQ — 8 perguntas
Icon Grid — Impedimentos — 6 itens
Action Banners — 3 chamadas
Benefits Grid — 2 colunas
```

### Passo 3 — Agrupamento

Organizar campos em grupos como `Conteúdo`, `Mídia`, `Ações` e `Apresentação`.

### Passo 4 — Descriptions

No Hero Countdown, explicar que `counterNumbers` é conteúdo visual nesta fase e não um cálculo automático.

### Passo 5 — Appearance

Opções como Verde/Amarelo/Azul devem mapear internamente para variants/tokens.

### Passo 6 — Teste editorial real

Montar três páginas de teste:

```text
Home-like: Hero Countdown + Rich Text + Cards + Action Banners
Info-like: Media Highlight + Benefits Grid + FAQ + Alert Box
Regularization-like: Icon Grid + Media & Text + CTA
```

## 4. Critérios de aceite

- [ ] editor diferencia os Blocks;
- [ ] resumos ajudam em Pages longas;
- [ ] campos de mídia são claros;
- [ ] contador não induz expectativa de timer automático;
- [ ] variants têm labels humanas;
- [ ] os três cenários podem ser montados sem consultar código;
- [ ] Draft/Preview/Publish continuam funcionais.

---
