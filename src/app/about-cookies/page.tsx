import type { Metadata } from "next";
import LegalDocument from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "About Cookies",
  description: "What cookies are and how Elbrit Life Sciences uses them on its websites.",
};

export default function AboutCookiesPage() {
  return <LegalDocument slug="about-cookies" />;
}
