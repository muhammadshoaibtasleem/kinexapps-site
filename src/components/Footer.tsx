import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f23] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-white">
                Kinexapps
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Crafting innovative mobile experiences that educate, entertain, and
              empower users worldwide. Based in Australia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-lg text-sm text-white hover:bg-white/20 transition-colors"
              >
                App Store
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#apps", label: "Our Apps" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Apps */}
          <div>
            <h3 className="text-white font-semibold mb-5">Our Apps</h3>
            <ul className="space-y-3">
              {[
                { href: "/apps/snapfix", label: "SnapFix" },
                { href: "/apps/theory-elite", label: "Theory Elite" },
                { href: "/apps/abc-kids", label: "ABC Kids" },
                { href: "/apps/laser-maze", label: "Laser Maze" },
                { href: "/apps/rollscape", label: "Rollscape" },
                { href: "/apps/orb-galaxy", label: "Orb Galaxy Sort" },
                { href: "/apps/color-ball-drop", label: "Color Ball Drop 3D" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-5">Legal</h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/contact", label: "Support" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Kinexapps. All rights reserved.
          </p>
          <p className="text-xs">
            Developer:{" "}
            <a
              href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Muhammad Talseem
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
