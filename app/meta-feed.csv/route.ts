import { buildMetaFeedCsv } from "@/lib/metaCatalog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/** Auto-updating Meta product feed: https://your-domain/meta-feed.csv */
export async function GET() {
  const csv = buildMetaFeedCsv();

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="meta-feed.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
