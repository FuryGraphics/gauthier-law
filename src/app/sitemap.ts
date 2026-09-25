import type { MetadataRoute } from "next";
import { SITEMAP_ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return SITEMAP_ROUTES.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
