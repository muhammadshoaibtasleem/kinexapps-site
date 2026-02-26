"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { apps } from "@/data/apps";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Animated counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(target);
  const isNumber = !isNaN(num);

  useEffect(() => {
    if (!isNumber) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * num));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { frame = requestAnimationFrame(step); observer.disconnect(); }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [num, isNumber]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
      {isNumber ? count : target}{suffix}
    </div>
  );
}

/* ── Particle network canvas ── */
function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 50;
    const w = () => canvas!.offsetWidth;
    const h = () => canvas!.offsetHeight;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, w(), h());

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(59,130,246,0.25)";
        ctx!.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w()) p.vx *= -1;
        if (p.y < 0 || p.y > h()) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Circuit board SVG (draws itself) ── */
function CircuitBoard() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
      {/* Circuit paths */}
      {[
        "M0,200 H200 V350 H400 V200 H550",
        "M1200,150 H1000 V300 H850 V450 H700",
        "M0,600 H150 V500 H350 V650 H500",
        "M1200,550 H1050 V400 H900 V550 H750",
        "M300,0 V100 H500 V250",
        "M900,0 V150 H750 V300",
        "M400,800 V700 H600 V550",
        "M800,800 V680 H650 V520",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="rgba(59,130,246,0.08)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="800"
          strokeDashoffset="800"
          style={{
            animation: `drawLine 3s ease-out ${i * 0.3}s forwards`,
          }}
        />
      ))}

      {/* Circuit nodes (glowing dots at junctions) */}
      {[
        [200,200],[400,350],[550,200],[200,350],
        [1000,150],[850,300],[700,450],[1000,300],
        [150,600],[350,500],[500,650],[150,500],
        [1050,550],[900,400],[750,550],[1050,400],
        [300,100],[500,250],[900,150],[750,300],
        [600,550],[400,700],[800,680],[650,520],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="rgba(59,130,246,0.2)"
          style={{
            animation: `particlePulse 3s ease-in-out ${i * 0.2}s infinite`,
            transformOrigin: `${cx}px ${cy}px`,
          }}
        />
      ))}
    </svg>
  );
}

