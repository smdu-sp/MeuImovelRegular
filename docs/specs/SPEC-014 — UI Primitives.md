---
spec: SPEC-014
title: UI Primitives
status: planned
summary: Criar componentes visuais básicos reutilizáveis para Blocks e estruturas compartilhadas.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-014 — UI Primitives

## 1. Objetivo

Criar componentes visuais básicos reutilizáveis para impedir que cada Block implemente sua própria tipografia, largura, espaçamento e ações.

---

## 2. Problema

Situação indesejada:

```text
Hero
→ cria próprio container
→ cria próprio botão
→ cria próprio heading

CTA
→ cria outro container
→ cria outro botão
→ cria outra tipografia

Cards
→ terceira implementação
```

Situação desejada:

```text
Design System
│
├── Container
├── Section
├── Heading
├── Text
├── Button
├── Link
├── Card
└── Media
        ↓
      Blocks
```

---

## 3. Escopo inicial

Criar somente primitives comprovadamente úteis.

### Obrigatórias

```text
Container
Section
Heading
Text
Button
```

### Condicionais

Criar apenas se já houver necessidade concreta:

```text
Card
Media
Link
Stack
Cluster
```

---

## 4. Regras das primitives

Cada primitive deve:

- ter API pequena;
- ser acessível;
- usar tokens;
- ser previsível;
- evitar props que sejam CSS disfarçado.

Evitar:

```tsx
<Section paddingTop={72} paddingBottom={31}>
```

Preferir:

```tsx
<Section spacing="lg">
```

---

## 5. Container

Responsável por:

- largura máxima;
- padding lateral;
- centralização.

API conceitual:

```tsx
<Container size="lg">
```

Valores permitidos devem ser fechados.

---

## 6. Section

Responsável por:

- bloco semântico;
- espaçamento vertical;
- background semântico quando aplicável.

API conceitual:

```tsx
<Section spacing="lg" tone="default">
```

Tons possíveis devem ser limitados.

Exemplo:

```text
default
muted
brand
```

---

## 7. Heading

Responsável por:

- hierarquia visual;
- semântica HTML;
- escala tipográfica.

A API deve permitir separar nível semântico de aparência quando necessário, mas isso deve ser usado com cuidado.

---

## 8. Text

Variantes mínimas:

```text
body
lead
small
muted
```

Evitar dezenas de variantes.

---

## 9. Button

Variantes mínimas:

```text
primary
secondary
outline
ghost
```

Tamanhos, se necessários:

```text
sm
md
lg
```

Deve suportar corretamente:

- botão real;
- link com aparência de botão, quando arquiteturalmente apropriado.

Não prejudicar semântica HTML.

---

## 10. Passos de implementação

### Passo 1 — Inventariar duplicação

Identificar padrões repetidos em:

- Hero;
- CTA;
- Cards;
- ImageText;
- Header;
- Footer.

---

### Passo 2 — Escolher primitives mínimas

Não criar abstraction layer sem uso real.

---

### Passo 3 — Implementar uma por vez

Ordem sugerida:

```text
Container
↓
Section
↓
Heading
↓
Text
↓
Button
```

Após cada uma, executar typecheck.

---

### Passo 4 — Criar testes aplicáveis

Testar:

- classes/variants esperadas;
- elemento semântico;
- props críticas;
- links/botões;
- acessibilidade básica.

Adaptar ao framework de testes já utilizado.

---

### Passo 5 — Migrar UM Block piloto

Escolher `Hero`.

Migrar somente o suficiente para provar a arquitetura.

Não redesenhar ainda.

---

### Passo 6 — Revisar API

Antes de migrar os demais Blocks, avaliar:

- existem props demais?
- alguma prop é CSS arbitrário?
- nomes são claros?
- variantes têm função real?

---

### Passo 7 — Migrar estrutura compartilhada

Depois da validação do Hero, migrar as partes estruturais dos demais Blocks.

---

## 11. Fora de escopo

- redesign completo;
- animações;
- novos Blocks;
- sistema avançado de motion;
- library própria gigantesca;
- componentes altamente específicos de página.

---

## 12. Critérios de aceite

- [ ] primitives mínimas existem;
- [ ] primitives usam tokens;
- [ ] Hero usa primitives;
- [ ] não existe prop para CSS arbitrário;
- [ ] Button possui estados de foco;
- [ ] Container não é duplicado em cada Block;
- [ ] typography básica está centralizada;
- [ ] build passa.

---
