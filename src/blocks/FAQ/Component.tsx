import { RichText } from "@payloadcms/richtext-lexical/react";
import type { FAQAccordionBlock as FAQAccordionBlockProps } from "../../payload-types";
import { Container, Heading, Section, Text } from "../../components/ui";

type FAQVariant = "compact" | "default";

export function normalizeFAQVariant(
  variant: FAQAccordionBlockProps["variant"] | string | null | undefined,
): FAQVariant {
  return variant === "compact" ? "compact" : "default";
}

export function FAQAccordionBlock({
  description,
  items,
  title,
  variant,
}: FAQAccordionBlockProps) {
  const normalizedVariant = normalizeFAQVariant(variant);

  return (
    <Section spacing={normalizedVariant === "compact" ? "sm" : "md"} tone="muted">
      <Container size="md">
        <Heading level={2} size="lg">
          <span className="text-balance break-words">{title}</span>
        </Heading>
        {description ? (
          <div className="mt-4">
            <Text variant="muted">{description}</Text>
          </div>
        ) : null}
        <div className="mt-8 divide-y divide-border rounded-lg border border-border bg-surface">
          {items.map((item) => (
            <details className="group" key={item.id}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-semibold text-foreground outline-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-focus [&::-webkit-details-marker]:hidden">
                <span className="break-words">{item.question}</span>
                <span aria-hidden="true" className="mt-1 shrink-0 text-primary">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <RichText className="cms-rich-text leading-relaxed" data={item.answer} />
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
