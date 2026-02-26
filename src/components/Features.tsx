import {
  Gamepad2,
  GraduationCap,
  Wrench,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Engaging Games",
    description:
      "Brain-teasing puzzles and colorful adventures designed to entertain and challenge players of all ages.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educational Tools",
    description:
      "Interactive learning experiences from alphabet basics for toddlers to MBA-level business quizzes.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Smart Utilities",
    description:
      "AI-powered tools that solve real problems — from home repairs to everyday tasks.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy First",
    description:
      "We respect user data. Our kids' apps collect zero personal information. Your privacy matters.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High Performance",
    description:
      "60fps gameplay, smooth animations, and optimized code for a buttery-smooth experience on every device.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Free to Play",
    description:
      "All our apps are free to download and enjoy. No paywalls, no gatekeeping — just great apps.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold rounded-full mb-4">
            Why Kinexapps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Built with{" "}
            <span className="gradient-text">Purpose</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            Every app we create follows our core principles of quality,
            accessibility, and user delight.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl border border-card-border bg-card-bg card-hover opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
