import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Kinexapps Terms of Service — Review the terms and conditions for using our iOS apps and website. Understand your rights and responsibilities.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — Kinexapps",
    description:
      "Terms and conditions for using Kinexapps apps and website.",
    url: "https://kinexapps.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-[14px] text-muted-strong">Last updated: February 26, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div className="p-6 rounded-2xl border border-border bg-white text-[14px] text-muted leading-relaxed shadow-sm">
            By downloading or using any application developed by{" "}
            <strong className="text-foreground">Kinexapps</strong>, you agree to
            be bound by these Terms. If you do not agree, please do not use our applications.
          </div>

          {[
            {
              title: "1. Use of Our Apps",
              content: (
                <>
                  <p className="mb-2">Our applications are for personal, non-commercial use. You may not:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reverse engineer or decompile our applications</li>
                    <li>Use our apps for any unlawful purpose</li>
                    <li>Attempt unauthorized access to any part of our services</li>
                    <li>Redistribute or sublicense without permission</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. In-App Purchases",
              content: "All purchases are processed through the Apple App Store and subject to Apple's terms. Refund requests should be directed to Apple.",
            },
            {
              title: "3. Advertising",
              content: "Many apps are free and ad-supported. By using free apps, you agree to ad display. Ads may be removed through in-app purchases where available.",
            },
            {
              title: "4. Intellectual Property",
              content: "All content, design, graphics, and code are the intellectual property of Kinexapps, protected by copyright and intellectual property laws.",
            },
            {
              title: "5. Disclaimer of Warranties",
              content: "Apps are provided \"as is\" without warranties of any kind. We do not guarantee error-free, secure, or continuous availability.",
            },
            {
              title: "6. Limitation of Liability",
              content: "To the maximum extent permitted by law, Kinexapps shall not be liable for any indirect, incidental, special, or consequential damages.",
            },
            {
              title: "7. Changes to Terms",
              content: "We may modify these Terms at any time. Continued use constitutes acceptance of new terms.",
            },
            {
              title: "8. Governing Law",
              content: "These Terms are governed by the laws of Australia.",
            },
            {
              title: "9. Contact",
              content: (
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <p className="font-medium text-foreground">Kinexapps</p>
                  <p>Email: <a href="mailto:support@kinexapps.com" className="text-accent hover:underline">support@kinexapps.com</a></p>
                  <p>Location: Melbourne, Australia</p>
                </div>
              ),
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-[17px] font-semibold text-foreground mb-3">{section.title}</h2>
              <div className="text-[14px] text-muted leading-relaxed">
                {typeof section.content === "string" ? <p>{section.content}</p> : section.content}
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-border">
            <Link href="/" className="text-[13px] text-accent hover:underline font-medium">&larr; Back to home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
