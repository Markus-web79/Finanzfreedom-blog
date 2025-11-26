import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import CATEGORY_CONFIG from "../../../config/categoryConfig";

export default function ArticlePage({ category, article }) {
  return (
    <div style={{ padding: "2rem" }}>
      <Link href={`/kategorie/${category.slug}`}>← Zurück zur Kategorie</Link>

      <h1 style={{ marginTop: "1.5rem" }}>{article.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        style={{ marginTop: "2rem", lineHeight: "1.7rem" }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];

  // Für jede Kategorie alle Artikel laden
  for (const cat of Object.values(CATEGORY_CONFIG)) {
    const folder = path.join(process.cwd(), "content", cat.slug);
    const files = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith(".md"))
      .map((file) => ({
        params: {
          slug: cat.slug,
          article: file.replace(".md", ""),
        },
      }));

    paths = [...paths, ...files];
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = CATEGORY_CONFIG[params.slug];

  const filePath = path.join(
    process.cwd(),
    "content",
    category.slug,
    `${params.article}.md`
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    props: {
      category,
      article: {
        title: data.title || params.article,
        content: content.replace(/\n/g, "<br/>"),
      },
    },
  };
}
