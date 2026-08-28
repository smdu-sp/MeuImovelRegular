import type { HeroBlock as HeroBlockProps } from "../../payload-types";
import { Container, Heading, Section, Text } from "../../components/ui";
import { MediaImage } from "../shared/MediaImage";
import { BlockLink } from "../shared/BlockLink";

export function HeroBlock({
  cta,
  description,
  eyebrow,
  image,
  title,
  variant,
}: HeroBlockProps) {
  const centered = variant === "centered";
  const withImage = variant === "image";

  return (
    <Section spacing="xl" tone="brand">
      <Container size="lg">
        <div
          className={`grid w-full gap-10 ${withImage ? "items-center lg:grid-cols-2" : ""}`}
        >
        <div
          className={
            centered
              ? "mx-auto max-w-container-sm text-center"
              : "max-w-container-sm"
          }
        >
          {eyebrow ? (
            <Text
              as="span"
              tone="accent"
              transform="uppercase"
              variant="small"
              weight="semibold"
            >
              {eyebrow}
            </Text>
          ) : null}
          <div className="mt-3">
            <Heading
              align={centered ? "center" : "start"}
              level={1}
              size="display"
              tone="inverse"
            >
              {title}
            </Heading>
          </div>
          {description ? (
            <div className="mt-6">
              <Text
                tone="inverse"
                variant="lead"
              >
                {description}
              </Text>
            </div>
          ) : null}
          <div className="mt-8">
            <BlockLink appearance="primary" link={cta} />
          </div>
        </div>
        {withImage ? (
          <MediaImage
            className="h-auto w-full rounded-xl object-cover"
            media={image}
            priority
          />
        ) : null}
        </div>
      </Container>
    </Section>
  );
}
