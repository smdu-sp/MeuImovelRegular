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
            {title}
          </Heading>
        ) : null}
        {description ? (
          <div className="mt-4 max-w-container-sm">
            <Text variant="muted">{description}</Text>
          </div>
        ) : null}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <Card>
                <MediaImage
                  className="mb-5 h-12 w-12 object-contain"
                  media={item.icon}
                />
                <Heading level={3} size="md">
                  {item.title}
                </Heading>
                <div className="mt-3">
                  <Text>{item.description}</Text>
                </div>
                <div className="mt-5">
                  <BlockLink link={item.link} />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
