import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Apps: [
    { href: "/apps/snapfix", label: "SnapFix" },
    { href: "/apps/theory-elite", label: "Theory Elite" },
    { href: "/apps/abc-kids", label: "ABC Kids" },
    { href: "/apps/laser-maze", label: "Laser Maze" },
    { href: "/apps/rollscape", label: "Rollscape" },
    { href: "/apps/orb-galaxy", label: "Orb Galaxy Sort" },
    { href: "/apps/color-ball-drop", label: "Color Ball Drop" },
    { href: "/apps/learn-abc", label: "Learn ABC" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/kinexapps-logo.png"
                alt="Kinexapps"
                width={120}
                height={30}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-[13px] text-muted leading-relaxed">
              Australian app studio crafting mobile experiences.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] uppercase tracking-wider text-foreground font-semibold mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-muted-strong">
            &copy; {new Date().getFullYear()} Kinexapps. All rights reserved.
          </p>
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-muted-strong hover:text-muted transition-colors"
          >
            Developer: Muhammad Talseem
          </a>
        </div>
      </div>
    </footer>
  );
}
