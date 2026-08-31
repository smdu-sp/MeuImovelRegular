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

## SPEC-012 - Design Tokens Foundation

A SPEC-012 centraliza os tokens visuais base do frontend e migra componentes compartilhados existentes para nomes semanticos.

### Inventario encontrado

- Cores hex estavam concentradas em `src/app/(frontend)/globals.css`.
- Espacamentos recorrentes: `px-6`, `sm:px-10`, `py-12`, `py-14`, `py-16`, `py-24`, `gap-10`.
- Containers recorrentes: `max-w-3xl` e `max-w-6xl`.
- Radius recorrentes: `rounded-md`, `rounded-lg`, `rounded-xl`.
- Tipografia recorrente: `text-sm`, `text-lg`, `text-xl`, `text-3xl`, `text-4xl`, `text-5xl`, `leading-8`, `font-semibold`.
- Nao havia uso real de sombras nos componentes inspecionados.

### Decisoes registradas

- `src/styles/tokens.css` e a fonte central dos valores visuais.
- `globals.css` importa os tokens e os expoe ao Tailwind por nomes semanticos.
- Foram mantidos aliases temporarios para tokens da SPEC-011, evitando regressao imediata.
- Blocks existentes passaram a consumir tokens semanticos de cor, container, tipografia, spacing e radius.
- Valores hex ficam restritos ao arquivo central de tokens.

### Escopo nao implementado nesta spec

- Global `Theme` no Payload.
- Variantes configuraveis no CMS.
- Redesign de Hero, Cards, CTA ou demais Blocks.
- Dark mode.
- Editor visual.

## SPEC-013 - Theme Global e Branding

A SPEC-013 permite que o administrador configure branding institucional limitado pelo Payload, enquanto o codigo continua controlando o Design System.

### Decisoes registradas

- `SiteSettings` foi evoluido com `branding`, evitando criar um novo Global `Theme` para nao duplicar metadados do site.
- O logo permanece em `Header.logo`, que ja existia antes desta spec.
- O administrador controla apenas `primaryColor`, `secondaryColor` e `accentColor`.
- Campos de cor aceitam somente hexadecimal curto ou longo.
- `src/lib/theme/get-theme.ts` centraliza a leitura do Payload.
- `src/lib/theme/map-theme-to-css-variables.ts` sanitiza valores do CMS e aplica somente CSS variables conhecidas.
- Valores vazios ou invalidos sao ignorados para preservar os defaults da SPEC-012.
- As variaveis sao aplicadas uma unica vez no root layout do frontend.

### Escopo nao implementado nesta spec

- Global `Theme` separado.
- Seletor de fonte livre.
- Upload de CSS, `customCss`, `className` ou Tailwind editavel pelo CMS.
- Dark mode completo.
- Temas por pagina, por usuario ou multiplos temas.
- Variantes de Blocks.

## SPEC-014 - UI Primitives

A SPEC-014 cria primitives visuais reutilizaveis para reduzir duplicacao de container, secao, tipografia e acoes nos Blocks existentes.

### Inventario encontrado

- `Hero`, `CTA`, `Cards`, `ImageText` e `RichText` repetiam containers, espacamento lateral e largura maxima.
- `Hero`, `CTA`, `Cards` e `ImageText` repetiam headings e textos com classes tipograficas similares.
- `Hero`, `CTA`, `Cards` e `ImageText` repetiam estilos de links/botoes.
- `Cards` e `CTA` tinham superficies enquadradas que justificam uma primitive `Card`.
- `Header` e `Footer` ainda nao possuem renderizacao frontend compartilhada nesta etapa.

### Decisoes registradas

- Primitives criadas em `src/components/ui`: `Container`, `Section`, `Heading`, `Text`, `Button` e `Card`.
- `Card` foi incluida por necessidade concreta dos Blocks atuais.
- Nenhuma primitive aceita `className` como API publica; variantes e tamanhos sao fechados.
- `Button` suporta botao real e link com aparencia de botao sem perder semantica HTML.
- `BlockLink` passou a usar aparencias fechadas (`text`, `primary`, `secondary`, `outline`, `ghost`) em vez de receber classe arbitraria.
- `Hero` foi migrado como piloto e os demais Blocks existentes foram migrados depois da validacao.

### Escopo nao implementado nesta spec

- Redesign completo dos Blocks.
- Animacoes ou sistema de motion.
- Novos Blocks.
- Primitives especificas de pagina.

## SPEC-015 - Block Variants

A SPEC-015 fecha variacoes editoriais dos Blocks existentes em enums controlados pelo Payload e interpretados pelo frontend.

### Propositos revisados

- `Hero` abre paginas e apresenta a principal mensagem editorial.
- `RichText` publica conteudo textual editavel com largura adequada ao contexto.
- `ImageText` combina conteudo editorial e imagem complementar com controle de ordem no desktop.
- `Cards` organiza chamadas repetidas em grade; nao recebeu variante porque so existe um comportamento real nesta etapa.
- `CTA` destaca uma acao editorial ou institucional no fluxo da pagina.

### Decisoes registradas

