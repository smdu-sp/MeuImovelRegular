# SPEC-026 — Validação editorial

As validações desta etapa impedem erros estruturais no catálogo aprovado sem interpretar conteúdo jurídico ou decidir elegibilidade.

## Regras aplicadas

- Textos obrigatórios rejeitam valores vazios ou formados apenas por espaços e mostram mensagens editoriais específicas.
- Conteúdo Rich Text rejeita documentos Lexical estruturalmente vazios.
- Cards, faixas de ação, perguntas frequentes e grades de ícones exigem ao menos um item; os campos estruturais de cada item também são obrigatórios.
- Links opcionais podem permanecer totalmente vazios. Ao informar texto ou destino, o restante do link passa a ser obrigatório.
- Links obrigatórios exigem texto visível, tipo e destino interno ou URL externa completa.
- Variants, tipos e aparências aceitam somente os valores fechados do Design System.
- Uploads continuam restritos à Collection Media e à política de MIME types e texto alternativo da Media Library.

## Checkpoint B — experiência editorial

1. O catálogo usa labels, descrições, grupos e mensagens compreensíveis para editores.
2. Os roteiros de montagem da SPEC-024 permitem compor páginas sem consultar código.
3. Live Preview e Preview tradicional permitem conferir o resultado.
4. Campos, arrays, links, Rich Text e enums impedem erros estruturais básicos.
5. Variants e aparências permanecem fechadas nos tokens aprovados do Design System.

## Limites

Não foram adicionadas validações de modalidade, elegibilidade, datas legais, CEDI, Outorga, taxas ou prazos jurídicos. Blocks adiados nas decisões da SPEC-018 não foram criados para atender esta spec.
