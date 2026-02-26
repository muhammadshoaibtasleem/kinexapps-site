import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kinexapps for support, feedback, or business inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0a0a2e]">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold rounded-full mb-6">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-muted leading-relaxed mb-10">
                Whether you need support with one of our apps, have a business
                inquiry, or want to provide feedback — we&apos;re here to help. Reach
                out using any of the methods below.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-5 p-6 bg-card-bg border border-card-border rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a
                      href="mailto:support@kinexapps.com"
                      className="text-indigo-500 hover:text-indigo-600 transition-colors"
                    >
                      support@kinexapps.com
                    </a>
                    <p className="text-sm text-muted mt-1">
                      We typically respond within 24-48 hours.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 p-6 bg-card-bg border border-card-border rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted">Melbourne, Australia</p>
                    <p className="text-sm text-muted mt-1">
                      Serving users globally via the App Store.
                    </p>
                  </div>
                </div>

                {/* App Store */}
                <div className="flex items-start gap-5 p-6 bg-card-bg border border-card-border rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">App Store</h3>
                    <a
                      href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-indigo-600 transition-colors"
                    >
                      View our developer page
                    </a>
                    <p className="text-sm text-muted mt-1">
                      See all our apps on the Apple App Store.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 sm:p-10 bg-card-bg border border-card-border rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form
                action={`mailto:support@kinexapps.com`}
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">App Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="business">Business Inquiry</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
