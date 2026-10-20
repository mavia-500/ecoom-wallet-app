"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";

type ProductVideoProps = {
  src: string;
  poster: string;
  title: string;
  /** When false, pause and reset play UI (e.g. user scrolled away). */
  active?: boolean;
};

/**
 * Speed-safe product video for the image scroller:
 * - MP4 downloads only after the user taps play
 * - Poster uses an existing product image
 * - preload="none", no autoplay
 */
export default function ProductVideo({
  src,
  poster,
  title,
  active = true,
}: ProductVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    void videoRef.current?.play().catch(() => {});
  }, [started]);

  useEffect(() => {
    if (active) return;
    const el = videoRef.current;
    if (el) {
      el.pause();
    }
  }, [active]);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStarted(true);
  };

  return (
    <div className="relative h-full w-full bg-black">
      {!started ? (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 z-10 flex items-center justify-center"
          aria-label={`Play video of ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain object-center p-2 sm:p-4"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--leather)] text-[#faf9f7] shadow-lg transition group-hover:scale-105">
            <FiPlay className="ml-0.5 h-7 w-7" aria-hidden />
          </span>
          <span className="absolute bottom-3 left-3 z-10 rounded-md bg-[var(--leather)]/85 px-2.5 py-1.5 text-xs font-medium text-[#faf9f7] sm:text-sm">
            Video
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          controls
          playsInline
          preload="none"
          poster={poster}
          controlsList="nodownload"
          onClick={(e) => e.stopPropagation()}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
