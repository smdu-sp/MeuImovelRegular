# Specs

Este diretorio registra guardrails e decisoes de implementacao para o projeto Meu Imovel Regular.

## SPEC-000 - Project Guardrails

A SPEC-000 estabelece as responsabilidades, limites e camadas arquiteturais do projeto antes da implementacao de funcionalidades.

## Decisoes registradas

- O portal informa, orienta, realiza triagem preliminar e encaminha para servicos oficiais.
- O portal nao cria protocolo administrativo, nao substitui o Portal de Licenciamento, nao declara oficialmente regularidade de imovel, nao garante deferimento e nao produz interpretacao juridica definitiva.
- Regras centrais de elegibilidade pertencem a `src/domain/`, nao a componentes React.
- Integracoes e infraestrutura pertencem a `src/lib/`.
- Apresentacao pertence a `src/components/`.
- Composicao de rotas pertence a `app/`.
- Conteudo institucional sujeito a mudanca nao deve ser codificado diretamente em componentes.
- A interface institucional nao deve usar o termo "anistia".
- Sistemas externos devem ter adapters ou clients proprios.
- Dados locais nao devem ser tratados como fonte oficial do CEDI.

## Escopo nao implementado nesta spec

- Collections do Payload.
- Blocks.
- Logica de triagem.
- Integracao CEDI.
- Paginas completas.
- Componentes visuais definitivos.

## SPEC-001 - Payload Foundation

A SPEC-001 estabelece a infraestrutura minima para executar Next.js e Payload CMS na mesma aplicacao.

### Versoes registradas

- Node.js: 24.16.0
- Next.js: 16.3.3
- Payload: 3.88.0
- package manager: npm 11.13.0
- database: SQLite via `@payloadcms/db-sqlite` 3.88.0
- GraphQL peer dependency: `graphql` 16.14.2

### Banco inicial

SQLite foi escolhido para o bootstrap local por nao exigir um servico externo durante o desenvolvimento. PostgreSQL segue como caminho preferencial para uma implantacao institucional de producao.

### Environment

Use `.env.example` como referencia para as variaveis obrigatorias. Secrets reais nao devem ser versionados.

### Rotas esperadas

- Frontend: `http://localhost:3000`
- Payload Admin: `http://localhost:3000/admin`
