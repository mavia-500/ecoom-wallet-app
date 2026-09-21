import { buildMetaCatalogCsv } from "@/lib/metaCatalog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const csv = buildMetaCatalogCsv();

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="hilyah-meta-catalog.csv"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
