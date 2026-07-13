import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { FeatureGrid } from "@/components/ui/Blocks";

export const metadata: Metadata = {
  title: "Business Strategy",
  description:
    "Elbrit's patient-centric strategy across cardiovascular, diabetes, gastroenterology, CNS and nutrition — expanding within and beyond India.",
};

const FOCUS = [
  { icon: "target", title: "Unmet patient needs", body: "We develop and market products in cardiovascular, diabetes, gastroenterology, CNS and nutrition segments where real needs go unmet." },
  { icon: "heart-handshake", title: "Patient-centric", body: "Products are shaped through communication with patients — highest quality, affordable, in convenient delivery forms for optimal outcomes." },
  { icon: "users", title: "Healthcare community", body: "We treat hospitals, physicians, retailers and nurses as natural extensions of our team, working toward shared goals." },
  { icon: "lightbulb", title: "Innovation & excellence", body: "These values drive our drug discovery, manufacturing, dose-delivery technology, marketing, sales and distribution." },
];

export default function BusinessStrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Strategy"
        title="Addressing a changing world's healthcare demands"
        subtitle="As the global population ages and healthcare demands evolve, Elbrit expands its presence across — and beyond — India, with a patient-first portfolio."
        crumbs={[{ label: "About", href: "/about" }, { label: "Business Strategy" }]}
      />

      <section className="container-x pb-4">
        <Reveal>
          <figure className="mx-auto max-w-3xl rounded-[1.5rem] border border-navy-100 bg-mist p-8 text-center md:p-12">
            <blockquote className="font-display text-2xl font-semibold leading-snug text-navy-900 md:text-3xl">
              “It is health that is real wealth and not pieces of gold and silver.”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-elbrit-600">— Mahatma Gandhi</figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="container-x py-16">
        <FeatureGrid items={FOCUS} cols={2} />
      </section>

      <CTABand
        title="Explore a partnership with Elbrit"
        body="Marketing alliances, trade partnerships, in- and out-licensing — we believe in the power of positive collaboration."
        primary={{ label: "Become a partner", href: "/international" }}
        secondary={{ label: "Our products", href: "/products" }}
      />
    </>
  );
}
