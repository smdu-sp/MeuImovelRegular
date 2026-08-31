# SPEC-018 - Auditoria de conteudo e componentes

Esta auditoria reconcilia o catalogo visual de `docs/specs/04-cms-foundation-ii/arquitetura-componentes-nextjs.md` com os Blocks, variants, primitives e Globals existentes no projeto. A SPEC-018 nao implementa novos componentes; ela define decisoes e backlog para a SPEC-019.

## Inventario atual

| Block atual | Schema | Component | Variants | Uso |
|---|---|---|---|---|
| Hero | `src/blocks/Hero/config.ts` | `src/blocks/Hero/Component.tsx` | `default`, `centered`, `split` | Abertura editorial de pagina, com imagem opcional e acao principal. |
| RichText | `src/blocks/RichText/config.ts` | `src/blocks/RichText/Component.tsx` | `default`, `narrow` | Texto editorial com Lexical. |
| ImageText | `src/blocks/ImageText/config.ts` | `src/blocks/ImageText/Component.tsx` | `image-left`, `image-right` | Composicao de midia e texto em duas colunas. |
| Cards | `src/blocks/Cards/config.ts` | `src/blocks/Cards/Component.tsx` | Sem variant | Grade de itens com icone, titulo, descricao e link opcional. |
| CTA | `src/blocks/CTA/config.ts` | `src/blocks/CTA/Component.tsx` | `default`, `brand`, `compact` | Chamada de acao pontual ou final. |

O catalogo detalhado esta em `docs/cms/block-catalog.md`.

## Matriz de reconciliacao

| Padrao | Correspondente atual | Decisao | Justificativa |
|---|---|---|---|
| Global Header | `Header` Global e layout | global | O cabecalho ja tem schema proprio para logo e navegacao. Nao deve entrar no campo `layout` de paginas. |
| Global Footer | `Footer` Global e layout | global | O rodape ja concentra contatos, atendimento e links institucionais configuraveis. Nao deve virar Page Block. |
| Hero Countdown | `Hero` + `SiteSettings.deadline` | new-block | O Hero existente cobre abertura editorial, mas nao expressa contador, prazo, logo programatico ou estado temporal. O prazo ja existe como Global e deve ser consumido por um Block especializado no futuro. |
| Rich Text | `RichText` | reuse | O Block atual cobre o padrao de texto corrido e ja possui variant de largura de leitura. |
| Modalities Cards | `Cards` | variant | O schema de Cards cobre titulo, descricao, icone e link, mas modalidades podem exigir tratamento editorial e visual especifico. Melhor evoluir por variant antes de duplicar schema. |
| Action Banners | `CTA` e `Cards` parcialmente | new-block | O padrao descreve um conjunto reordenavel de faixas de acao com tons distintos. Um unico CTA nao cobre lista; Cards cobre lista, mas nao a semantica de faixa acionavel. |
| Benefits Grid | `Cards` parcialmente | evolve | Pode ser representado por Cards quando cada beneficio for item simples. Se a composicao exigir colunas com listas internas, o schema de Cards precisa evoluir ou receber variant. |
| FAQ / Accordion | Nenhum | new-block | Perguntas e respostas exigem schema proprio, comportamento expansivel e semantica acessivel. RichText nao preserva a estrutura editorial. |
| Info Cards / Step-by-Step | `Cards` parcialmente | evolve | Info cards simples podem reutilizar Cards. Passo a passo precisa expressar ordem, numeracao e possivelmente estado, entao deve ser tratado como evolucao ou Block dedicado. |
| Alert Box | Nenhum | new-block | Avisos precisam de tom editorial, titulo opcional, conteudo e possivel link. Usar Card generico perderia a semantica de alerta. |
| Media Highlight | `ImageText` parcialmente | new-block | ImageText cobre midia acompanhada de texto, mas o padrao de destaque de midia e mais media-first, com legenda ou enquadramento proprio. |
| Icon Grid | `Cards` parcialmente | new-block | Cards e mais narrativo; o padrao de grade compacta de icones aparece de forma recorrente nas modalidades e merece schema enxuto. |
| Media & Text | `ImageText` | reuse | O Block atual cobre alinhamento da midia, rich text e acao complementar. |
| CTA final | `CTA` | reuse | O CTA atual ja possui variants para chamada final institucional, destaque e formato compacto. |

## Validacao das composicoes de referencia

| Composicao | Padroes esperados | Cobertura atual | Lacunas para SPEC-019 |
|---|---|---|---|
| Pagina inicial | Hero Countdown, Rich Text, Modalities Cards, Action Banners | RichText ja cobre texto; Cards cobre a base de modalidades; Hero cobre abertura sem contador; CTA cobre chamada isolada. | Criar Hero Countdown; criar Action Banners; avaliar variant de Cards para modalidades. |
| Paginas informativas | Media Highlight, Benefits Grid, FAQ / Accordion, Info Cards / Step-by-Step, Alert Box | ImageText e Cards cobrem parte das composicoes; RichText cobre textos de apoio. | Criar FAQ / Accordion e Alert Box; decidir entre evoluir Cards ou criar Steps; criar Media Highlight se a midia for protagonista. |
| Paginas de modalidades | Icon Grid, Media & Text, CTA final | ImageText cobre Media & Text; CTA cobre chamada final. | Criar Icon Grid; ajustar Cards/Steps apenas se houver necessidade editorial comprovada. |

