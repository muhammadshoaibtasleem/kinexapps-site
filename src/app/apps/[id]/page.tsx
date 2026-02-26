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
    title: `${app.name} — ${app.subtitle}`,
    description: app.description,
  };
}

export default async function AppPage({ params }: PageProps) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);
  if (!app) notFound();

  const related = apps
    .filter((a) => a.id !== app.id && a.category === app.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All apps
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-[18px] overflow-hidden border border-border">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {app.name}
                  </h1>
                  <p className="text-[15px] text-muted mt-0.5">{app.subtitle}</p>
                </div>
              </div>

              <p className="text-[15px] text-muted leading-relaxed max-w-2xl mb-8">
                {app.description}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-3 flex-wrap mb-8">
                <span className="text-[12px] text-muted px-2.5 py-1 rounded-md bg-white/5 border border-border">
                  {app.category}
                </span>
                <span className="text-[12px] text-muted px-2.5 py-1 rounded-md bg-white/5 border border-border">
                  {app.price}
                </span>
                <span className="text-[12px] text-muted px-2.5 py-1 rounded-md bg-white/5 border border-border">
                  {app.ageRating}
                </span>
                <span className="text-[12px] text-muted px-2.5 py-1 rounded-md bg-white/5 border border-border">
                  {app.size}
                </span>
                {app.platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 text-[12px] text-muted px-2.5 py-1 rounded-md bg-white/5 border border-border"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-[14px] font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Features
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">
            What makes {app.name} great
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="text-[14px] text-muted leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-10">
              More {app.category} apps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/apps/${r.id}`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-light transition-all"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-border shrink-0">
                    <Image
                      src={r.icon}
                      alt={r.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold group-hover:text-accent transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-[12px] text-muted-strong">{r.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
