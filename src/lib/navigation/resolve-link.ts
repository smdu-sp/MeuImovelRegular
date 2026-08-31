import type { Page } from "../../payload-types";
import { pageSlugToPath } from "../../domain/slug";

export type NavigationLink = {
  label?: string | null;
  type?: "internal" | "external" | null;
  page?: number | Page | null;
  url?: string | null;
  newTab?: boolean | null;
};

export type ResolvedLink = {
  href: string;
  label: string;
  rel?: "noopener noreferrer";
  target?: "_blank";
};

export const resolveLinkHref = (link: NavigationLink): string | null => {
  if (link.page && typeof link.page === "object") {
    return pageSlugToPath(link.page.slug);
  }

  if (link.type === "external" || link.url) {
    return link.url || null;
  }

  return null;
};

export const resolveLink = (link?: NavigationLink | null): ResolvedLink | null => {
  if (!link?.label) return null;

  const href = resolveLinkHref(link);
  if (!href) return null;

  return {
    href,
    label: link.label,
    rel: link.newTab ? "noopener noreferrer" : undefined,
    target: link.newTab ? "_blank" : undefined,
  };
};
