/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://finanzfreedom.de",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
};
