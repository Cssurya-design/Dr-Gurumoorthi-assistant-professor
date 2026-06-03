import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : siteConfig.siteUrl);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: siteConfig.name,
  title: `${siteConfig.name} | ${siteConfig.title} | ${siteConfig.college}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.college,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "mFL2nT58785Na-0U-eM7EtBuVpJVeBpf3-DElSzil3Y",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: `${baseUrl}${siteConfig.images.portrait}`,
        width: 800,
        height: 800,
        alt: `${siteConfig.fullName} - ${siteConfig.title}`,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [`${baseUrl}${siteConfig.images.portrait}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll>
          <JsonLd />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
