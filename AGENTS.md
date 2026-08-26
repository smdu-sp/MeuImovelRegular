<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Meu Imovel Regular - Project Guardrails

## Responsabilidade do portal

O sistema:

- informa;
- orienta;
- realiza triagem preliminar;
- encaminha para servicos oficiais.

O sistema nao:

- cria protocolo administrativo;
- substitui o Portal de Licenciamento;
- declara oficialmente que um imovel esta regular;
- garante deferimento;
- produz interpretacao juridica definitiva.

## Arquitetura

Adote a separacao de responsabilidades abaixo:

```text
CMS
-> conteudo configuravel

src/domain/
-> regras puras de negocio

src/lib/
-> integracoes e infraestrutura

src/components/
-> apresentacao

app/
-> composicao e rotas
```

Componentes React nao devem conter regras centrais de elegibilidade.

## Conteudo institucional

Nao codifique diretamente em componentes valores sujeitos a alteracao, incluindo:

- datas;
- taxas;
- valores;
- links oficiais;
- contatos;
- parametros legais;
- documentos oficiais.

## Terminologia

Nao utilize "anistia" na interface institucional.

## Integracoes

Sistemas externos devem possuir adapters ou clients proprios.

Exemplo:

```text
src/lib/cedi/
```

A aplicacao nao deve tratar dados locais como fonte oficial do CEDI.

## Regras para agentes

- Implemente apenas a spec solicitada pelo usuario.
- Nao antecipe collections do Payload, blocks, triagem, integracao CEDI, paginas completas ou componentes visuais definitivos.
- Antes de alterar arquivos, inspecione a estrutura atual, identifique conflitos e informe os arquivos pretendidos.
- Ao finalizar, registre decisoes, desvios e comandos de validacao executados.
