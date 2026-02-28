import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { apps } from "@/data/apps";
import { HelpCircle, ExternalLink } from "lucide-react";

const utilityApps = apps.filter((a) => a.category === "Utilities");

export const metadata: Metadata = {
  title: "Free Utility Apps — AI Home Repair & More | Kinexapps",
  description:
    "Download free utility apps for iPhone from Kinexapps. SnapFix uses AI to diagnose home repair issues from a photo and provides step-by-step DIY fix guides.",
  keywords: [
    "free utility apps iPhone",
    "AI home repair app",
    "home repair app",
    "DIY fix guide app",
    "photo diagnosis app",
    "plumbing repair app",
    "home maintenance app",
    "SnapFix",
    "free utility apps iOS",
  ],
  alternates: { canonical: "/utilities" },
  openGraph: {
    title: "Free Utility Apps — AI Home Repair & More | Kinexapps",
    description:
      "SnapFix: AI-powered home repair app. Snap a photo and get step-by-step repair instructions. Free on the App Store.",
    url: "https://kinexapps.com/utilities",
  },
};

const faqs = [
  {
    question: "What utility apps does Kinexapps offer?",
    answer:
      "Kinexapps currently offers SnapFix, an AI-powered home repair assistant. Snap a photo of any household problem and get instant step-by-step repair instructions, shopping lists, cost estimates, and follow-up AI chat support.",
  },
  {
    question: "How does SnapFix use AI to diagnose home repairs?",
    answer:
      "SnapFix analyzes photos of household problems using advanced AI to identify the specific issue. It then generates a personalized repair guide with tools needed, materials, estimated costs, difficulty rating, and clear step-by-step instructions.",
  },
  {
    question: "Is SnapFix free to use?",
    answer:
      "Yes, SnapFix is free to download and use on iPhone and iPad. It provides AI-powered photo diagnosis, step-by-step repair guides, shopping lists, and follow-up AI chat at no cost.",
  },
];

function getItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Utility Apps by Kinexapps",
    description: "Free utility apps for iPhone including AI-powered home repair.",
    numberOfItems: utilityApps.length,
    itemListElement: utilityApps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: app.name,
      url: `https://kinexapps.com/apps/${app.id}`,
    })),
  };
}

function getBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kinexapps.com" },
      { "@type": "ListItem", position: 2, name: "Utilities", item: "https://kinexapps.com/utilities" },
    ],
  };
}

function getFAQJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default function UtilitiesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getItemListJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQJsonLd()) }}
      />

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[13px]">
              <li>
                <Link href="/" className="text-muted hover:text-foreground transition-colors font-medium">Home</Link>
              </li>
              <li className="text-muted-strong">/</li>
              <li><span className="text-foreground font-medium">Utilities</span></li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[12px] font-semibold uppercase tracking-wider mb-4">
            Utilities
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Free Utility Apps by Kinexapps
          </h1>
          <p className="text-[15px] text-muted leading-relaxed max-w-2xl">
            AI-powered tools that solve real problems. SnapFix turns your iPhone camera into a home repair diagnostic tool with instant step-by-step fix guides.
          </p>
        </div>
      </section>

      {/* App List */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {utilityApps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-border bg-white card-lift"
              >
                <div className="w-16 h-16 rounded-[16px] overflow-hidden border border-border/50 shrink-0 shadow-sm">
                  <Image
                    src={app.icon}
                    alt={`${app.name} — ${app.subtitle}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold group-hover:text-accent transition-colors">
                    {app.name}
                  </h2>
                  <p className="text-[13px] text-muted-strong mb-2">{app.subtitle}</p>
                  <p className="text-[13px] text-muted leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-[11px] text-muted font-medium px-2 py-1 rounded-full bg-surface border border-border/50">
                      {app.price}
                    </span>
                    <span className="text-[11px] text-muted font-medium px-2 py-1 rounded-full bg-surface border border-border/50">
                      {app.platforms.join(", ")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-10">
            Frequently asked questions about Kinexapps utilities
          </h2>
          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl border border-border bg-white">
                <summary className="flex items-start gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground leading-relaxed pt-1">
                    {faq.question}
                  </h3>
                </summary>
                <p className="text-[14px] text-muted leading-relaxed mt-4 pl-11">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Download SnapFix for Free
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-lg mx-auto">
            Turn your iPhone into an AI-powered home repair assistant. Free on the App Store.
          </p>
          <a
            href="https://apps.apple.com/au/app/snapfix-ai-home-repair-help/id6758781226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
          >
            Download SnapFix on App Store
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
