/* Real Elbrit Life Sciences content (sourced from elbrit.org + ERPNext). */

export const COMPANY = {
  name: "Elbrit Life Sciences",
  legal: "Elbrit Life Sciences Pvt. Ltd.",
  tagline: "Discovery. Innovation. Excellence.",
  tollFree: "1800 257 3579",
  jobsUrl: "https://jobs.elbrit.org",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Elbrit", href: "/about", desc: "Who we are & our mission" },
      { label: "Approach & Values", href: "/approach-values", desc: "The principles we live by" },
      { label: "Business Strategy", href: "/business-strategy", desc: "Where we're headed" },
    ],
  },
  { label: "Products", href: "/products" },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    children: [
      { label: "Manufacturing Facility", href: "/manufacturing", desc: "Our Pondicherry plant" },
      { label: "Contract Manufacturing", href: "/contract-manufacturing", desc: "Partner with our lines" },
      { label: "International Reach", href: "/international", desc: "Global partnerships" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research & Development", href: "/research", desc: "How we innovate" },
      { label: "Clinical Research", href: "/clinical-research", desc: "Evidence & safety" },
    ],
  },
  {
    label: "Responsibility",
    href: "/csr",
    children: [
      { label: "Corporate Social Responsibility", href: "/csr", desc: "Beyond business" },
      { label: "Environment, Health & Safety", href: "/ehs", desc: "Our Zero Harm promise" },
    ],
  },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 2014, suffix: "", label: "Founded", sub: "incorporated in 2000", raw: true },
  { value: 250, suffix: "+", label: "Team members", sub: "growing 100% every year" },
  { value: 210, suffix: "+", label: "Products & SKUs", sub: "across 9 therapy areas" },
  { value: 40, suffix: "+", label: "Years of mfg. expertise", sub: "WHO-GMP & GLP certified" },
];

export const VALUES = [
  { title: "Innovation & Excellence", body: "Making a difference through outstanding workmanship, focus and forward-thinking.", icon: "lightbulb" },
  { title: "Care", body: "Kind, respectful relationships with customers, partners, suppliers, employees and communities.", icon: "heart-handshake" },
  { title: "Integrity", body: "Honesty and integrity at all times — respecting the service, and yourself.", icon: "shield-check" },
  { title: "Loyalty", body: "Working openly and collaboratively to achieve shared goals and build trust.", icon: "handshake" },
  { title: "Commitment", body: "A commitment to others' wellbeing, always seeking new ways to benefit patients.", icon: "target" },
  { title: "Knowledge", body: "Being an expert in your field, continually learning, and valuing information.", icon: "graduation-cap" },
  { title: "Quality", body: "The highest levels of quality across products, services and relationships.", icon: "award" },
];

export const THERAPY_HIGHLIGHTS = [
  { name: "Cardiovascular", icon: "heart" },
  { name: "Diabetes Care", icon: "droplet" },
  { name: "Neuro & CNS", icon: "brain" },
  { name: "Gastro & Hepatology", icon: "pill" },
  { name: "Bone & Ortho", icon: "bone" },
  { name: "Women's Health", icon: "flower" },
  { name: "Nutrition & Immunity", icon: "apple" },
  { name: "Pre & Probiotics", icon: "leaf" },
];

export const MANUFACTURING_STATS = [
  { stat: "10M", label: "Tablets", note: "per batch cycle" },
  { stat: "3M", label: "Capsules", note: "per batch cycle" },
  { stat: "1M", label: "Powder boxes", note: "per batch cycle" },
  { stat: "ZLD", label: "Zero Liquid Discharge", note: "at major facilities" },
];

export const MANUFACTURING_CERTS = [
  "WHO-GMP certified facility",
  "WHO-GLP certified laboratories",
  "World-class production facility",
  "Automated & semi-automated machinery",
  "In-house R&D facility",
  "40+ years of expertise",
];

export const MANUFACTURING_CAPABILITIES = [
  "Wet & dry granulation",
  "Micronization",
  "Tablet coating with specific release profiles",
  "Bi-layered tablets",
  "Hard gelatin capsule filling",
  "Tablet-in-capsule filling",
  "Blister, sachet & powder packing",
  "Barcoding & QR coding",
];

export const CONTRACT_SERVICES = [
  "Formulation Development",
  "Contract Manufacturing",
  "Stability Studies",
  "Method Development",
];

export const PARTNERSHIP_MODES = [
  { title: "Contract Manufacturing", body: "Reliable, GMP-grade production capacity for your portfolio." },
  { title: "In-Licensing", body: "Bring complementary brands and molecules into our markets." },
  { title: "Out-Licensing", body: "Take Elbrit's proven brands into new geographies." },
  { title: "Export Partnerships", body: "Branded & prescription generics, OTC and nutraceuticals." },
];

