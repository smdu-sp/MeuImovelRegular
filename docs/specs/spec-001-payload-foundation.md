---
spec: SPEC-001
title: Payload Foundation
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-001 — Payload Foundation

## Objetivo

Estabelecer a infraestrutura mínima para executar Next.js e PayloadCMS na mesma aplicação.

## Resultado esperado

Ao final:

```text
http://localhost:3000
```

deve servir o frontend.

E:

```text
http://localhost:3000/admin
```

deve servir o Payload Admin.

---

## Antes da implementação

Registrar explicitamente:

```text
Node.js
Next.js
Payload
package manager
database
```

no projeto.

Nunca usar versões implícitas como `latest` em documentação de infraestrutura após o bootstrap.

---

## Estrutura alvo

```text
src/
├── app/
│   ├── (frontend)/
│   └── (payload)/
│
├── collections/
├── globals/
├── blocks/
├── components/
├── domain/
├── lib/
│
└── payload.config.ts
```

A estrutura final deve respeitar o scaffold efetivamente requerido pela versão instalada do Payload.

---

## Banco inicial

Para desenvolvimento, escolher explicitamente entre:

```text
PostgreSQL
ou
SQLite
```

A escolha deve estar documentada.

Para uma aplicação institucional destinada à produção, PostgreSQL deve ser considerado o caminho preferencial, mas não é obrigatório nesta Spec se uma base local simples facilitar o bootstrap.

---

## Environment

Criar `.env.example`.

Exemplo conceitual:

```text
PAYLOAD_SECRET=
DATABASE_URI=
NEXT_PUBLIC_SERVER_URL=
```

Não versionar secrets reais.

---

## Smoke test

Deve ser possível:

1. iniciar o projeto;
2. abrir frontend;
3. abrir Admin;
4. autenticar com usuário administrativo;
5. reiniciar aplicação sem recriar estado indevidamente.

---

## Critérios de aceite

- [ ] aplicação inicializa sem erro;
- [ ] Next.js funciona;
- [ ] Payload Admin funciona;
- [ ] banco conecta;
- [ ] `.env.example` existe;
- [ ] secrets não estão versionados;
- [ ] versões relevantes estão registradas;
- [ ] lint passa;
- [ ] typecheck passa.

---
