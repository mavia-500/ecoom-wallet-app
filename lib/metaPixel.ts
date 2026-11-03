declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type MetaEventParams = Record<string, string | number | string[] | undefined>;

/** Fire a Meta Pixel event; retries briefly if the script is still loading. */
export function trackMetaEvent(event: string, params?: MetaEventParams) {
  if (typeof window === "undefined") return;

  const fire = () => {
    if (!window.fbq) return false;
    window.fbq("track", event, params);
    return true;
  };

  if (fire()) return;

  let attempts = 0;
  const id = window.setInterval(() => {
    attempts += 1;
    if (fire() || attempts >= 40) window.clearInterval(id);
  }, 500);
}
