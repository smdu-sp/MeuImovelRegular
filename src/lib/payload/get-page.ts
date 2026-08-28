import type { Metadata } from "next";
import { getPayload } from "payload";

import config from "@payload-config";
import type { Page, SiteSetting } from "../../payload-types";

type PageMetadataSource = Pick<Page, "seo" | "title">;

type GetPageOptions = {
  draft?: boolean;
};

export async function getPage(
  slug: string,
  { draft = false }: GetPageOptions = {},
): Promise<Page | null> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    depth: 2,
    draft,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
      ...(draft
        ? {}
        : {
            _status: {
              equals: "published",
            },
          }),
    },
  });

  return result.docs[0] ?? null;
}

export async function getSiteSettings(): Promise<SiteSetting | null> {
  const payload = await getPayload({ config });

  try {
    return await payload.findGlobal({
      slug: "site-settings",
      depth: 2,
    });
  } catch {
    return null;
  }
}

export function resolvePageMetadata(
  page: PageMetadataSource,
  siteSettings: SiteSetting | null,
): Metadata {
  const title =
    page.seo?.title ||
    page.title ||
    siteSettings?.defaultSEO?.title ||
    siteSettings?.siteName ||
    "Meu Imovel Regular";
  const description =
    page.seo?.description || siteSettings?.defaultSEO?.description || undefined;

  return {
    title,
    description,
  };
}
