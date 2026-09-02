---
spec: SPEC-031
title: Identidade Visual SMUL
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-031 — Identidade Visual SMUL

## Objetivo

Incorporar a identidade visual oficial da SMUL ao Design System antes de ampliar as opções de estilo disponíveis ao editor.

---

## Fonte

A implementação deve utilizar como referência o material oficial disponibilizado no projeto em:

```text
identidade-visual-smul
```

Não inferir cores ou tipografia pelo site antigo caso haja documentação oficial disponível.

---

## Escopo

Mapear:

```text
paleta institucional
tipografia
pesos tipográficos
logos
cores auxiliares
regras de contraste
```

para o sistema existente de Design Tokens.

---

## Resultado esperado

Algo conceitualmente equivalente a:

```text
SMUL Identity
      ↓
Design Tokens
      ↓
Semantic Tokens
      ↓
Primitives
      ↓
Blocks
```

---

## Não criar

Evitar tokens como:

```text
blue-smul-1
blue-smul-2
green-home-page
yellow-card
```

como API utilizada diretamente pelos Blocks.

Preferir:

```text
primary
secondary
accent
surface
highlight
warning
```

com valores derivados da identidade institucional.

---

## Tipografia

Centralizar:

```text
font-family
heading-family
font weights
scale
line-height
```

Os Blocks não escolhem fonte diretamente.

---

## Fallback

Caso assets/fontes institucionais não possam ser carregados:

```text
font institucional
↓
fallback compatível
↓
font system
```

---

## Critérios de aceite

- [ ] identidade SMUL foi mapeada.
- [ ] paleta está centralizada.
- [ ] tipografia está centralizada.
- [ ] Blocks não usam cores SMUL diretamente.
- [ ] contraste foi revisado.
- [ ] fallback existe.
- [ ] documentação dos tokens foi atualizada.

---
