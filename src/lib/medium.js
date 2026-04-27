const MEDIUM_RSS = "https://medium.com/feed/@vaheedsk36";

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function pickCdata(block, tag) {
  const cdata = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`).exec(block);
  if (cdata) return cdata[1];
  const plain = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`).exec(block);
  return plain ? decodeEntities(plain[1]) : "";
}

function estimateReadTime(html) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ").length;
  return Math.max(1, Math.round(words / 200));
}

export async function getMediumPosts(limit = 3) {
  try {
    const res = await fetch(MEDIUM_RSS, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < limit) {
      const block = match[1];
      const title = pickCdata(block, "title");
      const link = pickCdata(block, "link").split("?")[0];
      const pubDate = pickCdata(block, "pubDate");
      const content = pickCdata(block, "content:encoded") || pickCdata(block, "description");
      const brief = content
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 200);
      const readTimeInMinutes = estimateReadTime(content);
      items.push({
        slug: link,
        title,
        url: link,
        publishedAt: pubDate,
        brief,
        readTimeInMinutes,
      });
    }
    return items;
  } catch (err) {
    console.error("medium fetch failed", err);
    return [];
  }
}
