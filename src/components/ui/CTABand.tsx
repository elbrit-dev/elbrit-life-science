import ActionLink from "./ActionLink";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = {
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTABand({
  title,
  body,
  primary = { label: "Contact us", href: "/contact" },
  secondary,
}: Props) {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <div className="gradient-navy relative overflow-hidden px-7 py-14 text-white md:px-16 md:py-20">
          {/* hairline corner ticks */}
          <span className="pointer-events-none absolute left-6 top-6 h-5 w-5 border-l border-t border-white/25" />
          <span className="pointer-events-none absolute bottom-6 right-6 h-5 w-5 border-b border-r border-white/25" />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-3xl leading-tight text-white sm:text-[2.6rem]">{title}</h2>
              {body && <p className="mt-5 max-w-xl text-lg text-white/70">{body}</p>}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink href={primary.href} className="btn btn-accent">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              {secondary && (
                <ActionLink
                  href={secondary.href}
                  className="btn border border-white/30 bg-transparent text-white hover:border-white"
                >
                  {secondary.label}
                </ActionLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
