import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Liest alle Markdown-Dateien rekursiv aus /content
 * und validiert strikt das Frontmatter.
 */
export function getAllArticles(): Article[] {
  const files = getAllMarkdownFiles(CONTENT_DIR);

  const articles: Article[] = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // 🔒 HARTE VALIDIERUNG – lieber Build rot als Müll live
    if (!data.title || !data.description || !data.category) {
      throw new Error(
        `❌ Ungültiges Frontmatter in ${filePath}
Erforderlich: title, description, category`
      );
    }

    const slug = filePath
      .replace(CONTENT_DIR, "")
      .replace(/\\/g, "/")
      .replace(/\.md$/, "")
      .replace(/^\//, "");

    return {
      slug,
      title: String(data.title),
      description: String(data.description),
      category: String(data.category),
      date: data.date ? String(data.date) : undefined,
      content,
    };
  });

  return articles.sort((a, b) =>
    (b.date || "").localeCompare(a.date || "")
  );
}

/**
 * Hilfsfunktion: findet alle .md Dateien rekursiv
 */
function getAllMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllMarkdownFiles(fullPath);
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      return [fullPath];
    }
    return [];
  });
}
