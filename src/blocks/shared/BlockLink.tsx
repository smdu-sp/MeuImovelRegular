import Link from "next/link";
import type { Page } from "../../payload-types";
import { pageSlugToPath } from "../../domain/slug";
import { Button, type ButtonSize, type ButtonVariant } from "../../components/ui";

export type LinkValue = {
  label?: string | null;
  type?: "internal" | "external" | null;
  page?: number | Page | null;
  url?: string | null;
  newTab?: boolean | null;
};

type BlockLinkAppearance = "text" | ButtonVariant;

const getHref = (link: LinkValue): string | null => {
  if (link.type === "external") {
    return link.url || null;
  }

  if (link.page && typeof link.page === "object") {
    return pageSlugToPath(link.page.slug);
  }

  return null;
};

export function BlockLink({
  appearance = "text",
  link,
  size = "md",
}: {
  appearance?: BlockLinkAppearance;
  link?: LinkValue | null;
  size?: ButtonSize;
}) {
  if (!link?.label) return null;

  const href = getHref(link);
  if (!href) return null;

  const target = link.newTab ? "_blank" : undefined;
  const rel = link.newTab ? "noopener noreferrer" : undefined;

  if (appearance !== "text") {
    return (
      <Button href={href} rel={rel} size={size} target={target} variant={appearance}>
        {link.label}
      </Button>
    );
  }

  return (
    <Link
      className="font-semibold text-link underline decoration-2 underline-offset-4"
      href={href}
      rel={rel}
      target={target}
    >
      {link.label}
    </Link>
  );
}

