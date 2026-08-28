import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextBlock as RichTextBlockProps } from "../../payload-types";
import { Container, Section } from "../../components/ui";

export function RichTextBlock({ content, width }: RichTextBlockProps) {
  return (
    <Section spacing="sm" tone="default">
      <Container size={width === "wide" ? "lg" : "sm"}>
      <RichText
        className="cms-rich-text leading-relaxed"
        data={content}
      />
      </Container>
    </Section>
  );
}

