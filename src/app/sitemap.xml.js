export async function GET() {
  const baseUrl = 'https://vaheedshaik.com';
  const staticPages = [
    '', // home
    'about',
    'projects',
    'blogs',
    'contact',
    'skills',
    'certifications',
    'experience',
  ];

  const urls = staticPages.map(
    (page) => `  <url>\n    <loc>${baseUrl}/${page}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  ).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 