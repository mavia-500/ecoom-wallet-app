"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSliderProps {
  images: string[];
  productTitle?: string;
}

const ImageSlider = ({ images, productTitle }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const safeImages = images?.length ? images : [];

  if (!safeImages.length) {
    return (
      <div className="flex h-64 items-center justify-center bg-[var(--bg-deep)] text-sm text-[var(--ink-soft)]">
        No image available
      </div>
    );
  }

  const goPrev = () =>
    setCurrentIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % safeImages.length);
  const altBase = productTitle || "Hilyah leather wallet";

  return (
    <div className="w-full">
      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[var(--bg-deep)] sm:min-h-[420px]">
        <div className="relative h-[min(70vh,560px)] w-full">
          <Image
            src={safeImages[currentIndex]}
            alt={`${altBase} — photo ${currentIndex + 1} of ${safeImages.length}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain object-center p-2 sm:p-4"
          />
        </div>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow"
              aria-label="Previous image"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
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
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-[var(--bg-deep)] transition ${
                currentIndex === index
                  ? "ring-2 ring-[var(--cognac)]"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`View photo ${index + 1} of ${altBase}`}
            >
              <Image
                src={imageUrl}
                alt=""
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
