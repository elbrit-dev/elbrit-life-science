import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FeatureGrid } from "@/components/ui/Blocks";
import { PARTNERSHIP_MODES } from "@/lib/content";

export const metadata: Metadata = {
  title: "International Reach & Partnership",
  description:
    "Elbrit is expanding globally — exporting branded and prescription generics, OTC and nutraceuticals, and seeking marketing alliances and trade partnerships.",
};

const MARKETS = ["Nepal", "Bhutan", "Vietnam", "South-East Asia", "Africa", "USA · UK · EU"];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        eyebrow="International Reach & Partnership"
        title="Become a partner"
        subtitle="After domestic success, Elbrit is exporting prescription drugs and OTC products worldwide. We don't consider ourselves an island — we realise the power of positive collaboration."
        crumbs={[{ label: "Manufacturing", href: "/manufacturing" }, { label: "International Reach" }]}
      />

      <section className="container-x py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { stat: "30%", label: "Targeted export revenue", note: "of overall revenues" },
            { stat: "6+", label: "Target markets", note: "across Asia & Africa" },
            { stat: "USFDA / UKMHRA", label: "Approvals pursued", note: "for global generics" },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="card-3d p-7">
                <p className="font-display text-3xl font-extrabold text-navy-900">{m.stat}</p>
                <p className="mt-2 text-sm font-semibold text-navy-900">{m.label}</p>
                <p className="text-xs text-slate-soft">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <SectionHeading eyebrow="Ways to partner" title="Four ways to grow together" center />
        <div className="mt-12">
          <FeatureGrid
            cols={4}
            items={PARTNERSHIP_MODES.map((p) => ({ icon: "handshake", title: p.title, body: p.body }))}
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x text-center">
          <SectionHeading center eyebrow="Where we're headed" title="Markets on our roadmap" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {MARKETS.map((m) => (
              <span key={m} className="rounded-full border border-navy-100 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 shadow-[var(--shadow-soft)]">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Consider Elbrit as your partner"
        body="Contract manufacturing, in-licensing, out-licensing or export — fill in the form and we'll get back to you."
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
