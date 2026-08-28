---
spec: SPEC-012
title: Design Tokens Foundation
status: planned
summary: Centralizar tokens visuais e eliminar valores institucionais de estilo espalhados pelo frontend.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-012 — Design Tokens Foundation

## 1. Objetivo

Criar uma camada centralizada de tokens visuais para eliminar valores de estilo institucionais espalhados pelo frontend.

Ao final desta Spec, os componentes devem consumir **tokens semânticos**, e não valores concretos de cor, espaçamento ou raio sempre que o valor fizer parte do sistema visual.

---

## 2. Problema que esta Spec resolve

Situação indesejada:

```tsx
<section className="bg-[#00529C] text-white">
```

ou:

```css
.card {
  border-radius: 12px;
  color: #1f2937;
}
```

repetido em vários componentes.

Isso gera:

- inconsistência;
- alto custo de manutenção;
- dificuldade para trocar identidade visual;
- componentes visualmente divergentes;
- duplicação de decisões de design.

A saída desejada é algo equivalente a:

```tsx
<section className="bg-primary text-primary-foreground">
```

ou:

```css
.card {
  border-radius: var(--radius-md);
  color: var(--color-foreground);
}
```

---

## 3. Escopo

Criar tokens para, no mínimo:

### 3.1. Cores semânticas

```text
background
foreground
surface
surface-muted
primary
primary-foreground
secondary
secondary-foreground
accent
accent-foreground
muted
muted-foreground
border
focus
success
warning
danger
```

Não é obrigatório que todos sejam configuráveis pelo CMS.

---

### 3.2. Tipografia

Definir tokens ou regras centrais para:

```text
font-family-sans
font-family-heading

font-size-xs
font-size-sm
font-size-base
font-size-lg
font-size-xl
font-size-2xl
...

line-height-tight
line-height-normal
line-height-relaxed

font-weight-normal
font-weight-medium
font-weight-semibold
font-weight-bold
```

Evitar um sistema excessivamente granular.

---

### 3.3. Espaçamento

Definir escala reutilizável.

Exemplo conceitual:

```text
space-1
space-2
space-3
space-4
space-6
space-8
space-12
space-16
space-24
```

---

### 3.4. Radius

```text
radius-sm
radius-md
radius-lg
radius-full
```

---

### 3.5. Containers

Definir centralmente:

```text
container-sm
container-md
container-lg
container-xl
container-padding
```

---

### 3.6. Sombras

Somente se já houver uso real no projeto.

Evitar criar uma biblioteca enorme de sombras sem necessidade.

---

## 4. Localização recomendada

Adaptar à estrutura existente.

Exemplo:

```text
src/
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── typography.css
│
└── lib/
    └── theme/
        └── tokens.ts
```

Se o projeto usa Tailwind, os tokens devem continuar tendo uma fonte semântica central e podem ser expostos ao Tailwind.

A configuração do Tailwind não deve virar a única documentação do Design System.

---

## 5. Passos de implementação

### Passo 1 — Inventário

Antes de alterar código, localizar:

- cores hex/rgb/hsl hardcoded;
- tamanhos de fonte repetidos;
- paddings recorrentes;
- radii recorrentes;
- larguras máximas recorrentes;
- sombras recorrentes.

Gerar uma lista curta com os padrões encontrados.

Não refatorar ainda.

---

### Passo 2 — Definir nomenclatura semântica

Mapear valores existentes para tokens.

Exemplo:

```text
#00529C
↓
primary
```

Não criar nomes como:

```text
blue-500-prefeitura
```

quando o papel semântico correto for:

```text
primary
```

---

### Passo 3 — Criar tokens

Criar a fonte central de tokens.

Preferir CSS custom properties para os valores que poderão variar em runtime.

Exemplo:

```css
:root {
  --color-background: ...;
  --color-foreground: ...;
  --color-primary: ...;
  --color-primary-foreground: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
}
```

---

### Passo 4 — Criar defaults

Definir valores padrão seguros.

O site deve continuar renderizando corretamente mesmo que nenhuma configuração dinâmica de tema exista.

---

### Passo 5 — Migrar os estilos globais

Substituir valores duplicados por tokens nas camadas mais globais.

Prioridade:

1. `body`;
2. links;
3. headings;
4. bordas globais;
5. foco;
6. backgrounds institucionais.

---

### Passo 6 — Migrar componentes estruturais

Migrar somente componentes compartilhados já existentes.

Não redesenhar Blocks nesta Spec.

---

### Passo 7 — Verificar resíduos

Executar busca por:

```text
#
rgb(
rgba(
hsl(
hsla(
```

e identificar valores ainda hardcoded.

Nem todo valor hardcoded é necessariamente incorreto, mas toda exceção relevante deve ser justificada.

---

## 6. Fora de escopo

Não implementar nesta Spec:

- Global `Theme` no Payload;
- seleção de variantes no CMS;
- redesign de Hero;
- redesign de Cards;
- dark mode;
- editor visual;
- Live Preview;
- novos Blocks;
- regras de negócio.

---

## 7. Critérios de aceite

- [ ] existe fonte central de tokens;
- [ ] componentes compartilhados usam tokens semânticos;
- [ ] cores principais não estão duplicadas em múltiplos Blocks;
- [ ] existe fallback visual funcional;
- [ ] nenhuma dependência nova foi adicionada sem justificativa;
- [ ] aparência geral não sofreu regressão estrutural;
- [ ] foco visível continua funcional;
- [ ] contraste não foi reduzido deliberadamente;
- [ ] build passa.

---

## 8. Validação manual

Validar pelo menos:

- `/`;
- uma página com Hero;
- uma página com RichText;
- uma página com Cards;
- uma página com CTA;
- Admin do Payload.

Checar desktop e viewport móvel.

---

## 9. Saída esperada do Codex

Ao finalizar:

```markdown
## Inventário encontrado

## Tokens criados

## Arquivos migrados

## Hardcodes ainda existentes

## Motivo das exceções

## Testes executados

## O que NÃO foi alterado
```

---
