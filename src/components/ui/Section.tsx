import type { ReactNode } from "react";

import { classNames } from "./classNames";

const sectionSpacings = {
  sm: "py-12",
  md: "py-14",
  lg: "py-16",
  xl: "py-24",
} as const;

const sectionTones = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  brand: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
} as const;

export type SectionSpacing = keyof typeof sectionSpacings;
export type SectionTone = keyof typeof sectionTones;

type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
  tone?: SectionTone;
};

export function Section({
  children,
  spacing = "md",
  tone = "default",
}: SectionProps) {
  return (
    <section className={classNames(sectionTones[tone], sectionSpacings[spacing])}>
      {children}
    </section>
  );
}
