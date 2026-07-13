import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import StatsBand from "@/components/sections/StatsBand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Elbrit",
  description:
    "Founded in 2014, Elbrit Life Sciences discovers, develops, manufactures and markets prescription medicines with a mission to make lives better.",
};

const PILLARS = [
  { k: "Mission", body: "Make lives better by providing the highest-quality, most affordable prescription drugs to everyone who needs them." },
  { k: "Vision", body: "Become a globally integrated healthcare leader — building networks of patients and providers across the world." },
  { k: "Approach", body: "Expand into untapped geographies, because everybody deserves the very best in healthcare treatment." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Elbrit"
        title="Making people's lives better since 2014"
        subtitle="Elbrit Life Sciences specialises in discovering, developing, manufacturing and marketing prescription drugs — guided by a simple mission: make lives better."
        crumbs={[{ label: "About" }]}
      />

      <StatsBand />

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={<>Co-pilots in the mission to <span className="text-gradient">make lives better</span></>}
              intro="The healthcare industry is ever-evolving — within both science and society. We consider ourselves co-pilots in the mission to uphold innovation and excellence, creating long-term value for patients."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Founded in 2014 and growing at nearly 100% year on year, our team of 250+ specialists
                builds science-backed medicines and pursues regulatory approvals — including UK MHRA and
                EU GMP — from state-of-the-art, GMP-compliant facilities.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/approach-values" className="btn btn-primary">
                  Our values <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/business-strategy" className="btn btn-ghost">
                  Business strategy
                </Link>
              </div>
            </Reveal>
          </div>

          <dl>
            {PILLARS.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.08}>
                <div className="grid grid-cols-[6rem_1fr] gap-6 border-t border-hairline py-7 first:border-t-0 sm:grid-cols-[8rem_1fr]">
                  <dt className="mono pt-1 text-[0.72rem] uppercase tracking-widest text-elbrit-600">
                    {p.k}
                  </dt>
                  <dd className="font-display text-xl leading-snug text-ink sm:text-2xl">{p.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-hairline bg-mist py-20 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="The Elbrit Group" title="A group built around patient wellbeing." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-hairline bg-hairline md:grid-cols-3">
            {COMPANIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="h-full bg-white p-8">
                  <span className="mono text-[0.7rem] tracking-widest text-navy-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Partner with a progressive pharma company"
        body="From distribution to in-licensing — let's explore how we can grow together."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Explore products", href: "/products" }}
      />
    </>
  );
}
