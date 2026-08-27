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
    <section className="bg-slate-950 text-white">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:py-24 ${withImage ? "items-center lg:grid-cols-2" : ""}`}
      >
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-lg leading-8 text-slate-200">{description}</p>
          ) : null}
          <BlockLink
            className="mt-8 inline-flex rounded-md bg-amber-400 px-5 py-3 font-semibold text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
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
