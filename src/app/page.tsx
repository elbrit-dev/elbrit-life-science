import Hero from "@/components/sections/Hero";
import ProductTicker from "@/components/ProductTicker";
import {
  AboutPreview,
  Highlights,
  Manifesto,
  MfgPreview,
  ValuesStrip,
  PressPreview,
} from "@/components/home/HomeSections";
import CTABand from "@/components/ui/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductTicker />
      <AboutPreview />
      <Highlights />
      <Manifesto />
      <MfgPreview />
      <ValuesStrip />
      <PressPreview />
      <CTABand
        title="Let's build a healthier future together"
        body="Whether you're a healthcare partner, distributor or prospective team member — we'd love to hear from you."
        primary={{ label: "Partner with us", href: "/contact" }}
        secondary={{ label: "View open roles", href: "/careers" }}
      />
    </>
  );
}
