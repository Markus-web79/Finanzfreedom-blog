import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

function getAllMarkdownFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(fullPath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(fullPath);
    }
  });

  return fileList;
}

export function getAllPosts() {
  const files = getAllMarkdownFiles(CONTENT_DIR);

  return files.map((fullPath) => {
    const slug = fullPath
      .replace(CONTENT_DIR, "")
      .replace(/\.md$/, "")
      .replace(/\\/g, "/")
      .replace(/^\//, "");

    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "",
      content,
    };
  });
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "",
    content,
  };
}
