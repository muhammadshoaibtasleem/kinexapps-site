"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, X } from "lucide-react";

export default function StickyQuoteButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2 animate-in delay-1">
      <button
        onClick={() => setDismissed(true)}
        className="p-1.5 rounded-full bg-white border border-border text-muted hover:text-foreground transition-colors shadow-sm"
        aria-label="Dismiss"
      >
        <X className="w-3 h-3" />
      </button>
      <Link
        href="/contact?subject=quote"
        className="inline-flex items-center gap-2.5 px-5 py-3 bg-foreground text-white text-[13px] font-semibold rounded-full shadow-xl shadow-foreground/20 hover:bg-foreground/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
      >
        <MessageSquare className="w-4 h-4" />
        Get a free quote
      </Link>
    </div>
  );
}
