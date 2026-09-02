# Base CMS Editorial

Base em Next.js e Payload CMS para criar portais editoriais administraveis, com Pages, Blocks, Media, navegacao, preview, publicacao, permissoes, auditoria e documentacao de uso no Admin.

Este repositorio deve servir como fundacao reutilizavel de CMS. Regras, textos, links oficiais, identidade visual e conteudos especificos de um projeto devem ser tratados como configuracao, seed, spec de dominio ou extensao propria, nao como premissa fixa da base.

A fonte canonica das specs esta em [docs/specs/README.md](./docs/specs/README.md).

## Objetivo Da Base

A base fornece:

- estrutura editorial com Payload CMS;
- composicao de paginas por Blocks controlados;
- rotas publicas geradas a partir de slugs do CMS;
- drafts, preview, live preview, publish e unpublish;
- biblioteca de midia com metadados editoriais;
- SEO editorial;
- navegacao configuravel;
- roles, permissoes e logs de auditoria;
- padrao de evolucao por specs.

A base nao deve:

- codificar conteudo institucional definitivo;
- acoplar regras de negocio de um dominio especifico aos componentes React;
- transformar o CMS em page builder irrestrito;
- armazenar CSS, SVG ou valores arbitrarios quando presets controlados resolvem;
- antecipar collections, blocks ou integracoes que nao tenham spec aprovada.

## Stack

- Next.js com App Router em `src/app`;
- Payload CMS integrado na mesma aplicacao;
- TypeScript;
- SQLite para bootstrap local do Payload;
- Tailwind CSS com tokens centralizados;
- testes com `node --test` e `tsx`.

## Arquitetura

```text
CMS
-> conteudo configuravel

src/domain/
-> regras puras de negocio

src/lib/
-> integracoes e infraestrutura

src/components/
-> apresentacao

src/app/
-> composicao e rotas
```

Componentes React nao devem conter regras centrais de negocio ou elegibilidade. Sistemas externos devem possuir adapters ou clients proprios em `src/lib/`.

## Organizacao Das Specs

As specs ficam separadas por dominio funcional:

```text
docs/specs/
  00-project/
  01-cms-core/
  02-domain/
  03-design-system/
  04-cms-foundation-ii/
  05-cms-maturity-governance/
```

Use [docs/specs/README.md](./docs/specs/README.md) para navegar pela lista completa e [docs/specs/modelo-de-spec.md](./docs/specs/modelo-de-spec.md) como modelo para novas specs.

## Ordem De Trabalho

Cada spec e uma unidade de trabalho independente. Antes de implementar uma spec:

1. Leia o indice em [docs/specs/README.md](./docs/specs/README.md).
2. Leia a spec autorizada inteira.
3. Inspecione o estado atual do projeto.
4. Liste os arquivos que pretende alterar.
5. Implemente somente o escopo da spec.
6. Execute as validacoes aplicaveis.
7. Registre decisoes, desvios e o que nao foi implementado.

Nao antecipe funcionalidades de specs posteriores.

## Comandos

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run seed:editorial
```

No ambiente Windows, `npm` via PowerShell pode ser bloqueado por Execution Policy. Use `npm.cmd`.

Tambem ha uma falha ambiental conhecida do `tsx`/Node em `os.userInfo()` neste ambiente. Quando o script normal de testes falhar antes das assertions, a suite pode ser validada com:

```bash
node --import "data:text/javascript,import os from 'node:os'; os.userInfo = () => ({ username: 'x572704' });" --import tsx --test src/**/*.test.ts
```

## Rotas Locais

- Frontend: `http://localhost:3000`
- Payload Admin: `http://localhost:3000/admin`

## Definition Of Done

Uma spec so deve ser considerada concluida quando:

- o codigo corresponde ao escopo;
- nenhuma funcionalidade da proxima spec foi introduzida;
- lint passa;
- typecheck passa;
- testes aplicaveis passam;
- build passa quando aplicavel;
- fluxo relevante foi validado localmente ou a pendencia foi registrada;
- decisoes nao previstas foram documentadas;
- o que nao foi implementado foi declarado.

## Principio De Evolucao

Ao surgir uma necessidade nova, classifique nesta ordem:

| Pergunta | Implementacao preferencial |
|---|---|
| E conteudo? | Campo no CMS. |
| E uma variacao visual conhecida? | Variante de Block. |
| E um novo padrao visual? | Novo Block. |
| E regra de negocio? | `src/domain/`. |
| E integracao? | `src/lib/`. |
| E apenas composicao? | `src/app/` ou componente. |

Essa regra preserva a base como CMS editorial controlado e impede que o frontend acumule regra de negocio.

## Conteudo E Configuracao

Nao codifique diretamente em componentes valores sujeitos a alteracao, incluindo:

- datas;
- taxas;
- valores;
- links oficiais;
- contatos;
- parametros legais;
- documentos oficiais;
- identidade visual especifica de um cliente ou programa.

Esses valores devem entrar por CMS, globals, seed revisavel, variaveis de ambiente ou spec de dominio.

## Reuso Em Novos Projetos

Para adaptar esta base:

1. Defina o dominio do novo portal em specs proprias.
2. Revise seeds, globals, textos editoriais e identidade visual.
3. Mantenha regras de negocio fora de React.
4. Use adapters em `src/lib/` para sistemas externos.
5. Atualize este README apenas com informacoes da base; documentacao especifica do projeto deve ficar em `docs/` ou nas specs correspondentes.
