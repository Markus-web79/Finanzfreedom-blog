import fs from "fs";
import path from "path";

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

      const slug = file.replace(".md", "");
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, "utf-8");

      posts.push({
        slug,
        title: slug.replace(/-/g, " "),
        content,
        category,
      });
    });
  });

  return posts;
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
