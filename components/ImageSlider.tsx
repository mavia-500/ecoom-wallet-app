"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiX,
  FiZoomIn,
} from "react-icons/fi";
import ProductVideo from "./ProductVideo";

interface ImageSliderProps {
  images: string[];
  productTitle?: string;
  /** One path or many — each loads only after the user taps play. */
  video?: string | string[];
}

type Slide =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster: string };

function ZoomLightbox({
  images,
  index,
  onIndexChange,
  altBase,
  onClose,
}: {
  images: string[];
  index: number;
  onIndexChange: (index: number) => void;
  altBase: string;
  onClose: () => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const count = images.length;
  const safeIndex = Math.min(Math.max(index, 0), Math.max(count - 1, 0));
  const canPrev = safeIndex > 0;
  const canNext = safeIndex < count - 1;

  const goTo = useCallback(
    (next: number, smooth = true) => {
      if (count <= 0) return;
      const clamped = Math.min(Math.max(next, 0), count - 1);
      const el = scrollerRef.current;
      if (el) {
        el.scrollTo({
          left: clamped * el.clientWidth,
          behavior: smooth ? "smooth" : "auto",
        });
      }
      onIndexChange(clamped);
    },
    [count, onIndexChange],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: safeIndex * el.clientWidth, behavior: "auto" });
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && canPrev) goTo(safeIndex - 1);
      if (e.key === "ArrowRight" && canNext) goTo(safeIndex + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, goTo, safeIndex, canPrev, canNext]);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    if (next !== safeIndex && next >= 0 && next < count) {
      onIndexChange(next);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-[#1a1614]"
      role="dialog"
      aria-modal="true"
      aria-label="Product image gallery"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-medium text-[#faf9f7]">
          {safeIndex + 1} / {count}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#faf9f7]/15 text-[#faf9f7]"
          aria-label="Close gallery"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full w-full min-w-full flex-none snap-center px-2"
            >
              <div className="relative mx-auto h-full w-full max-w-3xl">
                <Image
                  src={src}
                  alt={`${altBase} photo ${i + 1} of ${count}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={i === safeIndex || Math.abs(i - safeIndex) <= 1}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              disabled={!canPrev}
              onClick={() => goTo(safeIndex - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#faf9f7]/90 text-[#1a1614] shadow disabled:pointer-events-none disabled:opacity-30 sm:left-4"
              aria-label="Previous image"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              disabled={!canNext}
              onClick={() => goTo(safeIndex + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#faf9f7]/90 text-[#1a1614] shadow disabled:pointer-events-none disabled:opacity-30 sm:right-4"
              aria-label="Next image"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto px-4 py-3">
          {images.map((src, i) => (
            <button
              key={`lb-thumb-${src}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded bg-[#faf9f7]/10 transition ${
                i === safeIndex
                  ? "ring-2 ring-[#faf9f7]"
                  : "opacity-55 hover:opacity-100"
              }`}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === safeIndex ? "true" : undefined}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="56px"
                className="object-contain p-0.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ZoomableSlide({
  src,
  alt,
  priority,
  onOpenLightbox,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  onOpenLightbox: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      ref={containerRef}
      role="button"
      tabIndex={0}
      className="group relative h-full w-full cursor-zoom-in"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={onMove}
      onClick={onOpenLightbox}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenLightbox();
        }
      }}
      aria-label={`Open full view of ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        unoptimized={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes="(max-width: 768px) 100vw, 896px"
        className={`pointer-events-none object-contain object-center p-2 transition-opacity sm:p-4 ${
          hovering ? "md:opacity-0" : ""
        }`}
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-2 hidden overflow-hidden sm:inset-4 md:block"
        style={{
          opacity: hovering ? 1 : 0,
          backgroundImage: hovering ? `url(${src})` : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: "220%",
          backgroundPosition: `${pos.x}% ${pos.y}%`,
        }}
        aria-hidden
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpenLightbox();
        }}
        className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-md bg-[var(--leather)]/85 px-2.5 py-1.5 text-xs font-medium text-[#faf9f7] shadow sm:text-sm"
        aria-label="Open zoom view"
      >
        <FiZoomIn className="h-4 w-4" aria-hidden />
        Zoom
      </button>
    </div>
  );
}

const ImageSlider = ({ images, productTitle, video }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const safeImages = images?.length ? images : [];
  const altBase = productTitle || "Hilyah leather wallet";
  const videoKey = Array.isArray(video) ? video.join("|") : video ?? "";
  const videoList = useMemo(() => {
    if (!videoKey) return [] as string[];
    return videoKey.split("|").filter(Boolean);
  }, [videoKey]);

  const slides: Slide[] = useMemo(() => {
    const imageSlides: Slide[] = safeImages.map((src) => ({
      type: "image",
      src,
    }));
    if (safeImages[0] && videoList.length) {
      videoList.forEach((src, i) => {
        imageSlides.push({
          type: "video",
          src,
          poster: safeImages[Math.min(i, safeImages.length - 1)] ?? safeImages[0],
        });
      });
    }
    return imageSlides;
  }, [safeImages.join("|"), videoList.join("|")]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    setCurrentIndex(0);
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [safeImages.join("|"), videoList.join("|")]);

  if (!slides.length) {
    return (
      <div className="flex h-64 items-center justify-center bg-[var(--bg-deep)] text-sm text-[var(--ink-soft)]">
        No image available
      </div>
    );
  }

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = (index + slides.length) % slides.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setCurrentIndex(next);
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    setCurrentIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const currentSlide = slides[currentIndex];
  const imageCount = safeImages.length;

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-[var(--bg-deep)]">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={
                slide.type === "image"
                  ? `img-${slide.src}-${index}`
                  : `vid-${slide.src}`
              }
              className="relative h-[min(42vh,340px)] w-full min-w-full flex-none snap-center sm:h-[min(65vh,520px)]"
            >
              {slide.type === "image" ? (
                <ZoomableSlide
                  src={slide.src}
                  alt={`${altBase} leather product photo ${index + 1} of ${imageCount}`}
                  priority={index === 0}
                  onOpenLightbox={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                />
              ) : (
                <ProductVideo
                  src={slide.src}
                  poster={slide.poster}
                  title={altBase}
                  active={currentIndex === index}
                />
              )}
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow"
              aria-label="Previous media"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)]/90 text-[var(--ink)] shadow"
              aria-label="Next media"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
            <p className="absolute bottom-3 right-3 z-10 rounded bg-[var(--leather)]/80 px-2 py-1 text-xs text-[#faf9f7]">
              {currentIndex + 1} / {slides.length}
            </p>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-2.5 sm:p-3">
          {slides.map((slide, index) => {
            const thumbSrc =
              slide.type === "image" ? slide.src : slide.poster;
            return (
              <button
                key={
                  slide.type === "image"
                    ? `thumb-img-${slide.src}-${index}`
                    : `thumb-vid-${slide.src}`
                }
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-[var(--bg-deep)] transition sm:h-16 sm:w-16 ${
                  currentIndex === index
                    ? "ring-2 ring-[var(--cognac)]"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={
                  slide.type === "video"
                    ? `View video of ${altBase}`
                    : `View photo ${index + 1} of ${altBase}`
                }
              >
                <Image
                  src={thumbSrc}
                  alt=""
                  fill
                  sizes="64px"
                  loading="lazy"
                  className="object-contain p-0.5"
                />
                {slide.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <FiPlay className="h-5 w-5 text-white" aria-hidden />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {lightboxOpen &&
        currentSlide?.type === "image" &&
        safeImages.length > 0 &&
        currentIndex < safeImages.length && (
          <ZoomLightbox
            images={safeImages}
            index={currentIndex}
            altBase={altBase}
            onClose={closeLightbox}
            onIndexChange={(next) => {
              setCurrentIndex(next);
              const el = scrollerRef.current;
              if (el) {
                el.scrollTo({ left: next * el.clientWidth });
              }
            }}
          />
        )}
    </div>
  );
};

export default ImageSlider;
