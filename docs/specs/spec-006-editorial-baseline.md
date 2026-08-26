---
spec: SPEC-006
title: Editorial Baseline
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-006 — Editorial Baseline

## Objetivo

Provar que o CMS consegue representar a arquitetura editorial real do portal.

---

## Criar no CMS

Seed inicial para:

```text
/
entenda-a-lei
beneficios
modalidades/automatica
modalidades/declaratoria-simplificada
modalidades/declaratoria
modalidades/comum
faq
cartilha
```

A rota `/situacao` permanecerá especial e será tratada posteriormente.

---

## Importante

Os seeds são conteúdo inicial.

Não devem transformar conteúdo institucional variável em constantes do frontend.

Depois de criado, o conteúdo deve poder ser editado pelo administrador.

---

## Home

Demonstrar pelo menos:

```text
Hero
Deadline
orientação
CTA
```

Caso `DeadlineBanner` tenha comportamento especializado, pode consumir a configuração de `SiteSettings` ao invés de armazenar a data dentro do próprio Block.

---

## Marco de aceite

Ao terminar esta Spec, teremos o primeiro **CMS MVP**.

O administrador consegue:

- criar página;
- editar página;
- adicionar imagem;
- montar layout;
- alterar navegação;
- editar footer;
- modificar prazo;
- salvar draft;
- visualizar;
- publicar.

E o desenvolvedor continua controlando integralmente o Design System.

---
