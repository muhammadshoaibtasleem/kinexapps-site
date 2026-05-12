import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Globe,
  Palette,
  Wrench,
  ArrowRight,
  Star,
  AppWindow,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import StickyQuoteButton from "@/components/StickyQuoteButton";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title:
    "Hire a Software House — Web SaaS, iOS Apps & AI Products | Kinexapps Melbourne",
  description:
    "Kinexapps is a Melbourne software house that ships web SaaS, iOS apps, and AI products end-to-end. Live case studies include rubrica.app (AI rubric SaaS) and 8 App Store apps. Free quotes — no obligation.",
  keywords: [
    "software house Melbourne",
    "software development agency Australia",
    "AI SaaS development",
    "hire a software house",
    "web SaaS development",
    "Next.js development agency",
    "iOS app development Melbourne",
    "Android app developer Australia",
    "build an AI app",
    "custom mobile app development",
    "MVP development agency",
    "UI/UX design services",
    "app maintenance",
    "Kinexapps services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Hire a Software House — Web SaaS, iOS Apps & AI Products | Kinexapps",
    description:
      "Melbourne software house. Live products include rubrica.app AI SaaS and 8 App Store apps. End-to-end product delivery — get a free quote today.",
    url: "https://kinexapps.com/services",
  },
};

const services = [
  {
    icon: Sparkles,
    title: "AI Products & Web SaaS",
    description:
      "End-to-end AI SaaS — landing page, app, backend, LLM pipeline, payments, analytics. See rubrica.app for a live production example.",
    tech: ["Next.js", "TypeScript", "LLM / AI", "Stripe", "Vercel"],
    color: "purple",
  },
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Native iPhone, iPad, Mac, and Apple Vision apps built with Swift and SwiftUI. Optimised for performance and App Store approval.",
    tech: ["Swift", "SwiftUI", "CoreML", "SpriteKit"],
    color: "blue",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive marketing sites, dashboards, and progressive web apps. SEO-ready, fast, and accessible by default — deployed on Vercel.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "emerald",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centred design from wireframes to pixel-perfect prototypes. Design systems, usability testing, and brand identity included.",
    tech: ["Figma", "Prototyping", "Design Systems", "A/B Testing"],
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your app or SaaS running smoothly with bug fixes, OS updates, performance monitoring, AI prompt tuning, and feature enhancements.",
    tech: ["Bug Fixes", "OS Updates", "Monitoring", "Analytics"],
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; text: string; pill: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", pill: "bg-blue-100 text-blue-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", pill: "bg-emerald-100 text-emerald-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", pill: "bg-purple-100 text-purple-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", pill: "bg-amber-100 text-amber-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", pill: "bg-rose-100 text-rose-700" },
};

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Vercel",
  "AI / LLM",
  "Stripe",
  "PostgreSQL",
  "Swift",
  "SwiftUI",
  "CoreML",
  "SpriteKit",
  "Node.js",
  "Figma",
  "REST APIs",
  "GraphQL",
];

const faqs = [
  {
    q: "Can you build a full AI SaaS for us \u2014 not just a prototype?",
    a: "Yes. rubrica.app is our live case study: AI pipeline, frontend, backend, payments, citation verification, and ongoing operations \u2014 all shipped end-to-end by Kinexapps. We can do the same for your idea.",
  },
  {
    q: "How long does it take to ship an app or SaaS?",
    a: "Timelines vary by scope. A focused web SaaS or iOS MVP can ship in 6\u20138 weeks; a feature-rich AI product is typically 3\u20136 months. We provide a detailed timeline during the Discovery phase.",
  },
  {
    q: "Do you build web SaaS, iOS apps, or both?",
    a: "Both. We ship native iOS apps (Swift / SwiftUI) and web SaaS (Next.js / TypeScript on Vercel), and we can integrate AI / LLM pipelines, Stripe payments, and analytics into either.",
  },
  {
    q: "How much does it cost?",
    a: "Every project is different. We provide free, no-obligation quotes after a short Discovery call. Get in touch and we will give you a transparent breakdown with fixed milestones.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes. Flexible maintenance plans cover bug fixes, OS updates, AI prompt tuning, performance monitoring, security patches, and feature enhancements.",
  },
  {
    q: "Can you redesign or improve an existing app or SaaS?",
    a: "Yes. We audit, redesign, and modernise existing products \u2014 whether it is a UI refresh, performance overhaul, AI integration, or adding new features.",
  },
  {
    q: "What is your development process?",
    a: "Six steps: Discovery, Design, Development, Testing, Launch, and Support. Each phase includes weekly check-ins so you are always in the loop.",
  },
];