- `Hero.variant` passou a aceitar `default`, `centered` e `split`.
- O valor legado `Hero.variant = "image"` e renderizado como `split`.
- `RichText.variant` passou a aceitar `default` e `narrow`.
- Valores legados de `RichText.width` continuam aceitos pelo renderer: `content` vira `narrow` e `wide` vira `default`.
- `ImageText.variant` passou a aceitar `image-left` e `image-right`.
- Valores legados de `ImageText.imagePosition` continuam aceitos pelo renderer.
- `CTA.variant` passou a aceitar `default`, `brand` e `compact`.
- Valores legados de `CTA.variant` continuam aceitos pelo renderer: `primary` vira `brand` e `secondary` vira `default`.
- Variantes desconhecidas caem em `default`, exceto `ImageText`, que cai em `image-left`.
- Em mobile, `Hero split` empilha texto e imagem; `ImageText` mantem a imagem antes do texto. A inversao `image-right` ocorre a partir de `lg`.
- `Cards` permaneceu sem variantes para evitar criar opcao apenas estetica.

### Escopo nao implementado nesta spec

- Novos Blocks.
- Variante `featured` de Cards.
- CSS livre, classes editaveis ou layout arbitrario pelo CMS.
- Redesign visual completo dos Blocks.

## SPEC-016 - Visual Pass dos Blocks

A SPEC-016 revisa visualmente os Blocks existentes usando os tokens, primitives e variantes consolidados nas specs anteriores.

### Decisoes registradas

- `Hero` passou a tratar `split` sem imagem como layout textual, evitando grid vazio.
- Titulo e descricoes longas receberam quebra e balanceamento de texto onde ha maior risco visual.
- Imagens de `Hero` e `ImageText` usam proporcao consistente, borda semantica e `object-cover`.
- `RichText` ganhou estilos globais previsiveis para headings, listas, links, blockquotes, imagens e tabelas.
- `ImageText` mantem ordem mobile imagem antes do texto; a inversao `image-right` continua restrita ao desktop `lg`.
- `Cards` usa cards de altura natural, com altura cheia no grid e link alinhado ao fim quando houver conteudo irregular.
- `Card` ganhou opcoes fechadas de padding, altura cheia e estado interativo para evitar classes arbitrarias nos Blocks.
- `CTA` passou a usar densidade visual por variante: `brand` e `default` mais destacados, `compact` mais contida.

### Escopo nao implementado nesta spec

- Novos campos de CTA secundario.
- Novos Blocks.
- Variante visual adicional para Cards.
- Animacoes ou motion system.
- Ajustes visuais por pagina.

## SPEC-017 - CMS Editing UX

A SPEC-017 melhora a experiencia de edicao no Payload sem alterar a arquitetura fundamental do CMS.

### Decisoes registradas

- `Pages` ganhou textos de ajuda para titulo, endereco da pagina, blocos de conteudo e SEO.
- A listagem de `Pages` continua usando `title`, `slug`, `_status` e `updatedAt`; preview continua apontando para `/api/draft`.
- `Media` passou a orientar o uso de texto alternativo e legenda.
- `Header` e `Footer` receberam descricoes editoriais para navegacao, logo, contatos e links institucionais.
- `SiteSettings` recebeu descricoes para prazo, links oficiais, SEO padrao e cores institucionais.
- `Branding` foi renomeado visualmente para `Cores institucionais` e deixa claro que o CMS nao aceita CSS livre.
- Campos de link passaram a usar labels editoriais: `Texto do link`, `Destino do link`, `Pagina interna` e `URL externa`.
- Variantes dos Blocks passaram a usar labels orientados ao editor, como `Modelo de apresentacao`, `Modelo de leitura`, `Posicao da imagem no desktop` e `Modelo de chamada`.
- `Hero.image` permanece condicionado ao modelo `split`.
- `Cards` continua sem variante, evitando flexibilidade visual perigosa.

### Checkpoint final do ciclo

- Tokens: existe fonte unica em `src/styles/tokens.css`; cores semanticas estao centralizadas; nao ha hex espalhado em Blocks/componentes.
- Theme: branding pode ser alterado pelo CMS, possui fallback e nao controla CSS arbitrario.
- Primitives: `Container`, `Section`, tipografia, `Button` e `Card` estao centralizados.
- Blocks: usam primitives, tokens, variantes controladas quando existem, conteudo real e comportamento mobile.
- CMS: criar Page, escolher variante, editar branding e usar Preview permanecem compreensiveis no schema.

### Perguntas obrigatorias de revisao

- Uma mudanca de `primaryColor` exige editar componentes? Nao.
- O ADM consegue escolher uma cor aleatoria para cada Card? Nao.
- O ADM consegue escolher entre layouts de Hero previamente aprovados? Sim.
- Um novo Block precisa inventar seu proprio botao? Nao.
- Um novo Block precisa inventar seu proprio container? Nao.
- Os Blocks continuam funcionais sem configuracao de Theme? Sim, por meio dos defaults.
- Alterar a identidade visual exige reescrever todas as paginas? Nao.

### Escopo nao implementado nesta spec

- Editor drag-and-drop customizado.
- Page builder completo.
- Edicao inline do frontend.
- Live Preview avancado.
- Multiplos temas por pagina.
- CSS customizado.
- Permissoes complexas por campo.
- Regras de dominio especificas do portal.

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
