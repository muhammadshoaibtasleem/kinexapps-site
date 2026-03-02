"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery", description: "We learn your goals, audience, and requirements.", color: "blue" },
  { icon: PenTool, label: "Design", description: "Wireframes, prototypes, and visual design.", color: "violet" },
  { icon: Code2, label: "Development", description: "Clean, tested code built in agile sprints.", color: "emerald" },
  { icon: TestTube, label: "Testing", description: "QA, device testing, and performance checks.", color: "amber" },
  { icon: Rocket, label: "Launch", description: "Store submission, deployment, and go-live.", color: "rose" },
  { icon: Headphones, label: "Support", description: "Ongoing maintenance, updates, and scaling.", color: "purple" },
];

const palette: Record<string, { bg: string; text: string; ring: string; line: string }> = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",    ring: "ring-blue-200",    line: "from-blue-400" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600",  ring: "ring-violet-200",  line: "from-violet-400" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", ring: "ring-emerald-200", line: "from-emerald-400" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600",   ring: "ring-amber-200",   line: "from-amber-400" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-600",    ring: "ring-rose-200",    line: "from-rose-400" },
  purple:  { bg: "bg-purple-50",  text: "text-purple-600",  ring: "ring-purple-200",  line: "from-purple-400" },
};

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-surface/40 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our process
          </h2>
          <p className="text-muted text-[16px] max-w-lg mx-auto">
            A proven six-step pipeline that keeps you informed at every stage.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mx-auto max-w-4xl mb-4">
            <div className="absolute top-7 left-[8.33%] right-[8.33%] h-[2px] bg-border" />
            <div
              className="absolute top-7 left-[8.33%] right-[8.33%] h-[2px] bg-gradient-to-r from-accent via-violet-500 to-rose-500 origin-left transition-transform duration-[1.8s] ease-out"
              style={{ transform: visible ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const c = palette[step.color];
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="flex flex-col items-center text-center transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transitionDelay: `${i * 150 + 200}ms`,
                  }}
                >
                  {/* Node */}
                  <div className="relative mb-4">
                    {/* Ping ring */}
                    <div
                      className={`absolute inset-0 rounded-full ${c.bg} transition-all duration-500`}
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "scale(1.6)" : "scale(1)",
                        transitionDelay: `${i * 150 + 600}ms`,
                      }}
                    />
                    <div
                      className={`relative w-14 h-14 rounded-full ${c.bg} flex items-center justify-center ring-2 ${c.ring} ring-offset-2 ring-offset-surface/40`}
                    >
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                  </div>

                  <div className="text-[11px] text-muted-strong font-semibold uppercase tracking-wider mb-1">
                    Step {i + 1}
                  </div>
                  <h3 className="text-[14px] font-semibold mb-1">{step.label}</h3>
                  <p className="text-[12px] text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-border" />
          <div
            className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-violet-500 to-rose-500 origin-top transition-transform duration-[2s] ease-out"
            style={{ transform: visible ? "scaleY(1)" : "scaleY(0)" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const c = palette[step.color];
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="relative flex items-start gap-5 transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transitionDelay: `${i * 150 + 200}ms`,
                  }}
                >
                  {/* Node on line */}
                  <div
                    className={`absolute -left-10 top-0 w-9 h-9 rounded-full ${c.bg} flex items-center justify-center ring-2 ${c.ring} ring-offset-2 ring-offset-surface/40 shrink-0`}
                  >
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>

                  <div>
                    <div className="text-[11px] text-muted-strong font-semibold uppercase tracking-wider mb-0.5">
                      Step {i + 1}
                    </div>
                    <h3 className="text-[15px] font-semibold mb-1">{step.label}</h3>
                    <p className="text-[13px] text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
