import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FeatureGrid } from "@/components/ui/Blocks";

export const metadata: Metadata = {
  title: "Environment, Health & Safety",
  description:
    "Zero Harm guides every aspect of Elbrit's EHS policy — including Zero Liquid Discharge status, ETP/incinerator operation and continuous audits.",
};

const MEASURES = [
  { icon: "shield-check", title: "Permit-to-work systems", body: "Controlled, documented procedures for hazardous tasks." },
  { icon: "recycle", title: "Effluent treatment & ZLD", body: "ETP, incinerator operation and Zero Liquid Discharge at major facilities." },
  { icon: "activity", title: "Audits & inspections", body: "Frequent internal audits plus external laboratory inspections." },
  { icon: "users", title: "Worker wellbeing", body: "Regular hygiene checks, health assessments and updated training." },
];

export default function EHSPage() {
  return (
    <>
      <PageHero
        eyebrow="Environment, Health & Safety"
        title="Zero Harm — at the heart of everything"
        subtitle="“Zero Harm” lies at the heart of Elbrit Life Sciences and guides every aspect of our corporate EHS policy — implemented top-down and maintained to international standards."
        crumbs={[{ label: "Responsibility", href: "/csr" }, { label: "EHS" }]}
      />

      <section className="container-x py-16">
        <FeatureGrid items={MEASURES} cols={4} />
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Our achievement"
              title="Zero Liquid Discharge status"
              intro="Through our EHS policy and modern recycling equipment, we've achieved Zero Liquid Discharge at our major facilities — and we engage with authorities and industry to develop socially and environmentally conscious regulations."
            />
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { stat: "Zero", label: "Harm policy" },
                  { stat: "ZLD", label: "Liquid discharge" },
                  { stat: "100%", label: "Top-down implementation" },
                  { stat: "24/7", label: "Monitoring & review" },
                ].map((m) => (
                  <div key={m.label} className="card-3d p-6 text-center">
                    <p className="font-display text-3xl font-extrabold text-navy-900">{m.stat}</p>
                    <p className="mt-1.5 text-sm font-medium text-slate-soft">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Responsibility runs through everything"
        body="From renewable energy to child welfare — explore the full breadth of our social responsibility."
        primary={{ label: "Our CSR programmes", href: "/csr" }}
      />
    </>
  );
}
