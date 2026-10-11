import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/Blocks";
import { PERKS, COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Elbrit Life Sciences. A culture where everybody is heard, seen and valued — with best-in-industry compensation, growth and benefits.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Where everybody is heard, seen and valued"
        subtitle="Our working life amounts to a great deal of the time we're afforded to live on this planet. The Elbrit Way centres on making lives better — for patients and for our people."
        crumbs={[{ label: "Careers" }]}
      />

      <section className="container-x py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The perks"
            title="We invest in our people"
            intro="From compensation to continuous learning, we build an environment where talented people do their best work."
          />
          <Reveal delay={0.1}>
            <CheckList items={PERKS} className="sm:grid-cols-1" />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Open positions"
              title="Find your role at Elbrit"
              intro="All our current openings are listed on the Elbrit jobs portal, where you can apply directly."
            />
            <Reveal>
              <a
                href={COMPANY.jobsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shrink-0"
              >
                View open positions <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Don't see the right role?"
        body="We're always looking for talented people who share our values. Send us your details."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Our values", href: "/approach-values" }}
      />
    </>
  );
}
