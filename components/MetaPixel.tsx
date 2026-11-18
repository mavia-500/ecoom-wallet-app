"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PIXEL_ID = "697594026040202";

export default function MetaPixel() {
  const pathname = usePathname() || "";
  const [ready, setReady] = useState(false);
  const isCheckout = pathname.startsWith("/placeorder");

  // Load the pixel once. Never set ready back to false — remounting the
  // Script re-runs fbq('init') / PageView and Meta counts every event twice.
  useEffect(() => {
    if (ready) return;
    const delayMs = isCheckout ? 0 : 8000;
    const t = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(t);
  }, [isCheckout, ready]);

  if (!ready) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          if (!window.__hilyahPixelInit) {
            window.__hilyahPixelInit = true;
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          }
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Meta Pixel tracking"
        />
      </noscript>
    </>
  );
}
