"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Phone } from "lucide-react";
import Honeypot from "@/components/ui/Honeypot";
import { COMPANY } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-xl border border-navy-100 bg-mist px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-200";

export default function AdverseEventForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      initials: fd.get("initials"),
      age: fd.get("age"),
      weight: fd.get("weight"),
      suspected_drug: fd.get("suspected_drug"),
      reporter_name: fd.get("reporter_name"),
      mobile: fd.get("mobile"),
      adverse_event: fd.get("adverse_event"),
      privacy_policy: fd.get("privacy_policy") === "on",
      website: fd.get("website"),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/adverse-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const tel = `tel:${COMPANY.tollFree.replace(/\s/g, "")}`;

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Report received</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-soft">
          Thank you. Our pharmacovigilance team will review your report and may contact you for more details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-4 sm:grid-cols-3">
      <Honeypot />
      <Field label="Patient's initials" name="initials" required />
      <Field label="Age (years)" name="age" type="number" />
      <Field label="Weight (kg)" name="weight" type="number" />
      <Field label="Suspected drug name" name="suspected_drug" required className="sm:col-span-3" />
      <Field label="Name of the reporter" name="reporter_name" required className="sm:col-span-2" />
      <Field label="Phone no. of reporter" name="mobile" type="tel" />
      <div className="sm:col-span-3">
        <label htmlFor="adverse_event" className="mb-1.5 block text-sm font-medium text-navy-800">
          Description of adverse event<span className="text-elbrit-500"> *</span>
        </label>
        <textarea id="adverse_event" name="adverse_event" rows={5} required className={`${input} resize-y`} />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-soft sm:col-span-3">
        <input type="checkbox" name="privacy_policy" required className="mt-1 h-4 w-4 accent-[var(--color-navy-700)]" />
        <span>
          The information provided in this report will be handled in line with our{" "}
          <Link href="/privacy-policy" className="link">privacy policy</Link>. Please confirm that you understand
          this policy.<span className="text-elbrit-500"> *</span>
        </span>
      </label>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-elbrit-100 bg-elbrit-50 p-4 text-sm text-elbrit-700 sm:col-span-3">
          We couldn&apos;t submit your report online. Please call us toll-free on{" "}
          <a href={tel} className="font-semibold underline">{COMPANY.tollFree}</a> so we can record it.
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary sm:col-span-3 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send report"}
        <Send className="h-4 w-4" />
      </button>
      <p className="flex items-center gap-2 text-xs text-slate-soft sm:col-span-3">
        <Phone className="h-3.5 w-3.5" /> Prefer to talk? Call toll-free{" "}
        <a href={tel} className="font-medium text-navy-800">{COMPANY.tollFree}</a>
      </p>
    </form>
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
      <input id={name} name={name} type={type} required={required} min={type === "number" ? 0 : undefined} className={input} />
    </div>
  );
}
