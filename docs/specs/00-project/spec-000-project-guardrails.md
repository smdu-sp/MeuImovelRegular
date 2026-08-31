---
spec: SPEC-000
title: Project Guardrails
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-000 — Project Guardrails

## Objetivo

Transformar as decisões arquiteturais e de produto em regras explícitas do repositório antes de desenvolver funcionalidades.

## Não implementar ainda

Nesta Spec não devem ser criados:

- Payload collections;
- Blocks;
- lógica de triagem;
- integração CEDI;
- páginas completas;
- componentes visuais definitivos.

## Entregáveis

Criar:

```text
AGENTS.md
docs/specs/README.md
src/domain/
src/lib/
src/components/
```

A estrutura pode conter `.gitkeep` enquanto não houver implementação.

---

## AGENTS.md

O arquivo deve definir no mínimo:

### Responsabilidade do portal

O sistema:

- informa;
- orienta;
- realiza triagem preliminar;
- encaminha para serviços oficiais.

O sistema não:

- cria protocolo administrativo;
- substitui o Portal de Licenciamento;
- declara oficialmente que um imóvel está regular;
- garante deferimento;
- produz interpretação jurídica definitiva.

### Arquitetura

Adotar:

```text
CMS
↓
conteúdo configurável

domain/
↓
regras puras de negócio

lib/
↓
integrações e infraestrutura

components/
↓
apresentação

app/
↓
composição e rotas
```

Componentes React não devem conter regras centrais de elegibilidade.

### Conteúdo institucional

Não codificar diretamente em componentes valores sujeitos a alteração, incluindo:

- datas;
- taxas;
- valores;
- links oficiais;
- contatos;
- parâmetros legais;
- documentos oficiais.

### Terminologia

Não utilizar **“anistia”** na interface institucional.

### Integrações

Sistemas externos devem possuir adapters ou clients próprios.

Exemplo:

```text
src/lib/cedi/
```

A aplicação não deve tratar dados locais como fonte oficial do CEDI.

---

## Critérios de aceite

- [ ] `AGENTS.md` existe.
- [ ] responsabilidades e limites estão documentados.
- [ ] arquitetura de camadas está documentada.
- [ ] regras para agentes estão explícitas.
- [ ] nenhuma feature foi implementada prematuramente.

---

## Prompt para Codex

```text
Implemente exclusivamente a SPEC-000 localizada em
docs/specs/00-project/spec-000-project-guardrails.md.

Antes de alterar arquivos:
1. inspecione a estrutura atual do projeto;
2. informe quais arquivos pretende criar ou alterar;
3. identifique conflitos entre a Spec e o projeto existente.

Não implemente nenhuma funcionalidade prevista em Specs posteriores.

Ao finalizar, apresente:
- arquivos criados;
- arquivos alterados;
- decisões tomadas;
- eventuais desvios da Spec;
- comandos utilizados para validação.
```

---
