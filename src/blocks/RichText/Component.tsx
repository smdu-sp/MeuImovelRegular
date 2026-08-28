import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextBlock as RichTextBlockProps } from "../../payload-types";

export function RichTextBlock({ content, width }: RichTextBlockProps) {
  return (
    <section className="bg-background px-container py-12 sm:px-container-wide">
      <RichText
        className={`cms-rich-text mx-auto leading-relaxed ${width === "wide" ? "max-w-container-lg" : "max-w-container-sm"}`}
        data={content}
      />
    </section>
  );
}

