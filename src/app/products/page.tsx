import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import ProductsExplorer from "@/components/products/ProductsExplorer";
import { TOTAL_SKUS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Elbrit's branded formulations across cardiovascular, diabetes, neuro, gastro, bone, women's health, nutrition and probiotics.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Therapies"
        title="Elbrit's medical products"
        subtitle={`A growing portfolio of ${TOTAL_SKUS}+ branded formulations developed for real, unmet patient needs — search by brand or filter by therapy area.`}
        crumbs={[{ label: "Products" }]}
      />
      <section className="pb-10">
        <ProductsExplorer />
      </section>
      <CTABand
        title="Looking for a specific brand or strength?"
        body="Our medical and commercial teams can guide you to the right therapy, pack and partnership."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "Contract manufacturing", href: "/contract-manufacturing" }}
      />
    </>
  );
}
