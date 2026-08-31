import type { MetadataRoute } from "next";
import { getPublishedPagesForSitemap, pageUrl } from "../../lib/payload/get-page";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPublishedPagesForSitemap();

  return pages.map((page) => ({
    lastModified: page.updatedAt,
    url: pageUrl(page.slug, serverUrl),
  }));
}
