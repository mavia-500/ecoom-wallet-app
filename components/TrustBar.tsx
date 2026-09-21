import React from "react";

const items = [
  {
    title: "Fast delivery",
    detail: "3–4 working days nationwide",
    path: "M3 12h13l4 4V8l-4 4H3zm13 0v8",
  },
  {
    title: "Cash on delivery",
    detail: "Pay when you receive",
    path: "M4 7h16v10H4V7zm2 3h4m6 0h2M6 14h8",
  },
  {
    title: "7-day returns",
    detail: "Easy exchange policy",
    path: "M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M16 4v4h4M8 20v-4H4",
  },
  {
    title: "WhatsApp support",
    detail: "Real people, real help",
    path: "M5 12a7 7 0 1012.1 4.9L19 19l-2.2-1.1A7 7 0 015 12zm4 0h.01M12 12h.01M15 12h.01",
  },
  {
    title: "Leather warranty",
    detail: "Lifetime on craftsmanship",
    path: "M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z",
  },
];

const TrustBar = () => {
  return (
    <section
      className="border-y"
      style={{ background: "var(--surface)", borderColor: "var(--line)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-8 sm:grid-cols-3 md:grid-cols-5 sm:px-6">
        {items.map(({ title, detail, path }) => (
          <div
            key={title}
            className="flex flex-col items-center px-2 py-3 text-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-2 h-8 w-8 text-[var(--cognac)] sm:h-9 sm:w-9"
              aria-hidden
            >
              <path d={path} />
            </svg>
            <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
            <p className="mt-1 text-xs text-[var(--ink-soft)]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
