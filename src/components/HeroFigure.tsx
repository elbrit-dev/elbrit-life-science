/**
 * Bespoke pharmacopeia-style skeletal molecule, drawn in hairlines.
 * `tone="light"` renders it for a dark/navy panel.
 */
export default function HeroFigure({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "light";
}) {
  const light = tone === "light";
  const stroke = light ? "#dbe6f5" : "#16235c";
  const hair = light ? "rgba(219,230,245,0.28)" : "#c3cde0";
  const nodeFill = light ? "#0b1230" : "#ffffff";
  const label = light ? "rgba(219,230,245,0.6)" : "#55617a";
  const red = "#e11b22";

  return (
    <svg viewBox="0 0 460 460" className={className} role="img" aria-label="Molecular structure diagram" fill="none">
      <circle cx="230" cy="230" r="196" stroke={hair} strokeWidth="1" />
      <circle cx="230" cy="230" r="150" stroke={hair} strokeWidth="1" />

      <g stroke={stroke} strokeWidth="1" opacity="0.7">
        <path d="M30 30h22M30 30v22" />
        <path d="M430 30h-22M430 30v22" />
        <path d="M30 430h22M30 430v-22" />
        <path d="M430 430h-22M430 430v-22" />
      </g>

      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
        <path d="M150 150 L230 120 L310 150 L310 230 L230 260 L150 230 Z" />
        <path d="M310 150 L390 120 L390 200 L310 230" opacity="0.9" />
        <path d="M150 230 L110 300 L150 370 L230 360" opacity="0.9" />
        <path d="M230 260 L270 330" />
        <path d="M162 162 L222 140" strokeWidth="1" opacity="0.6" />
        <path d="M298 162 L298 222" strokeWidth="1" opacity="0.6" />
      </g>

      <g>
        {[
          [150, 150], [310, 150], [310, 230], [150, 230],
          [390, 120], [390, 200], [110, 300], [150, 370], [270, 330],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="6.5" fill={nodeFill} stroke={stroke} strokeWidth="1.6" />
        ))}
        <circle cx="230" cy="120" r="9" fill={red} />
        <circle cx="230" cy="260" r="7" fill={stroke} />
        <circle cx="230" cy="360" r="6.5" fill={nodeFill} stroke={stroke} strokeWidth="1.6" />
      </g>

      <g fill={label} fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="1">
        <text x="244" y="116">R₁</text>
        <text x="402" y="118">OH</text>
        <text x="86" y="304">N</text>
      </g>
      <line x1="239" y1="120" x2="230" y2="120" stroke={red} strokeWidth="1.6" />
    </svg>
  );
}
