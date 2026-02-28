"use client";

import { useEffect, useRef, useState } from "react";
import {
  Gamepad2,
  GraduationCap,
  Cpu,
  Shield,
  Zap,
  Heart,
  Pencil,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";

/* ═══════════════════════════════════════
   ANIMATED VISUALS for each feature card
   ═══════════════════════════════════════ */

/* ── Games: Orbiting game elements ── */
function GamesVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      {/* Center icon */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
        <Gamepad2 className="w-6 h-6 text-white" />
      </div>
      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ animation: "orbitSmall 6s linear infinite" }}>
          <span className="text-lg">🎲</span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ animation: "orbitMedium 9s linear infinite" }}>
          <span className="text-sm">🧩</span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ animation: "orbitSmall 7s linear infinite reverse" }}>
          <span className="text-xs">⭐</span>
        </div>
      </div>
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[56px] h-[56px] rounded-full border border-blue-200/40 border-dashed" />
        <div className="absolute w-[80px] h-[80px] rounded-full border border-blue-200/25 border-dashed" />
      </div>
    </div>
  );
}

/* ── Education: Animated flashcard stack ── */
function EducationVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="relative">
        {/* Stacked cards */}
        <div className="absolute -top-1 -left-1 w-[72px] h-[48px] rounded-lg bg-purple-100 border border-purple-200/60 rotate-[-6deg] transition-transform group-hover:rotate-[-12deg] group-hover:-translate-x-2 duration-500" />
        <div className="absolute -top-0.5 left-0.5 w-[72px] h-[48px] rounded-lg bg-indigo-100 border border-indigo-200/60 rotate-[-2deg] transition-transform group-hover:rotate-[-4deg] group-hover:-translate-x-1 duration-500" />
        <div className="relative w-[72px] h-[48px] rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20 transition-transform group-hover:rotate-[4deg] group-hover:translate-x-2 duration-500">
          <span className="text-white font-bold text-lg">A+</span>
        </div>
      </div>
      {/* Floating mini icons */}
      <div className="absolute top-3 right-4" style={{ animation: "floatRotate 5s ease-in-out infinite" }}>
        <GraduationCap className="w-4 h-4 text-purple-400" />
      </div>
      <div className="absolute bottom-3 left-6" style={{ animation: "floatRotate 6s ease-in-out 1s infinite" }}>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-500 font-bold">MBA</span>
      </div>
    </div>
  );
}

/* ── AI: Animated neural network ── */
function AIVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <svg width="120" height="90" viewBox="0 0 120 90" className="overflow-visible">
        {/* Connections */}
        {[
          [20,20,60,15],[20,20,60,45],[20,20,60,75],
          [20,50,60,15],[20,50,60,45],[20,50,60,75],
          [20,80,60,15],[20,80,60,45],[20,80,60,75],
          [60,15,100,35],[60,15,100,55],
          [60,45,100,35],[60,45,100,55],
          [60,75,100,35],[60,75,100,55],
        ].map(([x1,y1,x2,y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(245,158,11,0.15)"
            strokeWidth="1"
            strokeDasharray="4 3"
            style={{ animation: `dashFlow 1.5s linear ${i * 0.1}s infinite` }}
          />
        ))}
        {/* Input nodes */}
        {[20,50,80].map((y, i) => (
          <circle key={`i${i}`} cx="20" cy={y} r="4" fill="#f59e0b" opacity="0.6"
            style={{ animation: `neuralPulse 2s ease-in-out ${i * 0.3}s infinite` }}
          />
        ))}
        {/* Hidden nodes */}
        {[15,45,75].map((y, i) => (
          <circle key={`h${i}`} cx="60" cy={y} r="4" fill="#f97316" opacity="0.6"
            style={{ animation: `neuralPulse 2s ease-in-out ${0.5 + i * 0.3}s infinite` }}
          />
        ))}
        {/* Output nodes */}
        {[35,55].map((y, i) => (
          <circle key={`o${i}`} cx="100" cy={y} r="5" fill="#ef4444" opacity="0.7"
            style={{ animation: `neuralPulse 2s ease-in-out ${1 + i * 0.3}s infinite` }}
          />
        ))}
        {/* Labels */}
        <text x="100" y="32" textAnchor="middle" className="text-[7px] fill-amber-600 font-semibold">AI</text>
      </svg>
    </div>
  );
}

