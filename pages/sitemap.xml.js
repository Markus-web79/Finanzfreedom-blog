import fs from 'fs';
import path from 'path';

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://www.finanzfreedom.de';
  const contentPath = path.join(process.cwd(), 'content');

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

  const files = getAllMarkdownFiles(contentPath);

  const urls = files.map((file) => {
    const relativePath = file
      .replace(contentPath, '')
      .replace(/\\/g, '/')
      .replace('.md', '');

    return `
      <url>
        <loc>${baseUrl}/blog${relativePath}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `;
  });

  const staticPages = `
    <url>
      <loc>${baseUrl}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages}
    ${urls.join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {}
