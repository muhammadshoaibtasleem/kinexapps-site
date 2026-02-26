import type { Metadata } from "next";
import { Target, Eye, Lightbulb, Users, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kinexapps — an Australian app studio building innovative mobile experiences across games, education, and utilities.",
};

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We push the boundaries of what mobile apps can do, leveraging AI and modern frameworks to create unique experiences.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centered",
    description:
      "Every design decision starts with the user. We build intuitive, accessible apps that people genuinely enjoy using.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Accessibility",
    description:
      "All our apps are free to download. We believe great software should be accessible to everyone, everywhere.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality",
    description:
      "From 60fps gameplay to polished UI, we sweat the details. Every app ships with care and craftsmanship.",
    gradient: "from-purple-500 to-violet-500",
  },
];

const milestones = [
  { year: "2024", event: "Kinexapps founded in Australia" },
  { year: "2024", event: "First apps published on the App Store" },
  { year: "2025", event: "Expanded into AI-powered utilities with SnapFix" },
  { year: "2025", event: "Grew portfolio to 7 published apps" },
  { year: "2026", event: "Continuing to innovate across categories" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0a0a2e]">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Building the Future of
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Mobile Experiences
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Kinexapps is an Australian app development studio dedicated to
            creating innovative, engaging, and free mobile applications that
            educate, entertain, and empower users worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-card-bg border border-card-border rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted leading-relaxed">
                To create high-quality, free mobile applications that make a
                genuine difference in people&apos;s lives — whether they&apos;re a child
                learning the alphabet, a student preparing for exams, or a
                homeowner tackling a repair. We believe technology should
                empower, not exclude.
              </p>
            </div>
            <div className="p-10 bg-card-bg border border-card-border rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted leading-relaxed">
                To become a leading independent app studio recognized for
                innovation, quality, and accessibility. We envision a portfolio
                of apps used by millions across the globe — tools that spark
                curiosity, sharpen minds, and solve everyday problems with
                elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-card-bg border border-card-border rounded-2xl text-center card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mx-auto mb-5`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shrink-0 mt-1.5" />
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-card-border min-h-[60px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <span className="text-sm font-semibold text-indigo-500">
                    {milestone.year}
                  </span>
                  <p className="text-foreground font-medium mt-1">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "7", label: "Published Apps" },
              { value: "3", label: "App Categories" },
              { value: "100%", label: "Free to Download" },
              { value: "6+", label: "Apple Platforms" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
