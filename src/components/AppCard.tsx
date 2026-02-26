"use client";

import Link from "next/link";
import Image from "next/image";
import type { App } from "@/data/apps";
import { ArrowUpRight } from "lucide-react";

export default function AppCard({ app }: { app: App }) {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group block"
    >
      <div className="relative p-6 rounded-2xl border border-border bg-white hover:border-border-light transition-all duration-300 card-lift">
        {/* Subtle gradient accent on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-500 pointer-events-none" />

        <div className="relative flex items-start gap-4">
          {/* App icon */}
          <div className="w-16 h-16 rounded-[16px] overflow-hidden border border-border/50 shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
            <Image
              src={app.icon}
              alt={app.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-semibold text-foreground group-hover:text-accent transition-colors">
                {app.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-strong opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <p className="text-[13px] text-muted-strong mb-3">{app.subtitle}</p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted font-medium px-2.5 py-0.5 rounded-full bg-surface border border-border/50">
                {app.category}
              </span>
              <span className="text-[11px] text-muted font-medium px-2.5 py-0.5 rounded-full bg-surface border border-border/50">
                {app.price}
              </span>
              <span className="text-[11px] text-muted font-medium px-2.5 py-0.5 rounded-full bg-surface border border-border/50">
                {app.platforms[0]}
              </span>
            </div>
          </div>
        </div>

        <p className="relative mt-4 text-[13px] leading-relaxed text-muted line-clamp-2">
          {app.description}
        </p>
      </div>
    </Link>
  );
}
