import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CATEGORY_CONFIG from "../../../config/categoryConfig.js";

export default function ArticlePage({ frontmatter, content, category }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>

      <article dangerouslySetInnerHTML={{ __html: marked(content) }} />

      <br />
      <a href={`/kategorie/${category.slug}`}>Zurück zu {category.label}</a>
    </div>
  );
}

export async function getStaticPaths() {
  const root = path.join(process.cwd(), "content");
  const paths = [];

  Object.values(CATEGORY_CONFIG).forEach(cat => {
    const folder = path.join(root, cat.slug);
    if (!fs.existsSync(folder)) return;

    const files = fs.readdirSync(folder);
    files.forEach(file => {
      if (!file.endsWith(".md")) return;

      const slug = file.replace(".md", "");
      paths.push({
        params: { slug }  // ⬅️ WICHTIG – NUR slug
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let categoryEntry = null;

  // richtige Kategorie anhand der Dateien ermitteln
  for (const cat of Object.values(CATEGORY_CONFIG)) {
    const filePath = path.join(process.cwd(), "content", cat.slug, `${params.slug}.md`);
    if (fs.existsSync(filePath)) {
      categoryEntry = cat;

      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        props: {
          frontmatter: data,
          content,
          category: categoryEntry
        }
      };
    }
  }

  return { notFound: true };
}
