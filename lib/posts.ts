import fs from "fs";
import path from "path";
import { Post } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith(".html"))
    .map(file => {
      const slug = file.replace(".html", "");
      const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");

      return {
        slug,
        title: slug.replace(/-/g, " "),
        content,
      };
    });
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find(p => p.slug === slug) ?? null;
}
