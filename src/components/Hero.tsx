"use client";

import Image from "next/image";
import { apps } from "@/data/apps";

export default function Hero() {
  const featured = apps.slice(0, 5);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="glow w-[600px] h-[600px] bg-blue-500/8 top-[-200px] left-1/2 -translate-x-1/2" />
      <div className="glow w-[400px] h-[400px] bg-indigo-500/6 bottom-[10%] right-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="animate-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-[12px] text-muted tracking-wide uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Australian App Studio
          </div>

          {/* Headline */}
          <h1 className="animate-in delay-1 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-foreground mb-6">
            We craft apps
            <br />
            <span className="text-muted-strong">people love to use</span>
          </h1>

          {/* Sub */}
          <p className="animate-in delay-2 text-[17px] leading-relaxed text-muted max-w-xl mx-auto mb-10">
            Games that challenge your mind. Tools that help you learn. Utilities
            powered by AI. Seven apps, free for everyone.
          </p>

          {/* CTAs */}
          <div className="animate-in delay-3 flex items-center justify-center gap-3">
            <a
              href="#apps"
              className="px-6 py-2.5 bg-foreground text-background text-[14px] font-medium rounded-full hover:bg-foreground/90 transition-colors"
            >
              View our apps
            </a>
            <a
              href="/about"
              className="px-6 py-2.5 border border-border text-[14px] font-medium rounded-full text-muted hover:text-foreground hover:border-border-light transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* App icon strip */}
        <div className="animate-in delay-4 mt-20 flex items-center justify-center gap-4">
          {featured.map((app, i) => (
            <a
              key={app.id}
              href={`/apps/${app.id}`}
              className="group relative"
              style={{ animationDelay: `${0.5 + i * 0.08}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 group-hover:border-border-light group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/20">
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[11px] text-muted whitespace-nowrap">{app.name}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Metric bar */}
        <div className="animate-in delay-5 mt-24 flex items-center justify-center">
          <div className="flex items-center divide-x divide-border border border-border rounded-full px-2 py-2">
            {[
              { val: "7", label: "Apps" },
              { val: "3", label: "Categories" },
              { val: "Free", label: "Always" },
            ].map((m) => (
              <div key={m.label} className="px-6 text-center">
                <div className="text-[15px] font-semibold text-foreground">{m.val}</div>
                <div className="text-[11px] text-muted-strong">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
