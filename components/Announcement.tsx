import React from "react";

const Announcement = () => {
  const announcements = [
    "Cash on Delivery across Pakistan",
    "Ships in 3–4 working days via TCS & Leopard",
    "Lifetime warranty on leather",
    "7-day easy return & exchange",
  ];

  const loop = [...announcements, ...announcements];

  return (
    <div
      className="overflow-hidden py-2.5 text-[13px] tracking-wide text-[#faf9f7]"
      style={{ background: "var(--leather)" }}
    >
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {loop.map((announcement, index) => (
          <span key={`${announcement}-${index}`} className="mx-8 inline-flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[var(--cognac)]" aria-hidden />
            {announcement}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
