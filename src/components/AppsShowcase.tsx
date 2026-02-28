"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { apps, categories } from "@/data/apps";
import type { App } from "@/data/apps";
import {
  ArrowRight,
  ExternalLink,
  Smartphone,
  Star,
  Download,
  Sparkles,
} from "lucide-react";

/* ═══════════════════════════════════════
   3D TILT CARD (mouse-following perspective)
   ═══════════════════════════════════════ */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div className="tilt-card">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`tilt-inner ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   FEATURED SPOTLIGHT (first app, full-width)
   ═══════════════════════════════════════ */
function FeaturedCard({ app }: { app: App }) {
  return (
    <Link href={`/apps/${app.id}`} className="group block mb-6">
      <TiltCard>
        <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${app.gradient} p-[1px]`}>
          <div className="relative rounded-[23px] overflow-hidden bg-gradient-to-br from-black/80 via-black/70 to-black/60 shine-sweep">
            {/* Decorative orbs */}
            <div className="absolute top-[-60px] right-[-40px] w-[250px] h-[250px] rounded-full bg-white/5 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-12">
              {/* Left content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[11px] text-white/80 font-semibold uppercase tracking-wider border border-white/10">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-white/60 font-medium border border-white/10">
                    {app.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-[16px] overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
                    <Image src={app.icon} alt={app.name} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {app.name}
                    </h3>
                    <p className="text-[14px] text-white/50">{app.subtitle}</p>
                  </div>
                </div>

                <p className="text-[14px] text-white/60 leading-relaxed mb-6 max-w-lg line-clamp-3">
                  {app.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {app.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-[11px] text-white/70 font-medium"
                    >
                      <Star className="w-3 h-3 text-amber-400" />
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[13px] font-semibold rounded-full group-hover:shadow-lg group-hover:shadow-white/20 transition-all">
                    View App
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-white/20 text-[12px] text-white/70 font-medium rounded-full">
                    <Download className="w-3.5 h-3.5" />
                    App Store
                  </span>
                </div>
              </div>

              {/* Right: iPhone mockup */}
              <div className="hidden lg:block shrink-0 phone-shadow">
                <div className="relative w-[200px]">
                  {/* Phone frame */}
                  <div className="relative rounded-[32px] border-[6px] border-white/15 bg-black overflow-hidden shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-2xl z-20" />
                    {/* Screen content */}
                    <div className={`relative w-full aspect-[9/19.5] bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-[18px] shadow-xl border-2 border-white/20"
                      />
                      {/* Simulated UI lines */}
                      <div className="absolute bottom-12 left-0 right-0 px-6 space-y-2">
                        <div className="h-2.5 bg-white/25 rounded-full w-3/4 mx-auto" />
                        <div className="h-2 bg-white/15 rounded-full w-1/2 mx-auto" />
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  );
}

/* ═══════════════════════════════════════
   BENTO CARD (for the grid)
   ═══════════════════════════════════════ */
function BentoCard({ app, size = "normal" }: { app: App; size?: "normal" | "wide" }) {
  const isWide = size === "wide";

  return (
    <Link href={`/apps/${app.id}`} className="group block h-full">
      <TiltCard className="h-full">
        <div className="relative h-full rounded-2xl border border-border bg-white overflow-hidden gradient-border">
          {/* Top gradient bar (uses app gradient) */}
          <div className={`h-1.5 bg-gradient-to-r ${app.gradient}`} />

          <div className={`p-6 ${isWide ? "sm:p-8" : ""}`}>
            <div className={`flex ${isWide ? "flex-row items-start gap-6" : "flex-col"}`}>
              {/* Icon + badges row */}
              <div className={`flex items-start gap-4 ${isWide ? "" : "mb-5"}`}>
                <div className="relative">
                  <div className="w-14 h-14 rounded-[14px] overflow-hidden border border-border/60 shadow-md group-hover:shadow-lg transition-shadow shrink-0">
                    <Image src={app.icon} alt={app.name} width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                  {/* Tiny platform indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-border shadow-sm flex items-center justify-center">
                    <Smartphone className="w-2.5 h-2.5 text-muted-strong" />
                  </div>
                </div>

                {!isWide && (
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                      {app.name}
                    </h3>
                    <p className="text-[12px] text-muted-strong">{app.subtitle}</p>
                  </div>
                )}
              </div>

              {/* Wide card: title + desc inline */}
              {isWide && (
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {app.name}
                  </h3>
                  <p className="text-[13px] text-muted-strong mb-3">{app.subtitle}</p>
                  <p className="text-[13px] text-muted leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                </div>
              )}
            </div>

            {/* Normal card: description */}
            {!isWide && (
              <p className="text-[13px] text-muted leading-relaxed line-clamp-2 mb-4">
                {app.description}
              </p>
            )}

            {/* Tags + CTA */}
            <div className={`flex items-center justify-between ${isWide ? "mt-5" : "mt-auto pt-1"}`}>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${app.gradient}`}>
                  {app.category}
                </span>
                <span className="text-[10px] text-muted font-medium px-2 py-0.5 rounded-md bg-surface">
                  {app.price}
                </span>
                <span className="text-[10px] text-muted font-medium px-2 py-0.5 rounded-md bg-surface">
                  {app.ageRating}
                </span>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                <span className="text-[11px] text-accent font-semibold">View</span>
                <ArrowRight className="w-3 h-3 text-accent" />
              </div>
            </div>

            {/* Hover reveal: features */}
            <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[120px] group-hover:mt-4">
              <div className="pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {app.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-muted font-medium px-2 py-1 rounded-md bg-surface/80 border border-border/50"
                      style={{ animation: `slideInLeft 0.3s ease-out ${i * 0.08}s both` }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  );
}

