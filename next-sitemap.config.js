const fs = require("fs");
const path = require("path");

// WICHTIG: Wenn Vercel bei dir auf www weiterleitet, nimm www als canonical:
const siteUrl = "https://www.finanzfreedom.de";

function getSlugsFromDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function entry(urlPath) {
  return {
    loc: `${siteUrl}${urlPath}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  };
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Optional, aber hilfreich wenn du "sitemap.xml" als Index willst
  generateIndexSitemap: true,

  additionalPaths: async () => {
    const contentRoot = path.join(process.cwd(), "content");

    const categories = [
      "etfs",
      "investieren",
      "versicherungen",
      "wissen",
      "tools",
      "broker",
    ];

    const paths = [];

    // Startseite
    paths.push(entry("/"));

    // Kategorie-Seiten
    for (const cat of categories) {
      paths.push(entry(`/${cat}`));
    }

    // Kategorie-Artikel
    for (const cat of categories) {
      const dir = path.join(contentRoot, cat);
      const slugs = getSlugsFromDir(dir);

      for (const slug of slugs) {
        if (slug.toLowerCase() === "readme") continue;
        paths.push(entry(`/${cat}/${slug}`));
      }
    }

    // Root Markdown Files (impressum etc.)
    const rootSlugs = getSlugsFromDir(contentRoot);
    for (const slug of rootSlugs) {
      if (slug.toLowerCase() === "readme") continue;
      paths.push(entry(`/${slug}`));
    }

    return paths;
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    // sorgt dafür, dass robots.txt den richtigen (www) Pfad bekommt
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
