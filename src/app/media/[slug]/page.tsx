import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import { PRESS } from "@/lib/content";
import { PRESS_ARTICLES } from "@/lib/press";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRESS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = PRESS.find((p) => p.slug === slug);
  if (!card) return {};
  return { title: card.title, description: card.body };
}

export default async function PressArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = PRESS.find((p) => p.slug === slug);
  const article = PRESS_ARTICLES[slug];
  if (!card || !article) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Press release · ${card.date}`}
        title={article.title}
        crumbs={[{ label: "Media", href: "/media" }, { label: card.tag }]}
      />

      <section className="container-x py-16">
        <article className="measure space-y-5 text-[1.02rem] leading-relaxed text-muted">
          {article.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg text-ink" : undefined}>{p}</p>
          ))}
        </article>
        <Link href="/media" className="link mt-12 inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="h-4 w-4" /> All press releases
        </Link>
      </section>

      <CTABand
        title="Press & PR enquiries"
        body="Direct your inquiries to our Public Relations team and we'll respond promptly."
        primary={{ label: "Contact PR team", href: "/contact" }}
      />
    </>
  );
}
