import type { CardsBlock as CardsBlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { MediaImage } from "../shared/MediaImage";
import { BlockLink } from "../shared/BlockLink";

export function CardsBlock({ description, items, title }: CardsBlockProps) {
  return (
    <Section spacing="md" tone="muted">
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
              <Card fullHeight interactive>
                <MediaImage
                  className="mb-5 h-12 w-12 shrink-0 object-contain"
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
