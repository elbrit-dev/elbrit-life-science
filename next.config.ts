import type { NextConfig } from "next";

/* Old WordPress URLs (www.elbrit.org, pre-2026) -> new routes, so existing links and search
   results keep working. Next.js strips the trailing slash before these match. */
const PAGE_REDIRECTS: Record<string, string> = {
  "/home": "/",
  "/about-elbrit": "/about",
  "/approach-and-values": "/approach-values",
  "/medical-products": "/products",
  "/medical-manufacturing-facility": "/manufacturing",
  "/international-reach-and-partnership": "/international",
  "/research-and-development": "/research",
  "/environment-health-and-safety": "/ehs",
  "/corporate-social-responsibility": "/csr",
  "/contact-us": "/contact",
  "/job-openings": "/careers",
  "/press-release": "/media",
  "/media-kit": "/media",
  "/privacy-policy-2": "/privacy-policy",
  "/pharmacovigilance-adverse-event-reporting": "/pharmacovigilance",
  "/elbrit-life-sciences-to-setup-a-second-manufacturing-facility-in-east-sikkim":
    "/media/elbrit-life-sciences-to-setup-a-second-manufacturing-facility-in-east-sikkim",
  "/elbrit-life-sciences-to-expand-its-domestic-footprint-with-a-usd-3-million-investment-from-its-parent-firm-capital-investments":
    "/media/elbrit-life-sciences-to-expand-its-domestic-footprint-with-a-usd-3-million-investment-from-its-parent-firm-capital-investments",
  "/elbrit-life-sciences-dreams-big-on-indian-pharmaceutical-business":
    "/media/elbrit-life-sciences-dreams-big-on-indian-pharmaceutical-business",
};

/* Old product post slug -> brand family slug under /products. */
const PRODUCT_REDIRECTS: Record<string, string> = {
  "benistar": "benistar",
  "britorva": "britorva",
  "britorva-10-f": "britorva",
  "britrova-cv": "britorva",
  "britvit": "britvit",
  "c500": "c-500",
  "calbrit": "calbrit",
  "calbrit-60-k": "calbrit",
  "calbrit-ct": "calbrit",
  "cartitab": "cartitab",
  "cartitab-c2": "cartitab",
  "cfert": "c-fert",
  "chlorvix": "chlorvix",
  "cilnitab": "cilnitab",
  "cilnitab-t": "cilnitab",
  "czd": "c-zd-max",
  "czd-max": "c-zd-max",
  "elprol-am": "elprol",
  "elprol-xl": "elprol",
  "elvix-gel": "elvix",
  "exipam": "exipam",
  "folbrit-mb": "folbrit",
  "glimibrit": "glimibrit",
  "glimibrit-m": "glimibrit",
  "glimibrit-m-forte": "glimibrit",
  "glimibrit-mv": "glimibrit",
  "glizato-m": "glizato",
  "glizato-od": "glizato",
  "ien": "ien",
  "ien-m": "ien",
  "ien-total": "ien",
  "maxflora": "maxflora",
  "my20": "my20",
  "myciss": "myciss",
  "myciss-plus": "myciss",
  "mygut": "my-gut",
  "nebiloc": "nebiloc",
  "nebiloc-am": "nebiloc",
  "nero-gb": "nero",
  "nero-pg": "nero",
  "neuronz-d": "neuronz",
  "neuronz-plus": "neuronz",
  "olmetop": "olmetop",
  "olmetop-am": "olmetop",
  "olmetop-ct": "olmetop",
  "panbrit": "panbrit",
  "panbrit-dsr": "panbrit",
  "pregabrit": "pregabrit",
  "pregabrit-plus": "pregabrit",
  "rabriton": "rabriton",
  "rabriton-dsr": "rabriton",
  "rabriton-plus": "rabriton",
  "rozula": "rozula",
  "rozula-cv": "rozula",
  "rozula-gold": "rozula",
  "rutonz": "rutonz",
  "telbrit": "telbrit",
  "telbrit-ah": "telbrit",
  "telbrit-am": "telbrit",
  "telbrit-ct": "telbrit",
  "telbrit-h": "telbrit",
  "telbrit-mt": "telbrit",
  "tenlibrit": "tenlibrit",
  "tenlitab": "tenlitab",
  "triglimibrit": "triglimibrit",
  "vilzato": "vilzato",
  "vilzato-m": "vilzato",
  "vilzato-m-1000": "vilzato",
};

const nextConfig: NextConfig = {
  // The home directory contains other lockfiles; pin this folder as the workspace
  // root. Use __dirname so it resolves correctly on any machine (local Windows,
  // Netlify's Linux builders) instead of a hardcoded absolute path.
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      ...Object.entries(PAGE_REDIRECTS).map(([source, destination]) => ({ source, destination, permanent: true })),
      ...Object.entries(PRODUCT_REDIRECTS).map(([from, to]) => ({
        source: `/${from}`,
        destination: `/products/${to}`,
        permanent: true,
      })),
      { source: "/category/media/:path*", destination: "/media", permanent: true },
      { source: "/category/:path*", destination: "/products", permanent: true },
      { source: "/job/:path*", destination: "/careers", permanent: true },
      { source: "/jobs_category/:path*", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