// Compute real stats from app data
const totalRatings = apps.reduce((sum, app) => sum + app.rating.count, 0);
const avgRating = (apps.reduce((sum, app) => sum + app.rating.average * app.rating.count, 0) / totalRatings).toFixed(1);

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kinexapps Software House",
  url: "https://kinexapps.com/services",
  description:
    "Software house in Melbourne shipping web SaaS, iOS apps, and AI products end-to-end. Live case study at rubrica.app and 8 App Store apps.",
  provider: {
    "@type": "Organization",
    name: "Kinexapps",
    url: "https://kinexapps.com",
  },
  areaServed: "Worldwide",
  serviceType: [
    "AI SaaS Development",
    "Web SaaS Development",
    "iOS App Development",
    "Product Design (UI/UX)",
    "App & SaaS Maintenance",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating,
    reviewCount: totalRatings,
    bestRating: "5",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kinexapps.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://kinexapps.com/services" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const rubrica = apps.find((a) => a.id === "rubrica")!;

// Pick 4 featured portfolio apps (diverse categories) — rubrica gets its own case-study block above
const portfolioApps = [
  apps.find((a) => a.id === "snapfix")!,
  apps.find((a) => a.id === "theory-elite")!,
  apps.find((a) => a.id === "abc-kids")!,
  apps.find((a) => a.id === "laser-maze")!,
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Currently booking for Q2 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
              A software house that actually ships
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
              Web SaaS, iOS apps, and AI products — built end-to-end. {apps.length} live
              products in production, including the AI rubric SaaS{" "}
              <a
                href="https://rubrica.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:underline"
              >
                rubrica.app
              </a>
              . {avgRating}-star avg across {totalRatings} reviews. Get a free,
              no-obligation quote in 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?subject=quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-[14px] font-semibold rounded-full hover:bg-surface transition-all"
              >
                See our work
              </a>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="py-6 border-y border-border bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
              <div className="flex items-center gap-3 md:justify-center md:px-4">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <AppWindow className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-[18px] font-bold">{apps.length}</div>
                  <div className="text-[12px] text-muted">Products in Production</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-center md:px-4">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Star className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-[18px] font-bold">{avgRating} <span className="text-[13px] font-normal text-muted">/ 5</span></div>
                  <div className="text-[12px] text-muted">Avg. Rating ({totalRatings} reviews)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-center md:px-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[18px] font-bold">24h</div>
                  <div className="text-[12px] text-muted">Quote Turnaround</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-center md:px-4">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-[18px] font-bold">1</div>
                  <div className="text-[12px] text-muted">Live AI SaaS (Rubrica)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                What we offer
              </h2>
              <p className="text-muted text-[16px] max-w-lg mx-auto">
                End-to-end development services to bring your idea to life on any platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const colors = colorMap[service.color];
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-6 rounded-2xl border border-border bg-white card-lift"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-4`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-semibold mb-2">{service.title}</h3>
                    <p className="text-[14px] text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${colors.pill}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* CTA card as the 6th grid item */}
              <Link
                href="/contact?subject=quote"
                className="p-6 rounded-2xl border-2 border-dashed border-accent/30 bg-accent/[0.03] flex flex-col items-center justify-center text-center card-lift group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <h3 className="text-[16px] font-semibold mb-1">Need something else?</h3>
                <p className="text-[14px] text-muted">
                  Tell us about your project and we&apos;ll tailor a solution.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Case Study — Rubrica */}
        {rubrica.caseStudy && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1px]">
                <div className="rounded-[23px] bg-white overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
                    {/* Left: content */}
                    <div className="p-10 sm:p-12">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3 h-3" />
                        Flagship Case Study
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                        Rubrica — AI rubric feedback SaaS
                      </h2>
                      <p className="text-[15px] text-muted leading-relaxed mb-6">
                        A live production AI web app we designed, built, and
                        launched end-to-end. Students upload an assignment
                        brief, rubric, and draft — Rubrica returns
                        criterion-level coverage with quoted evidence,
                        voice-preserving rewrites, and CrossRef-verified
                        citations.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Problem
                          </div>
                          <p className="text-[13px] text-foreground leading-relaxed">
                            Students don&apos;t see how their draft maps to the rubric until it&apos;s too late.
                          </p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Solution
                          </div>
                          <p className="text-[13px] text-foreground leading-relaxed">
                            AI pipeline that aligns brief, rubric, and draft into a criterion-by-criterion report.
                          </p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-strong font-semibold mb-1">
                            Outcome
                          </div>
                          <p className="text-[13px] text-foreground leading-relaxed">
                            Live SaaS shipping to students in AU, UK, and US — payments, AI, ops, all done.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-7">
                        {rubrica.caseStudy.techStack.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-purple-50 text-purple-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://rubrica.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg"
                        >
                          Visit rubrica.app
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href="/apps/rubrica"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-[14px] font-semibold rounded-full hover:bg-surface transition-all"
                        >
                          Read the case study
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: gradient panel with logo */}
                    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-10 relative overflow-hidden">
                      <div className="absolute top-[-40px] right-[-40px] w-[220px] h-[220px] rounded-full bg-white/10 blur-3xl" />
                      <div className="absolute bottom-[-40px] left-[-40px] w-[180px] h-[180px] rounded-full bg-white/10 blur-3xl" />
                      <div className="relative w-[260px] rounded-xl bg-black/20 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border-b border-white/10">
                          <div className="w-2 h-2 rounded-full bg-red-400/70" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                          <div className="w-2 h-2 rounded-full bg-green-400/70" />
                          <div className="ml-2 text-[10px] text-white/60 font-mono">rubrica.app</div>
                        </div>
                        <div className="bg-white p-6 flex items-center justify-center aspect-[16/10]">
                          <Image
                            src={rubrica.icon}
                            alt="Rubrica logo"
                            width={200}
                            height={60}
                            className="w-full max-w-[200px] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Portfolio — Proof of work */}
        <section id="portfolio" className="py-20 bg-surface/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
                More Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                iOS apps we&apos;ve shipped
              </h2>
              <p className="text-muted text-[16px] max-w-lg mx-auto">
                8 apps live on the App Store across games, education, and AI
                utilities — production proof of the same craft we bring to
                client projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioApps.map((app) => (
                <Link
                  key={app.id}
                  href={`/apps/${app.id}`}
                  className="group p-5 rounded-2xl border border-border bg-white card-lift"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={56}
                      height={56}
                      className="rounded-xl shadow-sm"
                    />
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-semibold truncate group-hover:text-accent transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-[12px] text-muted">{app.subtitle}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-[12px] font-medium">{app.rating.average}</span>
                        <span className="text-[11px] text-muted-strong">({app.rating.count})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${app.categoryColor} text-white`}>
                      {app.category}
                    </span>
                    {app.platforms.map((p) => (
                      <span key={p} className="text-[11px] text-muted-strong">{p}</span>
                    ))}
                  </div>
                  <p className="text-[12px] text-muted leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center mt-10 gap-3">
              <Link
                href="/#apps"
                className="text-[13px] font-semibold text-accent hover:underline"
              >
                View all {apps.length} apps &rarr;
              </Link>
              <p className="text-[12px] text-muted-strong">
                Same quality. Same team. Your app could be next.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process — animated timeline */}
        <ProcessTimeline />

        {/* Technologies */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Technologies we use
              </h2>
              <p className="text-muted text-[16px] max-w-lg mx-auto">
                Modern tools and frameworks to build fast, reliable, and scalable apps.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 px-5 py-2.5 rounded-full border border-border bg-white text-[13px] font-medium text-foreground whitespace-nowrap shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="py-20 bg-surface/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Why clients choose us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { text: "Real apps on the App Store you can download today", },
                { text: "Transparent pricing — no hidden fees or surprise invoices", },
                { text: "Direct communication with the developer, not a middleman", },
                { text: "Agile sprints with weekly progress updates", },
                { text: "Free post-launch bug fixes for 30 days", },
                { text: "Melbourne-based with global client experience", },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-foreground leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted text-[16px] max-w-lg mx-auto">
                Common questions about working with us.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group p-5 rounded-2xl border border-border bg-white"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-[15px] font-semibold list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-45 text-lg">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[14px] text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </details>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-semibold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Limited spots for Q2 2026
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Ready to build your app?
                </h2>
                <p className="text-white/70 text-[16px] max-w-md mx-auto mb-8">
                  Tell us about your project and get a free, no-obligation quote
                  within 24 hours.
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

      {/* Sticky floating CTA */}
      <StickyQuoteButton />
    </>
  );
}
