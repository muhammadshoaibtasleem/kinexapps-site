import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kinexapps Privacy Policy — Learn how we handle your data across all our apps.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0a0a2e]">
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
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
                <strong className="text-foreground">
                  Kinexapps (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                </strong>{" "}
                is committed to protecting the privacy of our users. This
                Privacy Policy explains how we collect, use, and protect your
                information when you use our mobile applications.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                The type of information we collect depends on the specific app
                you use:
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Apps That Collect No Data
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                <strong>ABC Kids - Learn &amp; Play</strong> does not collect any
                personal data whatsoever. It is designed for children and
                operates entirely offline with no data transmission.
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Apps With Advertising
              </h3>
              <p className="text-muted leading-relaxed">
                Some of our apps (such as Laser Maze, Rollscape, Orb Galaxy
                Sort, Color Ball Drop 3D, and SnapFix) display advertisements
                provided by third-party ad networks. These networks may collect:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>Device identifiers (IDFA/IDFV)</li>
                <li>General location data (country/region level)</li>
                <li>App usage and interaction data</li>
                <li>Device type, OS version, and language</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Information
              </h2>
              <p className="text-muted leading-relaxed">
                Where data is collected, it is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>
                  <strong>Advertising:</strong> To display relevant
                  advertisements within our free apps
                </li>
                <li>
                  <strong>Analytics:</strong> To understand how our apps are used
                  and improve user experience
                </li>
                <li>
                  <strong>App Functionality:</strong> To provide features such as
                  leaderboards and progress tracking (Theory Elite)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Third-Party Services
              </h2>
              <p className="text-muted leading-relaxed">
                Our apps may use the following third-party services that have
                their own privacy policies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>
                  <strong>Google AdMob</strong> — For serving advertisements
                </li>
                <li>
                  <strong>Apple App Analytics</strong> — For understanding app
                  performance
                </li>
                <li>
                  <strong>Firebase</strong> — For app functionality and analytics
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Children&apos;s Privacy
              </h2>
              <p className="text-muted leading-relaxed">
                We take children&apos;s privacy very seriously. Our apps designed
                for children (ABC Kids - Learn &amp; Play, Color Ball Drop 3D)
                are built with child safety in mind:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>
                  We do not knowingly collect personal information from children
                  under 13
                </li>
                <li>
                  Our children&apos;s apps minimize or eliminate data collection
                </li>
                <li>
                  We comply with applicable children&apos;s privacy laws
                  including COPPA
                </li>
                <li>
                  If we discover we have collected data from a child under 13, we
                  will delete it promptly
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted leading-relaxed">
                We implement appropriate security measures to protect any
                information collected through our apps. However, no method of
                electronic transmission or storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-muted">
                <li>
                  Request access to any personal data we hold about you
                </li>
                <li>Request deletion of your personal data</li>
                <li>
                  Opt out of personalized advertising (through your device
                  settings)
                </li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify users of any material changes by updating the &quot;Last
                Updated&quot; date at the top of this page. We encourage you to
                review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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
                <p className="text-muted mt-2">
                  Developer:{" "}
                  <a
                    href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    Muhammad Talseem
                  </a>
                </p>
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
