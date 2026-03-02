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
} from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import StickyQuoteButton from "@/components/StickyQuoteButton";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Hire an App Developer — iOS, Android & Web | Kinexapps Melbourne",
  description:
    "Looking to build an app? Kinexapps is a Melbourne-based studio with 8 live App Store apps and 5-star ratings. We develop iOS, Android, and web apps with expert UI/UX design. Free quotes — no obligation.",
  keywords: [
    "hire app developer",
    "app development services",
    "iOS app development Melbourne",
    "Android app developer Australia",
    "build an app",
    "custom mobile app development",
    "web app development",
    "UI/UX design services",
    "app maintenance",
    "freelance app developer",
    "Kinexapps services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hire an App Developer — iOS, Android & Web | Kinexapps",
    description:
      "Melbourne studio with 8 live App Store apps. iOS, Android, web development & UI/UX design. Get a free quote today.",
    url: "https://kinexapps.com/services",
  },
};

const services = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description:
      "Native iPhone, iPad, and Apple Watch apps built with Swift and SwiftUI. Optimised for performance and App Store approval.",
    tech: ["Swift", "SwiftUI", "CoreML", "SpriteKit"],
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description:
      "Kotlin-first Android apps for phones, tablets, and Wear OS. Material Design 3 with smooth performance across devices.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Material 3"],
    color: "emerald",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive web apps and progressive web apps using modern frameworks. SEO-ready, fast, and accessible by default.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centred design from wireframes to pixel-perfect prototypes. Usability testing and design systems included.",
    tech: ["Figma", "Prototyping", "Design Systems", "A/B Testing"],
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your app running smoothly with bug fixes, OS updates, performance monitoring, and feature enhancements.",
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
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "Figma",
  "CoreML",
  "SpriteKit",
  "PostgreSQL",
  "REST APIs",
  "GraphQL",
];

const faqs = [
  {
    q: "How long does it take to build an app?",
    a: "Timelines vary by scope. A simple MVP can take 6\u20138 weeks, while a feature-rich app may take 3\u20136 months. We provide a detailed timeline during the Discovery phase.",
  },
  {
    q: "Do you build for both iOS and Android?",
    a: "Yes. We offer native development for both platforms as well as cross-platform solutions when it makes sense for your budget and goals.",
  },
  {
    q: "How much does app development cost?",
    a: "Every project is different. We provide free, no-obligation quotes after understanding your requirements. Get in touch and we will give you a transparent breakdown.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Absolutely. We offer flexible maintenance plans covering bug fixes, OS compatibility updates, performance monitoring, and feature enhancements.",
  },
  {
    q: "Can you redesign or improve an existing app?",
    a: "Yes. We work with clients to audit, redesign, and modernise existing apps \u2014 whether it is a UI refresh, performance overhaul, or adding new features.",
  },
  {
    q: "What is your development process?",
    a: "We follow a six-step process: Discovery, Design, Development, Testing, Launch, and Support. Each phase includes check-ins so you are always in the loop.",
  },
];

// Compute real stats from app data
const totalRatings = apps.reduce((sum, app) => sum + app.rating.count, 0);
const avgRating = (apps.reduce((sum, app) => sum + app.rating.average * app.rating.count, 0) / totalRatings).toFixed(1);

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kinexapps App Development Services",
  url: "https://kinexapps.com/services",
  description:
    "Professional app development services including iOS, Android, web development, UI/UX design, and ongoing maintenance. 8 live apps on the App Store.",
  provider: {
    "@type": "Organization",
    name: "Kinexapps",
    url: "https://kinexapps.com",
  },
  areaServed: "Worldwide",
  serviceType: [
    "iOS App Development",
    "Android App Development",
    "Web App Development",
    "UI/UX Design",
    "App Maintenance & Support",
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

// Pick 4 featured portfolio apps (diverse categories)
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
              We build apps that grow your business
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
              From concept to launch and beyond — iOS, Android, web, and design
              services from a studio with {apps.length} live apps and {avgRating}-star ratings.
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
                  <div className="text-[12px] text-muted">Live App Store Apps</div>
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
                  <div className="text-[18px] font-bold">2+ yrs</div>
                  <div className="text-[12px] text-muted">Development Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-center md:px-4">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-[18px] font-bold">3</div>
                  <div className="text-[12px] text-muted">Platforms (iOS, Web, Android)</div>
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

        {/* Portfolio — Proof of work */}
        <section id="portfolio" className="py-20 bg-surface/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
                Our Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Apps we&apos;ve built and shipped
              </h2>
              <p className="text-muted text-[16px] max-w-lg mx-auto">
                {apps.length} apps live on the App Store across games, education, and AI utilities.
                Here&apos;s a selection.
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
