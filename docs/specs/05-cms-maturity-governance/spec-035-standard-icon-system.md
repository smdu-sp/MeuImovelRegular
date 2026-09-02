---
spec: SPEC-035
title: Standard Icon System
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-035 — Standard Icon System

## Objetivo

Criar uma biblioteca visual consistente de ícones para evitar uploads arbitrários em todos os Blocks.

---

## Estratégia recomendada

Oferecer duas fontes controladas:

```text
standard icon
ou
custom Media
```

Custom Media deve existir somente quando necessário.

---

## Standard icons

Criar catálogo controlado:

```text
info
warning
document
building
location
phone
email
check
arrow
external-link
...
```

A lista deve nascer do uso real.

---

## Implementação

O CMS salva um identificador:

```text
icon = "location"
```

e o frontend resolve:

```text
location
↓
Icon registry
↓
SVG/component
```

---

## Não armazenar

```text
<svg>...</svg>
```

diretamente em campo do Payload.

---

## Vantagens

- consistência;
- segurança;
- tamanho previsível;
- cores controladas;
- acessibilidade;
- facilidade para trocar biblioteca futuramente.

---

## Custom icons

Quando necessário:

```text
source = standard | custom
```

Se `custom`:

```text
Media relationship
```

---

## Critérios de aceite

- [ ] catálogo central existe.
- [ ] editor não digita SVG.
- [ ] Blocks podem selecionar ícones padrão.
- [ ] opção customizada é controlada.
- [ ] ícones respeitam Design Tokens.
- [ ] ícones decorativos têm comportamento acessível.

---
