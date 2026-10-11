import type { MetadataRoute } from "next";
import { PRESS } from "@/lib/content";
import { buildCatalogue, familySlug } from "@/lib/products";

const ROUTES = [
  "", "about", "approach-values", "business-strategy", "products",
  "manufacturing", "contract-manufacturing", "international", "research",
  "clinical-research", "pharmacovigilance", "csr", "ehs", "media", "careers", "contact",
  "privacy-policy", "terms-of-use", "about-cookies", "social-media-terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elbrit.org";
  const pages = ROUTES.map((r) => ({
    url: `${base}/${r}`,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "products" ? 0.9 : 0.7,
  })) satisfies MetadataRoute.Sitemap;
  const products = buildCatalogue().flatMap((c) =>
    c.families.map((f) => ({
      url: `${base}/products/${familySlug(f.family)}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );
  const press = PRESS.map((p) => ({
    url: `${base}/media/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  return [...pages, ...products, ...press];
}
