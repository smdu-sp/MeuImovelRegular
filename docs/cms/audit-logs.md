# SPEC-038 - Content audit logs

Esta nota registra a camada inicial de auditoria editorial do CMS.

## Escopo implementado

A auditoria comeca por `Pages`, conforme a SPEC-038. Globals, Media e Theme ficam para avaliacao futura.

Eventos registrados:

- `create`
- `update`
- `publish`
- `unpublish`
- `deactivate`
- `reactivate`

## Collection

`src/collections/AuditLogs.ts` define a collection `audit-logs`.

| Campo | Uso |
|---|---|
| `timestamp` | Data/hora do evento. |
| `actor` | Relacionamento opcional com `users`. |
| `actorEmail` | E-mail do usuario no momento do evento. |
| `action` | Acao editorial registrada. |
| `collection` | Collection afetada, inicialmente `pages`. |
| `documentId` | ID do documento afetado. |
| `documentTitle` | Titulo da Page no momento do evento. |
| `version` | Status editorial observado no momento do evento. |
| `changedFields` | Lista resumida de campos alterados quando comparacao e possivel. |

O AuditLog nao duplica snapshots completos. Payload Versions continua sendo a fonte do estado historico do documento; AuditLog registra o evento.

## Acesso e imutabilidade

- Admin pode consultar logs.
- Editor nao acessa logs.
- Nenhum usuario cria, edita ou apaga logs manualmente pelo fluxo comum.
- Hooks internos criam logs com `overrideAccess: true`.

## Hook de Pages

`src/lib/audit/page-audit.ts` registra logs por `afterChange` de `Pages`.

A regra de acao e:

```text
create -> create
lifecycle active -> inactive -> deactivate
lifecycle inactive -> active -> reactivate
draft/unpublished -> published -> publish
published -> draft/unpublished -> unpublish
demais updates -> update
```

## Impacto em dados persistidos

Esta SPEC adiciona a collection `audit-logs`; nao ha rename, remocao, mudanca de tipo ou mudanca de relationship em dados existentes.

Nenhuma migration destrutiva e necessaria. Quando o ambiente permitir, execute `payload generate:types` para atualizar `src/payload-types.ts` com a nova collection.

## Limites

- Nenhuma auditoria de Globals, Media ou Theme foi adicionada.
- Nenhuma tela customizada foi criada; a listagem padrao do Payload Admin e usada com colunas `timestamp`, `actorEmail`, `action` e `documentTitle`.
- `deactivate` e `reactivate` cobrem apenas Pages enquanto a auditoria de outras collections nao for priorizada.
