import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { apps } from "@/data/apps";
import {
  Clock,
  Calendar,
  HelpCircle,
  ExternalLink,
  Check,
  X as XIcon,
} from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://kinexapps.com/blog/${article.slug}`,
      siteName: "Kinexapps",
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

function getArticleJsonLd(article: (typeof articles)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: `https://kinexapps.com/blog/${article.slug}`,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Organization",
      name: "Kinexapps",
      url: "https://kinexapps.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kinexapps",
      url: "https://kinexapps.com",
    },
  };
}

function getHowToJsonLd(article: (typeof articles)[number]) {
  if (article.type !== "how-to") return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.metaDescription,
    step: article.sections.map((section, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: section.heading,
      text: section.content.split("\n\n")[0],
    })),
  };
}

function getBreadcrumbJsonLd(article: (typeof articles)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kinexapps.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kinexapps.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://kinexapps.com/blog/${article.slug}`,
      },
    ],
  };
}

function getFAQJsonLd(article: (typeof articles)[number]) {
  if (!article.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const spotlightApp = apps.find((a) => a.id === article.appSpotlight.appId);
  const howToJsonLd = getHowToJsonLd(article);
  const faqJsonLd = getFAQJsonLd(article);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleJsonLd(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(article)),
        }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
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
                <Link
                  href="/blog"
                  className="text-muted hover:text-foreground transition-colors font-medium"
                >
                  Blog
                </Link>
              </li>
              <li className="text-muted-strong">/</li>
              <li>
                <span className="text-foreground font-medium line-clamp-1">
                  {article.title}
                </span>
              </li>
            </ol>
          </nav>

          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4 ${
              article.type === "comparison"
                ? "bg-indigo-50 text-indigo-600"
                : "bg-orange-50 text-orange-600"
            }`}
          >
            {article.type === "comparison" ? "Comparison" : "How-To Guide"}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-[13px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.publishDate).toLocaleDateString("en-AU", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {article.intro.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="text-[15px] text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {article.comparisonItems && article.comparisonItems.length > 0 && (
        <section className="py-16 bg-surface/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Quick Comparison
            </h2>
            <div className="space-y-4">
              {article.comparisonItems.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-border bg-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[16px] font-semibold">{item.name}</h3>
                    <span className="text-[13px] font-semibold text-accent bg-blue-50 px-3 py-1 rounded-full">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed mb-4">
                    {item.verdict}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-emerald-600 mb-2">
                        Pros
                      </p>
                      <ul className="space-y-1.5">
                        {item.pros.map((pro, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[13px] text-muted"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-red-500 mb-2">
                        Cons
                      </p>
                      <ul className="space-y-1.5">
                        {item.cons.map((con, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[13px] text-muted"
                          >
                            <XIcon className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App Spotlight */}
      {spotlightApp && (
        <section
          className={`py-16 ${article.comparisonItems ? "" : "bg-surface/50"}`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
              App Spotlight
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              {article.appSpotlight.heading}
            </h2>
            <div className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-white">
              <div className="w-16 h-16 rounded-[16px] overflow-hidden border border-border/50 shrink-0 shadow-sm">
                <Image
                  src={spotlightApp.icon}
                  alt={`${spotlightApp.name} — ${spotlightApp.subtitle}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold mb-1">
                  {spotlightApp.name}: {spotlightApp.subtitle}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed mb-4">
                  {article.appSpotlight.description}
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/apps/${spotlightApp.id}`}
                    className="text-[13px] text-accent font-medium hover:underline"
                  >
                    Learn more
                  </Link>
                  <a
                    href={spotlightApp.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white bg-foreground px-4 py-1.5 rounded-full hover:bg-foreground/90 transition-all"
                  >
                    Download Free
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {article.sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 ${i % 2 === 0 ? "" : "bg-surface/50"}`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.content.split("\n\n").map((p, j) => (
                <p
                  key={j}
                  className="text-[15px] text-muted leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      {article.faqs.length > 0 && (
        <section className="py-20 bg-surface/50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group p-6 rounded-2xl border border-border bg-white"
                >
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
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            {article.ctaText}
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-lg mx-auto">
            All Kinexapps apps are free to download on the App Store. No
            subscriptions, no paywalls.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {spotlightApp && (
              <a
                href={spotlightApp.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
              >
                Download {spotlightApp.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              href="/blog"
              className="text-[14px] font-medium text-muted hover:text-foreground transition-colors"
            >
              Browse all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
