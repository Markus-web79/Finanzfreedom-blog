import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  category?: string;
};

export type Post = PostMeta & {
  content: string;
};

/**
 * Liest alle Markdown-Dateien (ohne README.md)
 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        file.toLowerCase() !== "readme.md"
    );

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(CONTENT_DIR, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? content.slice(0, 140) + "...",
      date: data.date ?? null,
      category: data.category ?? null,
    };
  });

  return posts;
}

/**
 * Liefert einen einzelnen Post nach Slug
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? null,
    date: data.date ?? null,
    category: data.category ?? null,
    content,
  };
}

/**
 * Für getStaticPaths in pages/blog/[slug].tsx
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        file.toLowerCase() !== "readme.md"
    )
    .map((file) => file.replace(/\.md$/, ""));
}
