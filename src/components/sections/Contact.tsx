"use client";

import { useState } from "react";
import { MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { OFFICES } from "@/lib/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container-x py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Offices */}
        <div className="grid gap-4 sm:grid-cols-2">
          {OFFICES.map((o, i) => (
            <Reveal key={o.city} delay={(i % 2) * 0.08}>
              <div className="card-3d h-full p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-navy-900">{o.city}</h3>
                  <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-navy-600">
                    {o.role}
                  </span>
                </div>
                <p className="mt-3 flex gap-2 text-sm leading-relaxed text-slate-soft">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-elbrit-500" />
                  <span>{o.lines.join(", ")}</span>
                </p>
                {o.phone && (
                  <a
                    href={`tel:${o.phone.replace(/\s/g, "")}`}
                    className="mt-3 flex items-center gap-2 text-sm font-medium text-navy-800 hover:text-elbrit-600"
                  >
                    <Phone className="h-4 w-4 text-elbrit-500" />
                    {o.phoneLabel}: {o.phone}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-[1.5rem] border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)]">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-500" />
                <h3 className="mt-4 text-xl font-semibold text-navy-900">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-soft">
                  Your message has been received. A member of our team will be in touch shortly.
                </p>
                <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
                <Field label="Company" name="company" className="sm:col-span-2" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Mobile" name="mobile" type="tel" />
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-200"
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="btn btn-primary sm:col-span-2">
                  Send message
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-soft sm:col-span-2">
                  For adverse-event reporting, please use our Pharmacovigilance channel.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="text-elbrit-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={name === "email" ? "email" : "off"}
        className="w-full rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-200"
      />
    </div>
  );
}
