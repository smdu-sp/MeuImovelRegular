import { getPayload } from "payload";

import config from "@payload-config";
import type { SiteSetting } from "../../payload-types";

export type Theme = Pick<SiteSetting, "branding"> | null;

export async function getTheme(): Promise<Theme> {
  const payload = await getPayload({ config });

  try {
    return await payload.findGlobal({
      slug: "site-settings",
      depth: 1,
    });
  } catch {
    return null;
  }
}
