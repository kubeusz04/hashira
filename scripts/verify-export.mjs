import { readFile, writeFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";

const root = resolve("out");
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const pages = ["index.html", "kuba/index.html", "404.html"];
const missing = new Set();
for (const page of pages) {
  const html = await readFile(join(root, page), "utf8");
  if (html.includes("/_next/image?"))
    throw new Error(`Server image URL in ${page}`);
  const references = [...html.matchAll(/(?:src|href)="(\/[^"<>]+)"/g)].map(
    (m) => m[1],
  );
  for (const reference of references) {
    const path = reference.split(/[?#]/)[0];
    if (path.startsWith("//")) continue;
    if (basePath && !path.startsWith(`${basePath}/`)) {
      throw new Error(`Unprefixed URL in ${page}: ${reference}`);
    }
    const local = decodeURIComponent(path.slice(basePath.length));
    const file = join(root, local.endsWith("/") ? `${local}index.html` : local);
    if (!(await stat(file).catch(() => null))?.isFile()) missing.add(reference);
  }
}
if (missing.size)
  throw new Error(`Missing exported files: ${[...missing].join(", ")}`);
await writeFile(join(root, ".nojekyll"), "");
await writeFile(join(root, "deployment.json"), JSON.stringify({ basePath }));
console.log(
  `Static export verified: Yoon, Kuba, 404, and linked assets (${basePath || "/"}).`,
);
