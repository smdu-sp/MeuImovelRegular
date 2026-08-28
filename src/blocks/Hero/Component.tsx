import type { HeroBlock as HeroBlockProps } from "../../payload-types";
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
    <section className="bg-secondary text-secondary-foreground">
      <div
        className={`mx-auto grid w-full max-w-container-lg gap-10 px-container py-16 sm:px-container-wide lg:py-24 ${withImage ? "items-center lg:grid-cols-2" : ""}`}
      >
        <div
          className={
            centered
              ? "mx-auto max-w-container-sm text-center"
              : "max-w-container-sm"
          }
        >
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 font-heading text-display-md font-semibold leading-tight sm:text-display-lg">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground">
              {description}
            </p>
          ) : null}
          <BlockLink
            className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            link={cta}
          />
        </div>
        {withImage ? (
          <MediaImage
            className="h-auto w-full rounded-xl object-cover"
            media={image}
            priority
          />
        ) : null}
      </div>
    </section>
  );
}
