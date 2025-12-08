import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts() {
  const categories = fs
    .readdirSync(contentDir)
    .filter((file) => fs.statSync(path.join(contentDir, file)).isDirectory());

  let allPosts = [];

  categories.forEach((category) => {
    const categoryDir = path.join(contentDir, category);
    const files = fs.readdirSync(categoryDir);

    files.forEach((file) => {
      if (file.endsWith(".md")) {
        const filePath = path.join(categoryDir, file);
        const slug = file.replace(".md", "");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        allPosts.push({
          slug: `${category}/${slug}`,
          category,
          title: data.title || slug,
          description: data.description || "",
          date: data.date || "2000-01-01",
        });
      }
    });
  });

  // Neuste zuerst
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return allPosts;
}
