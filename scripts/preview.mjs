import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
let basePath;
try {
  ({ basePath } = JSON.parse(
    await readFile(resolve(root, "deployment.json"), "utf8"),
  ));
} catch {
  console.error("Build the static site first: npm run build");
  process.exit(1);
}
const portArg = process.argv.indexOf("--port");
const port = Number(
  portArg >= 0 ? process.argv[portArg + 1] : process.env.PORT || 3000,
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (pathname === basePath && basePath) {
      response.writeHead(301, { Location: `${basePath}/` }).end();
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`))
      throw new Error("Outside mount");
    pathname = pathname.slice(basePath.length);
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep))
      throw new Error("Outside export");
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(301, { Location: `${basePath}${pathname}/` }).end();
        return;
      }
      file = resolve(file, "index.html");
      info = await stat(file);
    }
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : await readFile(file));
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(
      await readFile(resolve(root, "404.html")).catch(() => "Not found"),
    );
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static preview: http://localhost:${port}${basePath}/`),
);
