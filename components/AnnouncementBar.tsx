const announcements = [
  { title: "Fast delivery", detail: "3–4 working days nationwide" },
  { title: "Cash on delivery", detail: "Pay when you receive" },
  { title: "7-day returns", detail: "Easy exchange policy" },
  { title: "WhatsApp support", detail: "Real people, real help" },
  { title: "Leather warranty", detail: "Lifetime on craftsmanship" },
];

export default function AnnouncementBar() {
  const items = [...announcements, ...announcements];

  return (
    <div
      className="overflow-hidden border-b text-[#faf9f7]"
      style={{ background: "var(--leather)", borderColor: "rgba(250,249,247,0.12)" }}
      role="region"
      aria-label="Store announcements"
    >
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <p
            key={`${item.title}-${index}`}
            className="flex flex-shrink-0 items-center gap-2 px-6 py-2 text-xs sm:text-sm"
          >
            <span className="font-semibold tracking-wide">{item.title}</span>
            <span className="text-[#c9c2b8]">— {item.detail}</span>
            <span className="ml-4 text-[var(--cognac)]" aria-hidden>
              •
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
