import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RenderBlocks } from "../../components/RenderBlocks";
import { HOME_SLUG } from "../../domain/slug";
import {
  getPage,
  getSiteSettings,
  resolvePageMetadata,
} from "../../lib/payload/get-page";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage(HOME_SLUG);

  if (!page) {
    return {};
  }

  const siteSettings = await getSiteSettings();

  return resolvePageMetadata(page, siteSettings);
}

export default async function Home() {
  const page = await getPage(HOME_SLUG);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <RenderBlocks blocks={page.layout} />
    </main>
  );
}
