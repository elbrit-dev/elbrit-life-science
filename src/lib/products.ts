/* Real Elbrit product catalogue — brand names sourced from the ERPNext "Products"
   item group (production connector, 210 active SKUs). ERP stores products in a flat
   group, so therapy grouping follows elbrit.org's therapeutic taxonomy. */

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

/* All active product SKUs from ERPNext (production connector, item group "Products"). */
export const RAW_PRODUCTS: string[] = [
  "CARDI Q","RABRITON DSR","GLIMIBRIT M 0.5","NERO PG 50","ROZULA 10 F","TRIGLIMIBRIT 2","CHLORVIX 12.5","CILNITAB NB 10/5","TELBRIT MT","TELBRIT NB 40/2.5","NEBILOC 2.5","MYCLOP A 75","SITADOC 50","BISOBRIT 2.5","BRITVIT","NEBILOC 5","PREGABRIT NT","NERO PG 75","BRITVOG 0.3","DROXIT 20 SR","SITADOC MP 500","ROZULA ASP 10","CALBRIT 60K","CALBRIT 2K","DROXIT 10","ROZULA CV 20","BRITORVA CV 10","SITADOC 100","BISOBRIT 5","TELBRIT MT 25","ROZULA CV 10","NEBILOC 5 AM","ELVIX NT 400","TORBRIT 10","NEURONZ XT","TORBRIT 5","NEURONZ MAX","NEURONZ D","ROZULA ASP 20","TORBRIT PLUS 10","GLIZATO M40","TRIGLIMIBRIT 1","TRIGLIMIBRIT 1.3","GLIMIBRIT MV1","GLIMIBRIT MV2","RABRITON 20","SITADOC M 50 / 500","TENLITAB M","ARNIBLOC 50","TELBRIT AM","DAFAX S","LINATO 5","AMOXIBRIT 625","TELBRIT 40","BRITORVA 40","BRITORVA 10","C FERT","BRITORVA 20","BISOBRIT T 5","AURAGEST SR 300","ONLY E","CILNITAB T 40","ACEBRIT MR","CILNITAB 10","OLMETOP 40","DAFAX 5","ELPROL XL 50","OLMETOP 20","GLIZATO 80","OLMETOP 40 CT","GLIZATO 30 OD","GLIZATO 60 OD","CALBRIT","TRIGLIMIBRIT 3.3","ELVIX GEL 50GM","CALBRIT PLUS","TELBRIT CT","ROZULA 20","VILZATO M 500","LINATO-D 5/10","TICABRIT 90","PREGABRIT D 50/20","BRITORVA 10F","GLIZATO 40","MYCLOP 75","LARGIX","ONLY Q PLUS","ROZULA GOLD 20","ARNIBLOC 100","CILNITAB 20","CILNITAB 5","DAFAX 10","ELPROL XL 25","OLMETOP 20 CT","BRITORVA 80","ROZULA 10","PREGABRIT PLUS","TENLITAB 20","DAFAX V","LINATO M 2.5/500","DAFAX TRIO","FERTIBRIT M","FERTIBRIT F","CARTITAB C2","GLIMIBRIT M2","NEURONZ PLUS","GLIMIBRIT 2","TORBRIT PLUS 5","TELBRIT AH","NEURONZ LC","MAXFLORA","BENISTAR 8","BENISTAR 4","PANBRIT DSR","FOLBRIT MB","VEINEX FORTE","ACEBRIT P","NIG CR 2.6","NIKOBRIT 10","NIKOBRIT 5","C FERT M","IEN FCM","EXIPAM 10","GLIZATO M 60 OD","ROZULA 5","NEURONZ QF","RABRITON PLUS","EXIPAM PLUS","SITADOC 25","GLIZATO M 30 OD","TENLIBRIT M","TELBRIT H","VILZATO 50","PREGABRIT","CITIBRIT FORTE","ROZULA GOLD 10","TELBRIT 20","MY20","GLIMIBRIT 1","OLMETOP 10","EXIPAM 5","TELBRIT NB 40/5","VILZATO M 1000","GLIZATO M80","VILZATO 100 OD","CALBRIT XT","MY MAG D","NIG CR 6.4","VERTONZ 16","VERTONZ 8","EMPABRIT 10","EMPABRIT 25","EMPABRIT L 25/5","AURAGEST SR 200","BISOBRIT AM 5","BISOBRIT T 2.5","BRITVOG 0.2","BRITVOG M 0.2","BRITVOG M 0.3","C 500","C+ZD MAX","CALBRIT CT","CARTITAB","CARTITAB UC","CHLORVIX 6.25","CILNITAB NB 10/2.5","CITIBRIT","CITIBRIT PLUS","DABITON 110","DAFAX M 10","DAFAX M 5","DAFAX VM 500","ELPROL AM 25","ELPROL AM 50","ELPROL XL 100","EXIPAM 20","FENZIT 600","FOFA","FOFA PLUS","GLIMIBRIT 3","GLIMIBRIT 4","GLIMIBRIT M1","GLIMIBRIT M1 FORTE","GLIMIBRIT M2 FORTE","IEN","IEN M","IEN TOTAL","MY GUT","MYCISS","MYCISS PLUS","MYMAG","MYWASH 100 ML","MYWASH 150 ML","NEBILOC 10","OLMETOP 20 AM","PANBRIT","ROZULA 40","RUTONZ","RUTONZ D","SITADOC M 50 / 1000","TELBRIT 80","TENLIBRIT M FORTE","TENLITAB M FORTE","TORBRIT 20","TORBRIT PLUS 20","TRIGLIMIBRIT 2.3","VEINEX","ZI24","CALBRIT 60K SACHET","BRITORVA CV 20",
];

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
