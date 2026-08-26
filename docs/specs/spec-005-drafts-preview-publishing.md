---
spec: SPEC-005
title: Drafts, Preview and Publishing
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-005 — Drafts, Preview and Publishing

## Objetivo

Separar edição de conteúdo de publicação.

---

## Comportamento esperado

```text
Editar
 ↓
Save Draft
 ↓
Preview
 ↓
Publish
 ↓
Site público
```

Conteúdo draft não deve aparecer para visitantes normais.

---

## Payload

Ativar versions/drafts para `Pages`.

---

## Next.js

Implementar Draft Mode utilizando Route Handler próprio.

Criar fluxo seguro equivalente a:

```text
/admin
   ↓
Preview
   ↓
/api/draft
   ↓
cookie de draft
   ↓
frontend
   ↓
Payload query draft=true
```

O endpoint deve validar a intenção de preview e não pode ser uma porta pública irrestrita para conteúdo privado.

---

## Revalidation

Publicações devem invalidar o conteúdo correspondente.

Preferir mecanismo de cache explicitamente documentado.

Não depender de rebuild completo da aplicação para atualizar conteúdo editorial.

---

## Live Preview

**Fora do escopo inicial.**

Primeiro validar:

```text
Draft + Preview + Publish
```

Live Preview poderá virar uma Spec separada se houver necessidade editorial real.

---

## Critérios de aceite

- [ ] draft não é público;
- [ ] Admin consegue salvar draft;
- [ ] Admin consegue abrir Preview;
- [ ] preview mostra conteúdo não publicado;
- [ ] Publish torna conteúdo público;
- [ ] alteração publicada invalida cache necessário.

---
