---
spec: SPEC-028
title: Schema Evolution & Migrations
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-028 — Schema Evolution & Migrations

## 1. Objetivo

Garantir evolução segura do schema após a expansão do catálogo visual.

A SPEC-019 pode adicionar novos Blocks, variants ou evoluir Cards, ImageText, CTA e Globals. Essas mudanças devem considerar dados persistidos.

## 2. Mudanças que exigem avaliação

```text
novo Block
novo field opcional
novo field obrigatório
novo enum/variant
rename
remoção
mudança de tipo
mudança de relationship
```

## 3. Regras específicas

- Se `Media & Text` for absorvido por ImageText, não renomear campos destrutivamente.
- Se CTA final virar variant do CTA existente, conteúdo antigo deve permanecer válido.
- Se Modalities Cards virar evolução de Cards, preservar Pages existentes.
- Action Banners devem ter fallback seguro de appearance.
- Não transformar `counterNumbers` em deadline dinâmico neste ciclo sem nova Spec/migration própria.

## 4. Processo

```text
mudança de schema
↓
classificação
↓
migration necessária?
↓
fixture/backup
↓
gerar migration
↓
revisão humana
↓
aplicar local
↓
testar conteúdo antigo
↓
build
```

## 5. Fixture de compatibilidade

Manter pelo menos uma Page de teste com Blocks antigos e uma com Blocks novos. A migration só é aceita se ambas renderizarem.

## 6. Guardrail

Adicionar ao `AGENTS.md` que mudanças em schemas de Pages, Blocks, Globals ou Media devem avaliar impacto sobre documentos persistidos e que renames/mudanças de tipo/remoções exigem plano de migration.

## 7. Critérios de aceite

- [ ] mudanças foram classificadas;
- [ ] migrations necessárias existem;
- [ ] conteúdo antigo foi testado;
- [ ] variants têm fallback;
- [ ] refatorações destrutivas não foram tratadas como simples rename;
- [ ] documentação está atualizada.

---
