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
      <section className="pt-28 pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[12px] uppercase tracking-wider text-accent font-medium mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-xl">
            Get in touch
          </h1>
          <p className="text-[17px] text-muted leading-relaxed max-w-xl">
            Have a question, feedback, or business inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            {/* Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-0.5">Email</h3>
                  <a href="mailto:support@kinexapps.com" className="text-[13px] text-accent hover:underline">
                    support@kinexapps.com
                  </a>
                  <p className="text-[12px] text-muted-strong mt-1">Typically respond within 24-48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-0.5">Location</h3>
                  <p className="text-[13px] text-muted">Melbourne, Australia</p>
                  <p className="text-[12px] text-muted-strong mt-1">Serving users globally via the App Store.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-border flex items-center justify-center text-muted shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold mb-0.5">App Store</h3>
                  <a
                    href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-accent hover:underline"
                  >
                    View developer page
                  </a>
                  <p className="text-[12px] text-muted-strong mt-1">All 7 apps on the Apple App Store.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="text-[17px] font-semibold mb-6">Send a message</h3>
              <form action="mailto:support@kinexapps.com" method="POST" encType="text/plain" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] text-muted mb-1.5">Name</label>
                  <input
                    type="text" id="name" name="name" required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted-strong"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] text-muted mb-1.5">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors placeholder:text-muted-strong"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[13px] text-muted mb-1.5">Subject</label>
                  <select
                    id="subject" name="subject"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">App Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="business">Business Inquiry</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] text-muted mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-[14px] focus:outline-none focus:border-accent/50 transition-colors resize-none placeholder:text-muted-strong"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-foreground text-background text-[14px] font-medium rounded-lg hover:bg-foreground/90 transition-colors"
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
