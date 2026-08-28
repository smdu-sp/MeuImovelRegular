import { RichText } from "@payloadcms/richtext-lexical/react";
import type { ImageTextBlock as ImageTextBlockProps } from "../../payload-types";
import { Container, Heading, Section } from "../../components/ui";
import { MediaImage } from "../shared/MediaImage";
import { BlockLink } from "../shared/BlockLink";

export function ImageTextBlock({
  content,
  cta,
  image,
  imagePosition,
  title,
}: ImageTextBlockProps) {
  return (
    <Section spacing="sm" tone="default">
      <Container size="lg">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <MediaImage
          className={`h-auto w-full rounded-xl object-cover ${imagePosition === "right" ? "lg:order-2" : ""}`}
          media={image}
        />
        <div>
          <Heading level={2} size="lg">
            {title}
          </Heading>
          <RichText
            className="cms-rich-text mt-5 leading-relaxed"
            data={content}
          />
          <div className="mt-6">
            <BlockLink link={cta} />
          </div>
        </div>
      </div>
      </Container>
    </Section>
  );
}
