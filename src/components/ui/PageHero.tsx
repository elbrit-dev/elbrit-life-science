import Link from "next/link";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="border-b border-hairline bg-white">
      <div className="container-x pt-36 pb-14 md:pt-44 md:pb-16">
        <Reveal y={12}>
          <nav className="mono flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-widest text-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            {crumbs?.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-navy-300">/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-ink">{c.label}</Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.06}>
          <span className="eyebrow mt-8">{eyebrow}</span>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-6 max-w-4xl text-[2.4rem] leading-[1.05] text-ink sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.18}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
