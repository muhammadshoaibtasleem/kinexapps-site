import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kinexapps for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Contact
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 max-w-xl">
            Get in touch
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            Have a question, feedback, or business inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-white card-lift">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-1">Email</h3>
                  <a href="mailto:support@kinexapps.com" className="text-[14px] text-accent hover:underline">
                    support@kinexapps.com
                  </a>
                  <p className="text-[12px] text-muted-strong mt-1">Typically respond within 24-48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-white card-lift">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-1">Location</h3>
                  <p className="text-[14px] text-muted">Melbourne, Australia</p>
                  <p className="text-[12px] text-muted-strong mt-1">Serving users globally via the App Store.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-white card-lift">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-1">App Store</h3>
                  <a
                    href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-accent hover:underline"
                  >
                    View developer page
                  </a>
                  <p className="text-[12px] text-muted-strong mt-1">All 7 apps on the Apple App Store.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <h3 className="text-lg font-semibold mb-6">Send a message</h3>
              <form action="mailto:support@kinexapps.com" method="POST" encType="text/plain" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[13px] text-muted font-medium mb-2">Name</label>
                  <input
                    type="text" id="name" name="name" required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted-strong"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] text-muted font-medium mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted-strong"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[13px] text-muted font-medium mb-2">Subject</label>
                  <select
                    id="subject" name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">App Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="business">Business Inquiry</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] text-muted font-medium mb-2">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none placeholder:text-muted-strong"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-foreground text-white text-[14px] font-semibold rounded-xl hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
