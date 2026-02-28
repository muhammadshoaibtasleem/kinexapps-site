import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — App Reviews, Comparisons & How-To Guides",
  description:
    "Read expert app comparisons, how-to guides, and tips from Kinexapps. Find the best free iOS games, education apps, and AI utilities for your needs.",
  keywords: [
    "Kinexapps blog",
    "iOS app comparisons",
    "best iPhone apps",
    "app reviews",
    "how to fix home repairs",
    "best puzzle games iPhone",
    "toddler learning apps",
    "MBA quiz apps",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — App Reviews, Comparisons & How-To Guides | Kinexapps",
    description:
      "Expert app comparisons, how-to guides, and tips. Find the best free iOS apps for games, education, and utilities.",
    url: "https://kinexapps.com/blog",
  },
};

function getBlogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Kinexapps Blog",
    description:
      "App comparisons, how-to guides, and tips from the Kinexapps team.",
    url: "https://kinexapps.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Kinexapps",
      url: "https://kinexapps.com",
    },
  };
}

export default function BlogPage() {
  const comparisons = articles.filter((a) => a.type === "comparison");
  const howTos = articles.filter((a) => a.type === "how-to");

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogJsonLd()) }}
      />

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-10">
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
                <span className="text-foreground font-medium">Blog</span>
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Blog
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Comparisons, Reviews & How-To Guides
          </h1>
          <p className="text-[15px] text-muted leading-relaxed max-w-2xl">
            Expert app comparisons and practical how-to guides to help you find
            the best free iOS apps and solve everyday problems.
          </p>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            App Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 rounded-2xl border border-border bg-white card-lift"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  Comparison
                </div>
                <h3 className="text-[15px] font-semibold group-hover:text-accent transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-4">
                  {article.metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[12px] text-muted-strong">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </div>
                  <span className="text-[12px] text-accent font-medium group-hover:underline inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How-To Guides */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            How-To Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howTos.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 rounded-2xl border border-border bg-white card-lift"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  How-To
                </div>
                <h3 className="text-[15px] font-semibold group-hover:text-accent transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-4">
                  {article.metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[12px] text-muted-strong">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </div>
                  <span className="text-[12px] text-accent font-medium group-hover:underline inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
