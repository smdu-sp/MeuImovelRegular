# Meu Imóvel Regular — Índice de Specs

> **Objetivo:** orientar a implementação incremental do portal Meu Imóvel Regular, executando uma Spec por vez, com validação automática, execução local, revisão humana e aceite explícito.

## Como usar este conjunto

Cada arquivo `spec-*.md` é uma unidade de trabalho independente para o agente executor. O agente deve ler primeiro este índice e, em seguida, somente a Spec autorizada. Não deve antecipar funcionalidades de Specs posteriores, remodelar a arquitetura sem autorização, adicionar bibliotecas sem justificativa ou substituir integrações oficiais por bases locais fictícias.

Uma Spec só pode ser considerada concluída quando tiver sido implementada, testada, executada localmente, revisada manualmente e aceita. A seção **Definition of Done** abaixo é obrigatória para todas as Specs.

## Ordem de execução

| Ordem | Arquivo | Resultado observável |
|---:|---|---|
| 1 | [spec-000-project-guardrails.md](./spec-000-project-guardrails.md) | Arquitetura e limites documentados. |
| 2 | [spec-001-payload-foundation.md](./spec-001-payload-foundation.md) | Frontend e `/admin` funcionam. |
| 3 | [spec-002-cms-content-model.md](./spec-002-cms-content-model.md) | Modelo editorial administrável. |
| 4 | [spec-003-page-blocks.md](./spec-003-page-blocks.md) | Página composta por Blocks. |
| 5 | [spec-004-cms-routing.md](./spec-004-cms-routing.md) | Slug do CMS gera rota real. |
| 6 | [spec-005-drafts-preview-publishing.md](./spec-005-drafts-preview-publishing.md) | Draft, Preview e publicação separados. |
| 7 | [spec-006-editorial-baseline.md](./spec-006-editorial-baseline.md) | Primeiro CMS MVP. |
| 8 | [spec-007-domain-eligibility.md](./spec-007-domain-eligibility.md) | Triagem de domínio testável sem React. |
| 9 | [spec-008-cadi-situation-integration.md](./spec-008-cadi-situation-integration.md) | `/situacao` desacoplada do CEDI. |
| 10 | [spec-009-documents-and-outorga.md](./spec-009-documents-and-outorga.md) | Cartilha e cálculo parametrizável. |
| 11 | [spec-010-production-hardening.md](./spec-010-production-hardening.md) | Candidato a produção com hardening. |

## Definition of Done global

Uma Spec só pode receber status **ACCEPTED** quando:

- [ ] o código corresponde ao escopo;
- [ ] nenhuma funcionalidade da próxima Spec foi introduzida;
- [ ] lint passa;
- [ ] typecheck passa;
- [ ] os testes da Spec passam;
- [ ] a aplicação inicia;
- [ ] o fluxo foi testado manualmente;
- [ ] não existem secrets no repositório;
- [ ] decisões não previstas foram documentadas;
- [ ] foi feita revisão humana.

## Formato de resposta do agente executor

Ao finalizar uma Spec, o agente deve responder usando esta estrutura:

```markdown
## Implementação

### Arquivos criados
...

### Arquivos modificados
...

### Decisões
...

### Testes executados
...

### Resultado dos testes
...

### Desvios da Spec
Nenhum.

### Riscos ou dúvidas
...

### O que NÃO foi implementado
...
```

A seção **O que NÃO foi implementado** é obrigatória para detectar antecipação indevida de escopo.

## Checkpoints arquiteturais

Após a **SPEC-003**, interrompa o desenvolvimento e avalie se o modelo `Page → Blocks → componentes React` possui flexibilidade suficiente, se não está permissivo demais, se algum Block assumiu responsabilidades excessivas, se há conteúdo variável hardcoded e se o Design System continua sob controle do frontend.

Após a **SPEC-006**, avalie o CMS MVP completo: criação e edição de páginas por administradores, controle do layout, alteração de prazo e menu sem deploy, separação entre draft e publicado e capacidade de representar as páginas institucionais com os Blocks disponíveis. Se o CMS estiver saudável, congele temporariamente o modelo e avance para o domínio.

## Princípio de evolução

Ao surgir uma necessidade nova, classifique-a nesta ordem:

| Pergunta | Implementação preferencial |
|---|---|
| É conteúdo? | Campo no CMS. |
| É uma variação visual conhecida? | Variante de Block. |
| É um novo padrão visual? | Novo Block. |
| É regra de negócio? | `domain/`. |
| É integração? | `lib/`. |
| É apenas composição? | `app/` ou componente. |

## Documento-fonte

Este conjunto foi gerado a partir do plano de implementação fornecido pelo usuário: `PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md`.

Construir incrementalmente uma base funcional do portal **Meu Imóvel Regular** usando:

