import fs from "fs";
import path from "path";
import { buildMetaFeedCsv, getMetaCatalogItems } from "../lib/metaCatalog";

const out = path.join(process.cwd(), "public", "hilyah-meta-feed.csv");
fs.writeFileSync(out, buildMetaFeedCsv(), "utf8");
console.log(`Wrote ${out} (${getMetaCatalogItems().length} products)`);
