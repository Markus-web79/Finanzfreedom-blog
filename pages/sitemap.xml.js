export async function getServerSideProps({ res }) {
  const siteUrl = "https://www.finanzfreedom.de";

  const pages = [
    "",
    "etfs",
    "investieren",
    "versicherungen",
    "wissen",
    "tools",
    "broker",
  ];

  const urls = pages
    .map((page) => {
      const loc = page ? `${siteUrl}/${page}` : siteUrl;
      return `
  <url>
    <loc>${loc}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  // WICHTIG: richtiger Content-Type, sonst wird es als HTML „verschluckt“
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.end(sitemap);

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
