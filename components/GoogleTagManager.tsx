"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-5BX779FB";

export default function GoogleTagManager() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Delay past first paint / TBT (same approach as Meta Pixel & Clarity)
    const t = window.setTimeout(() => setReady(true), 8000);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          if (!window.__hilyahGtmInit) {
            window.__hilyahGtmInit = true;
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';
            document.head.appendChild(s);
          }
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
