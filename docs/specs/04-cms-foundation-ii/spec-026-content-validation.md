---
spec: SPEC-026
title: Content Validation
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-026 — Content Validation

## 1. Objetivo

Adicionar validações editoriais ao catálogo consolidado sem introduzir regras jurídicas ou de negócio.

## 2. Validações por padrão

### Hero Countdown
Validar campos editoriais do schema. `counterNumbers` permanece texto/apresentação.

### Modalities Cards / Cards
Itens não podem ficar estruturalmente vazios; CTA completo quando existir.

### Action Banners
Título, destino e `appearance` dentro de enum fechado.

### Benefits Grid
Colunas e itens não vazios.

### FAQ / Accordion
Pergunta e resposta obrigatórias por item.

### Info Cards / Step-by-Step
Se for `Steps`, preservar ordem explícita; se for Cards, reutilizar validação compartilhada.

### Alert Box
`content` válido e `type` dentro das opções aprovadas.

### Media Highlight
Relação válida com Media; alt segue política da Media Library.

### Icon Grid
Itens sem descrição não devem ser persistidos; ícone conforme política aprovada.

### Media & Text
`alignment` dentro do enum e validação compartilhada com ImageText se reutilizado.

### CTA
Se houver botão, exigir label + destino válido.

## 3. Mensagens

Preferir mensagens editoriais como:

```text
Informe o destino do botão deste banner.
```

em vez de mensagens técnicas genéricas.

## 4. Fora de escopo

Não validar modalidade, elegibilidade, data legal, CEDI, Outorga ou prazo jurídico.

## 5. Critérios de aceite

- [ ] todos os Blocks aprovados têm validação mínima;
- [ ] links incompletos são rejeitados;
- [ ] arrays não acumulam itens vazios;
- [ ] enums não aceitam valores arbitrários;
- [ ] mensagens são compreensíveis;
- [ ] nenhuma regra específica do domínio foi adicionada.

---

# CHECKPOINT B — Editorial Experience

Após SPEC-026, validar:

1. Um editor entende o CMS?
2. Ele consegue montar página sem ajuda técnica?
3. Ele consegue visualizar resultado?
4. O sistema impede erros básicos?
5. O CMS continua restrito o suficiente para preservar o Design System?

---
