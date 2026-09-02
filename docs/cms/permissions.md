# SPEC-037 - Matriz de permissoes

Esta matriz formaliza o modelo inicial de acesso do CMS:

```text
Admin
Editor
```

O controle deve valer no Payload Admin, nas APIs do Payload e na Local API quando chamada com `overrideAccess: false`. Esconder controles na interface nao substitui access control.

## Decisoes

- Admin administra areas sensiveis, usuarios, configuracoes do site e logs.
- Editor cria, edita, publica e despublica Pages.
- Editor gerencia Media, Header e Footer por serem superficies editoriais.
- Editor nao acessa Users, Logs nem configuracoes de Theme/SiteSettings.
- Hard delete de Pages fica bloqueado no fluxo normal.
- Admin pode desativar e reativar Pages por `lifecycleStatus`.
- Editor nao pode desativar ou reativar Pages.

## Matriz

| Recurso | Admin | Editor | Implementacao |
|---|---:|---:|---|
| Pages - visualizar no Admin/API | sim | sim | `publishedOrLoggedIn` retorna acesso total para usuarios autenticados com role editorial. |
| Pages - criar | sim | sim | `editorOrAdmin`. |
| Pages - editar rascunho/conteudo | sim | sim | `pagePublisherOrAdmin`, equivalente a Admin ou Editor neste ciclo. |
| Pages - publicar | sim | sim | Publicacao usa update do Payload; decisao explicita: Editor pode publicar. |
| Pages - despublicar | sim | sim | Unpublish usa update do Payload; decisao explicita: Editor pode despublicar. |
| Pages - hard delete | nao | nao | `denyAll`; exclusao destrutiva nao faz parte do fluxo editorial normal. |
| Pages - desativar/reativar | sim | nao | Campo `lifecycleStatus` usa `pageLifecycleAdminOnly`. |
| Media - visualizar | sim | sim | `read` publico; Admin e Editor tambem acessam no Admin. |
| Media - criar | sim | sim | `editorOrAdmin`. |
| Media - editar | sim | sim | `editorOrAdmin`. |
| Media - excluir | sim | nao | `adminOnly`. |
| Header | sim | sim | `read` publico e `update` por `adminOrEditor`. |
| Footer | sim | sim | `read` publico e `update` por `adminOrEditor`. |
| Theme / SiteSettings | sim | nao | `read` publico e `update` por `adminOnly`. |
| Users | sim | nao | Collection `users` usa `adminOnly` para create/read/update/delete. |
| Users.role | sim | nao | Campo `role` usa `adminFieldOnly` em create/update. |
| Logs | sim | nao | Collection `audit-logs` usa `auditLogsAdminOnly` para leitura e bloqueia create/update/delete manual. |

## Auditoria do estado atual

| Area | Resultado |
|---|---|
| Collections | `users`, `media`, `pages` e `audit-logs` possuem access functions centralizadas em `src/access/roles.ts`. |
| Globals | `header`, `footer` e `site-settings` possuem access functions centralizadas. |
| Admin UI | O Payload calcula permissoes a partir das mesmas access functions; componentes escondidos nao sao a camada de seguranca. |
| Local API | Chamadas precisam usar `overrideAccess: false` quando o contexto deve respeitar permissoes do usuario. |
| REST/GraphQL | Rotas do Payload usam a mesma configuracao de access das collections/globals. |

## Impacto em dados persistidos

Nao ha mudanca de schema nesta SPEC. Nenhuma migration e necessaria.

Mudanca de comportamento:

- O fluxo normal nao permite hard delete em Pages.
- Editor continua podendo criar, editar, publicar e despublicar Pages.
- Editor nao altera `lifecycleStatus`.
- Usuarios sem `role` continuam tratados como Admin legado para compatibilidade com bases existentes, conforme registrado na SPEC-028.

## Testes

`src/access/roles.test.ts` valida:

- reconhecimento de roles;
- helpers centralizados;
- permissao de Editor para conteudo editorial;
- bloqueio de Editor em Users, SiteSettings, Logs e hard delete de Pages;
- matriz aplicada nas Collections e Globals;
- semantica esperada para Local API com `overrideAccess: false`.
