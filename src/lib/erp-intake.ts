/* Server-only: saves website form submissions into ERPNext Forms Pro.

   Each form has a Forms Pro "Form" (kept unpublished, so Forms Pro's public guest endpoint
   rejects it) and a linked DocType that stores responses. The website authenticates as
   website-api@elbrit.org, whose only permission is CREATE on those two DocTypes — it cannot
   read, list or delete anything. Configure via .env.local / hosting env (see ERP_* vars). */

type Intake = "contact" | "ae";

const ENV: Record<Intake, { form: string; doctype: string }> = {
  contact: { form: "ERP_CONTACT_FORM", doctype: "ERP_CONTACT_DOCTYPE" },
  ae: { form: "ERP_AE_FORM", doctype: "ERP_AE_DOCTYPE" },
};

/* Returns true only when ERPNext confirms the record was inserted. */
export async function saveSubmission(kind: Intake, fields: Record<string, string | number | boolean | null>) {
  const url = process.env.ERP_URL;
  const token = process.env.ERP_WEBSITE_TOKEN;
  const form = process.env[ENV[kind].form];
  const doctype = process.env[ENV[kind].doctype];
  if (!url || !token || !form || !doctype) {
    console.error(`[erp-intake] ${kind}: ERP_* environment variables are not configured`);
    return false;
  }

  try {
    const res = await fetch(`${url}/api/resource/${doctype}`, {
      method: "POST",
      headers: { Authorization: `token ${token}`, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...fields, fp_linked_form: form, fp_submission_status: "Submitted" }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.error(`[erp-intake] ${kind}: ERPNext ${res.status} ${(await res.text()).slice(0, 500)}`);
      return false;
    }
    const body = (await res.json()) as { data?: { name?: string } };
    return Boolean(body.data?.name);
  } catch (err) {
    console.error(`[erp-intake] ${kind}: request failed`, err);
    return false;
  }
}

/* Trim and cap a submitted string; returns "" for non-strings. */
export function clean(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/* Tidies a phone number to digits, +, -, () and spaces. The Forms Pro fields are plain Data on
   purpose: ERPNext's Phone type rejects numbers without a +country code, which would lose reports. */
export function phone(value: unknown): string {
  return clean(value, 30).replace(/[^\d+()\-\s]/g, "").trim();
}

/* Best-effort per-IP throttle (per server instance): `limit` submissions per `windowMs`. */
const hits = new Map<string, number[]>();
export function rateLimited(request: Request, limit = 5, windowMs = 10 * 60 * 1000) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}
