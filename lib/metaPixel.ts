export const META_PIXEL_ID = "697594026040202";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __hilyahMetaFired?: Set<string>;
    __hilyahPixelInit?: boolean;
  }
}

type MetaEventParams = Record<string, string | number | string[] | undefined>;

/** Advanced Matching fields (Meta hashes these in the browser). */
export type MetaUserData = {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  country?: string;
};

type TrackOptions = {
  /** Meta eventID for Pixel ↔ CAPI deduplication. */
  eventID?: string;
  /** Customer info for Event Match Quality (phone, email, name, city, etc.). */
  userData?: MetaUserData;
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

function clean(value?: string) {
  return (value || "").trim().toLowerCase();
}

/** Normalize PK phone to digits with country code (e.g. 923001234567). */
export function normalizeMetaPhone(phone?: string) {
  let digits = (phone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = `92${digits.slice(1)}`;
  if (digits.length === 10 && digits.startsWith("3")) digits = `92${digits}`;
  return digits;
}

export function buildMetaUserData(input: {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  province?: string;
}): MetaUserData {
  const parts = (input.fullName || "").trim().split(/\s+/).filter(Boolean);
  const fn = clean(parts[0]);
  const ln = clean(parts.slice(1).join(" "));
  const em = clean(input.email);
  const ph = normalizeMetaPhone(input.phone);
  const ct = clean(input.city);
  const st = clean(input.province);

  const data: MetaUserData = { country: "pk" };
  if (em) data.em = em;
  if (ph) data.ph = ph;
  if (fn) data.fn = fn;
  if (ln) data.ln = ln;
  if (ct) data.ct = ct;
  if (st) data.st = st;
  return data;
}

/** Attach Advanced Matching to the pixel before the next track call. */
function applyUserData(userData?: MetaUserData) {
  if (!userData || !window.fbq) return;
  const hasAny = Object.keys(userData).some(
    (k) => k !== "country" && Boolean(userData[k as keyof MetaUserData]),
  );
  if (!hasAny) return;
  // Re-init with customer data updates matching for following events (no PageView).
  window.fbq("init", META_PIXEL_ID, userData);
}

/** Fire a Meta Pixel event; retries briefly if the script is still loading. */
export function trackMetaEvent(
  event: string,
  params?: MetaEventParams,
  options?: TrackOptions,
) {
  if (typeof window === "undefined") return;

  const eventID = options?.eventID;
  const userData = options?.userData;
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

    applyUserData(userData);

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
