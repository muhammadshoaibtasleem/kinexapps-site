import {
  Gamepad2,
  GraduationCap,
  Cpu,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

const items = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Engaging Games",
    desc: "Puzzles and adventures that challenge and entertain players of all ages.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education Tools",
    desc: "From ABCs for toddlers to MBA quiz battles for university students.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "AI-Powered",
    desc: "Smart utilities that use AI to solve real-world problems instantly.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy First",
    desc: "Kids' apps collect zero data. We respect user privacy across all products.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performant",
    desc: "60fps gameplay, smooth transitions, and optimized for every Apple device.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Free for All",
    desc: "Every app is free to download. No paywalls, no gatekeeping.",
  },
];

export default function Features() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How we build
          </h2>
          <p className="text-[15px] text-muted leading-relaxed">
            Quality, accessibility, and user experience drive every decision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card p-8 hover:bg-card-hover transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted mb-5">
                {item.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
