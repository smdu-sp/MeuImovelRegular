import type { CTABlock as CTABlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { BlockLink } from "../shared/BlockLink";

export function CTABlock({ action, description, title, variant }: CTABlockProps) {
  const primary = variant === "primary";

  return (
    <Section spacing="md" tone="default">
      <Container size="lg">
        <Card tone={primary ? "brand" : "accent"}>
        <Heading level={2} size="lg" tone={primary ? "inverse" : "default"}>
          {title}
        </Heading>
        {description ? (
          <div className="mt-4 max-w-container-sm">
            <Text tone={primary ? "inverse" : "default"} variant="lead">
              {description}
            </Text>
          </div>
        ) : null}
        <div className="mt-7">
          <BlockLink appearance={primary ? "secondary" : "primary"} link={action} />
        </div>
        </Card>
      </Container>
    </Section>
  );
}
