"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/kinexapps-logo.png"
            alt="Kinexapps"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-white bg-foreground px-5 py-2 rounded-full hover:bg-foreground/90 transition-all hover:shadow-md"
          >
            App Store
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted hover:text-foreground rounded-lg hover:bg-surface transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] text-muted hover:text-foreground transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[13px] font-semibold text-white bg-foreground px-5 py-2.5 rounded-full"
            >
              App Store
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
