import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kinexapps Privacy Policy — How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-accent text-[12px] font-semibold uppercase tracking-wider mb-4">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-[14px] text-muted-strong">Last updated: February 26, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div className="p-6 rounded-2xl border border-border bg-white text-[14px] text-muted leading-relaxed shadow-sm">
            <strong className="text-foreground">Kinexapps (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)</strong> is
            committed to protecting the privacy of our users. This Privacy Policy explains
            how we collect, use, and protect your information when you use our mobile applications.
          </div>

          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="mb-3">The type of information we collect depends on the specific app you use:</p>
                  <p className="font-medium text-foreground mb-1">Apps That Collect No Data</p>
                  <p className="mb-3">ABC Kids — Learn &amp; Play does not collect any personal data. It operates entirely offline.</p>
                  <p className="font-medium text-foreground mb-1">Apps With Advertising</p>
                  <p className="mb-2">Some apps display advertisements via third-party ad networks which may collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Device identifiers (IDFA/IDFV)</li>
                    <li>General location data (country/region level)</li>
                    <li>App usage and interaction data</li>
                    <li>Device type, OS version, and language</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. How We Use Information",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Advertising:</strong> To display relevant ads in free apps</li>
                  <li><strong className="text-foreground">Analytics:</strong> To understand usage and improve experience</li>
                  <li><strong className="text-foreground">App Functionality:</strong> Features like leaderboards and progress tracking</li>
                </ul>
              ),
            },
            {
              title: "3. Third-Party Services",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">Google AdMob</strong> — Serving advertisements</li>
                  <li><strong className="text-foreground">Apple App Analytics</strong> — App performance</li>
                  <li><strong className="text-foreground">Firebase</strong> — App functionality and analytics</li>
                </ul>
              ),
            },
            {
              title: "4. Children's Privacy",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not knowingly collect personal information from children under 13</li>
                  <li>Children&apos;s apps minimize or eliminate data collection</li>
                  <li>We comply with COPPA and applicable children&apos;s privacy laws</li>
                  <li>Data discovered from a child under 13 will be deleted promptly</li>
                </ul>
              ),
            },
            {
              title: "5. Data Security",
              content: (
                <p>We implement appropriate security measures to protect information collected through
                our apps. No method of electronic transmission or storage is 100% secure.</p>
              ),
            },
            {
              title: "6. Your Rights",
              content: (
                <ul className="list-disc pl-5 space-y-1">
                  <li>Request access to personal data we hold</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of personalized advertising via device settings</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              ),
            },
            {
              title: "7. Changes to This Policy",
              content: (
                <p>We may update this Privacy Policy from time to time. Changes will be reflected
                in the &ldquo;Last Updated&rdquo; date above.</p>
              ),
            },
            {
              title: "8. Contact Us",
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
              <div className="text-[14px] text-muted leading-relaxed">{section.content}</div>
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
