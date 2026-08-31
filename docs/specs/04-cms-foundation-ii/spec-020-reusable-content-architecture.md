---
spec: SPEC-020
title: Reusable Content Architecture
status: updated
source: SPECS-018-029-CMS-Foundation-II-ATUALIZADO.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-020 — Reusable Content Architecture

## 1. Objetivo

Consolidar conteúdo global e reutilizável exigido pelos layouts mapeados, evitando duplicação em Pages e Blocks.

## 2. Referências concretas

O mapeamento define:

### Header

```text
logo institucional
menu principal
```

### Footer

```text
e-mail
telefone
endereço físico
redes sociais
```

Esses dados pertencem a Globals/configurações editoriais, não a Page Blocks.

## 3. Regra de conteúdo

Valores vistos no layout não devem ser hardcoded. Caso documentos do projeto tragam endereço, contato, prazo ou link divergente, manter o campo configurável e registrar a divergência para validação.

## 4. Passos

1. revisar `Header`, `Footer`, `SiteSettings` e `Theme`;
2. consolidar branding e navegação no Header;
3. consolidar contato, endereço, redes e links no Footer;
4. localizar CTAs, links e logos repetidos;
5. criar fields reutilizáveis apenas quando repetição for real (`link`, `cta`, `socialLink`);
6. evitar coleção genérica `key/value`.

## 5. Critérios de aceite

- [ ] Header/Footer possuem responsabilidade clara;
- [ ] menu é configurável;
- [ ] contato/endereço/redes são configuráveis;
- [ ] dados visuais não foram hardcoded;
- [ ] divergências conhecidas foram registradas;
- [ ] Globals continuam simples.

---
