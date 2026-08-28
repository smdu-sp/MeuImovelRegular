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
    <section className="bg-surface-strong text-surface-strong-foreground">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:py-24 ${withImage ? "items-center lg:grid-cols-2" : ""}`}
      >
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase text-accent-soft">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg leading-8 text-surface-strong-foreground">
              {description}
            </p>
          ) : null}
          <BlockLink
            className="mt-8 inline-flex rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
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