/* ═══════════════════════════════════════
   CATEGORY FILTER with animated pill
   ═══════════════════════════════════════ */
function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (name: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({});

  const handleClick = useCallback(
    (name: string, el: HTMLButtonElement) => {
      onChange(name);
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = el.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    },
    [onChange]
  );

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center gap-1 p-1.5 rounded-2xl bg-surface border border-border"
    >
      {/* Sliding indicator pill */}
      <div
        className="absolute top-1.5 h-[calc(100%-12px)] rounded-xl bg-foreground shadow-md shadow-foreground/10 transition-all duration-300 ease-out"
        style={{
          ...pillStyle,
          opacity: pillStyle.width ? 1 : 0,
        }}
      />

      {categories.map((cat) => (
        <button
          key={cat.name}
          ref={(el) => {
            // Set initial pill position
            if (el && cat.name === active && !pillStyle.width) {
              requestAnimationFrame(() => {
                if (!containerRef.current) return;
                const containerRect = containerRef.current.getBoundingClientRect();
                const btnRect = el.getBoundingClientRect();
                setPillStyle({
                  left: btnRect.left - containerRect.left,
                  width: btnRect.width,
                });
              });
            }
          }}
          onClick={(e) => handleClick(cat.name, e.currentTarget)}
          className={`relative z-10 px-5 py-2 rounded-xl text-[13px] font-semibold transition-colors duration-300 ${
            active === cat.name ? "text-white" : "text-muted hover:text-foreground"
          }`}
        >
          {cat.name}
          <span className={`ml-1.5 text-[11px] ${active === cat.name ? "text-white/60" : "text-muted-strong"}`}>
            {cat.count}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN: APPS SHOWCASE
   ═══════════════════════════════════════ */
export default function AppsShowcase() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? apps : apps.filter((a) => a.category === active);

  // Split: first app is featured, rest go in bento grid
  const featured = filtered[0];
  const rest = filtered.slice(1);

  // Bento layout pattern for remaining cards
  // Row pattern: [wide, normal] then [normal, wide], alternating
  const bentoRows: { app: App; size: "normal" | "wide" }[][] = [];
  for (let i = 0; i < rest.length; i += 2) {
    const row: { app: App; size: "normal" | "wide" }[] = [];
    const isEvenRow = bentoRows.length % 2 === 0;

    if (rest[i]) row.push({ app: rest[i], size: isEvenRow ? "wide" : "normal" });
    if (rest[i + 1]) row.push({ app: rest[i + 1], size: isEvenRow ? "normal" : "wide" });

    bentoRows.push(row);
  }

  return (
    <section id="apps" className="relative py-32">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Our apps
            </h2>
            <p className="text-[16px] text-muted leading-relaxed">
              {apps.length} free iOS apps across games, education, and utilities.
              All crafted with care in Australia.
            </p>
          </div>

          {/* App Store link */}
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 text-[13px] text-muted font-medium hover:text-accent transition-colors shrink-0"
          >
            View all on App Store
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Category filter */}
        <div className="mb-12">
          <CategoryFilter active={active} onChange={setActive} />
        </div>

        {/* Featured spotlight */}
        {featured && (
          <div className="stagger-children">
            <FeaturedCard app={featured} />
          </div>
        )}

        {/* Bento grid */}
        <div className="stagger-children">
          {bentoRows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              {row.map(({ app, size }) => (
                <div
                  key={app.id}
                  className={size === "wide" ? "md:col-span-3" : "md:col-span-2"}
                >
                  <BentoCard app={app} size={size} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom stats ribbon */}
        <div className="mt-14 flex items-center justify-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-surface border border-border text-[12px] text-muted font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              All apps free
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-3 h-3" />
              {apps.length} apps published
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-amber-400" />
              Built in Australia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
