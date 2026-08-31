import type { Metadata } from "next";
import type { Media, Page, SiteSetting } from "../../payload-types";

type SeoSource = {
  canonical?: string | null;
  description?: string | null;
  image?: (number | null) | Media;
  metaDescription?: string | null;
  metaTitle?: string | null;
  noFollow?: boolean | null;
  noIndex?: boolean | null;
  socialImage?: (number | null) | Media;
  title?: string | null;
};

type PageMetadataSource = Pick<Page, "seo" | "title">;

const defaultTitle = "Meu Imovel Regular";

const getMediaUrl = (media?: (number | null) | Media): string | null => {
  if (!media || typeof media !== "object" || !media.url) return null;

  try {
    return new URL(media.url).toString();
  } catch {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!serverUrl) return media.url;

    try {
      return new URL(media.url, serverUrl).toString();
    } catch {
      return media.url;
    }
  }
};

const resolveSeoTitle = (
  page: PageMetadataSource,
  siteSettings: SiteSetting | null,
): string =>
  page.seo?.metaTitle ||
  page.seo?.title ||
  siteSettings?.defaultSEO?.metaTitle ||
  siteSettings?.defaultSEO?.title ||
  page.title ||
  siteSettings?.siteName ||
  defaultTitle;

const resolveSeoDescription = (
  pageSeo: SeoSource | undefined,
  defaultSeo: SeoSource | undefined,
): string | undefined =>
  pageSeo?.metaDescription ||
  pageSeo?.description ||
  defaultSeo?.metaDescription ||
  defaultSeo?.description ||
  undefined;

const resolveSeoImage = (
  pageSeo: SeoSource | undefined,
  defaultSeo: SeoSource | undefined,
): string | null =>
  getMediaUrl(pageSeo?.socialImage) ||
  getMediaUrl(pageSeo?.image) ||
  getMediaUrl(defaultSeo?.socialImage) ||
  getMediaUrl(defaultSeo?.image);

export function generatePageMetadata(
  page: PageMetadataSource,
  siteSettings: SiteSetting | null,
  { draft = false }: { draft?: boolean } = {},
): Metadata {
  const pageSeo = page.seo as SeoSource | undefined;
  const defaultSeo = siteSettings?.defaultSEO as SeoSource | undefined;
  const title = resolveSeoTitle(page, siteSettings);
  const description = resolveSeoDescription(pageSeo, defaultSeo);
  const socialImage = resolveSeoImage(pageSeo, defaultSeo);
  const shouldNoIndex = draft || Boolean(pageSeo?.noIndex);
  const shouldNoFollow = draft || Boolean(pageSeo?.noFollow);

  return {
    alternates: pageSeo?.canonical
      ? {
          canonical: pageSeo.canonical,
        }
      : undefined,
    description,
    openGraph: {
      description,
      images: socialImage ? [{ url: socialImage }] : undefined,
      title,
      type: "website",
    },
    robots: {
      follow: !shouldNoFollow,
      index: !shouldNoIndex,
    },
    title,
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      description,
      images: socialImage ? [socialImage] : undefined,
      title,
    },
  };
}

export function generateSiteMetadata(siteSettings: SiteSetting | null): Metadata {
  const defaultSeo = siteSettings?.defaultSEO as SeoSource | undefined;
  const title =
    defaultSeo?.metaTitle ||
    defaultSeo?.title ||
    siteSettings?.siteName ||
    defaultTitle;
  const description =
    defaultSeo?.metaDescription || defaultSeo?.description || undefined;
  const socialImage = resolveSeoImage(undefined, defaultSeo);

  return {
    description,
    openGraph: {
      description,
      images: socialImage ? [{ url: socialImage }] : undefined,
      title,
      type: "website",
    },
    title,
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      description,
      images: socialImage ? [socialImage] : undefined,
      title,
    },
  };
}
