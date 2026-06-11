import type { Metadata } from "next";
import { Space_Grotesk, Archivo_Black, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const archivioBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BULANZALAWFIRM — Droit des affaires & contentieux complexe",
  description:
    "Cabinet d'avocats spécialisé en droit des affaires et contentieux complexe. Fusions & acquisitions, arbitrage international, conformité réglementaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${spaceGrotesk.variable} ${archivioBlack.variable} ${sourceSerif4.variable} ${ibmPlexMono.variable}`}
        style={{
          fontFamily: "var(--font-source-serif), Georgia, serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
