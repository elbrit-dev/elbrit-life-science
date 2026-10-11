import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, FileText, Image as ImageIcon, Database } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media & Press",
  description:
    "Press releases, the Elbrit media kit, brand logos and company key data for journalists and partners.",
};

const KIT = [
  { icon: FileText, label: "Corporate brochure", href: "/media-kit/Elbrit-Corporate-Brochure.pdf" },
  { icon: ImageIcon, label: "Elbrit logo & product logos" },
  { icon: Database, label: "Company key data", href: "/media-kit/Key-Company-Data.pdf" },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media & Press"
        title="Newsroom & media kit"
        subtitle="Files and resources for media use and research. Journalists are welcome to send inquiries to our Public Relations team via the contact page."
        crumbs={[{ label: "Media" }]}
      />

      <section className="container-x py-12">
        <SectionHeading eyebrow="Press releases" title="Latest stories" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRESS.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <Link href={`/media/${n.slug}`} className="card-3d group flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-elbrit-50 px-3 py-1 text-xs font-semibold text-elbrit-600">{n.tag}</span>
                  <span className="text-xs text-slate-soft">{n.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-navy-900">{n.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">{n.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-elbrit-600">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <SectionHeading
              eyebrow="Media kit"
              title="Everything you need to tell our story"
              intro="All information and resources in the Elbrit Life Sciences Media Kit are intended for non-commercial, media use and research."
            />
            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)]">
                <ul className="space-y-4">
                  {KIT.map((k) => (
                    <li key={k.label} className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-50 text-navy-700">
                        <k.icon className="h-5 w-5" />
                      </span>
                      {k.href ? (
                        <a href={k.href} className="text-sm font-medium text-navy-900 hover:text-elbrit-600" download>
                          {k.label} <span className="text-xs text-slate-soft">(PDF)</span>
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-navy-900">{k.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <a href="/media-kit/elbrit-media-kit-may2019.zip" className="btn btn-primary mt-7 w-full" download>
                  Download the media kit <Download className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-slate-soft">ZIP · 4 MB · brochure, logos & key data</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Press & PR enquiries"
        body="Direct your inquiries to our Public Relations team and we'll respond promptly."
        primary={{ label: "Contact PR team", href: "/contact" }}
      />
    </>
  );
}
