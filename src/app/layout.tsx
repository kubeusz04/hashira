import { siteOrigin, sitePath } from "@/lib/site-path";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  icons: { icon: sitePath("/icon.svg") },
  title: "Yoon — Korean Breathing | An Illustrated Archive",
  description:
    "Explore Yoon, the Korean Hashira, and all twelve forms of Korean Breathing. An illustrated archive of water, rhythm, and Korean heritage.",
  openGraph: {
    title: "Yoon — Korean Breathing",
    description: "Twelve forms. One unbroken current.",
    images: [
      {
        url: sitePath("/art/yoon.webp"),
        width: 1024,
        height: 1536,
        alt: "Yoon — The Korean Hashira",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body
        style={
          {
            "--ember-landscape-image": `url("${sitePath("/art/polish/ember-landscape.webp")}")`,
            "--water-garden-image": `url("${sitePath("/art/water-garden.webp")}")`,
            "--yoon-cutout-image": `url("${sitePath("/art/yoon-cutout.webp")}")`,
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
