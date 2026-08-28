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

## SPEC-011 - Base Theme Readability

A SPEC-011 define uma etapa de tema base provisório para garantir legibilidade dos Blocks existentes antes da identidade visual definitiva.

### Motivação

Algumas combinações atuais de cores podem gerar baixo contraste, como fundo escuro com texto escuro ou texto claro sobre superfície clara.

### Escopo

- Centralizar tokens semânticos em `src/app/(frontend)/globals.css`.
- Aplicar o tema base aos Blocks existentes.
- Preservar schemas do Payload, routing, preview e conteúdo CMS.

### Decisao de paleta provisoria

- `page`: verde-cinza muito claro.
- `surface`: branco.
- `surface-muted`: verde-cinza claro.
- `surface-strong`: azul-petroleo escuro.
- `brand`: verde-azulado institucional.
- `accent-soft`: amarelo suave para destaques pontuais.
- `text`: grafite.
- `text-muted`: cinza esverdeado medio.
- `link`: azul institucional.

## SPEC-005 - Drafts, Preview e Publishing

A SPEC-005 separa edicao editorial de publicacao usando drafts nativos do Payload e Draft Mode do Next.js.

### Decisoes registradas

- `pages` usa `versions.drafts` do Payload como fonte de status editorial.
- O campo manual `status` foi removido da collection para evitar duplicidade com `_status`.
- Visitantes comuns consultam apenas paginas com `_status` igual a `published`.
- Preview usa `/api/draft?collection=pages&slug=...&token=...` e exige token de usuario autenticado do Payload.
- A URL de preview e gerada pelo Admin de `pages`.
- Publicacoes e alteracoes disparam `revalidatePath` para o caminho publico correspondente ao slug.

### Escopo nao implementado nesta spec

- Live Preview em tempo real.
- Fluxo editorial multi-etapas.
- Criacao automatica de conteudo inicial.

## SPEC-006 - Editorial Baseline

A SPEC-006 cria o primeiro seed editorial editavel pelo Payload para provar a arquitetura editorial do portal.

### Decisoes registradas

- O seed fica em `src/seeds/editorial-baseline.ts` e pode ser executado com `npm run seed:editorial`.
- O seed e idempotente por slug: atualiza paginas existentes e cria as ausentes.
- As paginas iniciais sao publicadas no Payload para aparecerem no frontend publico.
- Slugs de `pages` passaram a aceitar segmentos com `/` para suportar rotas como `modalidades/automatica`.
- A rota frontend dinamica passou de `[slug]` para `[...slug]` para carregar paginas CMS em subcaminhos.
- O prazo inicial fica em `site-settings.deadline`; a home apenas demonstra o aviso em bloco editavel.
- Header, footer e links oficiais recebem conteudo inicial editavel pelo administrador.

### Escopo nao implementado nesta spec

- Rota especial `/situacao`.
- `DeadlineBanner` especializado.
- Novas collections, novos blocks ou triagem.
