---
spec: SPEC-030
title: Unpublish Workflow Bugfix
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-030 — Unpublish Workflow Bugfix

## Objetivo

Corrigir o comportamento de `Unpublish` antes de adicionar novas regras de lifecycle ao conteúdo.

Essa correção deve ser tratada como prioridade, pois Specs posteriores dependem de um comportamento confiável entre:

```text
Draft
Published
Unpublished
Inactive
```

---

## Problema

O fluxo atual permite publicação, porém `Unpublish` não está produzindo o estado esperado.

A implementação deve primeiro descobrir se o problema está em:

- configuração de `versions.drafts`;
- hook;
- access control;
- frontend;
- cache;
- revalidation;
- Payload Admin;
- query que continua retornando documento não publicado.

Não assumir a causa antes da investigação.

---

## Passos

### 1. Reproduzir

Documentar:

```text
estado inicial
ação realizada
resultado esperado
resultado obtido
```

### 2. Identificar camada responsável

Verificar:

```text
Payload document
_status
hooks
cache
query pública
revalidation
frontend
```

### 3. Criar teste de regressão

Cenário:

```text
Publish
↓
página acessível

Unpublish
↓
página deixa de ser pública

Preview autenticado
↓
continua podendo visualizar draft
```

### 4. Corrigir

Fazer a menor alteração necessária.

### 5. Validar cache

Uma página removida de publicação não pode permanecer acessível por cache antigo.

---

## Critérios de aceite

- [ ] Publish funciona.
- [ ] Unpublish funciona.
- [ ] Documento deixa de aparecer publicamente.
- [ ] Draft continua existindo.
- [ ] Preview continua funcional.
- [ ] Cache é invalidado.
- [ ] Teste de regressão existe.
- [ ] Build passa.

---
