import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Clinical Research",
  description:
    "Evidence-led clinical research underpins Elbrit's branded formulations — including innovative topical therapies such as Elvix Gel.",
};

export default function ClinicalResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Research"
        title="Evidence-led, patient-centred research"
        subtitle="Rigorous clinical research underpins every formulation we bring to patients — from established molecules to innovative combinations and delivery forms."
        crumbs={[{ label: "Research", href: "/research" }, { label: "Clinical Research" }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Featured formulation"
            title="Elvix Gel — innovative topical neuropathic relief"
            intro="A branded topical formulation combining a local anaesthetic with a neuropathic agent for targeted relief — an example of Elbrit's formulation-led research."
          />
          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)]">
              <span className="rounded-full bg-elbrit-50 px-3 py-1 text-xs font-semibold text-elbrit-600">
                Branded Formulation
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy-900">Elvix Gel</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-navy-50 pb-3">
                  <dt className="text-slate-soft">Composition</dt>
                  <dd className="text-right font-medium text-navy-900">Lidocaine IP 5% w/w · Gabapentin IP 6% w/w</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-navy-50 pb-3">
                  <dt className="text-slate-soft">Form</dt>
                  <dd className="font-medium text-navy-900">Topical gel</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-soft">Business area</dt>
                  <dd className="font-medium text-navy-900">Branded Formulations</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Collaborate on clinical research"
        body="Interested in research partnerships or in-licensing opportunities? Let's talk."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "Explore products", href: "/products" }}
      />
    </>
  );
}
