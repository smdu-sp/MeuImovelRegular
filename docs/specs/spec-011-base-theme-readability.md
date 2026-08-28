---
spec: SPEC-011
title: Base Theme Readability
status: planned
source: Solicitação do projeto apos SPEC-004
---

> **Regra de execução:** implemente exclusivamente esta Spec. Não antecipe funcionalidades futuras. Ao finalizar, execute os testes aplicáveis, registre decisões e declare explicitamente o que não foi implementado.

# SPEC-011 - Base Theme Readability

## Objetivo

Aplicar um tema base consistente para melhorar a legibilidade do frontend enquanto o design final ainda não está definido.

O problema observado é que alguns blocos usam combinações locais de cores que podem gerar baixo contraste, incluindo casos em que fundo e texto ficam escuros ao mesmo tempo.

---

## Não implementar ainda

Nesta Spec não devem ser criados:

- novo design system completo;
- novos Blocks;
- novos campos no CMS;
- seletor de tema no Admin;
- variações visuais configuráveis pelo editor;
- identidade visual definitiva.

---

## Princípio

O tema base deve ser:

```text
legível
neutro
previsível
centralizado
facilmente substituível
```

O código deve controlar cor, contraste e espaçamento visual dos Blocks. O CMS deve continuar controlando conteúdo, ordem e variações já previstas.

---

## Tokens semânticos

Criar ou revisar tokens em:

```text
src/app/(frontend)/globals.css
```

Os componentes devem consumir tokens semânticos, não combinações soltas de cores Tailwind.

Tokens mínimos:

```text
--color-page
--color-page-foreground
--color-surface
--color-surface-muted
--color-surface-strong
--color-border
--color-heading
--color-text
--color-text-muted
--color-brand
--color-brand-foreground
--color-link
--color-focus
```

Mapear os tokens para utilitários Tailwind quando necessário.

---

## Escopo de componentes

Aplicar o tema base somente aos componentes existentes:

```text
Hero
RichText
ImageText
Cards
CTA
BlockLink
MediaImage, se necessário apenas para estados visuais
```

Não alterar estrutura de campos, schema do Payload ou regras de roteamento.

---

## Regras de contraste

Garantir contraste suficiente para leitura em:

- títulos;
- textos longos;
- botões;
- links;
- cards;
- blocos com imagem;
- fundos escuros;
- fundos claros.

Evitar combinações em que:

```text
fundo escuro + texto escuro
fundo claro + texto muito claro
botão sem contraste
link sem distinção visual
```

---

## Paleta provisória

Usar uma paleta institucional provisória e sóbria, evitando um tema monocromático.

Direção sugerida:

```text
page: claro
surface: branco
surface-muted: cinza muito claro
surface-strong: azul-petróleo escuro
brand: verde/azul institucional
accent: amarelo suave apenas para destaque controlado
text: grafite
text-muted: cinza médio
```

A escolha exata deve ficar registrada na implementação.

### Decisao registrada

A implementacao deve registrar a paleta exata usada em `docs/specs/README.md`, mantendo a escolha como provisoria e substituivel.

---

## Acessibilidade visual

Adicionar estilos previsíveis para:

- `:focus-visible`;
- links;
- botões;
- estados hover;
- textos dentro de cards;
- rich text gerado pelo CMS.

Não depender apenas de cor para indicar ação quando houver texto de link ou botão.

---

## Critérios de aceite

- [ ] todos os Blocks existentes usam tokens ou classes derivadas do tema base;
- [ ] não há texto preto sobre fundo escuro;
- [ ] não há texto claro sobre fundo claro;
- [ ] `/main` renderiza imagens e textos legíveis;
- [ ] `/` continua funcionando com Page `home`;
- [ ] `npm run lint` passa;
- [ ] `npm run typecheck` passa;
- [ ] `npm run build` passa;
- [ ] decisões de paleta ficam documentadas;
- [ ] nenhuma funcionalidade de CMS, routing ou preview é alterada.

---

## Validação manual recomendada

Criar ou revisar uma página no CMS contendo:

```text
Hero
RichText
ImageText
Cards
CTA
```

Verificar em desktop e mobile:

- legibilidade dos textos;
- contraste de botões e links;
- espaçamento entre blocos;
- imagens sem quebrar layout;
- foco visível usando teclado.
