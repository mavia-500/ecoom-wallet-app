declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __hilyahMetaFired?: Set<string>;
    __hilyahPixelInit?: boolean;
  }
}

type MetaEventParams = Record<string, string | number | string[] | undefined>;

type TrackOptions = {
  /** Meta eventID for deduplication (use the same ID on Pixel + CAPI). */
  eventID?: string;
};

function firedSet() {
  if (typeof window === "undefined") return null;
  if (!window.__hilyahMetaFired) window.__hilyahMetaFired = new Set();
  return window.__hilyahMetaFired;
}

/** Fire a Meta Pixel event; retries briefly if the script is still loading. */
export function trackMetaEvent(
  event: string,
  params?: MetaEventParams,
  options?: TrackOptions,
) {
  if (typeof window === "undefined") return;

  const eventID = options?.eventID;
  const dedupeKey = eventID ? `${event}:${eventID}` : null;
  const fired = firedSet();

  if (dedupeKey && fired?.has(dedupeKey)) return;

  const fire = () => {
    if (!window.fbq) return false;
    if (dedupeKey && fired?.has(dedupeKey)) return true;

    if (eventID) {
      window.fbq("track", event, params ?? {}, { eventID });
    } else {
      window.fbq("track", event, params);
    }

    if (dedupeKey) fired?.add(dedupeKey);
    return true;
  };

  if (fire()) return;

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (fire() || attempts >= 40) window.clearInterval(id);
  }, 500);
}
