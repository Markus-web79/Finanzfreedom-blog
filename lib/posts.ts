import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

function getAllFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllFiles(fullPath);
    }

    if (entry.name.endsWith(".md")) {
      return [fullPath];
    }

    return [];
  });
}

export function getAllPosts() {
  const files = getAllFiles(CONTENT_DIR);

  return files.map((fullPath) => {
    const relativePath = path
      .relative(CONTENT_DIR, fullPath)
      .replace(/\.md$/, "");

    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug: relativePath.split(path.sep),
      title: data.title ?? relativePath,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "",
      content,
    };
  });
}
