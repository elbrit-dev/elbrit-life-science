import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FeatureGrid, CheckList } from "@/components/ui/Blocks";
import { CONTRACT_SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description:
    "Pharmaceutical contract manufacturing at Elbrit — WHO-GMP & GLP certified, 40+ years of expertise, across nine therapeutic areas.",
};

const SERVICE_CARDS = CONTRACT_SERVICES.map((title) => ({
  icon: "factory",
  title,
  body:
    title === "Formulation Development"
      ? "From concept to a stable, manufacturable dosage form."
      : title === "Contract Manufacturing"
      ? "Reliable, GMP-grade production for your brands."
      : title === "Stability Studies"
      ? "Rigorous testing to establish shelf-life and quality."
      : "Robust analytical methods built for your products.",
}));

const THERAPIES = [
  "Cardiovascular", "Anti-Diabetic", "Neurology", "Nephrology", "Gastroenterology",
  "Gynaecology", "Orthopedics", "Pre & Pro Biotics", "Nutraceuticals",
];

export default function ContractManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Pharmaceutical contract manufacturing"
        subtitle="Solid orals, capsules and powders produced to global standards beside Chennai Port — enabling on-time delivery by air, road and rail."
        crumbs={[{ label: "Manufacturing", href: "/manufacturing" }, { label: "Contract Manufacturing" }]}
      />

      <section className="container-x py-16">
        <SectionHeading eyebrow="Our services" title="End-to-end manufacturing services" center />
        <div className="mt-12">
          <FeatureGrid items={SERVICE_CARDS} cols={4} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Therapeutic coverage"
                title="Nine therapeutic areas under one roof"
                intro="Decades of formulation experience across the segments that matter most to patients."
              />
              <Reveal delay={0.1}>
                <div className="mt-6">
                  <CheckList items={THERAPIES} />
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] gradient-navy p-8 text-white shadow-[var(--shadow-float)]">
                <h3 className="text-xl font-semibold">Send us your requirements</h3>
                <p className="mt-2 text-sm text-white/75">
                  Share your product type, quantity, required services and delivery location for a
                  quick quote from our team.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  <li>· WHO-GMP certified facility</li>
                  <li>· WHO-GLP certified laboratories</li>
                  <li>· Automated & semi-automated machinery</li>
                  <li>· 40+ years of expertise</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Get a quick quote"
        body="Tell us what you need and our contract-manufacturing team will get back to you."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "Tour the facility", href: "/manufacturing" }}
      />
    </>
  );
}
