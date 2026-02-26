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
      <div className="relative p-5 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-light transition-all duration-200">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-14 h-14 rounded-[14px] overflow-hidden border border-border shrink-0">
            <Image
              src={app.icon}
              alt={app.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <h3 className="text-[15px] font-semibold text-foreground group-hover:text-accent transition-colors">
                {app.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-strong opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[13px] text-muted-strong mb-2">{app.subtitle}</p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted px-2 py-0.5 rounded-md bg-white/5 border border-border">
                {app.category}
              </span>
              <span className="text-[11px] text-muted px-2 py-0.5 rounded-md bg-white/5 border border-border">
                {app.price}
              </span>
              <span className="text-[11px] text-muted px-2 py-0.5 rounded-md bg-white/5 border border-border">
                {app.platforms[0]}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[13px] leading-relaxed text-muted line-clamp-2">
          {app.description}
        </p>
      </div>
    </Link>
  );
}
