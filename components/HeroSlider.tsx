"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    title: "Hilyah",
    subtitle: "Genuine leather wallets, made to last a lifetime.",
    cta: "Shop wallets",
    href: "/bifoldwallet",
    image: "/images/wem.webp",
    alt: "genuine leather bifold wallet in pocket — homepage hero",
  },
  {
    title: "Hilyah",
    subtitle: "Full-grain leather. Careful stitching. Cash on delivery.",
    cta: "Explore collections",
    href: "/trifoldwallet",
    image: "/images/ad.webp",
    alt: "full-grain leather trifold wallet — homepage hero",
  },
  {
    title: "Hilyah",
    subtitle: "Gifts that feel personal — for him, from Pakistan.",
    cta: "Shop gifts",
    href: "/gifts",
    image: "/images/d.webp",
    alt: "leather wallet gift set — homepage hero",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);

  const scrollToIndex = (next: number, smooth = true) => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = (next + heroSlides.length) % heroSlides.length;
    el.scrollTo({
      left: i * el.clientWidth,
      behavior: smooth ? "smooth" : "auto",
    });
    setIndex(i);
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(i);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pauseRef.current) return;
      const el = scrollerRef.current;
      if (!el || !el.clientWidth) return;
      const current = Math.round(el.scrollLeft / el.clientWidth);
      scrollToIndex(current + 1);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full">
      <div
        className="relative w-full overflow-hidden bg-[#1a1614]"
        onTouchStart={() => {
          pauseRef.current = true;
        }}
        onTouchEnd={() => {
          window.setTimeout(() => {
            pauseRef.current = false;
          }, 2500);
        }}
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
      >
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {heroSlides.map((item, i) => (
            <div
              key={item.image}
              className="relative h-[min(56vh,520px)] w-full min-w-full flex-none snap-center"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-contain object-center"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26,22,20,0.2) 0%, rgba(26,22,20,0.45) 50%, rgba(26,22,20,0.88) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-16 sm:px-10 sm:pb-14">
                {i === 0 ? (
                  <h1 className="font-display text-4xl font-semibold tracking-wide text-[#faf9f7] sm:text-5xl md:text-6xl">
                    {item.title}
                  </h1>
                ) : (
                  <p className="font-display text-4xl font-semibold tracking-wide text-[#faf9f7] sm:text-5xl md:text-6xl">
                    {item.title}
                  </p>
                )}
                <p className="mt-3 max-w-xl text-sm text-[#f0eeec] sm:text-base">
                  {item.subtitle}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={item.href}
                    className="btn-primary inline-block rounded-md px-6 py-3 text-sm sm:text-base"
                  >
                    {item.cta}
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block rounded-md border border-[#faf9f7]/60 px-6 py-3 text-sm text-[#faf9f7] transition hover:bg-[#faf9f7]/10 sm:text-base"
                  >
                    Our craft
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => scrollToIndex(index - 1)}
          className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/85 text-2xl leading-none text-[var(--ink)] sm:flex"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => scrollToIndex(index + 1)}
          className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/85 text-2xl leading-none text-[var(--ink)] sm:flex"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-[var(--cognac)]" : "bg-[#faf9f7]/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
