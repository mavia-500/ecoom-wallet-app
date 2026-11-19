"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/metaPixel";

const PIXEL_ID = "697594026040202";

/**
 * Original bug (since first install): the Meta base snippet ends with
 *   fbq('init'); fbq('track', 'PageView');
 * outside the `if (f.fbq) return` guard. When Next/React mounts the client
 * script twice, init + PageView run again and Meta shows every event x2.
 *
 * This loader inits the pixel once per tab and never remounts that snippet.
 */
export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__hilyahPixelInit) return;

    const boot = () => {
      if (window.__hilyahPixelInit) return;
      window.__hilyahPixelInit = true;

      if (!window.fbq) {
        const n = function (...args: unknown[]) {
          const self = n as typeof n & {
            callMethod?: (...a: unknown[]) => void;
            queue: unknown[];
            push: typeof n;
            loaded: boolean;
            version: string;
          };
          if (self.callMethod) self.callMethod(...args);
          else self.queue.push(args);
        } as ((...args: unknown[]) => void) & {
          callMethod?: (...a: unknown[]) => void;
          queue: unknown[];
          push: (...args: unknown[]) => void;
          loaded: boolean;
          version: string;
        };
        n.queue = [];
        n.loaded = true;
        n.version = "2.0";
        n.push = n;
        window.fbq = n;
        (window as Window & { _fbq?: typeof window.fbq })._fbq = n;

        if (
          !document.querySelector(
            'script[src*="connect.facebook.net"][src*="fbevents.js"]',
          )
        ) {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://connect.facebook.net/en_US/fbevents.js";
          const first = document.getElementsByTagName("script")[0];
          first?.parentNode?.insertBefore(script, first);
        }
      }

      // Disable Meta autoConfig before init so button-click / estimated Purchase
      // (ob3_plugin-set_ / cs_est) does not duplicate our manual Purchase.
      window.fbq?.("set", "autoConfig", false, PIXEL_ID);
      window.fbq?.("init", PIXEL_ID);
      // Re-assert after init in case fbevents.js resets opt-ins on load.
      window.fbq?.("set", "autoConfig", false, PIXEL_ID);
      // Dedupe key so a Strict Mode remount cannot send PageView twice.
      trackMetaEvent("PageView", undefined, { eventID: "pv:session" });
    };

    // Checkout needs the pixel immediately for Purchase; elsewhere delay for LCP.
    const onCheckout =
      window.location.pathname.startsWith("/placeorder");
    const delayMs = onCheckout ? 0 : 8000;
    const timer = window.setTimeout(boot, delayMs);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
