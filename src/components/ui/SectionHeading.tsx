import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, intro, center, className }: Props) {
  return (
    <Reveal className={cn(center && "mx-auto text-center", "max-w-2xl", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
