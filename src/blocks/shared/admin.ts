import type { Block } from "payload";

export const blockSummaryLabel =
  "/components/admin/BlockSummaryLabel#BlockSummaryLabel";

export function createBlockAdmin(
  group: "Conteúdo" | "Mídia" | "Ações",
): NonNullable<Block["admin"]> {
  return {
    group,
    components: {
      Label: blockSummaryLabel,
    },
  };
}
