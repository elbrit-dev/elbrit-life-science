import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { icon: string; title: string; body: string }[];
  cols?: 2 | 3 | 4;
}) {
  const grid = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  return (
    <div className={cn("grid gap-px overflow-hidden rounded-[3px] border border-hairline bg-hairline", grid)}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % cols) * 0.06}>
          <div className="flex h-full flex-col bg-white p-7 lg:p-8">
            <Icon name={it.icon} className="h-6 w-6 text-navy-700" />
            <h3 className="mt-6 text-lg text-ink">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-4 sm:grid-cols-2", className)}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 border-t border-hairline pt-4">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-elbrit-500" strokeWidth={2.5} />
          <span className="text-sm leading-relaxed text-ink">{it}</span>
        </li>
      ))}
    </ul>
  );
}
