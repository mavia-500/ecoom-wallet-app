/**
 * Amplify Console env vars exist at build time, but Next.js API routes
 * often do not see them at runtime unless they are written into
 * .env.production before `next build`.
 */
const fs = require("fs");

const keys = [
  "EMAIL_USER",
  "EMAIL_PASS",
  "ADMIN_EMAIL",
  "MONGO_URI",
  "NEXT_PUBLIC_SITE_URL",
  "JWT_SECRET",
];

const lines = [];
const present = [];

for (const key of keys) {
  let value = process.env[key];
  if (!value) continue;
  if (key === "EMAIL_PASS") value = value.replace(/\s+/g, "");
  lines.push(`${key}="${value.replace(/"/g, '\\"')}"`);
  present.push(key);
}

if (lines.length) {
  fs.appendFileSync(".env.production", `${lines.join("\n")}\n`);
}

console.log("SSR env keys written:", present.join(", ") || "(none)");
