import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import { apps } from "@/data/apps";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kinexapps",
  url: "https://kinexapps.com",
  logo: "https://kinexapps.com/kinexapps-logo.png",
  description:
    "Australian mobile app studio crafting free iOS games, education tools, and AI-powered utilities for iPhone, iPad, Mac, and Apple Vision.",
  foundingDate: "2024",
  sameAs: [
    "https://apps.apple.com/au/developer/muhammad-talseem/id1871192120",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@kinexapps.com",
    url: "https://kinexapps.com/contact",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
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
    "SpriteKit",
    "CoreML",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kinexapps",
  url: "https://kinexapps.com",
  description:
    "Official website of Kinexapps — Australian mobile app studio with 8 free iOS apps across games, education, and AI utilities.",
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

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kinexapps iOS Apps",
  description:
    "Complete collection of free iOS apps by Kinexapps — games, education, and AI utilities.",
  numberOfItems: apps.length,
  itemListElement: apps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: app.name,
    url: `https://kinexapps.com/apps/${app.id}`,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      description: app.description,
      applicationCategory:
        app.category === "Games"
          ? "GameApplication"
          : app.category === "Education"
            ? "EducationalApplication"
            : "UtilitiesApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "AUD",
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Server-rendered heading for SEO — visually hidden, Hero renders the visible version */}
      <div className="sr-only">
        <h1>We craft apps people love to use — Kinexapps Australian App Studio</h1>
        <p>
          Games that challenge your mind. Tools that help you learn. Utilities
          powered by AI. {apps.length} free iOS apps across games, education,
          and AI utilities. Built with Swift and SwiftUI in Melbourne, Australia.
        </p>
      </div>
      <Hero />
      <AppsShowcase />
      <Features />
      <CTA />
    </>
  );
}
