---
spec: SPEC-015
title: Block Variants
status: planned
summary: Oferecer flexibilidade editorial por meio de variantes visuais fechadas e previamente implementadas.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-015 — Block Variants

## 1. Objetivo

Permitir flexibilidade editorial controlada por meio de variantes visuais previamente implementadas.

O administrador escolhe **uma opção válida**.

Ele não cria layout arbitrário.

---

## 2. Estratégia

Exemplo:

```text
Hero
├── default
├── centered
└── split
```

Payload salva:

```text
variant = "split"
```

Frontend decide a implementação.

---

## 3. Blocks a revisar

Usar os Blocks existentes.

Provável escopo:

```text
Hero
RichText
ImageText
Cards
CTA
```

Não criar novos Blocks nesta Spec, salvo necessidade comprovada para corrigir modelagem anterior.

---

## 4. Processo obrigatório por Block

Para cada Block:

### Passo A — Definir propósito

Responder:

> Qual problema editorial este Block resolve?

---

### Passo B — Identificar variações reais

Não criar variante apenas por estética.

Exemplo aceitável:

```text
Hero centered
Hero split com imagem
```

Exemplo ruim:

```text
Hero padding-48
Hero padding-64
Hero padding-72
```

---

### Passo C — Definir enum fechado

No Payload:

```text
label amigável
value estável
```

Exemplo:

```text
Padrão → default
Centralizado → centered
Imagem lateral → split
```

---

### Passo D — Definir comportamento responsivo

A variante precisa especificar:

- desktop;
- tablet;
- mobile;
- comportamento de imagem;
- alinhamento;
- ordem do conteúdo.

---

### Passo E — Definir fallback

Valores antigos ou desconhecidos devem cair em:

```text
default
```

sem quebrar a renderização.

---

## 5. Variantes iniciais recomendadas

### Hero

```text
default
centered
split
```

### RichText

Evitar variação excessiva.

Possível:

```text
default
narrow
```

### ImageText

```text
image-left
image-right
```

### Cards

Se necessário:

```text
grid
featured
```

Somente se ambos existirem de verdade no design.

### CTA

```text
default
brand
compact
```

Somente se fizer sentido após revisão visual.

---

## 6. Implementação

Preferir uma estratégia consistente.

Exemplos possíveis:

```text
variant map
```

ou:

```text
component map
```

ou biblioteca de variantes já presente no projeto.

Não introduzir dependência nova só por conveniência se uma implementação simples resolver.

---

## 7. Compatibilidade

Conteúdo existente não deve exigir edição manual de todas as Pages após esta Spec.

Se um novo campo `variant` for opcional:

```text
undefined
↓
default
```

---

## 8. Critérios de aceite

- [ ] variantes são fechadas;
- [ ] labels do CMS são amigáveis;
- [ ] conteúdo antigo continua renderizando;
- [ ] variante desconhecida tem fallback;
- [ ] nenhuma variante permite CSS livre;
- [ ] comportamento mobile foi definido;
- [ ] renderer continua simples;
- [ ] build passa.

---
