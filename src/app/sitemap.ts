import type { MetadataRoute } from "next";
import { salon } from "@/content/salon";
import { staticRoutes } from "@/content/nav";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${salon.siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${salon.siteUrl}/uslugi/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...servicePages];
}
