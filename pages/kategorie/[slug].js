// pages/kategorie/[slug].js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CATEGORY_CONFIG from "../../config/categoryConfig.js";

export default function CategoryArticlePage({ frontmatter, content, category }) {
  return (
    <div style={{ padding: "2rem" }}>
      <header>
        <p style={{ fontSize: "0.9rem", color: "#888" }}>
          Kategorie: {category.label}
        </p>
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <p>{frontmatter.date}</p>}
      </header>

      <article
        dangerouslySetInnerHTML={{ __html: marked.parse(content || "") }}
        style={{ marginTop: "1.5rem" }}
      />

      <br />
      <a href={`/kategorie/${category.slug}`}>← Zurück zur Kategorie {category.label}</a>
    </div>
  );
}

export async function getStaticPaths() {
  const root = path.join(process.cwd(), "content");
  const paths = [];

  // Für jede Kategorie alle Markdown-Dateien einsammeln
  Object.values(CATEGORY_CONFIG).forEach((cat) => {
    const folder = path.join(root, cat.slug);
    if (!fs.existsSync(folder)) return;

    const files = fs.readdirSync(folder);
    files.forEach((file) => {
      if (!file.endsWith(".md")) return;

      const slug = file.replace(".md", "");
      paths.push({
        params: { slug }, // nur slug, kein kategorie-Param
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const root = path.join(process.cwd(), "content");

  // Herausfinden, in welcher Kategorie die Datei liegt
  for (const cat of Object.values(CATEGORY_CONFIG)) {
    const filePath = path.join(root, cat.slug, `${params.slug}.md`);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      props: {
        frontmatter: data,
        content,
        category: cat,
      },
    };
  }

  // Falls nichts gefunden: 404
  return { notFound: true };
}
