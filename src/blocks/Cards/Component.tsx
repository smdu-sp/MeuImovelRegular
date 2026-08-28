import type { CardsBlock as CardsBlockProps } from "../../payload-types";
import { MediaImage } from "../shared/MediaImage";
import { BlockLink } from "../shared/BlockLink";

export function CardsBlock({ description, items, title }: CardsBlockProps) {
  return (
    <section className="bg-muted px-container py-14 sm:px-container-wide">
      <div className="mx-auto max-w-container-lg">
        {title ? (
          <h2 className="font-heading text-heading-lg font-semibold text-heading">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="mt-4 max-w-container-sm text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              className="rounded-lg border border-border bg-surface p-6"
              key={item.id}
            >
              <MediaImage
                className="mb-5 h-12 w-12 object-contain"
                media={item.icon}
              />
              <h3 className="font-heading text-heading-md font-semibold text-heading">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground">
                {item.description}
              </p>
              <BlockLink
                className="mt-5 inline-flex font-semibold text-link underline decoration-2 underline-offset-4"
                link={item.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
