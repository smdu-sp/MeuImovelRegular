import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RenderBlocks } from "../../../components/RenderBlocks";
import { HOME_SLUG, pathToPageSlug } from "../../../domain/slug";
import {
  getPage,
  getSiteSettings,
  resolvePageMetadata,
} from "../../../lib/payload/get-page";

export const dynamic = "force-dynamic";

type Args = {
  params: Promise<{
    slug: string;
  }>;
};

async function getRoutePage({ params }: Args) {
  const { slug } = await params;
  const pageSlug = pathToPageSlug(slug);

  if (pageSlug === HOME_SLUG) {
    return null;
  }

  return getPage(pageSlug);
}

export async function generateMetadata(args: Args): Promise<Metadata> {
  const page = await getRoutePage(args);

  if (!page) {
    return {};
  }

  const siteSettings = await getSiteSettings();

  return resolvePageMetadata(page, siteSettings);
}

export default async function Page(args: Args) {
  const page = await getRoutePage(args);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <RenderBlocks blocks={page.layout} />
    </main>
  );
}
