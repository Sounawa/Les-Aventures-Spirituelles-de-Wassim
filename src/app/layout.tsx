import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Les Aventures Spirituelles de Wassim | مغامرات وسيم الروحية",
  description: "Un livre dont tu es le héros — Découvre le cheminement spirituel de Wassim, un garçon de 6 ans qui apprend à connaître Allah avec son cœur. Application interactive pour enfants basée sur les enseignements de l'Islam.",
  keywords: ["Wassim", "spiritual", "islam", "enfant", "livre interactif", "dhikr"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌙</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
