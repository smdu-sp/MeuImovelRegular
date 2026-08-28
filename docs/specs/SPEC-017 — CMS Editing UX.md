---
spec: SPEC-017
title: CMS Editing UX
status: planned
summary: Melhorar a experiência de edição no Payload sem alterar a arquitetura fundamental do CMS.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-017 — CMS Editing UX

## 1. Objetivo

Melhorar a experiência do administrador no Payload sem alterar a arquitetura fundamental do CMS.

O editor deve entender:

- o que cada campo faz;
- quais campos são obrigatórios;
- qual variante escolher;
- quais consequências cada opção possui.

---

## 2. Princípio

O schema técnico não deve obrigar o editor a conhecer termos de implementação.

Evitar apresentar:

```text
blockType
variant
imagePosition
```

sem contexto.

Preferir labels e descrições amigáveis.

---

## 3. Escopo

Revisar:

```text
Pages
Globals
Hero
RichText
ImageText
Cards
CTA
Theme / Branding
```

---

## 4. Passos de implementação

### Passo 1 — Revisar labels

Exemplo:

```text
variant
```

vira visualmente:

```text
Modelo de apresentação
```

O `name` técnico pode permanecer estável.

---

### Passo 2 — Adicionar descriptions

Campos não óbvios devem explicar a consequência.

Exemplo:

```text
Imagem lateral

Exibe o conteúdo ao lado da imagem em telas maiores.
Em dispositivos móveis, os elementos são empilhados.
```

---

### Passo 3 — Agrupar campos

Usar grupos, tabs ou collapsibles somente onde reduzirem complexidade.

Exemplo:

```text
Conteúdo
├── título
├── descrição
└── ações

Mídia
├── imagem
└── texto alternativo

Apresentação
└── variante
```

Não transformar todo Block em um formulário profundamente aninhado.

---

### Passo 4 — Melhorar opções

Enums devem usar labels humanas.

Exemplo:

```text
default → Padrão
centered → Centralizado
split → Imagem lateral
```

---

### Passo 5 — Aplicar condições

Se determinado campo só é relevante em uma variante, avaliar condition.

Exemplo:

```text
imagePosition
```

não precisa aparecer quando o Block não possui imagem lateral.

---

### Passo 6 — Revisar obrigatoriedade

Não tornar campos obrigatórios apenas para facilitar layout.

O frontend deve lidar com conteúdo opcional quando isso fizer sentido editorial.

---

### Passo 7 — Melhorar preview/listagem

Quando possível:

- usar `title` como título administrativo;
- mostrar slug;
- mostrar status;
- melhorar labels dos Blocks;
- facilitar identificação dentro do layout.

---

### Passo 8 — Validar fluxo real de edição

Executar como se fosse um ADM não desenvolvedor:

1. criar Page;
2. adicionar Hero;
3. escolher variante;
4. inserir imagem;
5. adicionar Cards;
6. reordenar;
7. salvar draft;
8. preview;
9. publicar.

Anotar pontos confusos.

---

## 5. Opcional: ajuda visual para variantes

Se houver mecanismo simples e sustentável, pode ser considerado futuramente:

- miniaturas;
- screenshots;
- descrições mais visuais.

Não criar infraestrutura complexa nesta Spec apenas para isso.

---

## 6. Fora de escopo

- editor drag-and-drop customizado;
- page builder completo;
- edição inline do frontend;
- Live Preview avançado;
- múltiplos temas por página;
- CSS customizado;
- permissão complexa por campo;
- regras de domínio específicas do portal.

---

## 7. Critérios de aceite

- [ ] labels principais são compreensíveis;
- [ ] variantes possuem descrições;
- [ ] opções técnicas têm labels amigáveis;
- [ ] campos irrelevantes ficam ocultos quando apropriado;
- [ ] administrador consegue criar página sem conhecer estrutura React;
- [ ] fluxo Draft → Preview → Publish continua funcionando;
- [ ] schema não ganhou flexibilidade perigosa;
- [ ] build passa.

---

# 5. Checkpoint final do ciclo

Após a SPEC-017, interromper implementação e avaliar o sistema como um todo.

---

## 5.1. Checklist de arquitetura

### Tokens

- [ ] existe fonte única de tokens;
- [ ] cores semânticas estão centralizadas;
- [ ] components não dependem de hex espalhado.

