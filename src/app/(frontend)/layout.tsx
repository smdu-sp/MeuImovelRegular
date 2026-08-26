import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Imovel Regular",
  description: "Regularizacao imobiliaria com informacao clara e acessivel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
