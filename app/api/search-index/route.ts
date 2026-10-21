import { NextResponse } from "next/server";
import { getSearchIndex } from "@/lib/catalog";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(getSearchIndex(), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
