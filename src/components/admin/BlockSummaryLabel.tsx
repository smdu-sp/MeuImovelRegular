"use client";

import { useRowLabel } from "@payloadcms/ui";
import {
  getBlockSummary,
  type BlockSummaryData,
} from "../../blocks/shared/get-block-summary";

export function BlockSummaryLabel() {
  const { data, rowNumber } = useRowLabel<BlockSummaryData>();

  return <span>{getBlockSummary(data, rowNumber)}</span>;
}
