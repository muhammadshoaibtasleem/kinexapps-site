import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Star,
  Globe,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { apps } from "@/data/apps";
import StickyQuoteButton from "@/components/StickyQuoteButton";

export const metadata: Metadata = {
  title:
    "Portfolio — Production AI SaaS & iOS App Case Studies | Kinexapps",
  description:
    "Case studies from Kinexapps — a Melbourne software house. Featuring rubrica.app (AI rubric feedback SaaS) and 8 live App Store apps. End-to-end product delivery from design through launch.",
  keywords: [
    "Kinexapps portfolio",
    "software house case studies",
    "AI SaaS case study",
    "Next.js SaaS portfolio",
    "iOS app portfolio",
    "Rubrica case study",
    "Melbourne software house portfolio",
    "AI product development examples",
    "hire a software house",
    "production AI app",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title:
      "Portfolio — Production AI SaaS & iOS App Case Studies | Kinexapps",
    description:
      "Live case studies including rubrica.app AI SaaS and 8 App Store apps. End-to-end product delivery.",
    url: "https://kinexapps.com/portfolio",
  },
};

const rubrica = apps.find((a) => a.id === "rubrica")!;
const iosCaseStudies = [
  apps.find((a) => a.id === "snapfix")!,
  apps.find((a) => a.id === "theory-elite")!,
  apps.find((a) => a.id === "abc-kids")!,
  apps.find((a) => a.id === "laser-maze")!,
  apps.find((a) => a.id === "rollscape")!,
  apps.find((a) => a.id === "orb-galaxy")!,
];

const totalRatings = apps.reduce((sum, a) => sum + a.rating.count, 0);
const avgRating = (
  apps.reduce((sum, a) => sum + a.rating.average * a.rating.count, 0) /
  totalRatings
).toFixed(1);

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinexapps.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://kinexapps.com/portfolio",
    },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kinexapps Production Case Studies",
  description:
    "Case studies of products designed and built end-to-end by Kinexapps.",
  itemListElement: [rubrica, ...iosCaseStudies].map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.name,
    url: `https://kinexapps.com/apps/${a.id}`,
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-[13px]">
                <li>
                  <Link
                    href="/"
                    className="text-muted hover:text-foreground transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-muted-strong">/</li>
                <li>
                  <span className="text-foreground font-medium">Portfolio</span>
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
              Selected Work
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
              Production products we&apos;ve shipped
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
              Every case study below is a live product in production — not a
              prototype, not a Figma mockup. {apps.length} products, {avgRating}-star
              average across {totalRatings} reviews, including the AI SaaS{" "}
              <a
                href="https://rubrica.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:underline"
              >
                rubrica.app
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?subject=quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg"
              >
                Hire us to build yours
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-[14px] font-semibold rounded-full hover:bg-surface transition-all"
              >
                See services
              </Link>
            </div>
          </div>
        </section>

        {/* Flagship Case Study — Rubrica */}
        {rubrica.caseStudy && (
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1px] shadow-xl shadow-purple-500/10">
                <div className="rounded-[23px] bg-white overflow-hidden">
                  {/* Header band */}
                  <div className="flex items-center justify-between px-10 sm:px-12 py-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center p-1.5">
                        <Image
                          src={rubrica.icon}
                          alt="Rubrica logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-purple-700 font-semibold">
                          Flagship Case Study
                        </div>
                        <div className="text-[15px] font-bold">Rubrica — AI Rubric Feedback SaaS</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-[12px] text-muted font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      Live at rubrica.app
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left: Problem / Solution / Outcome */}
                    <div className="p-10 sm:p-12 lg:border-r border-border">
                      <div className="space-y-8">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-rose-600 font-bold mb-2">
                            The Problem
                          </div>
                          <p className="text-[15px] text-foreground leading-relaxed">
                            {rubrica.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-blue-600 font-bold mb-2">
                            What We Built
                          </div>
                          <p className="text-[15px] text-foreground leading-relaxed">
                            {rubrica.caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-emerald-600 font-bold mb-2">
                            Outcome
                          </div>
                          <p className="text-[15px] text-foreground leading-relaxed">
                            {rubrica.caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Meta + tech */}
                    <div className="p-10 sm:p-12 bg-surface/40">
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Client
                          </div>
                          <div className="text-[14px] font-semibold">
                            {rubrica.caseStudy.client}
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Year
                          </div>
                          <div className="text-[14px] font-semibold">
                            {rubrica.caseStudy.year}
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Our Role
                          </div>
                          <div className="text-[14px] font-semibold">
                            {rubrica.caseStudy.role}
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-3">
                          Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {rubrica.caseStudy.techStack.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-3">
                          What Rubrica Does
                        </div>
                        <ul className="space-y-2">
                          {rubrica.features.slice(0, 4).map((f) => (
                            <li key={f} className="flex items-start gap-2 text-[13px] text-foreground">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={rubrica.caseStudy.liveUrl || rubrica.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white text-[13px] font-semibold rounded-full hover:bg-foreground/90 transition-all"
                        >
                          Visit live SaaS
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href={`/apps/${rubrica.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-[13px] font-semibold rounded-full hover:bg-white transition-all"
                        >
                          Full write-up
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* iOS Case Studies Grid */}
        <section className="py-16 bg-surface/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-3">
                  iOS Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">
                  Apps in the App Store
                </h2>
                <p className="text-[15px] text-muted max-w-lg">
                  8 native iOS apps live across games, education, and AI
                  utilities — every one designed, built, and shipped by us.
                </p>
              </div>
              <Link
                href="/#apps"
                className="hidden sm:inline-flex items-center gap-2 text-[13px] text-muted font-medium hover:text-accent transition-colors shrink-0"
              >
                View all apps
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {iosCaseStudies.map((app) => (
                <Link
                  key={app.id}
                  href={`/apps/${app.id}`}
                  className="group p-6 rounded-2xl border border-border bg-white card-lift"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={56}
                      height={56}
                      className="rounded-xl shadow-sm shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-semibold truncate group-hover:text-accent transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-[12px] text-muted">{app.subtitle}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-[12px] font-medium">{app.rating.average}</span>
                        <span className="text-[11px] text-muted-strong">
                          ({app.rating.count})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${app.categoryColor} text-white`}>
                      {app.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-strong">
                      <Smartphone className="w-3 h-3" />
                      {app.platforms.length} platforms
                    </span>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl bg-foreground text-white p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Your product could be the next case study
                </h2>
                <p className="text-white/70 text-[16px] max-w-md mx-auto mb-8">
                  Tell us about your AI SaaS, web app, or iOS product idea —
                  free quote within 24 hours.
                </p>
                <Link
                  href="/contact?subject=quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-foreground text-[14px] font-semibold rounded-full hover:bg-white/90 transition-all hover:shadow-lg"
                >
                  Get a free quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StickyQuoteButton />
    </>
  );
}
