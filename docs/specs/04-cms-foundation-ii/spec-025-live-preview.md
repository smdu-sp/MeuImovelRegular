---
spec: SPEC-025
title: Live Preview
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-025 — Live Preview

## 1. Objetivo

Validar Live Preview com o catálogo editorial consolidado, permitindo que o editor compreenda as composições visualmente.

## 2. Pré-condições

- Preview tradicional funcional;
- novos Blocks estáveis;
- Admin UX organizada.

## 3. Matriz mínima

| Block | Alterações mínimas a validar |
|---|---|
| Hero Countdown | background, logo, counterNumbers |
| Rich Text | conteúdo |
| Cards/Modalities | título, cards, CTA |
| Action Banners | título, link, appearance |
| Benefits Grid | colunas e itens |
| FAQ | pergunta e resposta |
| Info Cards/Steps | itens |
| Alert Box | conteúdo e tipo |
| Media Highlight | imagem |
| Icon Grid | título, ícone e descrição |
| Media & Text | alinhamento, texto e mídia |
| CTA | conteúdo e ação |

Testar apenas os Blocks aprovados na SPEC-018.

## 4. Limite

O Hero Countdown deve refletir `counterNumbers`, sem implementar contagem regressiva real.

## 5. Critérios de aceite

- [ ] catálogo aprovado atualiza no preview;
- [ ] variants são visualizáveis;
- [ ] mídia atualiza;
- [ ] draft permanece protegido;
- [ ] Preview tradicional continua como fallback;
- [ ] build passa.

---
