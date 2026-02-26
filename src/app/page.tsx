import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kinexapps",
  url: "https://kinexapps.com",
  logo: "https://kinexapps.com/kinexapps-logo.png",
  description:
    "Australian mobile app studio crafting free iOS games, education tools, and AI-powered utilities.",
  foundingDate: "2024",
  sameAs: [
    "https://apps.apple.com/au/developer/muhammad-talseem/id1871192120",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://kinexapps.com/contact",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 1,
  },
  knowsAbout: [
    "iOS App Development",
    "Mobile Games",
    "Education Technology",
    "Artificial Intelligence",
    "Swift",
    "SwiftUI",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kinexapps",
  url: "https://kinexapps.com",
  description:
    "Official website of Kinexapps — Australian mobile app studio with 7 free iOS apps.",
  publisher: {
    "@type": "Organization",
    name: "Kinexapps",
    url: "https://kinexapps.com",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kinexapps.com",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      <AppsShowcase />
      <Features />
      <CTA />
    </>
  );
}
