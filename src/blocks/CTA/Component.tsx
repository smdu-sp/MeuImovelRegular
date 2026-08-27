import type { CTABlock as CTABlockProps } from "../../payload-types";
import { BlockLink } from "../shared/BlockLink";

export function CTABlock({ action, description, title, variant }: CTABlockProps) {
  const primary = variant === "primary";

  return (
    <section className="px-6 py-14 sm:px-10">
      <div
        className={`mx-auto max-w-6xl rounded-2xl px-6 py-10 sm:px-10 ${primary ? "bg-blue-900 text-white" : "bg-amber-100 text-slate-950"}`}
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
        {description ? <p className="mt-4 max-w-3xl text-lg leading-8">{description}</p> : null}
        <BlockLink
          className={`mt-7 inline-flex rounded-md px-5 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 ${primary ? "bg-white text-blue-900" : "bg-slate-950 text-white"}`}
          link={action}
        />
      </div>
    </section>
  );
}
