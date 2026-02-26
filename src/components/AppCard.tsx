"use client";

import Link from "next/link";
import Image from "next/image";
import type { App } from "@/data/apps";
import {
  Smartphone,
  Tablet,
  Monitor,
  Glasses,
  ExternalLink,
} from "lucide-react";

const platformIcons: Record<string, React.ReactNode> = {
  iPhone: <Smartphone className="w-3.5 h-3.5" />,
  iPad: <Tablet className="w-3.5 h-3.5" />,
  Mac: <Monitor className="w-3.5 h-3.5" />,
  "Apple Vision": <Glasses className="w-3.5 h-3.5" />,
};

export default function AppCard({ app, index }: { app: App; index: number }) {
  return (
    <div
      className="group relative bg-card-bg border border-card-border rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
    >
      {/* Gradient Header */}
      <div
        className={`relative h-44 bg-gradient-to-br ${app.gradient} p-6 flex items-center justify-center`}
      >
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-black/10 blur-lg" />

        {/* App Icon */}
        <div className="relative w-24 h-24 rounded-[22px] overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-white/30">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 ${app.categoryColor} text-white text-xs font-semibold rounded-full`}
          >
            {app.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {app.name}
            </h3>
            <p className="text-sm text-muted">{app.subtitle}</p>
          </div>
          <span className="text-xs font-medium text-muted bg-black/5 dark:bg-white/5 px-2 py-1 rounded-md">
            {app.price}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
          {app.description}
        </p>

        {/* Platforms */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {app.platforms.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-1 px-2 py-1 bg-black/5 dark:bg-white/5 rounded-md text-xs text-muted"
            >
              {platformIcons[platform]}
              {platform}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={`/apps/${app.id}`}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-xl text-center hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Learn More
          </Link>
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-card-border rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label={`View ${app.name} on App Store`}
          >
            <ExternalLink className="w-4 h-4 text-muted" />
          </a>
        </div>
      </div>
    </div>
  );
}
