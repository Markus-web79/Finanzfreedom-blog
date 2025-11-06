const fs = require("fs");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const contentDir = path.join(dir, "content");

    function getAllMarkdownFiles(dirPath) {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      let files = [];
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          files = files.concat(getAllMarkdownFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
          files.push(fullPath);
        }
      }
      return files;
    }

    const files = getAllMarkdownFiles(contentDir);
    const customPaths = {};

    files.forEach((file) => {
      const relative = file
        .replace(contentDir + path.sep, "")
        .replace(/\.md$/, "")
        .replace(/\\/g, "/"); // Fix für Windows/Vercel
      const route = "/" + relative;
      customPaths[route] = {
        page: "/[...slug]",
        query: { slug: relative.split("/") },
      };
      console.log("Exportiere:", route);
    });

    return {
      ...defaultPathMap,
      ...customPaths,
    };
  },
};

module.exports = nextConfig;
