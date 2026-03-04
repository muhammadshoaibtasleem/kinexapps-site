"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

// ──────────────────────────────────────────────────────────────
// HOW TO ACTIVATE:
// 1. Go to https://web3forms.com  (free — no sign-up required)
// 2. Enter your email → you'll get an access key instantly
// 3. Replace the placeholder below with your real key
// ──────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "26f1a5c6-06b5-4519-9910-375ad32e376a";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get("subject") === "quote" ? "quote" : "general";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("from_name", "Kinexapps Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="p-8 rounded-2xl border border-border bg-white shadow-sm flex flex-col items-center justify-center text-center py-16">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Message sent!</h3>
        <p className="text-[14px] text-muted max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-semibold text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Send a message</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="subject" value="New message from Kinexapps contact form" />
        <div>
          <label htmlFor="name" className="block text-[13px] text-muted font-medium mb-2">Name</label>
          <input
            type="text" id="name" name="name" required
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted-strong"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] text-muted font-medium mb-2">Email</label>
          <input
            type="email" id="email" name="email" required
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted-strong"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="topic" className="block text-[13px] text-muted font-medium mb-2">Subject</label>
          <select
            id="topic" name="topic"
            defaultValue={defaultSubject}
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
          >
            <option value="general">General Inquiry</option>
            <option value="quote">Get a Quote — App Development</option>
            <option value="support">App Support</option>
            <option value="feedback">Feedback</option>
            <option value="business">Business Inquiry</option>
            <option value="bug">Bug Report</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-[13px] text-muted font-medium mb-2">Message</label>
          <textarea
            id="message" name="message" rows={5} required
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 text-foreground text-[14px] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none placeholder:text-muted-strong"
            placeholder="How can we help?"
          />
        </div>

        {status === "error" && (
          <p className="text-[13px] text-rose-600 bg-rose-50 px-4 py-2.5 rounded-xl">
            Something went wrong. Please try again or email us directly at{" "}
            <a href="mailto:support@kinexapps.com" className="underline">support@kinexapps.com</a>.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 bg-foreground text-white text-[14px] font-semibold rounded-xl hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 rounded-2xl border border-border bg-white shadow-sm animate-pulse">
          <div className="h-6 w-40 bg-surface rounded mb-6" />
          <div className="space-y-5">
            <div className="h-12 bg-surface rounded-xl" />
            <div className="h-12 bg-surface rounded-xl" />
            <div className="h-12 bg-surface rounded-xl" />
            <div className="h-28 bg-surface rounded-xl" />
            <div className="h-12 bg-surface rounded-xl" />
          </div>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
