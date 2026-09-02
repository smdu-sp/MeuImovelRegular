# SPEC-039 - Content lifecycle

Esta nota registra o ciclo de vida editorial independente do status de draft/publicacao do Payload.

## Estado

`Pages` possui o campo `lifecycleStatus`:

```text
active
inactive
```

Esse estado nao substitui `_status`. `_status` continua controlando `draft` e `published`; `lifecycleStatus` controla se a Page pode aparecer publicamente.

## Comportamento publico

```text
active + published
-> publico

active + draft
-> nao publico

inactive
-> nunca publico
```

As consultas publicas em `src/lib/payload/get-page.ts` exigem `lifecycleStatus = active`. O sitemap usa o mesmo filtro.

## Navegacao

Links internos para Pages inativas nao sao resolvidos por `src/lib/navigation/resolve-link.ts`. Assim, Header, Footer ou Blocks que recebam uma Page populada como relacionamento nao geram href para conteudo inativo.

Se uma relacao ainda apontar para Page inativa, o renderizador deve falhar fechado: nao exibir link quebrado e nao quebrar a pagina.

## Permissoes

- Admin e Editor podem desativar e reativar Pages alterando `lifecycleStatus`.
- Editor continua podendo criar, editar, publicar e despublicar Pages.
- Admin pode fazer hard delete de Pages quando a exclusao destrutiva for necessaria.
- Editor nao pode fazer hard delete de Pages; a alternativa editorial e desativar.

## Auditoria

Mudancas em `lifecycleStatus` geram AuditLog:

- `active` -> `inactive`: `deactivate`
- `inactive` -> `active`: `reactivate`

O historico do conteudo permanece preservado pelo documento e por Payload Versions; AuditLog registra o evento.

## Impacto em dados persistidos

Mudanca de schema: novo field obrigatorio `lifecycleStatus` com default seguro `active`.

Nao ha rename, remocao, mudanca de tipo ou mudanca de relationship. Nenhuma migration destrutiva e necessaria. Bases existentes devem ser auditadas antes de producao para confirmar o default em documentos antigos.

Quando o ambiente permitir, execute `payload generate:types` para atualizar `src/payload-types.ts`.
