import type { Metadata } from "next";
import type { CSSProperties } from "react";
import type { ReactNode } from "react";
import { getTheme } from "../../lib/theme/get-theme";
import { mapThemeToCssVariables } from "../../lib/theme/map-theme-to-css-variables";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Imovel Regular",
  description: "Regularizacao imobiliaria com informacao clara e acessivel.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const theme = await getTheme();
  const themeVariables = mapThemeToCssVariables(theme) as CSSProperties;

  return (
    <html lang="pt-BR" className="h-full antialiased" style={themeVariables}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
