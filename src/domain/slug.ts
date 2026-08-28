export const HOME_SLUG = "home";

export const normalizePageSlug = (value: unknown): string => {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value
    .trim()
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\/+|\/+$/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || (value.trim().includes("/") ? HOME_SLUG : "");
};

export const validatePageSlug = (value: unknown): true | string => {
  if (typeof value !== "string" || value.length === 0) {
    return "Informe um slug.";
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    return "Use apenas letras minúsculas, números e hífens.";
  }

  return true;
};

export const pathToPageSlug = (path: string): string => {
  const normalizedPath = path.trim().replace(/^\/+|\/+$/g, "");

  return normalizedPath ? normalizePageSlug(normalizedPath) : HOME_SLUG;
};

export const pageSlugToPath = (slug: string): string => {
  const normalizedSlug = normalizePageSlug(slug);

  return normalizedSlug === HOME_SLUG ? "/" : `/${normalizedSlug}`;
};

