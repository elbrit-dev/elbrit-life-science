import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV, SOCIAL, LEGAL, COMPANY } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      {/* Statement */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col justify-between gap-10 py-16 md:flex-row md:items-end md:py-20">
          <div>
            <span className="mono text-[0.7rem] uppercase tracking-[0.25em] text-white/50">
              Elbrit Life Sciences Pvt. Ltd.
            </span>
            <p className="mt-6 max-w-2xl font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
              Discovery. Innovation. <span className="italic text-white/85">Excellence.</span>
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent shrink-0">
            Partner with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-elbrit-500 font-display text-2xl font-bold leading-none text-white">
            e
          </span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            An Indian pharmaceutical company — incorporated 2000, founded 2014 — creating long-term
            value for patients across India and the world.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono rounded-[3px] border border-white/15 px-3 py-1.5 text-[0.68rem] uppercase tracking-widest text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav>
          <h4 className="mono text-[0.66rem] uppercase tracking-[0.2em] text-white/40">Navigate</h4>
          <ul className="mt-5 space-y-3">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mono text-[0.66rem] uppercase tracking-[0.2em] text-white/40">Head office</h4>
          <address className="mt-5 not-italic text-sm leading-relaxed text-white/75">
            C20, BKC, G Block
            <br />
            Mumbai 400051, India
          </address>
          <p className="mt-5 text-sm text-white/75">
            <span className="mono text-[0.66rem] uppercase tracking-widest text-white/40">Toll free</span>
            <br />
            <a href={`tel:${COMPANY.tollFree.replace(/\s/g, "")}`} className="font-display text-2xl text-white">
              {COMPANY.tollFree}
            </a>
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p className="mono tracking-wide">© {new Date().getFullYear()} {COMPANY.legal}</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
