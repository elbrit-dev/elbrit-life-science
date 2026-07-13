import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

/**
 * Faithful recreation of the Elbrit Life Sciences logo:
 * red rounded "e" mark + "ELBRiT" wordmark (red dot on the i) + company subtitle.
 */
export default function Logo({
  variant = "dark",
  withTagline = true,
  className,
}: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-white/70" : "text-slate-soft";

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-[0.55rem] bg-elbrit-500 shadow-[0_6px_14px_rgba(225,27,34,0.35)]"
      >
        <span className="font-display text-2xl font-bold leading-none text-white -mt-0.5">
          e
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.45rem] font-extrabold tracking-tight",
            word
          )}
        >
          ELBR
          <span className="lowercase">i</span>
          <span className="relative">
            T
            <span className="absolute -top-0.5 left-[0.18em] h-1.5 w-1.5 rounded-full bg-elbrit-500" />
          </span>
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.18em]",
              sub
            )}
          >
            Life Sciences Pvt. Ltd.
          </span>
        )}
      </span>
    </span>
  );
}
