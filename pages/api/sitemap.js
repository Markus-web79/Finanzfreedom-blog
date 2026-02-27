export default function handler(req, res) {
  const baseUrl = "https://www.finanzfreedom.de";

  const routes = [
    "",
    "etfs",
    "investieren",
    "versicherungen",
    "wissen",
    "tools",
    "broker"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route ? `/${route}` : ""}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
