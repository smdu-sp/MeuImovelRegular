---
spec: SPEC-004
title: CMS Routing
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-004 — CMS Routing

## Objetivo

Transformar documentos `Pages` em rotas reais no frontend.

---

## Rota dinâmica

Implementar equivalente a:

```text
src/app/(frontend)/[slug]/page.tsx
```

Fluxo:

```text
URL
 ↓
slug
 ↓
Pages collection
 ↓
document
 ↓
RenderBlocks
 ↓
HTML
```

---

## Home

Definir:

```text
slug: home
```

como documento correspondente a:

```text
/
```

A decisão deve ficar encapsulada em helper.

Exemplo conceitual:

```text
pageSlugToPath()
```

---

## Data access

Criar camada centralizada:

```text
src/lib/payload/
  get-page.ts
```

A página não deve espalhar queries ao Payload diretamente por vários componentes.

---

## Not found

Slug inexistente deve resultar em `notFound()`.

Não retornar página vazia ou erro 500.

---

## Metadata

Adicionar `generateMetadata()` utilizando dados da Page.

Fallback:

```text
Page SEO
↓
SiteSettings.defaultSEO
```

---

## Critérios de aceite

- [ ] `/` utiliza Page `home`;
- [ ] `/teste` pode ser criada somente pelo CMS;
- [ ] remover Page faz a rota deixar de existir;
- [ ] slug inexistente retorna 404;
- [ ] título e description chegam ao metadata.

---
