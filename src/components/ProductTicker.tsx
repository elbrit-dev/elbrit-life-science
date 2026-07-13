/**
 * Full-bleed marquee of real Elbrit brand names — a catalogue "spine" that
 * reads like a batch register. Paused under prefers-reduced-motion.
 */
const BRANDS = [
  "ROZULA", "BRITORVA", "TELBRIT", "OLMETOP", "CILNITAB", "SITADOC", "GLIZATO",
  "GLIMIBRIT", "VILZATO", "EMPABRIT", "DAFAX", "NEURONZ", "PREGABRIT", "CITIBRIT",
  "CALBRIT", "RABRITON", "PANBRIT", "CARTITAB", "MAXFLORA", "AURAGEST", "NEBILOC",
  "BISOBRIT", "TICABRIT", "ARNIBLOC", "VERTONZ", "ELVIX", "FERTIBRIT", "EXIPAM",
];

export default function ProductTicker() {
  return (
    <div className="overflow-hidden border-y border-hairline bg-mist py-4" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <span key={i} className="mono flex items-center gap-10 text-[0.72rem] uppercase tracking-[0.15em] text-muted">
            {b}
            <span className="text-elbrit-500">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
