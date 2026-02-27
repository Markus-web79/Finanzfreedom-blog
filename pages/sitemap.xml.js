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

  const urls = pages.map(
    (page) => `
    <url>
      <loc>${siteUrl}/${page}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
