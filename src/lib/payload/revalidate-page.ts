import { revalidatePath } from "next/cache";

import { pageSlugToPath } from "../../domain/slug";

export function revalidatePage(slug: unknown): void {
  if (typeof slug !== "string") {
    return;
  }

  revalidatePath(pageSlugToPath(slug));
}
