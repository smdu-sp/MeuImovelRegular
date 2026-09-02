---
spec: SPEC-034
title: Image Presentation Controls
status: planned
source: Specs030–041—MaturidadeEditorialeGovernançadoCMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-034 — Image Presentation Controls

## Objetivo

Permitir que o editor controle **como a imagem é apresentada**, sem transformar o CMS em editor gráfico completo.

Essa distinção é importante.

---

# O que será controlável

## Display size

Presets:

```text
small
medium
large
full
```

Não:

```text
width = 713px
```

---

## Aspect ratio

Presets quando aplicável:

```text
original
1:1
4:3
16:9
portrait
```

---

## Fit

Quando necessário:

```text
cover
contain
```

---

## Focal point

Avaliar suporte a posição/focal point para evitar cortes ruins.

---

## Alignment

Quando o Block permitir:

```text
left
center
right
```

---

# Separação importante

```text
Media
→ arquivo

Block
→ apresentação do arquivo
```

O mesmo asset pode ser usado:

```text
Hero → full / cover
Card → small / 4:3
ImageText → medium / original
```

sem criar uploads duplicados.

---

## Fora de escopo

Não editar o arquivo original.

Não implementar:

```text
crop destrutivo
filters
brightness
contrast
drawing
text overlay
```

Esses itens pertencem à SPEC-041.

---

## Critérios de aceite

- [ ] tamanhos usam presets.
- [ ] aspectos usam presets.
- [ ] Media original não é alterada.
- [ ] mesmo asset pode ser apresentado de formas diferentes.
- [ ] layout mobile permanece estável.
- [ ] não existe controle numérico arbitrário.

---
