"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { homeFaqs } from "@/data/faqs";

const HomeFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Common questions
        </h2>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Quick answers before you order — or message us anytime.
        </p>
      </div>

      <div className="mt-8 space-y-2">
        {homeFaqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.q}
              className="bg-[var(--surface)]"
              style={{ border: "1px solid var(--line)" }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-medium text-[var(--ink)]">{item.q}</span>
                <FiChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[var(--cognac)] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p
                  className="border-t px-4 pb-4 pt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:px-5"
                  style={{ borderColor: "var(--line)" }}
                >
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/923285478737?text=Hello%2C%20I%20have%20a%20question%20about%20ordering"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-md px-5 py-2.5 text-sm"
        >
          Ask on WhatsApp
        </a>
        <Link href="/policy" className="btn-secondary rounded-md px-5 py-2.5 text-sm">
          Read policies
        </Link>
      </div>
    </section>
  );
};

export default HomeFAQ;
