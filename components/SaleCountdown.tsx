"use client";

import React, { useEffect, useState } from "react";

function getEndOfSale() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SaleCountdown() {
  const [remaining, setRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, getEndOfSale() - Date.now());
      setRemaining({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="mr-1 text-xs uppercase tracking-wider text-[#c9c2b8]">
        Ends in
      </span>
      {[
        { label: "Hrs", value: remaining.hours },
        { label: "Min", value: remaining.minutes },
        { label: "Sec", value: remaining.seconds },
      ].map((unit, i) => (
        <React.Fragment key={unit.label}>
          {i > 0 && (
            <span className="text-lg font-semibold text-[#faf9f7]">:</span>
          )}
          <div className="min-w-[3.25rem] bg-[#faf9f7] px-2 py-2 text-center text-[var(--leather)]">
            <p className="font-display text-xl font-bold leading-none sm:text-2xl">
              {pad(unit.value)}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide opacity-70">
              {unit.label}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
