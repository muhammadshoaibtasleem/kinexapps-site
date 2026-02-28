import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { apps } from "@/data/apps";
import { HelpCircle, ExternalLink } from "lucide-react";

const gameApps = apps.filter((a) => a.category === "Games");

export const metadata: Metadata = {
  title: "Free iOS Games — Puzzle, Marble Maze & Ball Sort | Kinexapps",
  description:
    "Download free iPhone and iPad games from Kinexapps. Laser mirror puzzles, marble maze with tilt controls, space ball sorting, and color learning games for kids.",
  keywords: [
    "free iOS games",
    "free iPhone puzzle games",
    "laser puzzle game",
    "marble maze game",
    "ball sort puzzle game",
    "color learning game kids",
    "free iPad games",
    "Australian game developer",
    "puzzle games 2026",
  ],
  alternates: { canonical: "/games" },
  openGraph: {
    title: "Free iOS Games — Puzzle, Marble Maze & Ball Sort | Kinexapps",
    description:
      "4 free iPhone and iPad games: laser mirror puzzles, marble mazes, space ball sorting, and color learning for kids.",
    url: "https://kinexapps.com/games",
  },
};

const faqs = [
  {
    question: "What free puzzle games does Kinexapps offer?",
    answer:
      "Kinexapps offers four free puzzle and arcade games: Laser Maze (mirror puzzles with 117 levels), Rollscape (marble maze with tilt controls), Orb Galaxy Sort (ball sorting with 100+ space-themed levels), and Color Ball Drop 3D (color learning for kids ages 3-7).",
  },
  {
    question: "Are Kinexapps games available on iPad and iPhone?",
    answer:
      "Yes, all four Kinexapps games are available on both iPhone and iPad. Rollscape, Orb Galaxy Sort, and Color Ball Drop 3D are also available on Mac and Apple Vision.",
  },
  {
    question: "Are these games really free with no hidden costs?",
    answer:
      "All Kinexapps games are free to download and play. There are no paywalls blocking content. The games include optional in-app features but all core gameplay is completely free.",
  },
];

function getItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free iOS Games by Kinexapps",
    description: "Free iPhone and iPad games including puzzle, maze, and educational games.",
    numberOfItems: gameApps.length,
    itemListElement: gameApps.map((app, i) => ({
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
      { "@type": "ListItem", position: 2, name: "Games", item: "https://kinexapps.com/games" },
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

export default function GamesPage() {
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
              <li><span className="text-foreground font-medium">Games</span></li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[12px] font-semibold uppercase tracking-wider mb-4">
            Games
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Free iOS Games by Kinexapps
          </h1>
          <p className="text-[15px] text-muted leading-relaxed max-w-2xl">
            From brain-teasing laser puzzles to relaxing marble mazes and kid-friendly color games — download our free iPhone and iPad games on the App Store.
          </p>
        </div>
      </section>

      {/* App List */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gameApps.map((app) => (
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
            Frequently asked questions about Kinexapps games
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
            Download Free Games on the App Store
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-lg mx-auto">
            All Kinexapps games are free to download with no subscriptions or paywalls.
          </p>
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
          >
            View All Apps on App Store
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
