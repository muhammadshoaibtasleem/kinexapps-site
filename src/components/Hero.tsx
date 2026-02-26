"use client";

import { Smartphone, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0a0a2e]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-gray-300 font-medium">
            7 Apps Published on the App Store
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
          We Build Apps
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            People Love
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 animate-fade-in-up delay-200">
          Kinexapps is an Australian app studio crafting innovative mobile
          experiences across games, education, and utilities. From brain-teasing
          puzzles to AI-powered tools — we bring ideas to life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <a
            href="#apps"
            className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-500/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Explore Our Apps
          </a>
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all hover:border-white/40"
          >
            View on App Store
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-xl mx-auto gap-8 animate-fade-in-up delay-400">
          {[
            { value: "7", label: "Published Apps" },
            { value: "3", label: "Categories" },
            { value: "Free", label: "All Apps" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </section>
  );
}
