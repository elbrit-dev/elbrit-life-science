import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/Blocks";
import { MANUFACTURING_STATS, MANUFACTURING_CERTS, MANUFACTURING_CAPABILITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manufacturing Facility",
  description:
    "Elbrit's WHO-GMP manufacturing facility in Pondicherry produces solid orals, capsules and powders to global standards with Zero Liquid Discharge.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Elbrit's manufacturing facility"
        subtitle="Located in Pondicherry — a pharmaceutical export hub beside Chennai Port with air, road and rail connectivity — producing solid orals, capsules and powder-based dosage forms to global standards."
        crumbs={[{ label: "Manufacturing" }]}
      />

      <section className="container-x pb-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MANUFACTURING_STATS.map((m, i) => (
            <Reveal key={m.label} delay={(i % 4) * 0.07}>
              <div className="card-3d p-6 text-center">
                <p className="font-display text-4xl font-extrabold text-navy-900">{m.stat}</p>
                <p className="mt-2 text-sm font-semibold text-navy-900">{m.label}</p>
                <p className="text-xs text-slate-soft">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Credentials"
              title="Built to global standards"
              intro="Eco-friendly design, modern HVAC and water systems, contamination control via pressure and physical barriers, and PLC-driven processes."
            />
            <Reveal delay={0.1}>
              <div className="mt-6">
                <CheckList items={MANUFACTURING_CERTS} />
              </div>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Capabilities"
              title="From granulation to packaging"
              intro="Domestic services include formulation development, contract manufacturing, stability studies and method development."
            />
            <Reveal delay={0.1}>
              <div className="mt-6">
                <CheckList items={MANUFACTURING_CAPABILITIES} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Manufacture with Elbrit"
        body="Send us your requirements for a quick quote on contract manufacturing."
        primary={{ label: "Contract manufacturing", href: "/contract-manufacturing" }}
        secondary={{ label: "International reach", href: "/international" }}
      />
    </>
  );
}
