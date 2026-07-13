import type { Metadata } from "next";
import { Spectral, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spectral = Spectral({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elbrit.org"),
  title: {
    default: "Elbrit Life Sciences — Discovery. Innovation. Excellence.",
    template: "%s · Elbrit Life Sciences",
  },
  description:
    "Elbrit Life Sciences is a fast-growing Indian pharmaceutical company discovering, developing and manufacturing high-quality, affordable medicines across cardiovascular, diabetes, neuro, gastro and nutrition care — now reaching global markets.",
  keywords: [
    "Elbrit Life Sciences",
    "pharmaceutical company India",
    "GMP manufacturing",
    "cardiovascular",
    "diabetes care",
    "drug discovery",
    "Make in India pharma",
  ],
  openGraph: {
    title: "Elbrit Life Sciences — Discovery. Innovation. Excellence.",
    description:
      "A leading Indian pharmaceutical company committed to making lives better through innovation, science and the highest-quality affordable medicines.",
    type: "website",
    siteName: "Elbrit Life Sciences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Elbrit Life Sciences Pvt. Ltd.",
              url: "https://www.elbrit.org",
              logo: "https://www.elbrit.org/brand/logo.jpg",
              slogan: "Discovery. Innovation. Excellence.",
              foundingDate: "2014",
              industry: "Pharmaceuticals",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C20, BKC, G Block",
                addressLocality: "Mumbai",
                postalCode: "400051",
                addressCountry: "IN",
              },
              telephone: "+91-1800-257-3579",
              sameAs: [
                "https://www.linkedin.com/company/elbrit-life-sciences-private-limited/",
                "https://www.facebook.com/ElbritLife/",
                "https://www.instagram.com/elbrit_life_sciences/",
                "https://twitter.com/ElbritLife",
              ],
            }),
          }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
