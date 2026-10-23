"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMinus,
  FiPlus,
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

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

function ZoomLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null,
  );
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const clampScale = (s: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s));

  const pinchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const a = touches[0];
    const b = touches[1];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (scale <= 1) return;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    setOffset({
      x: dragRef.current.ox + (e.clientX - dragRef.current.x),
      y: dragRef.current.oy + (e.clientY - dragRef.current.y),
    });
  };

  const onPointerUp = () => {
    dragRef.current = null;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = { dist: pinchDistance(e.touches), scale };
    } else if (e.touches.length === 1 && scale > 1) {
      const t = e.touches[0];
      dragRef.current = { x: t.clientX, y: t.clientY, ox: offset.x, oy: offset.y };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      e.preventDefault();
      const dist = pinchDistance(e.touches);
      if (!dist || !pinchRef.current.dist) return;
      const ratio = dist / pinchRef.current.dist;
      setScale(clampScale(pinchRef.current.scale * ratio));
      return;
    }
    if (e.touches.length === 1 && dragRef.current) {
      e.preventDefault();
      const t = e.touches[0];
      setOffset({
        x: dragRef.current.ox + (t.clientX - dragRef.current.x),
        y: dragRef.current.oy + (t.clientY - dragRef.current.y),
      });
    }
  };

  const onTouchEnd = () => {
    pinchRef.current = null;
    dragRef.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => clampScale(s + (e.deltaY < 0 ? 0.15 : -0.15)));
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-[#1a1614]/95"
      role="dialog"
      aria-modal="true"
      aria-label="Zoomed product image"
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <p className="text-sm text-[#e5e1dc]">Pinch or use + / − to zoom · drag when zoomed</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setScale((s) => clampScale(s - 0.25))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#faf9f7]/10 text-[#faf9f7]"
            aria-label="Zoom out"
          >
            <FiMinus className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => clampScale(s + 0.25))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#faf9f7]/10 text-[#faf9f7]"
            aria-label="Zoom in"
          >
            <FiPlus className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#faf9f7]/10 text-[#faf9f7]"
            aria-label="Close zoom"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="absolute inset-0 -z-10"
        aria-label="Close zoom"
        onClick={onClose}
      />

      <div
        className="relative min-h-0 flex-1 touch-none overflow-hidden"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        style={{ cursor: scale > 1 ? "grab" : "zoom-in" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative h-[min(85vh,720px)] w-[min(92vw,720px)]"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              transition: dragRef.current ? "none" : "transform 0.15s ease-out",
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
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
      className="group relative h-full w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={onMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes="(max-width: 768px) 100vw, 896px"
        className={`object-contain object-center p-2 transition-opacity sm:p-4 ${
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
        onClick={onOpenLightbox}
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

      {lightboxOpen && currentSlide?.type === "image" && (
        <ZoomLightbox
          src={currentSlide.src}
          alt={`${altBase} zoomed view`}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default ImageSlider;
