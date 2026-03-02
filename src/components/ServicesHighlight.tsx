import Link from "next/link";
import {
  Smartphone,
  Globe,
  Palette,
  Wrench,
  ArrowRight,
  Star,
} from "lucide-react";
import { apps } from "@/data/apps";

const services = [
  {
    icon: Smartphone,
    title: "iOS Development",
    description: "Native Swift & SwiftUI apps for iPhone, iPad, and Apple Watch.",
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Kotlin-first apps with Material Design 3 and Jetpack Compose.",
    color: "emerald",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, SEO-ready web apps with React, Next.js, and TypeScript.",
    color: "purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centred design from wireframes to polished prototypes.",
    color: "amber",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Bug fixes, OS updates, monitoring, and feature enhancements.",
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
  rose: { bg: "bg-rose-50", text: "text-rose-600" },
};

const totalRatings = apps.reduce((sum, app) => sum + app.rating.count, 0);
const avgRating = (apps.reduce((sum, app) => sum + app.rating.average * app.rating.count, 0) / totalRatings).toFixed(1);

export default function ServicesHighlight() {
  return (
    <section className="py-20 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with social proof */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-semibold uppercase tracking-wider mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Now offering development services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            We build apps for clients, too
          </h2>
          <p className="text-muted text-[16px] max-w-lg mx-auto mb-5">
            The same team behind {apps.length} App Store apps with {avgRating}-star ratings
            is ready to build yours.
          </p>
          {/* Inline trust indicators */}
          <div className="flex items-center justify-center gap-5 text-[13px] text-muted">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {avgRating} avg rating
            </span>
            <span className="w-px h-4 bg-border" />
            <span>{apps.length} live apps</span>
            <span className="w-px h-4 bg-border" />
            <span>{totalRatings}+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-white card-lift"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} shrink-0`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-1">{service.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTA card in the 6th grid slot */}
          <Link
            href="/contact?subject=quote"
            className="flex items-start gap-4 p-5 rounded-2xl border-2 border-dashed border-accent/30 bg-accent/[0.03] group card-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-1">Have a project?</h3>
              <p className="text-[13px] text-muted leading-relaxed">
                Get a free quote — no obligation.
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white text-[14px] font-semibold rounded-full hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact?subject=quote"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-[14px] font-semibold rounded-full hover:bg-surface transition-all"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
