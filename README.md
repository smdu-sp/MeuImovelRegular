# Meu Imovel Regular

Portal institucional em Next.js e Payload CMS para informar, orientar, fazer triagem preliminar e encaminhar usuarios aos servicos oficiais relacionados a regularizacao imobiliaria.

O projeto evolui por specs incrementais. A fonte canonica das specs esta em [docs/specs/README.md](./docs/specs/README.md).

## Responsabilidade Do Portal

O sistema:

- informa;
- orienta;
- realiza triagem preliminar;
- encaminha para servicos oficiais.

O sistema nao:

- cria protocolo administrativo;
- substitui o Portal de Licenciamento;
- declara oficialmente que um imovel esta regular;
- garante deferimento;
- produz interpretacao juridica definitiva.

## Stack

- Next.js com App Router em `src/app`;
- Payload CMS integrado na mesma aplicacao;
- TypeScript;
- SQLite para bootstrap local do Payload;
- Tailwind CSS com tokens centralizados;
- testes com `node --test` e `tsx`.

## Organizacao Das Specs

As specs foram separadas por dominio funcional:

```text
docs/specs/
  00-project/
  01-cms-core/
  02-domain/
  03-design-system/
  04-cms-foundation-ii/
```

Use [docs/specs/README.md](./docs/specs/README.md) para navegar pela lista completa de `SPEC-000` a `SPEC-029`.

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

Componentes React nao devem conter regras centrais de elegibilidade. Sistemas externos devem possuir adapters ou clients proprios em `src/lib/`.

## Comandos

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run seed:editorial
```

No ambiente Windows atual, `npm` via PowerShell pode ser bloqueado por Execution Policy. Use `npm.cmd`.

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

Essa regra evita transformar o Payload em page builder generico e impede que o frontend acumule regra de negocio.

## Conteudo Institucional

Nao codifique diretamente em componentes valores sujeitos a alteracao, incluindo:

- datas;
- taxas;
- valores;
- links oficiais;
- contatos;
- parametros legais;
- documentos oficiais.

A interface institucional nao deve usar o termo "anistia".

## Checklist Antes De Producao

Antes de considerar publicacao, revisar explicitamente itens sujeitos a confirmacao oficial:

- prazo;
- decreto;
- taxas;
- ISS;
- limites;
- isencoes;
- Outorga;
- CEDI;
- URLs oficiais;
- atendimento presencial;
- Libras.
