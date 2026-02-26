import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 px-8 py-20 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Try our apps today
            </h2>
            <p className="text-[15px] text-muted max-w-md mx-auto mb-8 leading-relaxed">
              All apps are free on the App Store. No sign-up required,
              no credit card needed.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-[14px] font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                Browse on App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-6 py-2.5 border border-border text-[14px] font-medium rounded-full text-muted hover:text-foreground hover:border-border-light transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
