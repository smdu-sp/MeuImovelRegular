import type { CTABlock as CTABlockProps } from "../../payload-types";
import { BlockLink } from "../shared/BlockLink";

export function CTABlock({ action, description, title, variant }: CTABlockProps) {
  const primary = variant === "primary";

  return (
    <section className="bg-background px-container py-14 sm:px-container-wide">
      <div
        className={`mx-auto max-w-container-lg rounded-lg px-container py-10 sm:px-container-wide ${primary ? "bg-secondary text-secondary-foreground" : "border border-border bg-accent text-accent-foreground"}`}
      >
        <h2 className="font-heading text-heading-lg font-semibold">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-container-sm text-lg leading-relaxed">
            {description}
          </p>
        ) : null}
        <BlockLink
          className={`mt-7 inline-flex rounded-md px-5 py-3 font-semibold transition-colors ${primary ? "bg-surface text-secondary hover:bg-muted" : "bg-primary text-primary-foreground hover:bg-primary-hover"}`}
          link={action}
        />
      </div>
    </section>
  );
}
