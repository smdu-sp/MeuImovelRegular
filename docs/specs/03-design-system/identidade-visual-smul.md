# Identidade Visual da SMUL — Guia de Referência

> **Fonte:** *Manual de Identidade Visual SMUL 2021*, produzido pela ASCOM — Assessoria de Comunicação e Imprensa. Este documento resume os principais parâmetros visuais apresentados no manual, com foco em **cores** e **tipografia**, e pode ser utilizado como referência para implementação digital.

## 1. Direção visual

A identidade visual da Secretaria Municipal de Urbanismo e Licenciamento (SMUL) combina formas orgânicas e geométricas para comunicar a amplitude da Secretaria, a digitalização dos serviços e a relação com arquitetura e urbanismo.

| Elemento | Significado associado |
|---|---|
| **Círculo** | Continuidade e ciclo. |
| **Quadrado** | Estruturação, áreas e janelas. |
| **Linhas** | Direção e movimento. |
| **Ondas** | Digitalização e ondas cibernéticas. |

A linguagem visual deve transmitir **movimento, vida, dinamismo, estrutura e transformação digital**, evitando uma aparência excessivamente burocrática ou estática.

## 2. Tipografia

O manual define duas famílias tipográficas principais para a comunicação da SMUL:

| Família | Uso recomendado |
|---|---|
| **Pangram** | Títulos, capas, chamadas e artes em geral. Deve reforçar a personalidade visual da comunicação. |
| **Lato** | Textos corridos e materiais digitais, incluindo sites e portais. |
| **Arial** | Fallback quando Pangram ou Lato não estiverem disponíveis; também é indicada para uso geral da Secretaria, e-mails e equipamentos sem as fontes institucionais. |

### 2.1. Hierarquia tipográfica recomendada

Para interfaces digitais, adote a seguinte hierarquia:

```text
Títulos e chamadas       → Pangram
Subtítulos               → Pangram ou Lato, conforme o nível de destaque
Texto corrido            → Lato
Labels e elementos UI    → Lato
Fallback geral           → Arial
Documentos técnicos     → Arial 11–12 pt
```

O manual recomenda **Arial 11 ou, no máximo, 12 pontos** para Notas Técnicas e documentos timbrados. O texto deve permanecer afastado das bordas, com espaçamento suficiente para preservar leitura e uniformidade.

### 2.2. Fallback de fontes para a Web

```css
:root {
  --font-family-heading: "Pangram", Arial, sans-serif;
  --font-family-body: "Lato", Arial, sans-serif;
}
```

As fontes devem ser carregadas de forma consistente e com fallback funcional. A ausência de Pangram ou Lato não deve quebrar a composição nem comprometer a legibilidade.

## 3. Paleta de cores

O manual apresenta uma paleta principal e uma paleta secundária. Os valores abaixo foram transcritos do documento e devem ser tratados como **tokens centrais**, não como cores duplicadas diretamente em componentes.

### 3.1. Cores principais

| Nome de referência | HEX | RGB | HSL | CMYK |
|---|---|---|---|---|
| Azul institucional escuro | `#0A3299` | `10, 50, 153` | `223°, 93%, 60%` | `100%, 84%, 10%, 1%` |
| Azul | `#517BEE` | `81, 123, 238` | `223°, 65%, 93%` | `73%, 53%, 0%, 0%` |
| Azul claro | `#A8BDF7` | `168, 189, 247` | `223°, 31%, 96%` | `38%, 22%, 0%, 0%` |
| Azul muito claro | `#D4DEFB` | `212, 222, 251` | `224°, 15%, 98%` | `19%, 11%, 0%, 0%` |
| Rosa | `#F94668` | `249, 70, 104` | `347°, 71%, 97%` | `0%, 83%, 40%, 0%` |
| Turquesa | `#5CD6C9` | `92, 214, 201` | `172°, 56%, 83%` | `58%, 0%, 30%, 0%` |

### 3.2. Cores secundárias

| Nome de referência | HEX | RGB | HSL | CMYK |
|---|---|---|---|---|
| Verde | `#2EED89` | `46, 237, 137` | `148°, 80%, 92%` | `62%, 0%, 66%, 0%` |
| Azul-ciano | `#14B1F2` | `20, 177, 242` | `196°, 91%, 94%` | `69%, 12%, 0%, 0%` |
| Roxo | `#8800E0` | `136, 0, 224` | `275°, 100%, 87%` | `75%, 83%, 0%, 0%` |
| Laranja | `#F26E14` | `242, 110, 20` | `24°, 91%, 94%` | `0%, 67%, 93%, 0%` |

