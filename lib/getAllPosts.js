import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts() {
  const categories = fs.readdirSync(contentDir);
  const posts = [];

  categories.forEach(category => {
    const categoryPath = path.join(contentDir, category);

    if (!fs.statSync(categoryPath).isDirectory()) return;

    const files = fs.readdirSync(categoryPath);

    files.forEach(file => {
      if (!file.endsWith(".md")) return;

      const filePath = path.join(categoryPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      const slug =
        data.slug ||
        file.replace(".md", "");

      posts.push({
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        category,
        content: marked.parse(content),
      });
    });
  });

  return posts;
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();

  return (
    posts.find(
      post =>
        post.slug === slug ||
        post.slug?.toLowerCase() === slug.toLowerCase()
    ) || null
  );
}
