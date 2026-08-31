import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextBlock as RichTextBlockProps } from "../../payload-types";
import { Container, Section } from "../../components/ui";

type RichTextVariant = "default" | "narrow";

type RichTextBlockWithLegacyProps = RichTextBlockProps & {
  width?: "content" | "wide" | string | null;
};

export function normalizeRichTextVariant(
  variant: RichTextBlockProps["variant"] | "content" | "wide" | string | null | undefined,
): RichTextVariant {
  if (variant === "narrow" || variant === "content") return "narrow";
  return "default";
}

export function RichTextBlock({
  content,
  variant,
  width,
}: RichTextBlockWithLegacyProps) {
  const normalizedVariant = normalizeRichTextVariant(variant ?? width);

  return (
    <Section spacing={normalizedVariant === "narrow" ? "sm" : "md"} tone="default">
      <Container size={normalizedVariant === "narrow" ? "sm" : "lg"}>
        <RichText
          className={`cms-rich-text leading-relaxed ${normalizedVariant === "default" ? "cms-rich-text--wide" : ""}`}
          data={content}
        />
      </Container>
    </Section>
  );
}

