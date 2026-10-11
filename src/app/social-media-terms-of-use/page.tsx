import type { Metadata } from "next";
import LegalDocument from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
  title: "Social Media Terms of Use",
  description: "Terms that apply when you engage with Elbrit Life Sciences on social media.",
};

export default function SocialMediaTermsOfUsePage() {
  return <LegalDocument slug="social-media-terms-of-use" />;
}
