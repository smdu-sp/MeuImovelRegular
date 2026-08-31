---
spec: SPEC-016
title: Visual Pass dos Blocks
status: planned
summary: Realizar a revisão visual controlada dos Blocks usando Tokens, Theme, Primitives e Variants.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-016 — Visual Pass dos Blocks

## 1. Objetivo

Realizar o redesign controlado dos Blocks existentes utilizando Tokens, Theme, Primitives e Variants já consolidados.

Esta é a Spec em que os Blocks podem finalmente ser tratados visualmente de forma profunda.

---

## 2. Regra

Não resolver inconsistência visual adicionando valores locais arbitrários.

Se um problema pertence ao Design System, corrigir na camada adequada.

---

## 3. Método de execução

Executar **um Block por vez**.

Ordem sugerida:

```text
016A — Hero
016B — RichText
016C — ImageText
016D — Cards
016E — CTA
```

Cada subetapa deve ser revisada antes da próxima.

---

# SPEC-016A — Hero

## Objetivo

Transformar Hero em referência visual para os demais Blocks.

### Revisar

- hierarquia tipográfica;
- largura do texto;
- espaçamento;
- CTA;
- imagem;
- contraste;
- mobile;
- variantes;
- comportamento sem imagem;
- títulos longos;
- descrições longas.

### Casos de teste visual

```text
title curto
title muito longo
sem description
sem image
1 CTA
2 CTAs
imagem vertical
imagem horizontal
mobile estreito
```

### Critério de aceite

Hero deve continuar visualmente coerente em todos os casos sem campos obrigatórios artificiais.

---

# SPEC-016B — RichText

## Objetivo

Criar uma experiência tipográfica editorial consistente.

### Revisar

- headings internos;
- listas;
- links;
- blockquotes;
- tabelas se suportadas;
- imagens inline se suportadas;
- espaçamento vertical;
- largura de leitura.

### Regra

Não deixar conteúdo rico herdar estilos imprevisíveis do navegador.

---

# SPEC-016C — ImageText

## Objetivo

Padronizar composição de mídia + conteúdo.

### Revisar

- aspect ratio;
- crop;
- alinhamento;
- gap;
- inversão left/right;
- comportamento mobile;
- CTA opcional;
- conteúdo longo.

### Mobile

A ordem visual deve ser intencional e documentada.

---

# SPEC-016D — Cards

## Objetivo

Criar um sistema de Cards consistente e resistente a conteúdo irregular.

### Revisar

- grid;
- alturas;
- título longo;
- descrição longa;
- links;
- ícones;
- responsividade;
- estados hover/focus;
- semântica.

### Regra

Não forçar altura fixa se isso prejudicar conteúdo ou acessibilidade.

---

# SPEC-016E — CTA

## Objetivo

Criar encerramentos de seção claros e consistentes.

### Revisar

- contraste;
- hierarquia;
- alinhamento;
- ações;
- mobile;
- variante brand;
- ausência de descrição;
- uma ou duas ações.

---

## 4. Regressão

Após cada Block:

1. revisar Pages já existentes;
2. verificar se o novo estilo impactou conteúdo antigo;
3. corrigir no sistema, não com hacks por página.

---

## 5. Testes visuais mínimos

Validar:

```text
320px
768px
desktop padrão
desktop largo
```

Não é necessário perseguir cada pixel possível.

---

## 6. Acessibilidade

Para cada Block verificar:

- ordem de headings;
- foco;
- links;
- contraste;
- alt text;
- leitura por teclado;
- semântica;
- não depender somente de cor.

---

## 7. Critérios de aceite

- [ ] todos os Blocks principais passaram por revisão;
- [ ] tokens são utilizados;
- [ ] primitives são reutilizadas;
- [ ] variantes são consistentes;
- [ ] não há regressões mobile óbvias;
- [ ] não existem cores institucionais locais sem justificativa;
- [ ] não existe duplicação grande de layout;
- [ ] conteúdo extremo não quebra componentes;
- [ ] build passa.

---
