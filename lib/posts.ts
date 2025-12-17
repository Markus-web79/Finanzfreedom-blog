import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

/* =========================
   TYPES
========================= */

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  content: string;
};

/* =========================
   HELPERS
========================= */

function getAllMarkdownFiles(dir: string, base = dir): string[] {
  return fs.readdirSync(dir).flatMap((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return getAllMarkdownFiles(fullPath, base);
    }

    if (file.endsWith(".md")) {
      return [path.relative(base, fullPath)];
    }

    return [];
  });
}

/* =========================
   PUBLIC API
========================= */

export function getAllPosts(): Post[] {
  const files = getAllMarkdownFiles(contentDir);

  return files.map((relativePath) => {
    const slug = relativePath.replace(/\.md$/, "");
    const fullPath = path.join(contentDir, relativePath);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContent);

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

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
