import type { Metadata } from "next";
import LegalDocument from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Elbrit Life Sciences collects, uses and protects personal information shared through this website.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument slug="privacy-policy" />;
}
