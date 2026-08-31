import type { CardsBlock as CardsBlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { MediaImage } from "../shared/MediaImage";
import { BlockLink } from "../shared/BlockLink";

type CardsVariant = "default" | "modalities";

export function normalizeCardsVariant(
  variant: CardsBlockProps["variant"] | string | null | undefined,
): CardsVariant {
  return variant === "modalities" ? "modalities" : "default";
}

export function CardsBlock({ description, items, title, variant }: CardsBlockProps) {
  const normalizedVariant = normalizeCardsVariant(variant);
  const modalities = normalizedVariant === "modalities";

  return (
    <Section spacing="md" tone={modalities ? "default" : "muted"}>
      <Container size="lg">
        {title ? (
          <Heading level={2} size="lg">
            <span className="text-balance break-words">{title}</span>
          </Heading>
        ) : null}
        {description ? (
          <div className="mt-4 max-w-container-sm">
            <Text variant="muted">{description}</Text>
          </div>
        ) : null}
        <ul className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <Card fullHeight interactive padding={modalities ? "lg" : "md"}>
                <MediaImage
                  className={`${modalities ? "mb-6 h-14 w-14" : "mb-5 h-12 w-12"} shrink-0 object-contain`}
                  media={item.icon}
                />
                <Heading level={3} size="md">
                  <span className="break-words">{item.title}</span>
                </Heading>
                <div className="mt-3">
                  <Text>{item.description}</Text>
                </div>
                {item.link?.label ? (
                  <div className="mt-auto pt-5">
                    <BlockLink link={item.link} />
                  </div>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
