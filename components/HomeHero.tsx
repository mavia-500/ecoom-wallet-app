import Image from "next/image";
import QuickShop from "@/components/QuickShop";

/** Static home hero (no client JS) keeps Total Blocking Time low on mobile. */
export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1614]">
      <div className="relative min-h-[min(42vh,360px)] w-full sm:h-[min(58vh,540px)] sm:min-h-0">
        <Image
          src="/images/wem.webp"
          alt="genuine leather bifold wallet in pocket homepage hero"
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover object-center sm:object-contain"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,22,20,0.55) 0%, rgba(26,22,20,0.25) 35%, rgba(26,22,20,0.4) 55%, rgba(26,22,20,0.92) 100%)",
          }}
        />

        {/* Mobile: top + center in flow (never clipped) · Desktop: bottom + left */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-4 pt-5 text-center sm:absolute sm:inset-x-0 sm:bottom-0 sm:top-auto sm:items-start sm:px-6 sm:pb-4 sm:pt-10 sm:text-left lg:px-8">
          <h1 className="font-display text-3xl font-semibold tracking-wide text-[#faf9f7] sm:text-5xl md:text-6xl">
            Hilyah
          </h1>
          <p className="mt-1 max-w-xl text-xs text-[#f0eeec] sm:mt-1.5 sm:text-base">
            Genuine leather wallets, made to last a lifetime.
          </p>

          <div className="mt-2 w-full sm:mt-3">
            <QuickShop overlay />
          </div>
        </div>
      </div>
    </section>
  );
}
