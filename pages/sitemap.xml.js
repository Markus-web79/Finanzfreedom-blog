// pages/sitemap.xml.js

export async function getServerSideProps({ res }) {
  // Entscheide dich für eine Canonical-Variante:
  // Wenn du willst, dass www und non-www funktionieren, ist das okay –
  // aber in der Sitemap sollte nur EINE Version stehen (Canonical).
  const siteUrl = "https://www.finanzfreedom.de";

  const pages = [
    "/", // Startseite
    "/etfs",
    "/investieren",
    "/versicherungen",
    "/wissen",
    "/tools",
    "/broker",
  ];

  const now = new Date().toISOString();

  const urlsXml = pages
    .map((p) => {
      const loc = `${siteUrl}${p === "/" ? "" : p}`;
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsXml}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.write(sitemapXml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
