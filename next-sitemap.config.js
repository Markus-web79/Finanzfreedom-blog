const fs = require("fs");
const path = require("path");

const getAllMarkdownPaths = (dir, baseUrl = "") => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllMarkdownPaths(fullPath, `${baseUrl}/${entry.name}`);
    }

    if (entry.name.endsWith(".md")) {
      const slug = entry.name.replace(".md", "");
      return `${baseUrl}/${slug}`;
    }

    return [];
  });
};

module.exports = {
  siteUrl: "https://finanzfreedom.de",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async (config) => {
    const contentPath = path.join(process.cwd(), "content");
    const markdownRoutes = getAllMarkdownPaths(contentPath);

    return Promise.all(
      markdownRoutes.map((route) =>
        config.transform(config, route)
      )
    );
  },
};
