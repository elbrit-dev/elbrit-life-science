import type { MetadataRoute } from "next";

const ROUTES = [
  "", "about", "approach-values", "business-strategy", "products",
  "manufacturing", "contract-manufacturing", "international", "research",
  "clinical-research", "csr", "ehs", "media", "careers", "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elbrit.org";
  return ROUTES.map((r) => ({
    url: `${base}/${r}`,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "products" ? 0.9 : 0.7,
  }));
}
