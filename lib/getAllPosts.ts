import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts() {
  const categories = fs.readdirSync(contentDir);

  return categories.flatMap((category) => {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) return [];

    return fs.readdirSync(categoryPath).map((file) => {
      const fullPath = path.join(categoryPath, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug: file.replace(/\.md$/, ""),
        category,
        ...data,
        content,
      };
    });
  });
}
