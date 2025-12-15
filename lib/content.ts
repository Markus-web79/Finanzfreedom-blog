import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { affiliates } from "./affiliates";

export type Post = {
  title: string;
  slug: string;
  category: string;
  description?: string;
  content: string;
};

function renderAffiliates(content: string) {
  return content.replace(/\{\{affiliate\.([a-zA-Z0-9]+)\}\}/g, (_, key) => {
    const aff = affiliates[key as keyof typeof affiliates];
    if (!aff) return "";
    return `<a href="${aff.url}" target="_blank" rel="nofollow sponsored">${aff.label}</a>`;
  });
}

export function getAllPosts(): Post[] {
  const baseDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(baseDir);

  const posts: Post[] = [];

  for (const category of categories) {
    const dir = path.join(baseDir, category);
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);

      posts.push({
        title: data.title,
        slug: data.slug,
        category,
        description: data.description || "",
        content: renderAffiliates(content),
      });
    }
  }

  return posts;
}
