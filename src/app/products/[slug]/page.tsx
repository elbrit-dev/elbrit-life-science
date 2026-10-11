import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ActionLink from "@/components/ui/ActionLink";
import { buildCatalogue, familySlug, getFamily, CATEGORIES, ERP_BY_CODE } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return buildCatalogue().flatMap((c) => c.families.map((f) => ({ slug: familySlug(f.family) })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fam = getFamily(slug);
  if (!fam) return {};
  return {
    title: `${fam.family} · ${fam.category}`,
    description: `${fam.family} by Elbrit Life Sciences — ${fam.category}. ${fam.variants
      .map((v) => {
        const comp = ERP_BY_CODE.get(v)?.composition.join(", ");
        return comp ? `${v}: ${comp}` : v;
      })
      .join("; ")}`.slice(0, 300),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fam = getFamily(slug);
  if (!fam) notFound();

  const cat = CATEGORIES.find((c) => c.key === fam.category)!;
  const skus = fam.variants.map((code) => ({ code, erp: ERP_BY_CODE.get(code) }));
  const related = buildCatalogue()
    .find((c) => c.category === fam.category)!
    .families.filter((f) => f.family !== fam.family)
    .slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow={fam.category}
        title={fam.family}
        subtitle={cat.blurb}
        crumbs={[{ label: "Products", href: "/products" }, { label: fam.family }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-display text-2xl text-ink">Strengths & composition</h2>
            <p className="mt-2 text-sm text-muted">
              {fam.variants.length} {fam.variants.length === 1 ? "SKU" : "SKUs"} · Branded Formulations
            </p>
            <div className="mt-6 divide-y divide-hairline overflow-hidden rounded-[3px] border border-hairline">
              {skus.map(({ code, erp }) => (
                <div key={code} className="grid gap-3 bg-white px-5 py-5 sm:grid-cols-[11rem_1fr]">
                  <div>
                    <p className="mono text-sm font-medium text-ink">{code}</p>
                    {erp?.form && <p className="mt-1 text-xs text-muted">{erp.form}</p>}
                  </div>
                  {erp && (erp.composition.length > 0 || erp.classes.length > 0) && (
                    <div>
                      <ul className="space-y-1 text-sm text-ink">
                        {erp.composition.map((c) => (
                          <li key={c} className={c.endsWith(":") ? "pt-1 font-medium" : undefined}>{c}</li>
                        ))}
                      </ul>
                      {erp.classes.length > 0 && (
                        <p className="mt-2 text-xs text-muted">{erp.classes.join(" · ")}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-3d p-7">
              <span className="grid h-10 w-10 place-items-center rounded-[4px] bg-ink text-white">
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="mono text-[0.66rem] uppercase tracking-widest text-navy-300">Therapy area</dt>
                  <dd className="mt-1 text-ink">{fam.category}</dd>
                </div>
                <div>
                  <dt className="mono text-[0.66rem] uppercase tracking-widest text-navy-300">Business area</dt>
                  <dd className="mt-1 text-ink">Branded Formulations</dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-hairline pt-5 text-xs leading-relaxed text-muted">
                For general information only — not medical advice. Always consult a registered medical
                practitioner. To report a side effect, visit{" "}
                <ActionLink href="/pharmacovigilance" className="link">Pharmacovigilance</ActionLink>.
              </p>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl text-ink">More in {fam.category}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {related.map((f) => (
                <Link
                  key={f.family}
                  href={`/products/${familySlug(f.family)}`}
                  className="rounded-[3px] border border-hairline bg-white px-3 py-2 text-sm text-navy-700 transition-colors hover:border-navy-300 hover:text-ink"
                >
                  {f.family}
                </Link>
              ))}
            </div>
            <Link href="/products" className="link mt-8 inline-flex items-center gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </div>
        )}
      </section>

      <CTABand
        title="Need product information or a partnership?"
        body="Our medical and commercial teams can help with prescribing information, supply and licensing."
        primary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
