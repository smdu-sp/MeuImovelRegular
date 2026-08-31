---
spec: SPEC-022
title: Media Library
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-022 — Media Library

## 1. Objetivo

Garantir que a `Media` comporte todos os papéis de mídia identificados no catálogo visual sem espalhar regras de upload pelos Blocks.

## 2. Papéis concretos

```text
Hero Countdown → backgroundImage + logo
Media Highlight → image
Icon Grid → icon por item
Media & Text → imagem/infográfico
Header → logo institucional
```

## 3. Passos

1. auditar `Media` (`alt`, `caption`, MIME, sizes, storage, filename);
2. classificar usos: background, logo, ícone, conteúdo, infográfico e documento;
3. restringir MIME types ao necessário;
4. tratar SVG conscientemente;
5. gerar apenas image sizes realmente consumidos;
6. definir política única de `alt`;
7. decidir se Icon Grid usa uploads ou catálogo controlado de ícones;
8. garantir fallback para background do Hero;
9. garantir responsividade para infográficos.

## 4. Critérios de aceite

- [ ] todos os papéis de mídia estão suportados;
- [ ] Blocks não implementam uploads divergentes;
- [ ] alt possui política única;
- [ ] Hero possui estratégia de background;
- [ ] Icon Grid possui estratégia segura para ícones;
- [ ] formatos permitidos estão documentados.

---
