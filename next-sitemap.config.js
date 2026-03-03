const fs = require('fs');
const path = require('path');

/** Rekursiv alle .md Dateien finden */
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.finanzfreedom.de',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  additionalPaths: async () => {
    const contentPath = path.join(process.cwd(), 'content');
    const files = getAllMarkdownFiles(contentPath);

    return files.map((file) => {
      const relativePath = file
        .replace(contentPath, '')
        .replace(/\\/g, '/')
        .replace('.md', '');

      return {
        loc: `/blog${relativePath}`,
        changefreq: 'daily',
        priority: 0.7,
      };
    });
  },
};
