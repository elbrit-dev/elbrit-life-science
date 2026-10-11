"use client";

import { useState } from "react";
import { MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Honeypot from "@/components/ui/Honeypot";
import { COMPANY, OFFICES } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (res.ok) form.reset();
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

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
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-500" />
                <h3 className="mt-4 text-xl font-semibold text-navy-900">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-soft">
                  Your message has been received. A member of our team will be in touch shortly.
                </p>
                <button onClick={() => setStatus("idle")} className="btn btn-ghost mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative grid gap-4 sm:grid-cols-2">
                <Honeypot />
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
                <Field label="Company" name="company" className="sm:col-span-2" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Mobile" name="mobile" type="tel" />
                <Field label="Landline" name="landline" type="tel" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
                    Message<span className="text-elbrit-500"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-200"
                    placeholder="How can we help?"
                  />
                </div>
                {status === "error" && (
                  <p role="alert" className="rounded-xl border border-elbrit-100 bg-elbrit-50 p-4 text-sm text-elbrit-700 sm:col-span-2">
                    We couldn&apos;t send your message. Please try again, or call us toll-free on{" "}
                    <a href={`tel:${COMPANY.tollFree.replace(/\s/g, "")}`} className="font-semibold underline">
                      {COMPANY.tollFree}
                    </a>
                    .
                  </p>
                )}
                <button type="submit" disabled={status === "sending"} className="btn btn-primary sm:col-span-2 disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-soft sm:col-span-2">
                  For adverse-event reporting, please use our{" "}
                  <a href="/pharmacovigilance" className="link">Pharmacovigilance form</a>.
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
