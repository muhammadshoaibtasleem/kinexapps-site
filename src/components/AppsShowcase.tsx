"use client";

import { useState } from "react";
import { apps, categories } from "@/data/apps";
import AppCard from "./AppCard";

export default function AppsShowcase() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? apps : apps.filter((a) => a.category === active);

  return (
    <section id="apps" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our apps
          </h2>
          <p className="text-[15px] text-muted leading-relaxed">
            Seven apps across games, education, and utilities.
            All free, all crafted with care.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1 mb-10 p-1 bg-card border border-border rounded-lg w-fit">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${
                active === cat.name
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
