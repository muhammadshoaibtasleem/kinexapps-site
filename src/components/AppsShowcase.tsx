"use client";

import { useState } from "react";
import { apps, categories } from "@/data/apps";
import AppCard from "./AppCard";

export default function AppsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? apps
      : apps.filter((app) => app.category === activeCategory);

  return (
    <section id="apps" className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-500 text-sm font-semibold rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Our{" "}
            <span className="gradient-text">Apps</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            From brain-teasing puzzles to AI-powered utilities — explore our
            collection of thoughtfully crafted mobile applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.name
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-card-bg border border-card-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
