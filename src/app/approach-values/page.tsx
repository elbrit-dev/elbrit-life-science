import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach & Values",
  description:
    "The seven values that guide Elbrit Life Sciences: innovation & excellence, care, integrity, loyalty, commitment, knowledge and quality.",
};

export default function ApproachValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach & Values"
        title="A strong value system, upheld throughout our company"
        subtitle="Working within the healthcare industry requires us to formulate and uphold a strong value system — one we implicate throughout our company. Our people and partners share and consistently demonstrate these values."
        crumbs={[{ label: "About", href: "/about" }, { label: "Approach & Values" }]}
      />

      <section className="container-x py-8">
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col bg-white p-8">
                <div className="flex items-center justify-between">
                  <Icon name={v.icon} className="h-6 w-6 text-navy-700" />
                  <span className="mono text-[0.7rem] tracking-widest text-navy-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Values that translate into careers"
        body="We build a culture that rewards honest practice and hard work — and we're hiring."
        primary={{ label: "See open roles", href: "/careers" }}
        secondary={{ label: "About Elbrit", href: "/about" }}
      />
    </>
  );
}
