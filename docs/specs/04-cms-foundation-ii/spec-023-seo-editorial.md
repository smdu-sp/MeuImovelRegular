---
spec: SPEC-023
title: SEO Editorial
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-023 — SEO Editorial

## 1. Objetivo

Criar uma camada SEO consistente e administrável.

## 2. Modelo

```text
Page
└── SEO
    ├── metaTitle
    ├── metaDescription
    ├── socialImage
    ├── canonical?
    ├── noIndex
    └── noFollow?
```

## 3. Fallback

```text
Page SEO
↓
SiteSettings.defaultSEO
↓
defaults de código
```

## 4. Passos

### Passo 1 — Auditar metadata atual

Localizar:

- `generateMetadata`;
- hardcodes;
- títulos duplicados.

### Passo 2 — Criar field group reutilizável

Exemplo:

```text
src/fields/seo.ts
```

### Passo 3 — Criar helper

Exemplo:

```text
generatePageMetadata(page, siteSettings)
```

### Passo 4 — OpenGraph

Usar imagem configurada quando existente.

### Passo 5 — Robots

Implementar `noIndex` e `noFollow` de forma explícita.

### Passo 6 — Canonical

Adicionar somente se houver necessidade real e comportamento claro.

### Passo 7 — Sitemap

Garantir que Pages publicadas possam compor sitemap futuramente ou já agora se isso estiver no escopo atual.

## 5. Critérios de aceite

- [ ] metadata não está espalhada;
- [ ] Page SEO funciona;
- [ ] fallback funciona;
- [ ] social image funciona;
- [ ] draft não vaza indevidamente em SEO público;
- [ ] build passa.

---

# CHECKPOINT A — Content Architecture

Após SPEC-023, interromper desenvolvimento.

Perguntas:

1. Todas as páginas podem ser representadas com os Blocks atuais?
2. Existem Blocks duplicando propósito?
3. Links estão centralizados?
4. Conteúdo institucional recorrente está centralizado?
5. Media é suficiente?
6. SEO está administrável?
7. O CMS continua simples?

Se a resposta for não para itens críticos, corrigir antes da SPEC-024.

---
