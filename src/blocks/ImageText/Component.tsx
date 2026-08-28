import { RichText } from "@payloadcms/richtext-lexical/react";
import type { ImageTextBlock as ImageTextBlockProps } from "../../payload-types";
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
    <section className="bg-background px-container py-12 sm:px-container-wide">
      <div className="mx-auto grid max-w-container-lg items-center gap-10 lg:grid-cols-2">
        <MediaImage
          className={`h-auto w-full rounded-xl object-cover ${imagePosition === "right" ? "lg:order-2" : ""}`}
          media={image}
        />
        <div>
          <h2 className="font-heading text-heading-lg font-semibold text-heading">
            {title}
          </h2>
          <RichText
            className="cms-rich-text mt-5 leading-relaxed"
            data={content}
          />
          <BlockLink
            className="mt-6 inline-flex font-semibold text-link underline decoration-2 underline-offset-4"
            link={cta}
          />
        </div>
      </div>
    </section>
  );
}
