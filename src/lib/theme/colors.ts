import type { TextFieldValidation } from "payload";

const hexColorPattern = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

export function isHexColor(value: unknown): value is string {
  return typeof value === "string" && hexColorPattern.test(value.trim());
}

export function normalizeHexColor(value: unknown): string | null {
  if (!isHexColor(value)) {
    return null;
  }

  return value.trim().toLowerCase();
}

export const validateOptionalHexColor = ((value) => {
  if (!value) {
    return true;
  }

  return isHexColor(value)
    ? true
    : "Informe uma cor hexadecimal valida, como #007a73.";
}) satisfies TextFieldValidation;
