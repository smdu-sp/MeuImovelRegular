---
spec: SPEC-033
title: Hero Background Media
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-033 — Hero Background Media

## Objetivo

Adicionar suporte formal a imagem de fundo no Hero.

---

## Schema

Evoluir Hero para suportar:

```text
Hero
├── content
├── actions
├── background
│   ├── image
│   └── overlay?
└── variant
```

O schema exato deve respeitar o Hero já existente.

---

## Regras

Background deve:

- utilizar `Media`;
- possuir fallback;
- responder corretamente ao mobile;
- manter legibilidade do conteúdo;
- não depender de uma imagem específica.

---

## Overlay

Caso necessário:

```text
none
light
dark
```

ou outra enumeração semântica fechada.

Não permitir:

```text
opacity = 0.342
background = #123456
```

diretamente pelo Block.

---

## Acessibilidade

Imagem puramente decorativa de Hero não deve produzir informação duplicada para leitor de tela.

---

## Critérios de aceite

- [ ] Hero aceita imagem de fundo.
- [ ] imagem usa Collection Media.
- [ ] fallback funciona.
- [ ] texto permanece legível.
- [ ] mobile funciona.
- [ ] overlay usa presets.
- [ ] não existem estilos arbitrários.

---
