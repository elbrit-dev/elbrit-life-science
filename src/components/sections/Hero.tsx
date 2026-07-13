"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroFigure from "@/components/HeroFigure";

const ease = [0.22, 1, 0.36, 1] as const;

const LEDGER = [
  { k: "Established", v: "2000" },
  { k: "Team", v: "250+" },
  { k: "Products", v: "210+" },
  { k: "Standard", v: "WHO-GMP" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay: d, ease },
  });

  return (
    <section className="relative border-b border-hairline">
      <div className="grid lg:min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---- Left: statement ---- */}
        <div className="flex flex-col justify-center px-6 pt-32 pb-16 md:px-12 lg:px-16 lg:pt-24 lg:pb-24 xl:px-24">
          <motion.p {...rise(0)} className="eyebrow">
            Elbrit Life Sciences Pvt. Ltd.
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-8 text-[3rem] leading-[0.98] tracking-tight text-ink sm:text-7xl xl:text-[5.7rem]"
          >
            Discovery.
            <br />
            Innovation.
            <br />
            <span className="text-gradient">Excellence.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-9 max-w-lg text-lg leading-relaxed text-muted">
            An Indian pharmaceutical company discovering, developing and manufacturing
            high-quality, affordable medicines for complex illnesses — from a WHO-GMP
            facility in Pondicherry to patients across India and the world.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-11 flex flex-wrap items-center gap-6">
            <Link href="/products" className="btn btn-primary">
              Explore the portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="link">
              Our story since 2000
            </Link>
          </motion.div>
        </div>

        {/* ---- Right: navy plate, bleeds to viewport edge ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="gradient-navy relative flex min-h-[26rem] items-center justify-center overflow-hidden px-6 py-16 lg:min-h-0"
        >
          {/* faint measure grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse 75% 75% at 55% 45%, #000 25%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 55% 45%, #000 25%, transparent 100%)",
            }}
          />

          {/* vertical brand spine */}
          <div className="mono absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[0.62rem] uppercase tracking-[0.35em] text-white/40 lg:block">
            Elbrit · Est. 2000 · Pondicherry
          </div>

          <div className="relative w-full max-w-[30rem]">
            <HeroFigure tone="light" className="w-full animate-drift" />
            <div className="seal absolute -bottom-1 right-0 border-white/30 bg-navy-950/40 text-white/80 backdrop-blur-sm md:right-4">
              Est.
              <br />
              2000
            </div>
          </div>

          <p className="mono absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.3em] text-white/35">
            Fig. 01 — Branded formulations · 9 therapy areas
          </p>
        </motion.div>
      </div>

      {/* ---- Ledger (full width) ---- */}
      <div className="border-t border-hairline bg-white">
        <dl className="mx-auto grid max-w-[104rem] grid-cols-2 px-6 md:grid-cols-4 md:px-12 md:divide-x md:divide-hairline lg:px-16 xl:px-24">
          {LEDGER.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              className="px-1 py-7 md:px-8 md:first:pl-0"
            >
              <dt className="mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">{s.k}</dt>
              <dd className="mt-3 font-display text-3xl text-ink lg:text-4xl">{s.v}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
