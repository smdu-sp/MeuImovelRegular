import { revalidatePath } from "next/cache";

import { pageSlugToPath } from "../../domain/slug";

export function revalidatePage(slug: unknown): void {
  if (typeof slug !== "string") {
    return;
  }

  try {
    revalidatePath(pageSlugToPath(slug));
  } catch {
    // Seeds and CLI scripts run outside the Next.js request/cache context.
  }
}
