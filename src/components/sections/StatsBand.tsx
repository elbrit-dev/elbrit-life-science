import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/content";

export default function StatsBand() {
  return (
    <section className="container-x py-12">
      <Reveal>
        <div className="gradient-navy px-7 py-10 text-white md:px-12">
          <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-white/15">
            {STATS.map((s) => (
              <div key={s.label} className="md:px-8 md:first:pl-0">
                <dd className="font-display text-4xl text-white md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} raw={s.raw} />
                </dd>
                <dt className="mono mt-3 text-[0.68rem] uppercase tracking-widest text-white/60">
                  {s.label}
                </dt>
                <p className="mt-1 text-xs text-white/45">{s.sub}</p>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
