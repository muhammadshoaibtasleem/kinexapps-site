import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { apps } from "@/data/apps";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Glasses,
  Check,
  HelpCircle,
} from "lucide-react";

const platformIcons: Record<string, React.ReactNode> = {
  iPhone: <Smartphone className="w-4 h-4" />,
  iPad: <Tablet className="w-4 h-4" />,
  Mac: <Monitor className="w-4 h-4" />,
  "Apple Vision": <Glasses className="w-4 h-4" />,
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);
  if (!app) return { title: "Not Found" };
  return {
    title: app.metaTitle,
    description: app.metaDescription,
    keywords: app.keywords,
    alternates: {
      canonical: `/apps/${app.id}`,
    },
    openGraph: {
      type: "website",
      title: app.metaTitle,
      description: app.metaDescription,
      url: `https://kinexapps.com/apps/${app.id}`,
      siteName: "Kinexapps",
      images: [
        {
          url: app.icon,
          width: 512,
          height: 512,
          alt: `${app.name} — ${app.subtitle} | iOS App by Kinexapps`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: app.metaTitle,
      description: app.metaDescription,
      images: [app.icon],
    },
  };
}

function getAppJsonLd(app: (typeof apps)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    alternateName: `${app.name}: ${app.subtitle}`,
    description: app.metaDescription,
    url: `https://kinexapps.com/apps/${app.id}`,
    image: `https://kinexapps.com${app.icon}`,
    screenshot: `https://kinexapps.com${app.icon}`,
    applicationCategory:
      app.category === "Games"
        ? "GameApplication"
        : app.category === "Education"
          ? "EducationalApplication"
          : "UtilitiesApplication",
    operatingSystem: "iOS, iPadOS, macOS",
    applicationSubCategory: app.subtitle,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
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
    installUrl: app.appStoreUrl,
    downloadUrl: app.appStoreUrl,
    featureList: app.features.join(", "),
    contentRating: app.ageRating,
    fileSize: app.size,
    softwareVersion: "Latest",
    permissions: "none",
    availableOnDevice: app.platforms.join(", "),
  };
}

function getAppBreadcrumbJsonLd(app: (typeof apps)[number]) {
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
        name: "Apps",
        item: "https://kinexapps.com/#apps",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: app.name,
        item: `https://kinexapps.com/apps/${app.id}`,
      },
    ],
  };
}

function getFAQJsonLd(app: (typeof apps)[number]) {
  if (!app.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: app.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function AppPage({ params }: PageProps) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);
  if (!app) notFound();

  const related = apps
    .filter((a) => a.id !== app.id && a.category === app.category)
    .slice(0, 3);

  const faqJsonLd = getFAQJsonLd(app);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAppJsonLd(app)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAppBreadcrumbJsonLd(app)),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb nav */}
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
                  href="/#apps"
                  className="text-muted hover:text-foreground transition-colors font-medium"
                >
                  Apps
                </Link>
              </li>
              <li className="text-muted-strong">/</li>
              <li>
                <span className="text-foreground font-medium">{app.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-[20px] overflow-hidden border border-border/50 shadow-lg">
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon — ${app.subtitle}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {app.name}: {app.subtitle}
                  </h1>
                  <p className="text-[15px] text-muted mt-0.5">
                    Free {app.category} App for {app.platforms.join(", ")}
                  </p>
                </div>
              </div>

              <p className="text-[15px] text-muted leading-relaxed max-w-2xl mb-8">
                {app.description}
              </p>

              {/* Meta badges */}
              <div className="flex items-center gap-2.5 flex-wrap mb-8">
                <span className="text-[12px] text-muted font-medium px-3 py-1.5 rounded-full bg-surface border border-border/50">
                  {app.category}
                </span>
                <span className="text-[12px] text-muted font-medium px-3 py-1.5 rounded-full bg-surface border border-border/50">
                  {app.price}
                </span>
                <span className="text-[12px] text-muted font-medium px-3 py-1.5 rounded-full bg-surface border border-border/50">
                  Ages {app.ageRating}
                </span>
                <span className="text-[12px] text-muted font-medium px-3 py-1.5 rounded-full bg-surface border border-border/50">
                  {app.size}
                </span>
                {app.platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 text-[12px] text-muted font-medium px-3 py-1.5 rounded-full bg-surface border border-border/50"
                  >
                    {platformIcons[p]}
                    {p}
                  </span>
                ))}
              </div>

              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download {app.name} on App Store
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Features
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-10">
            What makes {app.name} great
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-6 rounded-2xl border border-border bg-white card-lift"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-[14px] text-muted leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Description (rich content for Google) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            About
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            About {app.name}
          </h2>
          <div className="max-w-3xl space-y-4">
            {app.seoDescription.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] text-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {app.faqs.length > 0 && (
        <section className="py-20 bg-surface/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              Frequently asked questions about {app.name}
            </h2>
            <div className="max-w-3xl space-y-4">
              {app.faqs.map((faq, i) => (
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

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              More {app.category} apps by Kinexapps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/apps/${r.id}`}
                  className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-white card-lift"
                >
                  <div className="w-14 h-14 rounded-[14px] overflow-hidden border border-border/50 shrink-0 shadow-sm">
                    <Image
                      src={r.icon}
                      alt={`${r.name} — ${r.subtitle}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold group-hover:text-accent transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-[13px] text-muted-strong">
                      {r.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Download CTA */}
      <section className="py-16 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Download {app.name} for Free
          </h2>
          <p className="text-[15px] text-muted mb-8 max-w-lg mx-auto">
            {app.name} is available as a free download on the App Store for{" "}
            {app.platforms.join(", ")}. No subscriptions, no paywalls.
          </p>
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Free Download on App Store
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
