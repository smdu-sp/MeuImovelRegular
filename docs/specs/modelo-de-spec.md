---
spec: SPEC-XXX
title: Titulo curto da Spec
status: planned
summary: Resumo objetivo do que esta Spec entrega.
source: Nome ou caminho do documento de origem, se houver
---

> **Regra de execucao:** implemente exclusivamente esta Spec. Nao antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicaveis, registre decisoes e declare explicitamente o que nao foi implementado.

# SPEC-XXX - Titulo curto da Spec

## 1. Objetivo

Descreva o resultado esperado desta Spec em termos de comportamento, capacidade editorial ou decisao arquitetural.

Esta secao deve deixar claro por que a Spec existe e qual problema ela resolve.

---

## 2. Escopo

Liste o que deve ser implementado, organizado ou validado.

Exemplo:

- evoluir um schema existente;
- criar ou ajustar um componente;
- documentar uma decisao;
- adicionar testes de regressao;
- atualizar docs relacionadas.

---

## 3. Fora de escopo

Liste explicitamente o que nao deve ser feito nesta Spec.

Exemplo:

- nao implementar regras de Specs futuras;
- nao criar novas collections sem necessidade comprovada;
- nao hardcodar conteudo institucional sujeito a alteracao;
- nao alterar schemas persistidos sem avaliar migration.

---

## 4. Contexto e dependencias

Informe specs, documentos, decisoes ou arquivos que devem ser lidos antes da implementacao.

Exemplo:

```text
docs/specs/00-project/spec-000-project-guardrails.md
docs/cms/schema-evolution-migrations.md
docs/cms/block-catalog.md
```

Se a Spec depender de outra, registre a dependencia de forma explicita.

---

## 5. Regras de implementacao

Defina as restricoes importantes para a execucao.

Exemplo:

- manter regras centrais de negocio fora de componentes React;
- preservar conteudo existente;
- usar helpers e patterns ja existentes no projeto;
- manter nomes tecnicos estaveis quando a mudanca for apenas editorial;
- nao armazenar CSS, SVG ou valores arbitrarios no CMS quando houver presets.

---

## 6. Impacto em dados persistidos

Classifique qualquer mudanca de schema antes do patch.

| Area | Mudanca | Classificacao | Migration |
|---|---|---|---|
| Pages.layout | Exemplo: novo field opcional | Baixo | Nao exige, se houver fallback |

Use `docs/cms/schema-evolution-migrations.md` como referencia. Renames, remocoes, mudancas de tipo e mudancas de relationship exigem plano de migration antes da implementacao.

---

## 7. Implementacao esperada

Descreva os passos ou entregaveis da Spec.

### 7.1 Primeiro entregavel

Detalhe o comportamento esperado.

### 7.2 Segundo entregavel

Detalhe o comportamento esperado.

### 7.3 Documentacao

Indique quais documentos devem ser criados ou atualizados.

---

## 8. Testes e validacao

Liste as validacoes aplicaveis.

```text
lint
typecheck
unit
integration
build
```

Se alguma validacao nao se aplicar, o dev deve registrar o motivo ao finalizar.

---

## 9. Criterios de aceite

- [ ] objetivo principal foi atendido;
- [ ] escopo foi implementado sem antecipar Specs futuras;
- [ ] conteudo existente foi preservado;
- [ ] impacto em dados persistidos foi avaliado;
- [ ] docs relevantes foram atualizadas;
- [ ] testes aplicaveis foram executados;
- [ ] build passa ou pendencia foi registrada;
- [ ] o que nao foi implementado foi declarado.

---

## 10. Prompt base para execucao

```text
Implemente exclusivamente a SPEC-XXX descrita em:

docs/specs/NN-dominio/spec-XXX-titulo.md

Antes de alterar arquivos:

1. Leia a Spec inteira.
2. Inspecione o projeto atual.
3. Liste os arquivos que pretende alterar.
4. Identifique conflitos com a arquitetura existente.
5. Informe se a Spec exige migration.
6. Nao implemente funcionalidades previstas em Specs posteriores.
7. Nao crie abstracoes genericas sem uso comprovado.
8. Preserve conteudo existente.
9. Nao adicione dependencias sem justificativa.
10. Execute lint, typecheck, testes aplicaveis e build.

Ao finalizar, entregue:

## Implementacao

### Arquivos criados

### Arquivos modificados

### Decisoes arquiteturais

### Migrations

### Testes executados

### Resultado

### Criterios de aceite atendidos

### Criterios pendentes

### Desvios da Spec

### Divida tecnica encontrada

### O que NAO foi implementado
```

---

## 11. Convencoes para novas specs

- Use o numero da spec para preservar a ordem historica.
- Mantenha nomes de arquivo em lowercase kebab-case ASCII.
- Coloque a spec na pasta de dominio correspondente.
- Atualize `docs/specs/README.md` ao adicionar ou mover uma spec.
- Evite valores institucionais hardcoded em componentes.
- Use linguagem objetiva, verificavel e sem depender de conhecimento implicito.