### Theme

- [ ] branding pode ser alterado pelo CMS;
- [ ] branding possui fallback;
- [ ] CMS não controla CSS arbitrário.

### Primitives

- [ ] Container está centralizado;
- [ ] Section está centralizado;
- [ ] Typography está consistente;
- [ ] Button está consistente.

### Blocks

- [ ] usam primitives;
- [ ] usam tokens;
- [ ] possuem variantes controladas;
- [ ] suportam conteúdo real;
- [ ] suportam mobile.

### CMS

- [ ] criar Page é compreensível;
- [ ] escolher variante é compreensível;
- [ ] editar branding é compreensível;
- [ ] Preview continua funcional.

---

## 5.2. Perguntas obrigatórias de revisão

1. Uma mudança de `primaryColor` exige editar componentes?

Resposta esperada:

```text
Não.
```

2. O ADM consegue escolher uma cor aleatória para cada Card?

Resposta esperada:

```text
Não.
```

3. O ADM consegue escolher entre layouts de Hero previamente aprovados?

Resposta esperada:

```text
Sim.
```

4. Um novo Block precisa inventar seu próprio botão?

Resposta esperada:

```text
Não.
```

5. Um novo Block precisa inventar seu próprio container?

Resposta esperada:

```text
Não.
```

6. Os Blocks continuam funcionais sem configuração de Theme?

Resposta esperada:

```text
Sim, por meio dos defaults.
```

7. Alterar a identidade visual exige reescrever todas as páginas?

Resposta esperada:

```text
Não.
```

---

# 6. Prompt base para execução pelo Codex

Usar este formato para cada Spec:

```text
Implemente exclusivamente a SPEC-XXX descrita em:

docs/specs/XXX-nome-da-spec.md

Regras:

1. Leia a Spec inteira antes de alterar código.
2. Inspecione o estado atual do projeto.
3. Liste os arquivos que pretende alterar.
4. Identifique conflitos entre a Spec e a implementação existente.
5. Não implemente funcionalidades de Specs posteriores.
6. Preserve compatibilidade com conteúdo existente quando a Spec exigir.
7. Não adicione dependências sem justificar tecnicamente.
8. Prefira reutilizar a arquitetura existente.
9. Execute os scripts de validação disponíveis no projeto.
10. Não considere a tarefa concluída se build ou typecheck falharem por mudanças introduzidas nesta execução.

Ao finalizar, responda com:

## Implementação

### Arquivos criados

### Arquivos modificados

### Decisões arquiteturais

### Testes executados

### Resultado dos testes

### Critérios de aceite atendidos

### Critérios de aceite pendentes

### Desvios da Spec

### Hardcodes ou dívida técnica ainda existentes

### O que NÃO foi implementado
```

---

# 7. Estrutura sugerida de arquivos de documentação

O documento pode ser dividido posteriormente em:

```text
docs/
└── specs/
    ├── 012-design-tokens-foundation.md
    ├── 013-theme-global-branding.md
    ├── 014-ui-primitives.md
    ├── 015-block-variants.md
    ├── 016-block-visual-pass.md
    └── 017-cms-editing-ux.md
```

Enquanto a implementação não começar, manter este documento consolidado também é válido.

---

# 8. Escopo explicitamente adiado

As funcionalidades abaixo não pertencem a este ciclo:

```text
Eligibility / Triagem
CEDI
Consulta de situação
Outorga Onerosa
Regras jurídicas específicas
Integrações externas
Calculadoras
Fluxos transacionais
```

Elas só devem ser retomadas depois que o CMS e o Design System forem considerados estáveis.

---

# 9. Resultado esperado ao final da SPEC-017

```text
Payload CMS
│
├── Pages
├── Media
├── Globals
├── Theme
└── Blocks
      │
      ▼
Design System
│
├── Tokens
├── Primitives
├── Variants
└── Branding Mapping
      │
      ▼
Frontend
│
├── consistente
├── responsivo
├── acessível
└── fácil de evoluir
```

O objetivo não é produzir um page builder genérico.

O objetivo é produzir um **CMS institucional controlado por um Design System previsível**, no qual o conteúdo possui flexibilidade suficiente para ser mantido pela Administração sem permitir que cada página crie seu próprio padrão visual.
