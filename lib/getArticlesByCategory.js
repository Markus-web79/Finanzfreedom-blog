import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getArticlesByCategory(categorySlug) {
  const baseDir = path.join(process.cwd(), "content");
  const results = [];

  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        walk(fullPath);
      }

      if (file.isFile() && file.name.endsWith(".md")) {
        const raw = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(raw);

        if (!data.category) continue;

        if (data.category.toLowerCase() === categorySlug.toLowerCase()) {
          results.push({
            title: data.title || "Ohne Titel",
            description: data.description || "",
            slug: fullPath
              .replace(baseDir, "")
              .replace(/\.md$/, "")
              .split(path.sep)
              .filter(Boolean),
          });
        }
      }
    }
  }

  walk(baseDir);
  return results;
}
