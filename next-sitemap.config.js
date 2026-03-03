const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.finanzfreedom.de',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  additionalPaths: async (config) => {
    const contentDir = path.join(process.cwd(), 'content');
    const files = fs.readdirSync(contentDir);

    const dynamicPaths = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        return {
          loc: `/blog/${slug}`,
          changefreq: 'daily',
          priority: 0.7,
        };
      });

    return dynamicPaths;
  },
};
