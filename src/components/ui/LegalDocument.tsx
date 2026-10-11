import Link from "next/link";
import PageHero from "./PageHero";
import { LEGAL_DOCS, type LegalSlug } from "@/lib/legal";
import { LEGAL } from "@/lib/content";

export default function LegalDocument({ slug }: { slug: LegalSlug }) {
  const doc = LEGAL_DOCS[slug];
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} subtitle={doc.summary} crumbs={[{ label: doc.title }]} />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="measure space-y-5 text-[0.97rem] leading-relaxed text-muted">
            {doc.blocks.map((b, i) =>
              b.t === "h" ? (
                <h2 key={i} className="pt-6 font-display text-2xl text-ink">{b.text}</h2>
              ) : b.t === "ul" ? (
                <ul key={i} className="space-y-2">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-elbrit-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b.text}</p>
              )
            )}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mono mb-3 text-[0.65rem] uppercase tracking-widest text-navy-300">Policies</p>
            <ul className="space-y-1 border-l border-hairline">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      l.href === `/${slug}`
                        ? "-ml-px block border-l-2 border-elbrit-500 py-2 pl-4 text-sm font-semibold text-ink"
                        : "block py-2 pl-4 text-sm text-muted hover:text-ink"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
