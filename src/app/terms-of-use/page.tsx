import type { Metadata } from "next";
import LegalDocument from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions that govern use of the Elbrit Life Sciences website.",
};

export default function TermsOfUsePage() {
  return <LegalDocument slug="terms-of-use" />;
}
