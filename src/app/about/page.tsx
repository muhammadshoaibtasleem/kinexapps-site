import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Story",
  description:
    "Kinexapps is an Australian mobile app studio dedicated to building free, innovative iOS apps. Learn about our mission, values, and the team behind 7 published apps on the App Store.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kinexapps — Australian Mobile App Studio",
    description:
      "Learn about our mission to build free, high-quality iOS apps for everyone.",
    url: "https://kinexapps.com/about",
  },
};

const values = [
  { title: "Innovation", desc: "We leverage AI and modern frameworks to create unique mobile experiences.", color: "from-blue-500/10 to-cyan-500/10", dot: "bg-blue-500" },
  { title: "User-Centered", desc: "Every design decision starts and ends with the person using the app.", color: "from-purple-500/10 to-indigo-500/10", dot: "bg-purple-500" },
  { title: "Accessibility", desc: "All our apps are free. Great software should be available to everyone.", color: "from-emerald-500/10 to-green-500/10", dot: "bg-emerald-500" },
  { title: "Quality", desc: "From 60fps gameplay to polished UI — we sweat the small details.", color: "from-amber-500/10 to-orange-500/10", dot: "bg-amber-500" },
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            About
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
            Building the future of mobile
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            Kinexapps is an Australian app development studio dedicated to creating
            innovative, engaging, and free mobile applications that educate,
            entertain, and empower users worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 rounded-2xl border border-border bg-white card-lift">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold mb-3">Our Mission</h2>
            <p className="text-[14px] text-muted leading-relaxed">
              To create high-quality, free mobile applications that make a genuine
              difference — whether it&apos;s a child learning the alphabet, a student
              preparing for exams, or a homeowner tackling a repair. Technology
              should empower, not exclude.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-border bg-white card-lift">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold mb-3">Our Vision</h2>
            <p className="text-[14px] text-muted leading-relaxed">
              To become a recognized independent app studio known for innovation,
              quality, and accessibility. Apps used by millions — tools that spark
              curiosity, sharpen minds, and solve everyday problems with elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Values
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-12">What guides us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="group relative p-7 rounded-2xl border border-border bg-white card-lift overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative">
                  <div className={`w-2.5 h-2.5 rounded-full ${v.dot} mb-5`} />
                  <h3 className="text-[15px] font-semibold mb-2">{v.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Timeline
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-12">Our journey</h2>
          <div className="space-y-0">
            {timeline.map((m, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0 ring-4 ring-blue-50" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-[12px] text-accent font-semibold">{m.year}</span>
                  <p className="text-[15px] text-foreground mt-0.5">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
              {[
                { val: "7", label: "Published Apps" },
                { val: "3", label: "Categories" },
                { val: "100%", label: "Free" },
                { val: "6+", label: "Platforms" },
              ].map((s) => (
                <div key={s.label} className="text-center p-6 rounded-2xl bg-white border border-border">
                  <div className="text-3xl font-bold text-foreground">{s.val}</div>
                  <div className="text-[12px] text-muted-strong mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
