export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/$/,
  "",
);

/** Public assets and document links must include the Pages repository prefix. */
export function sitePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || !basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}

export const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
).origin;
