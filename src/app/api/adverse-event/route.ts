/* Adverse-event (pharmacovigilance) report intake -> ERPNext Forms Pro "Adverse Event Report".
   Only returns success once ERPNext confirms the record was saved; otherwise the form tells the
   reporter to call the toll-free line. */

import { clean, phone, rateLimited, saveSubmission } from "@/lib/erp-intake";

const toInt = (v: unknown) => {
  const n = Math.round(Number(v));
  return clean(String(v ?? "")) && Number.isFinite(n) && n >= 0 && n < 1000 ? n : null;
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.website)) return Response.json({ ok: true });
  if (rateLimited(request)) return Response.json({ error: "rate_limited" }, { status: 429 });

  const record = {
    patient_initials: clean(body.initials, 20),
    age: toInt(body.age),
    weight: toInt(body.weight),
    suspected_drug: clean(body.suspected_drug, 200),
    reporter_name: clean(body.reporter_name, 140),
    reporter_phone: phone(body.mobile),
    description: clean(body.adverse_event, 5000),
    privacy_accepted: body.privacy_policy === true ? 1 : 0,
  };

  const missing = (["patient_initials", "suspected_drug", "reporter_name", "description"] as const).filter(
    (k) => !record[k]
  );
  if (missing.length || !record.privacy_accepted) {
    return Response.json({ error: "missing_fields", fields: missing }, { status: 400 });
  }

  const saved = await saveSubmission("ae", record);
  return saved ? Response.json({ ok: true }) : Response.json({ error: "save_failed" }, { status: 502 });
}
