import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts() {
  const categories = fs.readdirSync(contentDir);

  let posts = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDir, category);

    // 👉 NUR ORDNER
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const files = fs
      .readdirSync(categoryPath)
      // 👉 NUR MARKDOWN
      .filter((file) => file.endsWith(".md"));

    files.forEach((file) => {
      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      posts.push({
        slug: file.replace(".md", ""),
        category,
        title: data.title || "",
        description: data.description || "",
        content,
      });
    });
  });

  return posts;
}
