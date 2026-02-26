"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { apps } from "@/data/apps";
import { ArrowRight, Download, Sparkles } from "lucide-react";

/* ── Floating app icons behind the CTA ── */
function FloatingIcons() {
  const positions = [
    { top: "12%", left: "5%", delay: 0, size: 44 },
    { top: "20%", right: "7%", delay: 1.2, size: 40 },
    { bottom: "18%", left: "8%", delay: 2.5, size: 36 },
    { bottom: "15%", right: "4%", delay: 0.8, size: 42 },
    { top: "55%", left: "2%", delay: 1.8, size: 32 },
    { top: "45%", right: "3%", delay: 3, size: 38 },
    { bottom: "45%", left: "12%", delay: 0.4, size: 34 },
  ];

  return (
    <>
      {apps.map((app, i) => {
        const pos = positions[i];
        if (!pos) return null;
        const { delay, size, ...style } = pos;
        return (
          <div
            key={app.id}
            className="absolute hidden lg:block pointer-events-none"
            style={{
              ...style,
              animation: `iconFloat 5s ease-in-out ${delay}s infinite`,
              opacity: 0.15,
            }}
          >
            <Image
              src={app.icon}
              alt={app.name}
              width={size}
              height={size}
              className="rounded-xl"
            />
          </div>
        );
      })}
    </>
  );
}

/* ── Animated counter ── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const num = parseInt(value);
  const isNum = !isNaN(num);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNum) return;
    let frame: number;
    const dur = 1400;
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 4)) * num));
      if (p < 1) frame = requestAnimationFrame(step);
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { frame = requestAnimationFrame(step); obs.disconnect(); } },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => { cancelAnimationFrame(frame); obs.disconnect(); };
  }, [num, isNum]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
        {isNum ? count : value}
      </div>
      <div className="text-[10px] text-white/40 font-medium mt-0.5 uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════
   CTA SECTION — full-width, compact
   ═══════════════════════════════════════ */
export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Background layers (edge to edge) ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-80px] right-[-40px] w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-[100px] pointer-events-none"
        style={{ animation: "float 12s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-40px] w-[250px] h-[250px] rounded-full bg-purple-500/12 blur-[100px] pointer-events-none"
        style={{ animation: "floatSlow 15s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[30%] left-[50%] w-[180px] h-[180px] rounded-full bg-emerald-500/8 blur-[80px] pointer-events-none"
        style={{ animation: "floatReverse 18s ease-in-out infinite" }}
      />

      {/* Hex grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating app icons */}
      <FloatingIcons />

      {/* Shine sweep */}
      <div className="absolute inset-0 shine-sweep pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: text + CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm text-[11px] text-white/60 font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              100% Free
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
              Try our apps{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                today
              </span>
            </h2>

            <p className="text-[15px] text-white/50 max-w-md mb-8 leading-relaxed lg:mx-0 mx-auto">
              All apps are free on the App Store. No sign-up, no credit card needed.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a
                href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3 bg-white text-foreground text-[14px] font-semibold rounded-full hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Browse on App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 bg-white/5 backdrop-blur-sm text-[14px] font-semibold rounded-full text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right: stats + app icons */}
          <div className="shrink-0 flex flex-col items-center gap-8">
            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10">
              <AnimatedStat value="7" label="Apps" />
              <div className="w-px h-8 bg-white/10" />
              <AnimatedStat value="3" label="Categories" />
              <div className="w-px h-8 bg-white/10" />
              <AnimatedStat value="Free" label="Always" />
            </div>

            {/* App icon row */}
            <div className="flex items-center gap-2.5">
              {apps.map((app) => (
                <div key={app.id} className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 opacity-40 hover:opacity-100 transition-opacity duration-300">
                  <Image src={app.icon} alt={app.name} width={40} height={40} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
