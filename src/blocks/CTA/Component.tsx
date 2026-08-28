import type { CTABlock as CTABlockProps } from "../../payload-types";
import { BlockLink } from "../shared/BlockLink";

export function CTABlock({ action, description, title, variant }: CTABlockProps) {
  const primary = variant === "primary";

  return (
    <section className="bg-page px-6 py-14 sm:px-10">
      <div
        className={`mx-auto max-w-6xl rounded-lg px-6 py-10 sm:px-10 ${primary ? "bg-surface-strong text-surface-strong-foreground" : "border border-border bg-accent-soft text-heading"}`}
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
        {description ? <p className="mt-4 max-w-3xl text-lg leading-8">{description}</p> : null}
        <BlockLink
          className={`mt-7 inline-flex rounded-md px-5 py-3 font-semibold transition-colors ${primary ? "bg-surface text-surface-strong hover:bg-surface-muted" : "bg-brand text-brand-foreground hover:bg-brand-hover"}`}
          link={action}
        />
      </div>
    </section>
  );
}
