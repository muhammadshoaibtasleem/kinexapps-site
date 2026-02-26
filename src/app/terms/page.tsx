import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Kinexapps Terms of Service — Terms governing the use of our mobile applications.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0a0a2e]">
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: February 26, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl">
              <p className="text-sm text-muted">
                By downloading or using any application developed by{" "}
                <strong className="text-foreground">
                  Kinexapps (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                </strong>
                , you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our applications.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Use of Our Apps</h2>
              <p className="text-muted leading-relaxed">
                Our applications are provided for personal, non-commercial use.
                You agree to use our apps in accordance with all applicable laws
                and regulations. You may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>Reverse engineer or decompile our applications</li>
                <li>Use our apps for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of our services</li>
                <li>Redistribute or sublicense our apps without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. In-App Purchases</h2>
              <p className="text-muted leading-relaxed">
                Some of our apps offer in-app purchases. All purchases are
                processed through the Apple App Store and are subject to
                Apple&apos;s terms and conditions. Refund requests should be
                directed to Apple.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Advertising</h2>
              <p className="text-muted leading-relaxed">
                Many of our apps are free and supported by advertising. By using
                our free apps, you agree to the display of advertisements. You
                may remove ads through in-app purchases where this option is
                available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-muted leading-relaxed">
                All content, design, graphics, and code within our applications
                are the intellectual property of Kinexapps and are protected by
                copyright and other intellectual property laws. The Kinexapps
                name, logo, and all related names, logos, and product names are
                trademarks of Kinexapps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-muted leading-relaxed">
                Our apps are provided &quot;as is&quot; and &quot;as
                available&quot; without any warranties of any kind, either
                express or implied. We do not guarantee that our apps will be
                error-free, secure, or continuously available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted leading-relaxed">
                To the maximum extent permitted by law, Kinexapps shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use
                our applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting.
                Continued use of our apps after any changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with
                the laws of Australia, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
              <p className="text-muted leading-relaxed">
                For questions about these Terms, please contact us:
              </p>
              <div className="mt-4 p-6 bg-card-bg border border-card-border rounded-xl">
                <p className="font-semibold mb-1">Kinexapps</p>
                <p className="text-muted">
                  Email:{" "}
                  <a
                    href="mailto:support@kinexapps.com"
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    support@kinexapps.com
                  </a>
                </p>
                <p className="text-muted">Location: Melbourne, Australia</p>
              </div>
            </section>

            <div className="pt-8 border-t border-card-border">
              <Link
                href="/"
                className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