/* ── Privacy: Shield with lock ── */
function PrivacyVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      {/* Shield */}
      <div className="relative">
        <div className="w-16 h-[72px] rounded-t-full rounded-b-[40%] bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-end justify-center pb-4 shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110"
          style={{ animation: "lockWiggle 4s ease-in-out infinite" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        {/* Checkmark badge */}
        <div className="absolute -top-1 -right-2 w-6 h-6 rounded-full bg-white border-2 border-emerald-400 flex items-center justify-center shadow-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"
              strokeDasharray="24"
              strokeDashoffset="24"
              style={{ animation: "drawCheck 0.8s ease-out 1s forwards" }}
            />
          </svg>
        </div>
      </div>
      {/* Zero data text */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">ZERO DATA</span>
      </div>
    </div>
  );
}

/* ── Performant: Live FPS meter ── */
function PerformanceVisual() {
  const [fps, setFps] = useState(60);
  const frameRef = useRef(0);

  useEffect(() => {
    let prev = performance.now();
    let id: number;
    function tick(now: number) {
      frameRef.current++;
      if (now - prev >= 500) {
        setFps(Math.min(60, Math.round(frameRef.current * (1000 / (now - prev)))));
        frameRef.current = 0;
        prev = now;
      }
      id = requestAnimationFrame(tick);
    }
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative w-full h-32 flex flex-col items-center justify-center gap-3">
      {/* FPS number */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black tabular-nums bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          {fps}
        </span>
        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">fps</span>
      </div>
      {/* Performance bar */}
      <div className="w-24 h-1.5 rounded-full bg-rose-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300"
          style={{ width: `${(fps / 60) * 100}%` }}
        />
      </div>
      {/* Device icons */}
      <div className="flex items-center gap-3 mt-1">
        {["iPhone", "iPad", "Mac"].map((d) => (
          <span key={d} className="text-[9px] text-rose-400 font-medium bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200/50">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Free: Animated $0 with crossed-out price ── */
function FreeVisual() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="text-center">
        {/* Crossed out fake price */}
        <div className="relative inline-block mb-1 opacity-40">
          <span className="text-lg font-bold text-muted-strong">$4.99</span>
          <div className="absolute top-1/2 left-0 h-[2px] bg-red-400 rounded-full" style={{ animation: "strikeThrough 1s ease-out 1.5s both", width: 0 }}>
            <div className="h-full w-full bg-red-400 rounded-full" style={{ animation: "strikeThrough 1s ease-out 1.5s both" }} />
          </div>
        </div>
        <div className="flex items-baseline justify-center gap-0.5">
          <span className="text-5xl font-black bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">$0</span>
        </div>
        <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-1 block">Forever free</span>
      </div>
      {/* Floating hearts */}
      <div className="absolute top-4 right-6" style={{ animation: "floatRotate 4s ease-in-out infinite" }}>
        <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
      </div>
      <div className="absolute bottom-6 left-5" style={{ animation: "floatRotate 5s ease-in-out 1s infinite" }}>
        <Heart className="w-3 h-3 text-sky-400 fill-sky-400" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   BUILD PROCESS PIPELINE
   ═══════════════════════════════════════ */
const processSteps = [
  { icon: <Pencil className="w-4 h-4" />, label: "Design", color: "from-violet-500 to-purple-600" },
  { icon: <Code2 className="w-4 h-4" />, label: "Develop", color: "from-blue-500 to-cyan-500" },
  { icon: <FlaskConical className="w-4 h-4" />, label: "Test", color: "from-amber-500 to-orange-500" },
  { icon: <Rocket className="w-4 h-4" />, label: "Ship", color: "from-emerald-500 to-green-500" },
];

function BuildPipeline() {
  return (
    <div className="flex items-center justify-center gap-0 mb-20">
      {processSteps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          {/* Step */}
          <div className="flex flex-col items-center gap-2 group/step cursor-default">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover/step:scale-110 group-hover/step:-translate-y-1`}
              style={{ animation: `popIn 0.5s ease-out ${0.3 + i * 0.15}s both` }}
            >
              {step.icon}
            </div>
            <span className="text-[11px] font-semibold text-muted-strong group-hover/step:text-foreground transition-colors">
              {step.label}
            </span>
          </div>

          {/* Connector */}
          {i < processSteps.length - 1 && (
            <div className="w-12 sm:w-20 mx-1 sm:mx-2 -mt-5">
              <svg width="100%" height="8" viewBox="0 0 80 8" preserveAspectRatio="none">
                <line
                  x1="0" y1="4" x2="80" y2="4"
                  stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round"
                  strokeDasharray="6 4"
                  style={{ animation: `dashFlow 1s linear infinite` }}
                />
                {/* Animated dot traveling along the line */}
                <circle r="2.5" fill="#3b82f6" opacity="0.7">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M0,4 L80,4" />
                </circle>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   TECH STACK MARQUEE
   ═══════════════════════════════════════ */
const techStack = [
  "Swift", "SwiftUI", "UIKit", "SpriteKit", "CoreML", "ARKit",
  "Xcode", "TestFlight", "Firebase", "App Store Connect",
  "Swift", "SwiftUI", "UIKit", "SpriteKit", "CoreML", "ARKit",
  "Xcode", "TestFlight", "Firebase", "App Store Connect",
];

function TechMarquee() {
  return (
    <div className="relative mt-20 overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface/80 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border text-[12px] font-medium text-muted-strong shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   FEATURE CARD DATA
   ═══════════════════════════════════════ */
const features = [
  {
    title: "Engaging Games",
    desc: "Puzzles and adventures that challenge and entertain players of all ages. From laser physics to marble mazes.",
    stat: "4",
    statLabel: "Games published",
    visual: <GamesVisual />,
    span: "lg:col-span-3",
  },
  {
    title: "Education Tools",
    desc: "From ABCs for toddlers to MBA quiz battles for university students.",
    stat: "3",
    statLabel: "Learning apps",
    visual: <EducationVisual />,
    span: "lg:col-span-2",
  },
  {
    title: "AI-Powered",
    desc: "Smart utilities that use AI to solve real-world problems instantly.",
    stat: "AI",
    statLabel: "Core technology",
    visual: <AIVisual />,
    span: "lg:col-span-2",
  },
  {
    title: "Privacy First",
    desc: "Kids' apps collect zero data. We respect user privacy across all products.",
    stat: "0",
    statLabel: "Data from kids",
    visual: <PrivacyVisual />,
    span: "lg:col-span-1",
  },
  {
    title: "Performant",
    desc: "60fps gameplay, smooth transitions, and optimized for every Apple device.",
    stat: "60",
    statLabel: "Frames per second",
    visual: <PerformanceVisual />,
    span: "lg:col-span-2",
  },
  {
    title: "Free for All",
    desc: "Every app is free to download. No paywalls, no subscriptions, no gatekeeping.",
    stat: "$0",
    statLabel: "Price tag, always",
    visual: <FreeVisual />,
    span: "lg:col-span-5",
  },
];

/* ═══════════════════════════════════════
   MAIN: FEATURES SECTION
   ═══════════════════════════════════════ */
export default function Features() {
  return (
    <section className="py-32 bg-surface/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Approach
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            How we build
          </h2>
          <p className="text-[16px] text-muted leading-relaxed">
            Quality, accessibility, and user experience drive every decision
            we make — from first sketch to App Store.
          </p>
        </div>

        {/* Build process pipeline */}
        <BuildPipeline />

        {/* Bento feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`group relative rounded-2xl border border-border bg-white overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 ${f.span}`}
              style={{ animation: `fadeIn 0.5s ease-out ${0.1 + idx * 0.08}s both` }}
            >
              {/* Animated visual */}
              <div className="px-6 pt-6">
                {f.visual}
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-end justify-between mb-2">
                  <h3 className="text-[16px] font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <div className="text-right shrink-0 ml-3">
                    <span className="text-lg font-black text-accent leading-none">{f.stat}</span>
                    <p className="text-[9px] text-muted-strong font-medium mt-0.5">{f.statLabel}</p>
                  </div>
                </div>
                <p className="text-[13px] text-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <TechMarquee />
      </div>
    </section>
  );
}
