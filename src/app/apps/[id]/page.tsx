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
  Star,
  Download,
  Shield,
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
  if (!app) return { title: "App Not Found" };

  return {
    title: `${app.name} - ${app.subtitle}`,
    description: app.description,
    openGraph: {
      title: `${app.name} - ${app.subtitle} | Kinexapps`,
      description: app.description,
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);

  if (!app) notFound();

  const relatedApps = apps
    .filter((a) => a.id !== app.id && a.category === app.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-5`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Apps
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 ${app.categoryColor} text-white text-xs font-semibold rounded-full`}
                >
                  {app.category}
                </span>
                <span className="text-sm text-muted">{app.ageRating}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
                {app.name}
              </h1>
              <p className="text-xl text-muted mb-6">{app.subtitle}</p>
              <p className="text-muted leading-relaxed mb-8 text-lg">
                {app.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-card-bg border border-card-border rounded-xl">
                  <Download className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{app.price}</div>
                  <div className="text-xs text-muted">Price</div>
                </div>
                <div className="text-center p-4 bg-card-bg border border-card-border rounded-xl">
                  <Star className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{app.ageRating}</div>
                  <div className="text-xs text-muted">Age Rating</div>
                </div>
                <div className="text-center p-4 bg-card-bg border border-card-border rounded-xl">
                  <Shield className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{app.size}</div>
                  <div className="text-xs text-muted">Size</div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Visual */}
            <div className="flex items-center justify-center">
              <div
                className={`relative w-72 h-72 lg:w-96 lg:h-96 rounded-[40px] bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-2xl animate-float`}
              >
                <div className="absolute inset-0 rounded-[40px] bg-white/10 backdrop-blur-sm" />
                <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-black/10 blur-xl" />
                <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/20">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Everything that makes {app.name} a standout experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-card-bg border border-card-border rounded-xl card-hover"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shrink-0`}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Available On
          </h2>
          <p className="text-muted mb-10">
            {app.name} is available on the following Apple platforms.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {app.platforms.map((platform) => (
              <div
                key={platform}
                className="flex items-center gap-3 px-6 py-4 bg-card-bg border border-card-border rounded-xl"
              >
                {platformIcons[platform]}
                <span className="font-semibold">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Apps */}
      {relatedApps.length > 0 && (
        <section className="py-20 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
              More <span className="gradient-text">{app.category}</span> Apps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedApps.map((related) => (
                <Link
                  key={related.id}
                  href={`/apps/${related.id}`}
                  className="group p-6 bg-card-bg border border-card-border rounded-2xl card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Image
                      src={related.icon}
                      alt={`${related.name} icon`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm text-muted">{related.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
