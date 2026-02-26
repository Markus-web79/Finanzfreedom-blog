/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://finanzfreedom.de",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,

  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/etfs"),
    await config.transform(config, "/investieren"),
    await config.transform(config, "/versicherungen"),
    await config.transform(config, "/sparen"),
    await config.transform(config, "/wissen"),
    await config.transform(config, "/broker"),
  ],
};
