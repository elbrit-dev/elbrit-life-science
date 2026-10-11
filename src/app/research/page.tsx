import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FeatureGrid, CheckList } from "@/components/ui/Blocks";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "Elbrit's R&D unit upholds drug efficacy and safety standards transparently — with pharmacovigilance keeping patients at the centre.",
};

const CARDS = [
  { icon: "microscope", title: "Communication & transparency", body: "An expert team oversees the full product life-cycle, upholding drug efficiency and safety standards openly." },
  { icon: "stethoscope", title: "Expert collaboration", body: "We regularly communicate with doctors, physicians and medical experts to learn and improve." },
  { icon: "activity", title: "Monitoring success", body: "We monitor, assess and document drug success patterns to keep introducing innovative products." },
  { icon: "shield-check", title: "Pharmacovigilance", body: "We monitor, assess, understand, analyse and report on drug safety — our patient, our priority." },
];

const PATIENT_GUIDE = [
  "Alert doctors to medical history that may interfere with prescriptions",
  "Ask physicians about possible side effects and recovery timelines",
  "Read medicine instructions thoroughly and observe all warnings",
  "Adhere to the prescribed dosage and timings",
  "Monitor your body's reactions and report adverse symptoms immediately",
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Development"
        title="See what others see — think what nobody else has thought"
        subtitle="Our R&D unit is led by an expert team that oversees the product life-cycle and upholds drug efficacy and safety standards with full transparency."
        crumbs={[{ label: "Research" }]}
      />

      <section className="container-x py-16">
        <FeatureGrid items={CARDS} cols={4} />
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Our patient. Our priority."
              title="Safety doesn't stop at approval"
              intro="All medicines carry potential side-effect and adverse-reaction risks despite regulatory testing. That's why pharmacovigilance is central to everything we do — and why we partner with patients to use medicines safely."
            />
            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold text-navy-900">A patient's checklist</h3>
                <ul className="mt-5 space-y-3">
                  {PATIENT_GUIDE.map((g) => (
                    <li key={g} className="flex items-start gap-3 text-sm leading-relaxed text-slate-soft">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-elbrit-500" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Report an adverse event"
        body="Patient safety is everyone's responsibility. Reach our pharmacovigilance team to report any adverse event."
        primary={{ label: "Report an adverse event", href: "/pharmacovigilance" }}
        secondary={{ label: "Clinical research", href: "/clinical-research" }}
      />
    </>
  );
}
