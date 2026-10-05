"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks for subscribing!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <h3 className="font-display text-lg font-semibold text-[#faf9f7]">
        Subscribe to our newsletter
      </h3>
      <p className="mt-1.5 text-sm text-[#c9c2b8]">
        Sale alerts and new drops. No spam.
      </p>
      <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="min-w-0 w-full rounded-md border border-[#faf9f7]/25 bg-[#faf9f7] px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)] focus:border-[var(--cognac)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-[#faf9f7] px-5 py-2.5 text-sm font-semibold text-[var(--leather)] transition hover:bg-[var(--bg)] disabled:opacity-70"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "error" ? "text-red-300" : "text-[#f0eeec]"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  );
}