- Next.js com App Router;
- PayloadCMS integrado à aplicação;
- TypeScript;
- conteúdo editorial administrável;
- páginas construídas por blocos controlados;
- regras de domínio isoladas da apresentação;
- integrações externas encapsuladas;
- testes automatizados;
- acessibilidade e rastreabilidade como requisitos estruturais.

O desenvolvimento deve ocorrer **uma Spec por vez**.

Nenhuma Spec seguinte deve ser iniciada antes da anterior ser:

1. implementada;
2. testada;
3. executada localmente;
4. revisada manualmente;
5. aceita.

## Seções gerais preservadas do plano original

## Objetivo

Avaliar se o sistema pode evoluir de MVP técnico para candidato a produção.

---

## Acessibilidade

Revisar:

- headings;
- landmarks;
- keyboard navigation;
- focus;
- labels;
- erros de formulário;
- alt text;
- contraste;
- leitores de tela.

---

## Performance

Avaliar:

```text
Server Components
imagens
cache
scripts externos
fontes
bundle client-side
```

---

## Integrações

Todo client externo deve possuir:

```text
timeout
tratamento de erros
logging seguro
fallback
```

---

## Segurança

Validar:

```text
secrets
access control do Payload
draft endpoints
uploads
headers
logs
dados pessoais
```

---

## Testes

Pipeline mínimo:

```text
lint
typecheck
unit
integration
build
```

---

## Checklist institucional

Antes de considerar publicação, revisar explicitamente os itens ainda sujeitos a confirmação oficial:

```text
prazo
decreto
taxas
ISS
limites
isenções
Outorga
CEDI
URLs oficiais
atendimento presencial
Libras
```

---

# 5. Definition of Done para cada Spec

Uma Spec só pode receber status **ACCEPTED** quando:

- [ ] código corresponde ao escopo;
- [ ] não introduziu funcionalidades da próxima Spec;
- [ ] lint passa;
- [ ] typecheck passa;
- [ ] testes da Spec passam;
- [ ] aplicação inicia;
- [ ] fluxo foi testado manualmente;
- [ ] não existem secrets no repositório;
- [ ] decisões não previstas foram documentadas;
- [ ] foi feita revisão humana.

---

# 6. Formato de resposta esperado do Codex

Ao terminar cada implementação, o agente deve responder no formato:

```markdown
## Implementação

### Arquivos criados
...

### Arquivos modificados
...

### Decisões
...

### Testes executados
...

### Resultado dos testes
...

### Desvios da Spec
Nenhum.

### Riscos ou dúvidas
...

### O que NÃO foi implementado
...
```

A seção **O que NÃO foi implementado** é importante para detectar antecipação indevida de escopo.

---

# 7. Ordem de trabalho

Não entregar todas as Specs simultaneamente ao Codex.

Executar:

```text
SPEC-000
   ↓ revisão

SPEC-001
   ↓ revisão

SPEC-002
   ↓ revisão

SPEC-003
   ↓ revisão

SPEC-004
   ↓ revisão

SPEC-005
   ↓ revisão

SPEC-006
   ↓
CMS MVP
```

Somente então entrar em:

```text
SPEC-007
SPEC-008
SPEC-009
SPEC-010
```

---

# 8. Primeiro checkpoint arquitetural

Depois da SPEC-003, interromper o desenvolvimento para avaliar:

```text
Page
  ↓
Blocks
  ↓
React components
```

Perguntas para revisão:

1. O ADM consegue entender o modelo?
2. Existe flexibilidade suficiente?
3. Existe flexibilidade demais?
4. Algum Block está assumindo responsabilidades demais?
5. Algum conteúdo variável ainda está hardcoded?
6. O Design System continua sob controle do frontend?

Se a resposta for satisfatória, avançar para routing.

---

# 9. Segundo checkpoint arquitetural

Depois da SPEC-006, avaliar o CMS MVP completo.

Perguntas:

1. Um administrador consegue criar uma página sem desenvolvedor?
2. Ele consegue quebrar o layout?
3. Uma mudança de prazo exige deploy?
4. Uma mudança de menu exige deploy?
5. Draft e conteúdo publicado estão realmente separados?
6. Criar um novo tipo de página exige código ou apenas composição de Blocks?
7. As páginas institucionais existentes conseguem ser representadas com os Blocks atuais?

Se o CMS estiver saudável, congelar temporariamente seu modelo e iniciar o domínio.

---

# 10. Princípio de evolução

Quando surgir uma necessidade nova, seguir esta ordem:

```text
É conteúdo?
    ↓
CMS field

É uma variação visual conhecida?
    ↓
Block variant

É um novo padrão visual?
    ↓
New Block

É regra de negócio?
    ↓
domain/

É integração?
    ↓
lib/

É apenas composição?
    ↓
app/ ou component
```

Essa regra deve impedir que o Payload se transforme em um page builder genérico e que o frontend se transforme em um depósito de regras de negócio.
