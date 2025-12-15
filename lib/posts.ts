// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderAffiliates } from "./renderAffiliate";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  content: string;
};

export function getAllPosts(): Post[] {
  return fs.readdirSync(CONTENT_DIR).map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      content: renderAffiliates(content),
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const raw = fs.readFileSync(
    path.join(CONTENT_DIR, `${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    content: renderAffiliates(content),
  };
}
