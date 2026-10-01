import type { MetadataRoute } from "next";
import { salon } from "@/content/salon";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${salon.siteUrl}/sitemap.xml`,
    host: salon.siteUrl,
  };
}
