import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AdverseEventForm from "@/components/sections/AdverseEventForm";

export const metadata: Metadata = {
  title: "Pharmacovigilance (Adverse Event Reporting)",
  description:
    "Report a suspected side effect or adverse event related to an Elbrit Life Sciences medicine. Our pharmacovigilance team reviews every report.",
};

export default function PharmacovigilancePage() {
  return (
    <>
      <PageHero
        eyebrow="Pharmacovigilance"
        title="Adverse event reporting"
        subtitle="Any adverse event deserves identification. We encourage every enquiry — no matter how seemingly mild — to be submitted for further support."
        crumbs={[{ label: "Research", href: "/research" }, { label: "Pharmacovigilance" }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5 text-[0.97rem] leading-relaxed text-muted">
            <p>
              We have proudly become a leader within the pharmaceutical industry due to our commitment to producing
              the highest quality of products within the marketplace. This commitment requires monitoring of all drugs
              before, during and after their production period. While we operate a methodical and intensive research
              and development process, we also understand the complex nature of drugs and the absolute importance of
              monitoring and reporting adverse effects and events, in order to provide premium medical support
              throughout the duration of treatment.
            </p>
            <p>
              A number of reasons can contribute to unexpected or adverse reactions to medicine. These can include the
              unsolicited combining of drugs with opposing compositions as well as the misuse or overuse of measures.
              Factors such as age, pregnancy, breastfeeding and undeclared illness can also render patients vulnerable
              to side effects.
            </p>
            <p>
              At Elbrit we have employed a strong pharmacovigilance system to regulate patient compliance, to research
              and correlate common findings and ultimately to support and prevent adverse effects from recurring once
              identified.
            </p>
          </div>

          <Reveal delay={0.1}>
            <div
              id="report-form"
              className="scroll-mt-28 rounded-[1.5rem] border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)]"
            >
              <h2 className="font-display text-2xl text-ink">Report an adverse event</h2>
              <p className="mt-2 mb-6 text-sm text-slate-soft">Fields marked * are required.</p>
              <AdverseEventForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Understanding pharmacovigilance"
            title="The science of drug safety"
            intro="Pharmacovigilance is the science of collecting, detecting, assessing, monitoring, understanding and preventing the adverse effects that can occur from taking medicines — especially those unfamiliar to your system, those that clash with changes to your lifestyle, or those resulting from irresponsible use."
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            It lets us identify side effects from medicines, treatments and therapies so that further solutions can be
            medically determined to support the ongoing good health of each patient.
          </p>
        </div>
      </section>
    </>
  );
}
