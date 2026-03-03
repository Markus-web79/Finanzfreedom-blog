/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.finanzfreedom.de',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/500']
};
