"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-sm font-bold">K</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Kinexapps
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-background bg-foreground px-4 py-1.5 rounded-full hover:bg-foreground/90 transition-colors"
          >
            App Store
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-muted hover:text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[14px] text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[13px] font-medium text-background bg-foreground px-4 py-2 rounded-full"
            >
              App Store
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
