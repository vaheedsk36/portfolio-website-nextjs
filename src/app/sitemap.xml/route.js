import { site } from "@/data/site";

export async function GET() {
  const pages = ["", "archive", "uses"];
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${site.url}/${p}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
