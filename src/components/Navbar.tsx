"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#apps", label: "Our Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a1a]/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Kinex</span>
              <span className="text-foreground">apps</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105"
            >
              App Store
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-card-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/au/developer/muhammad-talseem/id1871192120"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 px-5 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-full text-center"
            >
              View on App Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
