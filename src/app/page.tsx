import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import Features from "@/components/Features";
import ServicesHighlight from "@/components/ServicesHighlight";
import CTA from "@/components/CTA";
import { apps } from "@/data/apps";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Kinexapps",
  url: "https://kinexapps.com",
  logo: "https://kinexapps.com/kinexapps-logo.png",
  description:
    "Australian software house that designs and ships web SaaS, iOS apps, and AI products end-to-end. Live products include the rubrica.app AI rubric platform and an 8-app iOS portfolio.",
  foundingDate: "2024",
  sameAs: [
    "https://apps.apple.com/au/developer/muhammad-talseem/id1871192120",
    "https://rubrica.app",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
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
  areaServed: "Worldwide",
  knowsAbout: [
    "Software Development",
    "Web SaaS Development",
    "AI Product Development",
    "iOS App Development",
    "Next.js",
    "TypeScript",
    "React",
    "Swift",
    "SwiftUI",
    "Vercel",
    "LLM Integration",
    "Stripe Payments",
    "Product Design",
    "UI/UX",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kinexapps",
  url: "https://kinexapps.com",
  description:
    "Kinexapps — Australian software house building web SaaS, iOS apps, and AI products end-to-end. Case studies, services, and free quotes.",
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
        <h1>
          Kinexapps — Australian Software House for Web SaaS, iOS Apps & AI
          Products
        </h1>
        <p>
          Kinexapps is a Melbourne-based software house that designs and ships
          web SaaS, iOS apps, and AI products end-to-end. {apps.length} live
          products in production — including rubrica.app, an AI rubric-feedback
          SaaS for students, and an 8-app iOS portfolio across games,
          education, and AI utilities. Hire us to build your next product.
        </p>
      </div>
      <Hero />
      <AppsShowcase />
      <Features />
      <ServicesHighlight />
      <CTA />
    </>
  );
}
