import { buildMetaCatalogCsv, buildMetaFeedCsv } from "@/lib/metaCatalog";

/** ?minimal=1 returns required Meta columns only; default is extended catalog. */

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const minimal =
    new URL(request.url).searchParams.get("minimal") === "1";
  const csv = minimal ? buildMetaFeedCsv() : buildMetaCatalogCsv();

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="hilyah-meta-catalog.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
