import Link from "next/link";
import Image from "next/image";
import React from "react";

const CraftStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        className="grid overflow-hidden lg:grid-cols-2"
        style={{ background: "var(--leather)" }}
      >
        <div className="relative min-h-[320px]">
          <Image
            src="/images/IMG_20250501_115816_569.webp"
            alt="Hilyah leather craftsmanship"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-12 text-[#faf9f7] sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
            Authenticity you can feel
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            Real leather. Real workshop. Real people behind every order.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#e5e1dc] sm:text-base">
            Hilyah is a Pakistan-based leather brand. We craft bifolds, trifolds,
            card holders, and gifts from full-grain leather — then ship with
            cash on delivery across Pakistan.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[#e5e1dc]">
            <li>• Full-grain leather that gets better with age</li>
            <li>• Every wallet checked before it ships</li>
            <li>• Easy exchange if something isn&apos;t right</li>
            <li>• Clear returns, privacy, and shipping policies</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-md bg-[#faf9f7] px-5 py-2.5 text-sm font-semibold text-[var(--leather)] transition hover:bg-[var(--bg)]"
            >
              Read our story
            </Link>
            <Link
              href="/policy"
              className="rounded-md border border-[#faf9f7]/40 px-5 py-2.5 text-sm font-semibold text-[#faf9f7] transition hover:bg-white/10"
            >
              View policies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftStory;