export const CSR_PILLARS = [
  {
    title: "Improving Health Outcomes",
    icon: "stethoscope",
    points: [
      "Medical & specialty camps (including cardiac)",
      "School & rural health-awareness camps",
      "Haemoglobin testing, counselling & nutrition for rural children",
      "Free general, cardiology & glucose screening",
    ],
  },
  {
    title: "Reducing Our Carbon Footprint",
    icon: "leaf",
    points: [
      "60% of electricity from solar & wind energy",
      "Monthly workforce training on footprint reduction",
      "Continuous audits and feedback across departments",
    ],
  },
  {
    title: "Environmentally Friendly",
    icon: "recycle",
    points: [
      "Hazardous & non-hazardous waste cut by half",
      "Cleaner, renewable energy sources",
      "Sustainable facility design & tree-growth missions",
    ],
  },
  {
    title: "Human Empowerment & Child Welfare",
    icon: "users",
    points: [
      "Support for organisations serving vulnerable communities",
      "Focus on women & children in tribal areas",
      "Care for young mothers and vulnerable widows",
    ],
  },
];

export const PRESS = [
  {
    date: "Jul 2, 2019",
    title: "Elbrit to build a second manufacturing facility in Sikkim to expand capacity",
    body: "Elbrit Life Sciences announced a USD 2 million investment to set up its second manufacturing facility in Singtam, East Sikkim.",
    tag: "Expansion",
  },
  {
    date: "Apr 24, 2019",
    title: "Elbrit expands its domestic footprint with a USD 3 million investment",
    body: "A fast-growing domestic pharmaceutical company expanding its footprint across the Indian pharmaceutical industry.",
    tag: "Investment",
  },
  {
    date: "Apr 24, 2019",
    title: "Elbrit Life Sciences dreams big on the Indian pharmaceutical business",
    body: "Elbrit announced the commencement of operations — based in Mumbai and serving patients across South India.",
    tag: "Milestone",
  },
];

export const PERKS = [
  "Best-in-industry compensation structure",
  "Incentive programme for top performers",
  "Among the best daily allowances",
  "Clear career-growth pathways",
  "Medical benefits for staff & families",
  "Free-medicine policy",
  "Skill-enhancement training programmes",
];

export const OPENINGS = [
  { role: "Regional Sales Manager — Cardio & Diabetes", location: "Jaipur, Rajasthan" },
  { role: "Regional Sales Manager — Gynae & Ortho", location: "Madurai" },
  { role: "Senior Graphic Designer", location: "Chennai" },
  { role: "Product Manager / Sr. Product Executive", location: "Chennai" },
  { role: "Regional Sales Manager — Cardio & Diabetes", location: "Cochin" },
  { role: "Regional Sales Manager — Gynae & Ortho", location: "Bangalore" },
  { role: "Business Executive — Cardio & Diabetic", location: "Bangalore" },
  { role: "Area / Business Development Manager — Super Specialty", location: "Thrissur & Ernakulam" },
];

export const OFFICES = [
  {
    city: "Mumbai",
    role: "Registered Office",
    lines: ["C20, BKC, G Block", "Mumbai 400051"],
    phone: "1800 257 3579",
    phoneLabel: "Toll Free",
  },
  {
    city: "Chennai",
    role: "Regional Office",
    lines: ["The Hive, VR Mall, Level 3, No. 44", "Jawaharlal Nehru Road, Anna Nagar", "Chennai 600040, Tamil Nadu"],
    phone: "044 6654 0120",
    phoneLabel: "Phone",
  },
  {
    city: "Bengaluru",
    role: "Regional Office",
    lines: ["WeWork Galaxy Building", "43 Residency Road", "Bengaluru 560025, Karnataka"],
    phone: "",
    phoneLabel: "",
  },
  {
    city: "Mumbai (Andheri)",
    role: "Operations",
    lines: ["Level 4, A Wing, Dynasty Business Park", "Andheri Kurla Road, Andheri (E)", "Mumbai 400059, Maharashtra"],
    phone: "022 6786 9436",
    phoneLabel: "Phone",
  },
];

export const COMPANIES = [
  { name: "Elbrit Lifesciences Pvt. Ltd.", note: "Branded formulations across India" },
  { name: "Saviour Wellness Pvt. Ltd.", note: "Wellness & nutrition" },
  { name: "Leo Logistics", note: "Distribution & supply chain" },
];

export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/elbrit-life-sciences-private-limited/" },
  { label: "Facebook", href: "https://www.facebook.com/ElbritLife/" },
  { label: "Instagram", href: "https://www.instagram.com/elbrit_life_sciences/" },
  { label: "Twitter", href: "https://twitter.com/ElbritLife" },
];

export const LEGAL = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "About Cookies", href: "#" },
  { label: "Social Media Terms", href: "#" },
  { label: "Pharmacovigilance", href: "/contact" },
];
