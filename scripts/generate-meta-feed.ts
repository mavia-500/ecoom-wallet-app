import fs from "fs";
import path from "path";
import { buildMetaFeedCsv, getMetaCatalogItems } from "../lib/metaCatalog";

const csv = buildMetaFeedCsv();
const count = getMetaCatalogItems().length;
const publicDir = path.join(process.cwd(), "public");

for (const name of ["hilyah-meta-feed.csv", "meta-feed.csv"]) {
  const out = path.join(publicDir, name);
  try {
    fs.writeFileSync(out, csv, "utf8");
    console.log(`Wrote ${out} (${count} products)`);
  } catch (err) {
    console.warn(`Could not write ${out}:`, (err as Error).message);
  }
}
