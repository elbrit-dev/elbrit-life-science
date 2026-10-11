/* Real Elbrit product catalogue — SKUs come from the ERPNext "Products" item group via
   scripts/sync-erp-products.mjs (see erp-products.ts). ERP stores products in a flat
   group, so therapy grouping follows elbrit.org's therapeutic taxonomy. */

import { ERP_PRODUCTS, type ErpProduct } from "./erp-products";

export type Category =
  | "Cardiovascular"
  | "Diabetes Care"
  | "Neuro & CNS"
  | "Gastro & Hepatology"
  | "Bone & Ortho"
  | "Women's Health"
  | "Nutrition & Immunity"
  | "Pre & Probiotics"
  | "Anti-Infective"
  | "Specialty Care";

export const CATEGORIES: { key: Category; blurb: string; icon: string }[] = [
  { key: "Cardiovascular", blurb: "Statins, anti-hypertensives, beta-blockers & anti-platelets.", icon: "heart" },
  { key: "Diabetes Care", blurb: "Gliptins, SGLT2s, sulfonylureas & fixed-dose combinations.", icon: "droplet" },
  { key: "Neuro & CNS", blurb: "Neuropathy, neuropsychiatry, vertigo & pain relief.", icon: "brain" },
  { key: "Gastro & Hepatology", blurb: "PPIs, DSR combinations & digestive care.", icon: "pill" },
  { key: "Bone & Ortho", blurb: "Joint health, cartilage support & mobility.", icon: "bone" },
  { key: "Women's Health", blurb: "Fertility, antenatal nutrition & iron support.", icon: "flower" },
  { key: "Nutrition & Immunity", blurb: "Calcium, vitamin D, multivitamins & immunity.", icon: "apple" },
  { key: "Pre & Probiotics", blurb: "Microbiome balance & digestive wellbeing.", icon: "leaf" },
  { key: "Anti-Infective", blurb: "Broad-spectrum anti-bacterial therapy.", icon: "shield" },
  { key: "Specialty Care", blurb: "Focused therapies across emerging segments.", icon: "sparkles" },
];

/* Brand family (prefix) → therapy area. */
const FAMILY_CATEGORY: Record<string, Category> = {
  ROZULA: "Cardiovascular", BRITORVA: "Cardiovascular", TELBRIT: "Cardiovascular",
  OLMETOP: "Cardiovascular", CILNITAB: "Cardiovascular", BISOBRIT: "Cardiovascular",
  NEBILOC: "Cardiovascular", ELPROL: "Cardiovascular", MYCLOP: "Cardiovascular",
  TICABRIT: "Cardiovascular", TORBRIT: "Cardiovascular", CHLORVIX: "Cardiovascular",
  ARNIBLOC: "Cardiovascular", DABITON: "Cardiovascular", NIKOBRIT: "Cardiovascular",
  "NIG CR": "Cardiovascular", CARDI: "Cardiovascular", BENISTAR: "Cardiovascular",
  VEINEX: "Cardiovascular",

  SITADOC: "Diabetes Care", GLIZATO: "Diabetes Care", GLIMIBRIT: "Diabetes Care",
  TRIGLIMIBRIT: "Diabetes Care", VILZATO: "Diabetes Care", LINATO: "Diabetes Care",
  TENLITAB: "Diabetes Care", TENLIBRIT: "Diabetes Care", BRITVOG: "Diabetes Care",
  EMPABRIT: "Diabetes Care", DAFAX: "Diabetes Care",

  NEURONZ: "Neuro & CNS", PREGABRIT: "Neuro & CNS", NERO: "Neuro & CNS",
  ELVIX: "Neuro & CNS", CITIBRIT: "Neuro & CNS", EXIPAM: "Neuro & CNS",
  VERTONZ: "Neuro & CNS", FENZIT: "Neuro & CNS", ACEBRIT: "Neuro & CNS",

  RABRITON: "Gastro & Hepatology", PANBRIT: "Gastro & Hepatology",
  DROXIT: "Gastro & Hepatology", LARGIX: "Gastro & Hepatology", MYWASH: "Gastro & Hepatology",

  CARTITAB: "Bone & Ortho", MYCISS: "Bone & Ortho", RUTONZ: "Bone & Ortho",

  FERTIBRIT: "Women's Health", FOFA: "Women's Health", FOLBRIT: "Women's Health",
  IEN: "Women's Health", AURAGEST: "Women's Health", "C FERT": "Women's Health",

  CALBRIT: "Nutrition & Immunity", BRITVIT: "Nutrition & Immunity",
  "ONLY E": "Nutrition & Immunity", "ONLY Q PLUS": "Nutrition & Immunity",
  MYMAG: "Nutrition & Immunity", "MY MAG": "Nutrition & Immunity", MY20: "Nutrition & Immunity",
  "C 500": "Nutrition & Immunity", "C+ZD MAX": "Nutrition & Immunity", ZI24: "Nutrition & Immunity",

  MAXFLORA: "Pre & Probiotics", "MY GUT": "Pre & Probiotics",

  AMOXIBRIT: "Anti-Infective",
};

/* Multi-word brand families that should not be split on the first token. */
const MULTIWORD = ["C FERT", "NIG CR", "MY GUT", "MY MAG", "ONLY Q PLUS", "ONLY E", "C+ZD MAX", "C 500", "MY20"];

/* All active product SKUs from ERPNext. */
export const RAW_PRODUCTS: string[] = ERP_PRODUCTS.map((p) => p.code);

export const ERP_BY_CODE = new Map<string, ErpProduct>(ERP_PRODUCTS.map((p) => [p.code, p]));

function familyOf(name: string): string {
  const upper = name.toUpperCase().trim();
  const mw = MULTIWORD.find((m) => upper.startsWith(m));
  if (mw) return mw;
  return upper.split(/[\s/-]+/)[0];
}

export type BrandFamily = {
  family: string;
  category: Category;
  variants: string[];
};

export function buildCatalogue(): { category: Category; blurb: string; icon: string; families: BrandFamily[] }[] {
  const families = new Map<string, BrandFamily>();
  for (const raw of RAW_PRODUCTS) {
    const fam = familyOf(raw);
    const category = FAMILY_CATEGORY[fam] ?? "Specialty Care";
    if (!families.has(fam)) families.set(fam, { family: fam, category, variants: [] });
    families.get(fam)!.variants.push(raw.toUpperCase());
  }
  return CATEGORIES.map((c) => ({
    category: c.key,
    blurb: c.blurb,
    icon: c.icon,
    families: [...families.values()]
      .filter((f) => f.category === c.key)
      .sort((a, b) => a.family.localeCompare(b.family)),
  })).filter((c) => c.families.length > 0);
}

export const TOTAL_SKUS = RAW_PRODUCTS.length;
export const TOTAL_BRANDS = new Set(RAW_PRODUCTS.map(familyOf)).size;

/* URL-safe brand slug, e.g. "C+ZD MAX" -> "c-zd-max". */
export function familySlug(family: string): string {
  return family.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getFamily(slug: string): BrandFamily | undefined {
  for (const cat of buildCatalogue()) {
    const fam = cat.families.find((f) => familySlug(f.family) === slug);
    if (fam) return fam;
  }
  return undefined;
}
