/* Contact form intake -> ERPNext Forms Pro "Website Contact".
   Only returns success once ERPNext confirms the record was saved. */

import { clean, phone, rateLimited, saveSubmission } from "@/lib/erp-intake";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    first_name: clean(body.first, 100),
    last_name: clean(body.last, 100),
    company: clean(body.company, 140),
    email: clean(body.email, 140),
    mobile: phone(body.mobile),
    landline: phone(body.landline),
    message: clean(body.message, 5000),
  };

  const missing = (["first_name", "last_name", "email", "message"] as const).filter((k) => !record[k]);
  if (missing.length || !EMAIL.test(record.email)) {
    return Response.json({ error: "missing_fields", fields: missing }, { status: 400 });
  }

  const saved = await saveSubmission("contact", record);
  return saved ? Response.json({ ok: true }) : Response.json({ error: "save_failed" }, { status: 502 });
}
