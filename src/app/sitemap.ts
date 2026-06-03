import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : siteConfig.siteUrl);
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}${siteConfig.images.portrait}`,
        `${baseUrl}${siteConfig.images.gallery1}`,
        `${baseUrl}${siteConfig.images.gallery2}`,
      ],
    }
  ];
}
