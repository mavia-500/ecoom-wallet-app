"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CLARITY_ID = "z69oa5awnz";

export default function MicrosoftClarity() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Delay Clarity past first paint / TBT window (same approach as Meta Pixel)
    const t = window.setTimeout(() => setReady(true), 8000);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
