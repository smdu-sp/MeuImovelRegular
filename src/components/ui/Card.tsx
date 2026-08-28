import type { ReactNode } from "react";

import { classNames } from "./classNames";

const cardTones = {
  surface: "border border-border bg-surface text-foreground",
  accent: "border border-border bg-accent text-accent-foreground",
  brand: "bg-secondary text-secondary-foreground",
} as const;

export type CardTone = keyof typeof cardTones;

type CardProps = {
  children: ReactNode;
  tone?: CardTone;
};

export function Card({ children, tone = "surface" }: CardProps) {
  return <div className={classNames("rounded-lg p-6", cardTones[tone])}>{children}</div>;
}
