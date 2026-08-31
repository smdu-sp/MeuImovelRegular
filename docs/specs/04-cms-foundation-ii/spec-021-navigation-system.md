---
spec: SPEC-021
title: Navigation System
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-021 — Navigation System

## 1. Objetivo

Centralizar a navegação usada pelo Header, Footer e pelos Blocks que possuem CTA.

O mapeamento confirma links em:

```text
Global Header
Global Footer
Modalities Cards
Action Banners
CTA final
Info Cards / Link-like components
```

## 2. Modelo de link

```text
Link
├── type: internal | external
├── label
├── page?
├── url?
├── newTab?
└── appearance?
```

`appearance` deve representar somente variants aprovadas.

## 3. Passos

1. auditar schemas duplicados de links;
2. criar/normalizar `src/fields/link.ts`;
3. usar relationship com `Pages` para links internos;
4. validar URL para links externos;
5. aplicar em Header, Footer, Modalities Cards, Action Banners e CTA;
6. criar helper central de resolução;
7. tratar `target="_blank"` com atributos seguros.

## 4. Critérios de aceite

- [ ] todos os CTAs usam contrato consistente;
- [ ] links internos referenciam Pages;
- [ ] links externos são validados;
- [ ] Header/Footer usam a mesma arquitetura;
- [ ] alteração de slug não quebra links internos armazenados como relationship;
- [ ] build passa.

---
