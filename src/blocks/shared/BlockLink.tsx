import Link from "next/link";
import type { Page } from "../../payload-types";

export type LinkValue = {
  label?: string | null;
  type?: "internal" | "external" | null;
  page?: number | Page | null;
  url?: string | null;
  newTab?: boolean | null;
};

const getHref = (link: LinkValue): string | null => {
  if (link.type === "external") {
    return link.url || null;
  }

  if (link.page && typeof link.page === "object") {
    return link.page.slug === "home" ? "/" : `/${link.page.slug}`;
  }

  return null;
};

export function BlockLink({
  className,
  link,
}: {
  className?: string;
  link?: LinkValue | null;
}) {
  if (!link?.label) return null;

  const href = getHref(link);
  if (!href) return null;

  const target = link.newTab ? "_blank" : undefined;
  const rel = link.newTab ? "noopener noreferrer" : undefined;

  return (
    <Link className={className} href={href} rel={rel} target={target}>
      {link.label}
    </Link>
  );
}

