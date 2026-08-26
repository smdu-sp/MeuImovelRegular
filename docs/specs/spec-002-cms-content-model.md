---
spec: SPEC-002
title: CMS Content Model
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-002 — CMS Content Model

## Objetivo

Criar a camada editorial mínima.

## Collections

Criar:

```text
Users
Media
Pages
```

---

## Users

Responsável inicialmente apenas por usuários administrativos.

Nesta etapa não criar sistema complexo de RBAC.

Preparar arquitetura para posteriormente distinguir perfis caso necessário.

---

## Media

Campos mínimos:

```text
file
alt
caption?
updatedAt
```

`alt` deve ser obrigatório para imagens editoriais.

---

## Pages

Estrutura inicial:

```text
Page
├── title
├── slug
├── layout
├── seo
│   ├── title
│   ├── description
│   └── image
└── status
```

`layout` será detalhado na SPEC-003.

### Slug

Deve possuir:

- unicidade;
- validação;
- normalização;
- tratamento especial para `home`.

---

## Globals

Criar:

```text
Header
Footer
SiteSettings
```

### Header

```text
logo
navigation[]
```

Uma navegação interna deve preferencialmente referenciar uma Page ao invés de armazenar URLs internas arbitrárias.

### Footer

Campos configuráveis para:

```text
telefone
email
atendimento presencial
links institucionais
```

### SiteSettings

Deve armazenar configurações globais, incluindo:

```text
siteName
deadline
officialLinks
defaultSEO
```

O prazo institucional deve estar no CMS, e não em um componente React.

---

## Critérios de aceite

No Admin deve ser possível:

- [ ] criar mídia;
- [ ] preencher texto alternativo;
- [ ] criar Page;
- [ ] editar Header;
- [ ] editar Footer;
- [ ] editar SiteSettings;
- [ ] alterar o prazo sem alterar código.

---
