import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderAffiliates } from "./renderAffiliate";

export type Post = {
  slug: string;
  title: string;
  content: string;
};

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(contentDir);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return getPostBySlug(slug);
  });
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(contentDir, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(file);

  return {
    slug,
    title: data.title || slug,
    content: renderAffiliates(content),
  };
}
