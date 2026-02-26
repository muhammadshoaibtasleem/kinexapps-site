import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 animate-gradient" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Experience
              <br />
              Our Apps?
            </h2>
            <p className="max-w-xl mx-auto text-lg text-white/80 mb-10">
              All our apps are free to download on the App Store. Discover games
              that challenge your mind, tools that help your learning, and
              utilities that simplify your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                View All on App Store
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
