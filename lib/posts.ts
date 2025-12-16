// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);
}

export function getAllPosts(): Post[] {
  const files = getMarkdownFiles();

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "allgemein",
    };
  });
}

export function getPostBySlug(slug: string): Post & { content: string } {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "allgemein",
    content,
  };
}
