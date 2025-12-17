import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const categories = fs.readdirSync(contentDirectory, {
    withFileTypes: true,
  });

  const posts: Post[] = [];

  for (const categoryDir of categories) {
    if (!categoryDir.isDirectory()) continue;

    const category = categoryDir.name;
    const categoryPath = path.join(contentDirectory, category);

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      // ❌ README & nicht-Markdown ignorieren
      if (
        file.toLowerCase() === "readme.md" ||
        !file.endsWith(".md")
      ) {
        continue;
      }

      const fullPath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContent);

      const slug = file.replace(/\.md$/, "");

      posts.push({
        slug,
        title: data.title || slug.replace(/-/g, " "),
        excerpt: data.excerpt || content.slice(0, 140) + "...",
        category: data.category || category,
        date: data.date || null,
      });
    }
  }

  // 📅 Neueste zuerst (wenn Datum vorhanden)
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