## Checagem de duplicacao semantica

| Candidato | Conteudo diferente ou aparencia? | Block existente representa a intencao? | Variant resolve? | ADM deve reordenar? | Nome editorial recomendado |
|---|---|---|---|---|---|
| Hero Countdown | Conteudo e comportamento diferentes | Hero representa apenas abertura editorial | Nao, porque contador e prazo mudam o schema | Sim, como abertura de pagina | `heroCountdown` |
| Action Banners | Conteudo acionavel em lista | CTA cobre item unico; Cards cobre lista generica | Nao sem confundir Cards/CTA | Sim | `actionBanners` |
| Benefits Grid | Pode ser aparencia quando itens forem simples | Cards cobre parte da intencao | Sim, se nao houver listas internas por coluna | Sim | `cards` com evolucao controlada |
| FAQ / Accordion | Conteudo estruturalmente diferente | Nenhum | Nao | Sim | `faqAccordion` |
| Info Cards / Step-by-Step | Misto: info card e aparencia; steps e semantica | Cards cobre info card simples | Sim para info cards; nao para steps ricos | Sim | `steps` se houver fluxo ordenado |
| Alert Box | Conteudo de aviso com tom proprio | Nenhum | Nao | Sim | `alertBox` |
| Media Highlight | Intencao media-first | ImageText cobre parte, mas nao destaque isolado | Nao, se houver legenda/enfase propria | Sim | `mediaHighlight` |
| Icon Grid | Conteudo compacto recorrente | Cards e excessivo para listas curtas com icones | Nao sem inflar Cards | Sim | `iconGrid` |

## Backlog proposto para SPEC-019

### REUSE

| Padrao | Implementacao atual | Observacao |
|---|---|---|
| Rich Text | `RichText` | Manter como Block editorial universal. |
| Media & Text | `ImageText` | Reusar variants `image-left` e `image-right`. |
| CTA final | `CTA` | Usar `brand` ou `default` conforme composicao. |

### EVOLVE

| Padrao | Caminho proposto | Motivo |
|---|---|---|
| Benefits Grid | Evoluir `Cards` somente se precisar de colunas com listas internas. | Evita novo Block quando a grade for apenas lista de beneficios simples. |
| Info Cards / Step-by-Step | Reusar `Cards` para info cards; considerar `steps` quando houver fluxo ordenado. | Separa cartao informativo de instrucao sequencial. |

### VARIANT

| Padrao | Variant proposta | Motivo |
|---|---|---|
| Modalities Cards | `cards` com variant editorial de modalidades | Mantem o schema de lista, mas permite apresentacao especifica para modalidades. |

### NEW BLOCK

| Nome tecnico | Label editorial | Campos minimos | Variants iniciais | Paginas onde aparece | Prioridade |
|---|---|---|---|---|---|
| `heroCountdown` | Abertura com prazo | titulo, resumo, imagem de fundo opcional, logo opcional, acao principal, referencia ao prazo institucional | `default`, `centered` | Pagina inicial | Alta |
| `actionBanners` | Faixas de acao | itens com titulo, descricao opcional, link e tom editorial | `stacked`, `grid` | Pagina inicial | Alta |
| `faqAccordion` | Perguntas frequentes | itens com pergunta e resposta rich text | `default`, `compact` | Paginas informativas | Alta |
| `alertBox` | Aviso editorial | titulo opcional, conteudo rich text, tom, link opcional | `info`, `warning` | Paginas informativas | Alta |
| `mediaHighlight` | Destaque de midia | titulo opcional, descricao opcional, midia, legenda opcional, link opcional | `media-first`, `contained` | Paginas informativas | Media |
| `iconGrid` | Grade de icones | titulo da secao, descricao opcional, itens com icone, texto e link opcional | `default`, `compact` | Paginas de modalidades | Alta |
| `steps` | Passo a passo | titulo da secao, descricao opcional, passos com titulo, descricao e link opcional | `numbered`, `cards` | Paginas informativas | Media |

### REJECT

Nenhum padrao foi rejeitado nesta auditoria. Os casos sem implementacao atual foram classificados como evolucao, variant ou novo Block porque aparecem no catalogo de referencia e possuem intencao editorial reconhecivel.

## Decisoes e limites da SPEC-018

- Header e Footer ficam classificados como Globals estruturais.
- RichText, ImageText, CTA e Cards foram avaliados antes de qualquer duplicacao.
- O prazo institucional existente em `SiteSettings` deve ser preferido a campos soltos de data em Blocks futuros.
- Nenhum Block, schema, seed, layout, regra juridica ou componente visual foi implementado nesta spec.
