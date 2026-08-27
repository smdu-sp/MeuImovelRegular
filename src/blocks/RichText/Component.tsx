import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextBlock as RichTextBlockProps } from "../../payload-types";

export function RichTextBlock({ content, width }: RichTextBlockProps) {
  return (
    <section className="px-6 py-12 sm:px-10">
      <RichText
        className={`mx-auto leading-8 text-slate-800 ${width === "wide" ? "max-w-6xl" : "max-w-3xl"}`}
        data={content}
      />
    </section>
  );
}

