# SPEC-030 - Unpublish workflow

Esta nota registra a investigacao e a correcao do fluxo de Unpublish em Pages.

## Reproducao esperada

```text
estado inicial: Page ativa e publicada
acao realizada: Unpublish no Payload Admin
resultado esperado: Page deixa de ser publica, mas o draft permanece acessivel por Preview autenticado
resultado obtido investigado: a query publica precisava ter contrato explicito para excluir documentos nao publicados, e a revalidacao precisava cobrir mudancas de publicacao e slug
```

## Camada responsavel

- `versions.drafts`: permanece habilitado em `Pages`.
- `_status`: continua sendo a fonte do estado `draft` / `published`.
- Query publica: `buildPageLookupWhere` exige `_status = published` quando `draft` e falso.
- Preview autenticado: `buildPageLookupWhere` nao exige `_status = published` quando `draft` e verdadeiro.
- Cache: hooks de Pages revalidam os slugs atual e anterior apos mudancas.
- Frontend: rotas continuam usando `getPage(slug, { draft })`.
- Admin UX: edicao em massa e selecao por checkbox em Pages foram desativadas; o usuario deve abrir cada Page para editar o documento.

## Decisoes

- A correcao ficou na query compartilhada de Pages e no hook centralizado de revalidacao.
- A lista de Pages foi simplificada para evitar acoes de edicao em massa e selecao por checkbox.
- Nenhuma regra nova de lifecycle foi criada nesta SPEC.
- Nenhum schema, collection ou field novo foi adicionado.

## Teste de regressao

`src/lib/payload/unpublish-workflow.test.ts` cobre:

- lookup publico restrito a Page ativa e publicada;
- lookup de Preview autenticado mantendo acesso a drafts;
- revalidacao do slug atual e anterior;
- deduplicacao quando Unpublish mantem o mesmo slug.

## Validacao

Execute:

```text
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
node --import tsx --test src/lib/payload/unpublish-workflow.test.ts
```