## 4. Tokens digitais recomendados

Para uso no Design System, recomenda-se separar **papel semântico** de **valor cromático**. Os nomes semânticos facilitam futuras atualizações da identidade sem alterar os componentes.

```css
:root {
  /* Cores institucionais */
  --color-primary: #0A3299;
  --color-primary-light: #517BEE;
  --color-primary-soft: #A8BDF7;
  --color-primary-muted: #D4DEFB;
  --color-accent-pink: #F94668;
  --color-accent-teal: #5CD6C9;

  /* Cores secundárias */
  --color-secondary-green: #2EED89;
  --color-secondary-cyan: #14B1F2;
  --color-secondary-purple: #8800E0;
  --color-secondary-orange: #F26E14;

  /* Papéis semânticos */
  --color-background: #FFFFFF;
  --color-foreground: #0A3299;
  --color-surface: #D4DEFB;
  --color-border: #A8BDF7;
  --color-focus: #14B1F2;
}
```

Os nomes e os papéis podem ser ajustados ao Design System já existente. O ponto essencial é evitar que Blocks ou campos do CMS armazenem hexadecimais arbitrários.

## 5. Regras de aplicação das cores

A paleta é flexível e pode ser utilizada em apresentações, materiais digitais, tabelas, gráficos, textos, fotografias e mapas. Entretanto, toda aplicação deve preservar **contraste, legibilidade e acessibilidade**.

O manual destaca que se deve evitar o uso de **fundo branco com texto verde em apresentações**, pois essa combinação pode comprometer a leitura e o padrão visual. Para interfaces, valide sempre contraste de texto, links, botões, estados de foco e mensagens de status.

No CMS, cores como verde, amarelo ou azul devem ser representadas por opções fechadas, por exemplo:

```text
appearance: default | brand | info | warning | success
```

O frontend deve mapear essas opções para tokens. O editor não deve informar valores HEX, RGB, classes CSS ou nomes de classes Tailwind.

## 6. Aplicação em interfaces digitais

Para sites e portais, a combinação recomendada é:

| Elemento da interface | Diretriz |
|---|---|
| Títulos principais | Pangram, com escala tipográfica controlada. |
| Corpo de texto | Lato, com altura de linha confortável. |
| Navegação e botões | Lato, com peso e contraste suficientes. |
| Fundo institucional | Azul institucional ou tons claros da paleta, conforme a hierarquia da página. |
| Ações de destaque | Usar variantes semânticas mapeadas para a paleta. |
| Foco de teclado | Utilizar cor de foco perceptível e não depender apenas de mudança de cor. |
| Imagens e mapas | Usar `Media` com dimensões responsivas e texto alternativo quando aplicável. |

## 7. Diretriz para o CMS e o Design System

A identidade visual deve ser modelada em três camadas:

```text
Payload CMS
├── branding configurável
├── logos
└── variantes editoriais fechadas

Design System
├── tokens de cor
├── tokens tipográficos
├── primitives
└── regras de acessibilidade

Blocks
└── composição editorial sem CSS arbitrário
```

O CMS pode controlar branding autorizado, logos e variantes previamente implementadas. O código deve controlar tipografia, escala, espaçamento, responsividade, contraste, componentes e comportamento visual.

## 8. Resumo executivo

A identidade da SMUL utiliza **Pangram para títulos e artes**, **Lato para textos e interfaces digitais** e **Arial como fallback e para documentos gerais**. A paleta é baseada em uma família de azuis, complementada por rosa, turquesa, verde, ciano, roxo e laranja. O uso digital deve centralizar esses valores em tokens semânticos, preservar contraste e impedir configurações cromáticas livres no CMS.

> **Nota:** este arquivo é uma síntese técnica do manual fornecido e não substitui a versão oficial nem autoriza alterações na identidade institucional sem aprovação da SMUL/ASCOM.

## Referência

[1]: `/home/ubuntu/upload/Manual_ID_SMUL2021_.pdf` — *Manual de Identidade Visual SMUL 2021*, ASCOM — Assessoria de Comunicação e Imprensa.
