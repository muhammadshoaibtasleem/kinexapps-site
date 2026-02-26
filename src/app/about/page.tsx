import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kinexapps is an Australian app studio building innovative mobile experiences.",
};

const values = [
  { title: "Innovation", desc: "We leverage AI and modern frameworks to create unique mobile experiences." },
  { title: "User-Centered", desc: "Every design decision starts and ends with the person using the app." },
  { title: "Accessibility", desc: "All our apps are free. Great software should be available to everyone." },
  { title: "Quality", desc: "From 60fps gameplay to polished UI — we sweat the small details." },
];

const timeline = [
  { year: "2024", event: "Kinexapps founded in Melbourne, Australia" },
  { year: "2024", event: "First apps published on the App Store" },
  { year: "2025", event: "Launched SnapFix — AI-powered home repair" },
  { year: "2025", event: "Portfolio grew to 7 published apps" },
  { year: "2026", event: "Continuing to ship across new categories" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
            Building the future of mobile
          </h1>
          <p className="text-[17px] text-muted leading-relaxed max-w-2xl">
            Kinexapps is an Australian app development studio dedicated to creating
            innovative, engaging, and free mobile applications that educate,
            entertain, and empower users worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted mb-5">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-[17px] font-semibold mb-3">Our Mission</h2>
            <p className="text-[14px] text-muted leading-relaxed">
              To create high-quality, free mobile applications that make a genuine
              difference — whether it&apos;s a child learning the alphabet, a student
              preparing for exams, or a homeowner tackling a repair. Technology
              should empower, not exclude.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-[17px] font-semibold mb-3">Our Vision</h2>
            <p className="text-[14px] text-muted leading-relaxed">
              To become a recognized independent app studio known for innovation,
              quality, and accessibility. Apps used by millions — tools that spark
              curiosity, sharpen minds, and solve everyday problems with elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Values
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">What guides us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-[15px] font-semibold mb-2">{v.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Timeline
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">Our journey</h2>
          <div className="space-y-0">
            {timeline.map((m, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-[12px] text-accent font-medium">{m.year}</span>
                  <p className="text-[14px] text-foreground mt-0.5">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center divide-x divide-border border border-border rounded-xl px-2 py-6">
              {[
                { val: "7", label: "Published Apps" },
                { val: "3", label: "Categories" },
                { val: "100%", label: "Free" },
                { val: "6+", label: "Platforms" },
              ].map((s) => (
                <div key={s.label} className="px-10 text-center">
                  <div className="text-2xl font-bold text-foreground">{s.val}</div>
                  <div className="text-[12px] text-muted-strong mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
