---
spec: SPEC-010
title: Production Hardening
status: planned
source: PlanodeImplementaçãoporSpecs—MeuImóvelRegular.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-010 — Production Hardening

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
