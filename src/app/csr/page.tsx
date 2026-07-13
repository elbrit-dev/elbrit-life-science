import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { CSR_PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description:
    "Beyond business — Elbrit's CSR improves community health, cuts its carbon footprint with 60% renewable energy, and empowers women and children.",
};

export default function CSRPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Social Responsibility"
        title="Beyond business"
        subtitle="Our business growth is tied to scaling our social and environmental outreach. CSR has been embedded in our operations since incorporation — improving health, reducing our footprint, and empowering communities."
        crumbs={[{ label: "Responsibility" }, { label: "CSR" }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-px overflow-hidden rounded-[3px] border border-hairline bg-hairline md:grid-cols-2">
          {CSR_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="h-full bg-white p-8 lg:p-10">
                <div className="flex items-center gap-4">
                  <Icon name={p.icon} className="h-6 w-6 text-navy-700" />
                  <h3 className="text-lg text-ink">{p.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 border-t border-hairline pt-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-elbrit-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Our commitment to the planet"
        body="60% renewable energy, Zero Liquid Discharge and sustainable design — see how we keep people and planet at the centre."
        primary={{ label: "Environment, Health & Safety", href: "/ehs" }}
        secondary={{ label: "About Elbrit", href: "/about" }}
      />
    </>
  );
}
