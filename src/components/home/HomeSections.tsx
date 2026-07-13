import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { VALUES, PRESS, MANUFACTURING_STATS } from "@/lib/content";
import { CATEGORIES } from "@/lib/products";

/* ---------- About preview ---------- */
const REGISTER = [
  { k: "Mission", v: "Make lives better through the highest-quality, most affordable prescription medicines." },
  { k: "Vision", v: "Become a globally integrated healthcare leader for patients and providers." },
  { k: "Approach", v: "Reach untapped geographies — everyone deserves the very best in care." },
  { k: "Promise", v: "Long-term value for patients, communities and the planet." },
];

export function AboutPreview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About Elbrit"
            title={<>Making people&apos;s lives better <span className="text-gradient">since 2014.</span></>}
            intro="Elbrit Life Sciences discovers, develops, manufactures and markets prescription medicines — incorporated in 2000 and growing at nearly 100% every year."
          />
          <Reveal delay={0.12}>
            <Link href="/about" className="link mt-9">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <dl className="lg:pt-2">
          {REGISTER.map((r, i) => (
            <Reveal key={r.k} delay={i * 0.07}>
              <div className="grid grid-cols-[7rem_1fr] gap-6 border-t border-hairline py-6 first:border-t-0 sm:grid-cols-[9rem_1fr]">
                <dt className="mono pt-1 text-[0.72rem] uppercase tracking-widest text-elbrit-600">
                  {r.k}
                </dt>
                <dd className="font-display text-xl leading-snug text-ink sm:text-2xl">{r.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Therapy index ---------- */
export function Highlights() {
  return (
    <section className="border-y border-hairline bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Products & Therapies"
            title="Nine therapy areas. Over 210 branded formulations."
            intro="Developed for real, unmet patient needs — from the heart to the gut to everyday nutrition."
          />
          <Reveal>
            <Link href="/products" className="link shrink-0">
              View the full index <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-hairline">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 0.05}>
              <li>
                <Link
                  href="/products"
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-hairline py-6 transition-colors hover:bg-white sm:grid-cols-[3rem_14rem_1fr_auto] sm:gap-6 sm:px-2"
                >
                  <span className="mono text-sm text-navy-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-3">
                    <Icon name={c.icon} className="h-5 w-5 text-navy-700" />
                    <span className="text-lg font-semibold text-ink">{c.key}</span>
                  </span>
                  <span className="hidden text-sm text-muted sm:block">{c.blurb}</span>
                  <ArrowUpRight className="h-5 w-5 text-navy-300 transition-colors group-hover:text-elbrit-500" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Manifesto ---------- */
export function Manifesto() {
  return (
    <section className="border-y border-hairline bg-white py-24 md:py-36">
      <div className="container-x">
        <span className="eyebrow">Our philosophy</span>
        <blockquote className="mt-10 max-w-5xl font-display text-[1.9rem] font-light leading-[1.25] text-ink sm:text-4xl lg:text-[3.1rem] lg:leading-[1.2]">
          We consider ourselves <span className="text-gradient">co-pilots</span> in the mission to
          uphold innovation and excellence — creating long-term value for patients, and delivering
          quality medicine that fuels the wellbeing of communities, and the planet.
        </blockquote>
        <div className="mono mt-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-widest text-muted">
          <span className="h-px w-10 bg-elbrit-500" />
          Elbrit Life Sciences — Discovery. Innovation. Excellence.
        </div>
      </div>
    </section>
  );
}

/* ---------- Manufacturing (spec sheet on navy) ---------- */
export function MfgPreview() {
  return (
    <section className="gradient-navy py-20 text-white md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow text-white/60">Manufacturing</span>
          <h2 className="mt-6 max-w-lg text-3xl leading-tight text-white sm:text-[2.6rem]">
            A world-class facility in <span className="italic text-white/90">Pondicherry.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Solid orals, capsules and powders produced to global standards beside Chennai Port —
            with 40+ years of expertise, WHO-GMP &amp; GLP certification and Zero Liquid Discharge.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/manufacturing" className="btn btn-accent">
              Tour the facility <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contract-manufacturing" className="link border-white/40 text-white hover:border-white">
              Contract manufacturing
            </Link>
          </div>
        </div>

        <dl className="lg:pt-2">
          {MANUFACTURING_STATS.map((m) => (
            <div
              key={m.label}
              className="flex items-baseline justify-between gap-6 border-t border-white/15 py-6 first:border-t-0"
            >
              <dt className="text-sm text-white/70">
                {m.label}
                <span className="mt-0.5 block text-xs text-white/40">{m.note}</span>
              </dt>
              <dd className="font-display text-3xl text-white sm:text-4xl">{m.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Values glossary ---------- */
export function ValuesStrip() {
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeading
        eyebrow="Approach & Values"
        title="A value system upheld throughout the company."
        intro="Working within healthcare demands a culture that rewards honest practice and hard work. These seven values guide everything we do."
      />
      <div className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={(i % 3) * 0.06}>
            <div className="border-t-2 border-ink pt-5">
              <h3 className="text-base font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Press ledger ---------- */
export function PressPreview() {
  return (
    <section className="border-t border-hairline bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Media & Press" title="Elbrit in the news." />
          <Reveal>
            <Link href="/media" className="link shrink-0">
              Press &amp; media kit <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-hairline">
          {PRESS.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.07}>
              <article className="grid gap-4 border-b border-hairline py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                <div className="mono text-[0.72rem] uppercase tracking-widest text-muted">
                  <div className="text-elbrit-600">{n.tag}</div>
                  <div className="mt-1">{n.date}</div>
                </div>
                <div>
                  <h3 className="max-w-2xl font-display text-xl leading-snug text-ink sm:text-2xl">
                    {n.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{n.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
