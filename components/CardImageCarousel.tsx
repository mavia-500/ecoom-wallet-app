"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type CardImageCarouselProps = {
  images: string[];
  alt: string;
  href: string;
  sizes?: string;
  badge?: React.ReactNode;
};

export default function CardImageCarousel({
  images,
  alt,
  href,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw",
  badge,
}: CardImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const gallery = images?.length ? images : [];

  if (!gallery.length) {
    return (
      <div className="relative aspect-[4/5] w-full bg-[var(--bg-deep)]" />
    );
  }

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(index, gallery.length - 1));
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setActiveIndex(next);
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-deep)]">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((src, index) => (
          <Link
            key={`${src}-${index}`}
            href={href}
            className="relative h-full w-full flex-none snap-center"
            aria-label={`${alt} photo ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} — leather product photo ${index + 1}`}
              fill
              sizes={sizes}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover object-center"
              draggable={false}
            />
          </Link>
        ))}
      </div>

      {badge}

      {gallery.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.preventDefault();
              scrollToIndex(activeIndex - 1);
            }}
            className="absolute left-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow sm:flex"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.preventDefault();
              scrollToIndex(activeIndex + 1);
            }}
            className="absolute right-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow sm:flex"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
          <div className="pointer-events-none absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
            {gallery.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === activeIndex
                    ? "bg-[var(--cognac)]"
                    : "bg-[var(--surface)]/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
