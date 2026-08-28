import type { SiteSetting } from "../../payload-types";
import { normalizeHexColor } from "./colors";

export type ThemeCssVariables = Record<`--${string}`, string>;

type ThemeSource = Pick<SiteSetting, "branding"> | null;

export function mapThemeToCssVariables(theme: ThemeSource): ThemeCssVariables {
  const primary = normalizeHexColor(theme?.branding?.primaryColor);
  const secondary = normalizeHexColor(theme?.branding?.secondaryColor);
  const accent = normalizeHexColor(theme?.branding?.accentColor);
  const variables: ThemeCssVariables = {};

  if (primary) {
    variables["--color-primary"] = primary;
    variables["--color-brand"] = primary;
    variables["--color-link"] = primary;
  }

  if (secondary) {
    variables["--color-secondary"] = secondary;
    variables["--color-surface-strong"] = secondary;
  }

  if (accent) {
    variables["--color-accent"] = accent;
    variables["--color-accent-soft"] = accent;
  }

  return variables;
}
