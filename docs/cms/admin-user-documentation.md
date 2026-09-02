# SPEC-040 - Admin user documentation

Esta nota registra a documentacao de uso criada para Editor e Admin.

## Acesso pelo Admin

A ajuda esta disponivel em:

```text
/admin/ajuda
```

A view customizada e registrada em `src/payload.config.ts` e renderizada por `src/components/admin/AdminHelpPage.tsx`.
O link `Ajuda` aparece no menu lateral do Admin via `admin.components.afterNavLinks`.

## Conteudo coberto

A documentacao interna cobre:

- Introducao / primeiros passos;
- Criando uma pagina;
- Entendendo Blocks;
- Adicionando imagens;
- Links internos e externos;
- Estilos disponiveis;
- Draft;
- Preview;
- Publish;
- Unpublish;
- Desativacao;
- SEO;
- Boas praticas.

## Publico

O texto foi escrito para Editor e Admin. Ele evita vocabulario de implementacao e orienta o uso editorial do CMS.

## Blocks documentados

Cada Block possui:

- nome;
- finalidade;
- campos principais;
- quando usar;
- quando nao usar.

Blocks cobertos:

- Destaque principal;
- Texto editorial;
- Midia e texto / imagem de destaque;
- Cards e grades de beneficios;
- Chamada para acao;
- Grade de icones e informacoes;
- Perguntas frequentes;
- Caixa de aviso;
- Faixas de acao.

## Fonte do conteudo

`src/admin/help-content.ts` centraliza os textos da ajuda para manter a pagina do Admin testavel e evitar duplicacao espalhada.

## Limites

- Nenhuma permissao nova foi criada.
- Nenhuma collection de documentacao foi adicionada.
- Nenhum treinamento tecnico ou documentacao para desenvolvedor foi incluido na tela do Admin.
