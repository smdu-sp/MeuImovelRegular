import type { CTABlock as CTABlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { BlockLink } from "../shared/BlockLink";

type CTAVariant = "brand" | "compact" | "default";

const ctaVariantStyles = {
  brand: {
    actionAppearance: "secondary",
    cardTone: "brand",
    containerSize: "lg",
    descriptionSpacing: "mt-4",
    linkSize: "md",
    padding: "lg",
    headingSize: "lg",
    actionSpacing: "mt-7",
    sectionSpacing: "md",
    textTone: "inverse",
    titleTone: "inverse",
  },
  compact: {
    actionAppearance: "primary",
    cardTone: "surface",
    containerSize: "md",
    descriptionSpacing: "mt-3",
    linkSize: "sm",
    padding: "md",
    headingSize: "md",
    actionSpacing: "mt-5",
    sectionSpacing: "sm",
    textTone: "default",
    titleTone: "default",
  },
  default: {
    actionAppearance: "primary",
    cardTone: "accent",
    containerSize: "lg",
    descriptionSpacing: "mt-4",
    linkSize: "md",
    padding: "lg",
    headingSize: "lg",
    actionSpacing: "mt-7",
    sectionSpacing: "md",
    textTone: "default",
    titleTone: "default",
  },
} as const;

export function normalizeCTAVariant(
  variant: CTABlockProps["variant"] | "primary" | "secondary" | string | null | undefined,
): CTAVariant {
  if (variant === "brand" || variant === "compact" || variant === "default") return variant;
  if (variant === "primary") return "brand";
  return "default";
}

export function CTABlock({ action, description, title, variant }: CTABlockProps) {
  const styles = ctaVariantStyles[normalizeCTAVariant(variant)];

  return (
    <Section spacing={styles.sectionSpacing} tone="default">
      <Container size={styles.containerSize}>
        <Card padding={styles.padding} tone={styles.cardTone}>
          <Heading level={2} size={styles.headingSize} tone={styles.titleTone}>
            <span className="text-balance break-words">{title}</span>
          </Heading>
          {description ? (
            <div className={`${styles.descriptionSpacing} max-w-container-sm`}>
              <Text tone={styles.textTone} variant="lead">
                {description}
              </Text>
            </div>
          ) : null}
          {action?.label ? (
            <div className={styles.actionSpacing}>
              <BlockLink
                appearance={styles.actionAppearance}
                link={action}
                size={styles.linkSize}
              />
            </div>
          ) : null}
        </Card>
      </Container>
    </Section>
  );
}
