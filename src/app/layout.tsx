import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Les Aventures Spirituelles de Nawfel | مغامرات نوفل الروحية",
  description: "Un livre dont tu es le héros — Découvre le cheminement spirituel de Nawfel, un garçon de 8 ans qui apprend à combattre son ego avec les armes de l'âme. Application interactive pour enfants de 8-12 ans basée sur les enseignements du Tassawuf.",
  keywords: ["Nawfel", "spiritual", "islam", "soufisme", "tassawuf", "enfant", "livre interactif", "dhikr", "nafs"],
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