/* ── Floating code snippet (glassmorphism card) ── */
function CodeSnippet({ className, delay }: { className?: string; delay: number }) {
  const lines = [
    { indent: 0, color: "text-purple-400", text: "func" , rest: " buildApp() {", restColor: "text-slate-500" },
    { indent: 1, color: "text-blue-400", text: "let", rest: " features = loadModules()", restColor: "text-slate-400" },
    { indent: 1, color: "text-blue-400", text: "let", rest: " ui = SwiftUI.render()", restColor: "text-slate-400" },
    { indent: 1, color: "text-emerald-400", text: "await", rest: " deploy(to: .appStore)", restColor: "text-slate-400" },
    { indent: 0, color: "text-purple-400", text: "}", rest: "", restColor: "" },
  ];

  return (
    <div
      className={`absolute hidden lg:block bg-white/80 backdrop-blur-xl border border-border/60 rounded-xl shadow-lg shadow-black/5 p-4 font-mono text-[11px] leading-[1.8] ${className}`}
      style={{
        animation: `floatRotate 8s ease-in-out ${delay}s infinite, popIn 0.6s ease-out ${delay}s both`,
      }}
    >
      {/* Window dots */}
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[9px] text-muted-strong font-sans">App.swift</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }}>
          <span className={line.color}>{line.text}</span>
          <span className={line.restColor}>{line.rest}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Terminal window ── */
function TerminalSnippet({ className, delay }: { className?: string; delay: number }) {
  return (
    <div
      className={`absolute hidden lg:block bg-slate-900 border border-slate-700/50 rounded-xl shadow-lg shadow-black/10 p-4 font-mono text-[11px] leading-[1.8] ${className}`}
      style={{
        animation: `floatRotate 9s ease-in-out ${delay}s infinite, popIn 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <div className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[9px] text-slate-500 font-sans">Terminal</span>
      </div>
      <div><span className="text-emerald-400">$</span> <span className="text-slate-300">xcodebuild</span> <span className="text-blue-400">-scheme</span> <span className="text-amber-300">Kinexapps</span></div>
      <div><span className="text-emerald-400">$</span> <span className="text-slate-300">xcrun altool</span> <span className="text-blue-400">--upload-app</span></div>
      <div className="text-emerald-400 cursor-blink">✓ Build succeeded</div>
    </div>
  );
}

/* ── Floating tech badges ── */
const techBadges = [
  { label: "Swift", icon: "⟨⟩", color: "from-orange-400 to-orange-500", pos: "top-[18%] left-[6%]", delay: 0 },
  { label: "SwiftUI", icon: "◆", color: "from-blue-400 to-blue-600", pos: "top-[25%] right-[5%]", delay: 1.5 },
  { label: "CoreML", icon: "◎", color: "from-purple-400 to-purple-600", pos: "bottom-[30%] left-[3%]", delay: 3 },
  { label: "ARKit", icon: "◈", color: "from-pink-400 to-pink-600", pos: "bottom-[22%] right-[6%]", delay: 4.5 },
  { label: "AI", icon: "⬡", color: "from-emerald-400 to-emerald-600", pos: "top-[55%] left-[8%]", delay: 2 },
  { label: "SpriteKit", icon: "△", color: "from-cyan-400 to-cyan-600", pos: "top-[12%] right-[18%]", delay: 3.5 },
];

/* ═══════════════════════════════════════
   HERO
   ═══════════════════════════════════════ */
export default function Hero() {
  const featured = apps.slice(0, 5);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* ── Layer 1: Gradient mesh ── */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* ── Layer 2: Hex grid pattern ── */}
      <div className="absolute inset-0 hex-grid opacity-70" />

      {/* ── Layer 3: Particle network (canvas) ── */}
      <ParticleNetwork />

      {/* ── Layer 4: Circuit board SVG ── */}
      <CircuitBoard />

      {/* ── Layer 5: Floating gradient orbs (mouse parallax) ── */}
      <div
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-blue-400/8 blur-[100px]"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div
        className="absolute top-[60%] right-[10%] w-[350px] h-[350px] rounded-full bg-purple-400/6 blur-[100px]"
        style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
      />
      <div
        className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-emerald-400/5 blur-[80px]"
        style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
      />

      {/* ── Layer 6: Floating tech stack badges ── */}
      {techBadges.map((badge) => (
        <div
          key={badge.label}
          className={`absolute ${badge.pos} hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-border/50 shadow-sm text-[11px] font-semibold text-slate-600 z-10`}
          style={{
            animation: `floatRotate 7s ease-in-out ${badge.delay}s infinite, popIn 0.5s ease-out ${0.8 + badge.delay * 0.2}s both`,
          }}
        >
          <span className={`w-4 h-4 rounded-md bg-gradient-to-br ${badge.color} flex items-center justify-center text-white text-[8px]`}>
            {badge.icon}
          </span>
          {badge.label}
        </div>
      ))}

      {/* ── Layer 7: Code snippet cards ── */}
      <CodeSnippet className="top-[15%] left-[4%] w-[220px] z-10" delay={1.2} />
      <TerminalSnippet className="bottom-[18%] right-[3%] w-[260px] z-10" delay={2} />

      {/* ── Layer 8: Binary data streams (decorative) ── */}
      <div className="absolute top-0 left-[20%] w-px h-full overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="font-mono text-[8px] text-blue-500 whitespace-pre leading-[1.4]" style={{ animation: "dataStream 20s linear infinite" }}>
          {Array.from({ length: 60 }, () => Math.random() > 0.5 ? "1" : "0").join("\n")}
        </div>
      </div>
      <div className="absolute top-0 right-[25%] w-px h-full overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="font-mono text-[8px] text-purple-500 whitespace-pre leading-[1.4]" style={{ animation: "dataStream 25s linear infinite 5s" }}>
          {Array.from({ length: 60 }, () => Math.random() > 0.5 ? "1" : "0").join("\n")}
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="hero-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-white/70 backdrop-blur-sm text-[13px] text-muted font-medium tracking-wide mb-10 shadow-sm">
            <span className="relative w-2 h-2 rounded-full bg-emerald-500 pulse-ring" />
            Australian App Studio
            <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">iOS</span>
          </div>

          {/* Main headline */}
          <h1 className="hero-reveal hero-delay-1 text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground mb-8">
            We craft apps
            <br />
            <span className="shimmer-text">people love to use</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-reveal hero-delay-2 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto mb-12">
            Games that challenge your mind. Tools that help you learn.
            Utilities powered by AI. Seven apps, free for everyone.
          </p>

          {/* CTA buttons */}
          <div className="hero-reveal hero-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apps"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-white text-[15px] font-semibold rounded-full hover:shadow-lg hover:shadow-foreground/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              View our apps
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border bg-white/60 backdrop-blur-sm text-[15px] font-semibold rounded-full text-foreground hover:bg-white hover:border-border-light hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* ── Floating app icons ── */}
        <div className="hero-reveal hero-delay-4 mt-24 flex items-center justify-center gap-5 sm:gap-6">
          {featured.map((app, i) => (
            <a key={app.id} href={`/apps/${app.id}`} className="group relative">
              <div
                className="w-[68px] h-[68px] sm:w-[88px] sm:h-[88px] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-border/80 bg-white shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/10 group-hover:-translate-y-3 group-hover:scale-105"
                style={{
                  animation: `iconFloat 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <Image src={app.icon} alt={app.name} width={88} height={88} className="w-full h-full object-cover" priority={i < 3} />
              </div>
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                <span className="text-[12px] font-medium text-muted whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-border shadow-sm">
                  {app.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <div className="hero-reveal hero-delay-5 mt-28 flex items-center justify-center">
          <div className="flex items-center divide-x divide-border border border-border rounded-2xl bg-white/70 backdrop-blur-sm px-2 py-5 shadow-sm">
            {[
              { val: "7", label: "Apps Published", suffix: "" },
              { val: "3", label: "Categories", suffix: "" },
              { val: "Free", label: "Always", suffix: "" },
            ].map((m) => (
              <div key={m.label} className="px-8 sm:px-10 text-center">
                {m.val === "Free" ? (
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">Free</div>
                ) : (
                  <AnimatedCounter target={m.val} suffix={m.suffix} />
                )}
                <div className="text-[12px] text-muted-strong mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="hero-reveal hero-delay-6 mt-16 flex justify-center">
          <a href="#apps" className="flex flex-col items-center gap-2 text-muted-strong hover:text-muted transition-colors">
            <span className="text-[11px] uppercase tracking-widest font-medium">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
