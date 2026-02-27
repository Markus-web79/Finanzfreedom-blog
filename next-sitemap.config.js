const fs = require("fs");
const path = require("path");

const siteUrl = "https://finanzfreedom.de";

function getSlugsFromDir(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async (config) => {
    const contentRoot = path.join(process.cwd(), "content");

    const categories = [
      "etfs",
      "investieren",
      "versicherungen",
      "wissen",
      "tools",
      "broker"
    ];

    const paths = [];

    // Startseite
    paths.push(await config.transform(config, "/"));

    // Kategorie-Seiten
    for (const cat of categories) {
      paths.push(await config.transform(config, `/${cat}`));
    }

    // Kategorie-Artikel
    for (const cat of categories) {
      const dir = path.join(contentRoot, cat);
      const slugs = getSlugsFromDir(dir);

      for (const slug of slugs) {
        paths.push(
          await config.transform(config, `/${cat}/${slug}`)
        );
      }
    }

    // Root Markdown Files (impressum etc.)
    const rootSlugs = getSlugsFromDir(contentRoot);

    for (const slug of rootSlugs) {
      if (slug.toLowerCase() !== "readme") {
        paths.push(
          await config.transform(config, `/${slug}`)
        );
      }
    }

    return paths;
  },
};
