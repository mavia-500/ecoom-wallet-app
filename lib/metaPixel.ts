declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __hilyahMetaFired?: Set<string>;
    __hilyahPixelInit?: boolean;
  }
}

type MetaEventParams = Record<string, string | number | string[] | undefined>;

type TrackOptions = {
  /** Meta eventID for Pixel ↔ CAPI deduplication. */
  eventID?: string;
};

function firedSet() {
  if (typeof window === "undefined") return null;
  if (!window.__hilyahMetaFired) window.__hilyahMetaFired = new Set();
  return window.__hilyahMetaFired;
}

function stableParamsKey(params?: MetaEventParams) {
  if (!params) return "";
  try {
    return JSON.stringify(params);
  } catch {
    return "";
  }
}

/** Fire a Meta Pixel event; retries briefly if the script is still loading. */
export function trackMetaEvent(
  event: string,
  params?: MetaEventParams,
  options?: TrackOptions,
) {
  if (typeof window === "undefined") return;

  const eventID = options?.eventID;
  // Always dedupe: eventID when provided, otherwise short time-bucket so
  // Strict Mode / retry doubles collapse without blocking real later actions.
  const bucket = Math.floor(Date.now() / 2500);
  const dedupeKey = eventID
    ? `${event}:${eventID}`
    : `${event}:${stableParamsKey(params)}:${bucket}`;
  const fired = firedSet();

  if (fired?.has(dedupeKey)) return;

  const fire = () => {
    if (!window.fbq) return false;
    if (fired?.has(dedupeKey)) return true;

    // Mark before calling fbq so overlapping retries cannot double-send.
    fired?.add(dedupeKey);

    if (eventID) {
      window.fbq("track", event, params ?? {}, { eventID });
    } else {
      window.fbq("track", event, params);
    }
    return true;
  };

  if (fire()) return;

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (fire() || attempts >= 40) window.clearInterval(id);
  }, 500);
}
