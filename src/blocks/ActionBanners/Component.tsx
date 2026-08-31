import type { ActionBannersBlock as ActionBannersBlockProps } from "../../payload-types";
import { Card, Container, Heading, Section, Text } from "../../components/ui";
import { BlockLink } from "../shared/BlockLink";

type ActionBannersVariant = "grid" | "stacked";
type ActionBannerAppearance = "accent" | "brand" | "primary";

const bannerStyles = {
  accent: {
    cardTone: "accent",
    linkAppearance: "primary",
    textTone: "default",
    titleTone: "default",
  },
  brand: {
    cardTone: "brand",
    linkAppearance: "secondary",
    textTone: "inverse",
    titleTone: "inverse",
  },
  primary: {
    cardTone: "surface",
    linkAppearance: "primary",
    textTone: "default",
    titleTone: "default",
  },
} as const;

export function normalizeActionBannersVariant(
  variant: ActionBannersBlockProps["variant"] | string | null | undefined,
): ActionBannersVariant {
  return variant === "stacked" ? "stacked" : "grid";
}

export function normalizeActionBannerAppearance(
  appearance: ActionBannersBlockProps["banners"][number]["appearance"] | string | null | undefined,
): ActionBannerAppearance {
  if (appearance === "brand" || appearance === "accent") return appearance;
  return "primary";
}

export function ActionBannersBlock({
  banners,
  title,
  variant,
}: ActionBannersBlockProps) {
  const normalizedVariant = normalizeActionBannersVariant(variant);

  return (
    <Section spacing="md" tone="default">
      <Container size="lg">
        {title ? (
          <Heading level={2} size="lg">
            <span className="text-balance break-words">{title}</span>
          </Heading>
        ) : null}
        <ul
          className={`grid gap-5 ${title ? "mt-8" : ""} ${
            normalizedVariant === "grid" ? "lg:grid-cols-3" : ""
          }`}
        >
          {banners.map((banner) => {
            const styles = bannerStyles[normalizeActionBannerAppearance(banner.appearance)];

            return (
              <li key={banner.id}>
                <Card fullHeight padding="lg" tone={styles.cardTone}>
                  <Heading level={3} size="md" tone={styles.titleTone}>
                    <span className="break-words">{banner.title}</span>
                  </Heading>
                  {banner.description ? (
                    <div className="mt-3">
                      <Text tone={styles.textTone}>{banner.description}</Text>
                    </div>
                  ) : null}
                  <div className="mt-auto pt-6">
                    <BlockLink
                      appearance={styles.linkAppearance}
                      link={banner.button}
                    />
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
