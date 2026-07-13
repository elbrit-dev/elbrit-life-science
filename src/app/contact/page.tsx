import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Elbrit Life Sciences — offices in Mumbai, Chennai and Bengaluru. We welcome all enquiries, business proposals and customer feedback.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We welcome all enquiries, proposals and feedback"
        subtitle="Want to get in touch? Find our contact details below and join the conversation — or send us your query and we'll respond promptly."
        crumbs={[{ label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
