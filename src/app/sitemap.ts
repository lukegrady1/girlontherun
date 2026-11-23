import type { MetadataRoute } from "next";
import { legalNav, nav, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = new Set<string>(legalNav.map((n) => n.href));
  const routes = [...nav.map((n) => n.href), ...legal];
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: legal.has(path) ? "yearly" : "monthly",
    priority: path === "/" ? 1 : legal.has(path) ? 0.3 : 0.8,
  }));
}
