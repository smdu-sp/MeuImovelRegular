import type {
  RichTextFieldValidation,
  SelectFieldSingleValidation,
  TextareaFieldValidation,
  TextFieldValidation,
} from "payload";

const hasNonBlankText = (value: unknown): boolean =>
  typeof value === "string" && value.trim().length > 0;

export const requiredText = (message: string): TextFieldValidation =>
  ((value) => hasNonBlankText(value) || message) satisfies TextFieldValidation;

export const requiredTextarea = (message: string): TextareaFieldValidation =>
  ((value) => hasNonBlankText(value) || message) satisfies TextareaFieldValidation;

export const closedSelect = (
  values: readonly string[],
  message: string,
): SelectFieldSingleValidation =>
  ((value) =>
    typeof value === "string" && values.includes(value) ? true : message) satisfies SelectFieldSingleValidation;

export const richTextHasContent = (value: unknown): boolean => {
  if (hasNonBlankText(value)) return true;
  if (Array.isArray(value)) return value.some(richTextHasContent);
  if (!value || typeof value !== "object") return false;

  const record = value as Record<string, unknown>;
  if (record.type === "upload" || record.type === "relationship") return true;

  return Object.entries(record).some(
    ([key, child]) => key !== "type" && richTextHasContent(child),
  );
};

export const requiredRichText = (message: string): RichTextFieldValidation =>
  ((value) => richTextHasContent(value) || message) satisfies RichTextFieldValidation;
