import type { IconGridBlock as IconGridBlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { BlockLink } from "../shared/BlockLink";
import { MediaImage } from "../shared/MediaImage";

type IconGridVariant = "compact" | "default";

export function normalizeIconGridVariant(
  variant: IconGridBlockProps["variant"] | string | null | undefined,
): IconGridVariant {
  return variant === "compact" ? "compact" : "default";
}

export function IconGridBlock({
  description,
  items,
  title,
  variant,
}: IconGridBlockProps) {
  const normalizedVariant = normalizeIconGridVariant(variant);
  const compact = normalizedVariant === "compact";

  return (
    <Section spacing={compact ? "sm" : "md"} tone="default">
      <Container size="lg">
        <Heading level={2} size="lg">
          <span className="text-balance break-words">{title}</span>
        </Heading>
        {description ? (
          <div className="mt-4 max-w-container-sm">
            <Text variant="muted">{description}</Text>
          </div>
        ) : null}
        <ul
          className={`mt-8 grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {items.map((item) => (
            <li key={item.id}>
              <Card fullHeight padding={compact ? "sm" : "md"}>
                <div className="flex gap-4">
                  <MediaImage
                    className={`${compact ? "h-9 w-9" : "h-11 w-11"} shrink-0 object-contain`}
                    media={item.icon}
                  />
                  <div className="min-w-0">
                    <Text weight="semibold">
                      <span className="break-words">{item.description}</span>
                    </Text>
                    {item.link?.label ? (
                      <div className="mt-4">
                        <BlockLink link={item.link} size="sm" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
