---
spec: SPEC-013
title: Theme Global e Branding
status: planned
summary: Permitir branding institucional configurável pelo Payload sem expor o Design System inteiro ao administrador.
source: SPECS-012-017-Design-System-CMS.md
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, valide lint, typecheck, testes e build aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-013 — Theme Global e Branding

## 1. Objetivo

Permitir que aspectos institucionais controlados do tema sejam configurados pelo Payload sem expor o Design System inteiro ao administrador.

---

## 2. Resultado esperado

Fluxo:

```text
Payload Global
     ↓
Theme / Branding
     ↓
getTheme()
     ↓
mapThemeToCssVariables()
     ↓
CSS Variables
     ↓
Design Tokens
     ↓
Frontend
```

---

## 3. Princípio

O administrador controla **branding**.

O código controla **design**.

---

## 4. Escopo do Global

Criar ou evoluir um Global equivalente a:

```text
Theme
├── branding
│   ├── primaryColor
│   ├── secondaryColor
│   ├── accentColor
│   ├── logo
│   └── logoAlternative?
│
└── metadata visual mínima
```

A nomenclatura deve respeitar a estrutura já existente do projeto.

---

## 5. O que NÃO deve ser configurável

Não criar campos para:

```text
fontSize
padding
margin
borderRadius
boxShadow
containerWidth
gridColumns
breakpoints
customCss
className
```

---

## 6. Passos de implementação

### Passo 1 — Revisar Globals existentes

Verificar se `SiteSettings` já possui dados de branding.

Se já houver campos equivalentes, evitar criar duplicação.

Decidir entre:

```text
SiteSettings.branding
```

ou:

```text
Theme
```

Documentar a decisão.

---

### Passo 2 — Definir schema mínimo

Começar com o menor conjunto funcional.

Recomendação:

```text
primaryColor
secondaryColor
accentColor
logo
```

Não adicionar campos "para o futuro".

---

### Passo 3 — Validar cores

Campos de cor devem impedir entradas obviamente inválidas.

Se houver componente de color picker compatível já instalado, ele pode ser usado.

Não adicionar biblioteca pesada somente para isso sem justificativa.

---

### Passo 4 — Criar função de leitura

Criar camada semelhante a:

```text
src/lib/theme/get-theme.ts
```

Ela deve ser responsável por buscar os dados configurados.

Componentes não devem consultar o Payload diretamente para obter tema.

---

### Passo 5 — Criar mapper

Criar função equivalente a:

```ts
mapThemeToCssVariables(theme)
```

Responsabilidade:

```text
CMS value
↓
sanitização / fallback
↓
CSS variable
```

---

### Passo 6 — Aplicar no root

Aplicar as variáveis em nível alto da árvore.

Evitar lógica espalhada em múltiplas páginas.

---

### Passo 7 — Garantir fallback

Se:

- o documento Theme não existir;
- uma cor estiver vazia;
- um valor for inválido;

usar os defaults definidos na SPEC-012.

---

### Passo 8 — Testar publicação

Alterar uma cor pelo Admin e validar que o frontend muda sem alteração manual de componente.

---

## 7. Segurança e robustez

Não aceitar do CMS:

```text
style=""
<script>
url(javascript:...)
```

O CMS deve fornecer valores estruturados e limitados.

---

## 8. Fora de escopo

Não implementar:

- seletor de fonte livre;
- upload de CSS;
- editor de Tailwind classes;
- dark mode completo;
- temas múltiplos por página;
- tema por usuário;
- variantes de Blocks.

---

## 9. Critérios de aceite

- [ ] branding pode ser editado pelo Admin;
- [ ] frontend consome branding centralmente;
- [ ] defaults funcionam;
- [ ] valores inválidos não quebram a página;
- [ ] componentes não fazem query direta de tema;
- [ ] não há CSS arbitrário configurável;
- [ ] alteração de branding não exige alteração de código;
- [ ] build passa.

---

## 10. Validação manual

1. abrir Admin;
2. alterar primary;
3. salvar/publicar;
4. abrir frontend;
5. confirmar aplicação;
6. apagar valor opcional;
7. confirmar fallback;
8. reiniciar aplicação;
9. confirmar persistência.

---
