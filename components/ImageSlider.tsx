"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSliderProps {
  images: string[];
  productTitle?: string;
}

const ImageSlider = ({ images, productTitle }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const safeImages = images?.length ? images : [];
  const altBase = productTitle || "Hilyah leather wallet";

  useEffect(() => {
    setCurrentIndex(0);
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [safeImages.join("|")]);

  if (!safeImages.length) {
    return (
      <div className="flex h-64 items-center justify-center bg-[var(--bg-deep)] text-sm text-[var(--ink-soft)]">
        No image available
      </div>
    );
  }

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = (index + safeImages.length) % safeImages.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setCurrentIndex(next);
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    setCurrentIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-[var(--bg-deep)]">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {safeImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-[min(70vh,560px)] w-full min-w-full flex-none snap-center"
            >
              <Image
                src={src}
                alt={`${altBase} — leather product photo ${index + 1} of ${safeImages.length}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain object-center p-2 sm:p-4"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow"
              aria-label="Previous image"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow"
              aria-label="Next image"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
            <p className="absolute bottom-3 right-3 z-10 rounded bg-[var(--leather)]/80 px-2 py-1 text-xs text-[#faf9f7]">
              {currentIndex + 1} / {safeImages.length}
            </p>
          </>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-3">
          {safeImages.map((imageUrl, index) => (
            <button
              key={`${imageUrl}-${index}`}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-[var(--bg-deep)] transition ${
                currentIndex === index
                  ? "ring-2 ring-[var(--cognac)]"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`View photo ${index + 1} of ${altBase}`}
            >
              <Image
                src={imageUrl}
                alt={`${altBase} thumbnail ${index + 1} of ${safeImages.length}`}
                fill
                sizes="64px"
                loading="lazy"
                className="object-contain p-0.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
