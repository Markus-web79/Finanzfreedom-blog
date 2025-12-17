import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Dateien, die NICHT als Blogartikel gelten
const EXCLUDED_SLUGS = [
  "readme",
  "impressum",
  "datenschutz",
  "kontakt",
];

export type PostMeta = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");

      if (EXCLUDED_SLUGS.includes(slug.toLowerCase())) {
        return null;
      }

      const fullPath = path.join(CONTENT_DIR, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "",
      };
    })
    .filter(Boolean) as PostMeta[];
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? slug,
    content,
    category: data.category ?? "",
  };
}
