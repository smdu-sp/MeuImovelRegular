# Arquitetura de Componentes Visuais (Next.js + Payload CMS)

Este documento detalha o mapeamento e a decomposição visual dos arquivos em PDF (`1-home.pdf`, `2-info.pdf` e `3-regular.pdf`) para a construção de um sistema de componentes dinâmicos no Next.js alimentados pelo Payload CMS.

A estratégia central é utilizar a arquitetura de **Blocks** do Payload, permitindo que as páginas sejam compostas livremente através do empilhamento desses componentes pelo painel administrativo, mantendo layouts globais separados no Next.js (como o layout principal para páginas abertas e o segundo layout mencionado pelo usuário para rotas específicas).

---

## 1. Componentes Globais (Fixos no Layout)
Estes elementos não serão gerenciados como Blocos dentro das páginas, mas sim em estruturas fixas do `layout.tsx` do Next.js ou como "Globals" no Payload CMS.

*   **Global Header:** Cabeçalho com o logotipo "CIDADE DE SÃO PAULO" e o menu principal de navegação.
*   **Global Footer:** Rodapé fixo contendo os contatos (e-mail, telefone), endereço físico (Rua São Bento, 405) e ícones das redes sociais.

---

## 2. Blocos Principais (Page Blocks)
Estes são os componentes que compõem o corpo das páginas. Eles devem ser criados como *Schemas* de tipo `Block` no Payload CMS.

### 2.1. Hero Countdown Block
*   **Contexto:** Utilizado na página inicial (`1-home.pdf`).
*   **Visual:** Imagem de fundo abrangente (cidade de São Paulo), logotipo central do programa ("Meu Imóvel Regular") e um contador numérico em destaque (ex: "92 13 24 52").
*   **Campos Sugeridos (Payload):**
    *   `backgroundImage` (Upload)
    *   `logo` (Upload)
    *   `counterNumbers` (Text)

### 2.2. Rich Text Block
*   **Contexto:** Universal. Utilizado nas páginas inicial e "Entenda a Lei" para textos introdutórios e explicativos.
*   **Visual:** Texto corrido puro, permitindo formatação básica (negrito, parágrafos, quebras de linha).
*   **Campos Sugeridos (Payload):**
    *   `content` (RichText)

### 2.3. Modalities Cards Block
*   **Contexto:** Utilizado na página inicial e na página "Entenda a Lei".
*   **Visual:** Uma linha ou grade de cartões (cards) para apresentar opções (Ex: Regularização Automática, Declaratória, Comum). Cada cartão contém um título, uma descrição breve e um botão "SAIBA MAIS".
*   **Campos Sugeridos (Payload):**
    *   `sectionTitle` (Text)
    *   `cards` (Array)
        *   `cardTitle` (Text)
        *   `cardDescription` (Textarea)
        *   `ctaButton` (Group: label, url)

### 2.4. Action Banners Block
*   **Contexto:** Utilizado na página inicial (`1-home.pdf`).
*   **Visual:** Blocos horizontais coloridos (chamadas de ação/CTAs) dispostos em linha (Ex: "Veja os benefícios", "Está com dúvidas?", "Saiba a situação").
*   **Campos Sugeridos (Payload):**
    *   `banners` (Array)
        *   `title` (Text)
        *   `buttonLabel` (Text)
        *   `buttonUrl` (Text)
        *   `themeColor` (Select: green, yellow, blue)

### 2.5. Benefits Grid Block
*   **Contexto:** Utilizado na página "Benefícios" (`2-info.pdf`).
*   **Visual:** Grade dividida em colunas (ex: "Benefícios para a cidade", "Benefícios para o proprietário"), contendo listas de itens em formato de *bullet points*.
*   **Campos Sugeridos (Payload):**
    *   `columns` (Array)
        *   `columnTitle` (Text)
        *   `benefitItems` (RichText ou Array de Textos)

### 2.6. FAQ / Accordion Block
*   **Contexto:** Utilizado na página "Dúvidas frequentes" (`2-info.pdf`).
*   **Visual:** Lista expansível (sanfona) para perguntas e respostas.
*   **Campos Sugeridos (Payload):**
    *   `faqItems` (Array)
        *   `question` (Text)
        *   `answer` (RichText)

### 2.7. Info Cards / Step-by-Step Block
*   **Contexto:** Utilizado em "Dúvidas frequentes" (locais de atendimento) e "Como saber a situação do meu imóvel" (`2-info.pdf`).
*   **Visual:** Componente de repetição contendo título, texto explicativo e opcionalmente um ícone/localização.
*   **Campos Sugeridos (Payload):**
    *   `cards` (Array)
        *   `title` (Text)
        *   `description` (RichText)

### 2.8. Alert Box Block
*   **Contexto:** Utilizado como caixa de "ATENÇÃO" na página de situação do imóvel (`2-info.pdf`).
*   **Visual:** Quadro de aviso com fundo destacado.
*   **Campos Sugeridos (Payload):**
    *   `alertContent` (RichText)
    *   `alertType` (Select: warning, info)

### 2.9. Media Highlight Block
*   **Contexto:** Utilizado no topo da página de "Benefícios" (`2-info.pdf`).
*   **Visual:** Uma grande imagem de destaque intercalada no conteúdo.
*   **Campos Sugeridos (Payload):**
    *   `image` (Upload)

### 2.10. Icon Grid Block (Mais reutilizado)
*   **Contexto:** Utilizado massivamente nas páginas de modalidades (`3-regular.pdf`) para as seções "Impedimentos", "Anuências" e "Exigências".
*   **Visual:** Título de seção seguido por uma grade de itens. Cada item possui um ícone pequeno e texto descritivo.
*   **Campos Sugeridos (Payload):**
    *   `sectionTitle` (Text)
    *   `gridItems` (Array)
        *   `icon` (Upload)
        *   `description` (Text)

### 2.11. Media & Text Block
*   **Contexto:** Utilizado na seção "Outorga Onerosa" e na vitrine de "Tipos de uso" (`3-regular.pdf`).
*   **Visual:** Layout de duas colunas, intercalando texto de um lado e mídia (infográficos ou imagens) do outro.
*   **Campos Sugeridos (Payload):**
    *   `alignment` (Select: media-left, media-right)
    *   `textContent` (RichText)
    *   `media` (Upload)

### 2.12. Call To Action (CTA) Block Final
*   **Contexto:** Utilizado no final das páginas de modalidades (`3-regular.pdf`).
*   **Visual:** Bloco conclusivo da página pedindo uma ação final ("Acesse o Portal de Licenciamento").
*   **Campos Sugeridos (Payload):**
    *   `title` (Text)
    *   `description` (Text)
    *   `buttonLabel` (Text)
    *   `buttonUrl` (Text)
