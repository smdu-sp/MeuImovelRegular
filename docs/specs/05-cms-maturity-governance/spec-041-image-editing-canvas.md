---
spec: SPEC-041
title: Image Editing Canvas
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-041 — Image Editing Canvas

## Status

```text
DEFERRED / OPTIONAL
```

---

## Objetivo

Avaliar futuramente uma experiência de edição visual de imagens dentro do CMS.

Possíveis funcionalidades:

```text
crop
resize
rotate
focal point
aspect ratio
preview
```

---

## Não confundir com SPEC-034

SPEC-034:

```text
como uma imagem é apresentada
```

SPEC-041:

```text
alterar/gerar uma versão do asset
```

---

## Requisito antes de implementação

Realizar uma análise separada de:

- biblioteca utilizada;
- manutenção;
- segurança;
- compatibilidade Payload;
- storage;
- geração de derivados;
- preservação do original.

O arquivo original deve ser preservado.

---

## Não implementar agora

A Feature só deve ser retomada se controles da SPEC-034 forem insuficientes para os usuários reais.

---

# Definition of Done deste ciclo

Ao final da SPEC-040:

## Editor

Deve conseguir:

```text
criar Page
↓
escolher Blocks em português
↓
identificar Blocks visualmente
↓
selecionar imagens
↓
configurar sua apresentação
↓
selecionar ícones
↓
usar opções visuais aprovadas
↓
Preview
↓
Publish
↓
Unpublish
```

de acordo com suas permissões.

---

## Admin

Além disso:

```text
gerenciar usuários
↓
acessar configurações restritas
↓
consultar logs
↓
desativar/reativar conteúdo conforme política
```

---

## O CMS não deve permitir

```text
CSS arbitrário
SVG arbitrário
hard delete editorial normal
acesso do Editor aos logs
acesso do Editor a Users
cores fora do sistema visual
configuração responsiva manual
```

---

# Resultado arquitetural esperado

```text
                     PAYLOAD CMS
                         │
         ┌───────────────┼────────────────┐
         │               │                │
      Content          Visual          Governance
         │               │                │
       Pages         SMUL Theme          Roles
       Blocks        Media Controls      Audit Logs
       Media         Icon Registry       Lifecycle
       Links         Style Presets       Permissions
         │               │                │
         └───────────────┼────────────────┘
                         ▼
                    Editor UX
                         │
              ┌──────────┼──────────┐
              │          │          │
          Admin Help   Preview    Publishing
                         │
                         ▼
                      Next.js
```

---

# Prioridade sugerida

## P0 — corrigir antes de continuar

```text
030 — Unpublish Bugfix
```

## P1 — experiência visual/editorial

```text
031 — SMUL Identity
032 — Admin Localization
033 — Hero Background
034 — Image Controls
035 — Icons
036 — Controlled Styling
```

## P1 — governança

```text
037 — Roles
038 — Audit Logs
039 — Soft Delete
```

## P2 — adoção

```text
040 — User Documentation
```

## Backlog

```text
041 — Image Editing Canvas
```
