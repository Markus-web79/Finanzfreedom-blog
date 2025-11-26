import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CATEGORY_CONFIG from "../../config/categoryConfig.js";
import Link from "next/link";

export default function CategoryPage({ category, articles }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.heroTitle || category.label}</h1>
      <p>{category.heroSubtitle}</p>

      <ul style={{ marginTop: "2rem", lineHeight: "2rem" }}>
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/kategorie/${category.slug}/${a.slug}`}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.values(CATEGORY_CONFIG).map((cat) => ({
    params: { slug: cat.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = CATEGORY_CONFIG[params.slug];

  // Pfad zum Content-Ordner
  const folder = path.join(process.cwd(), "content", category.slug);

  // Nur echte Markdown-Dateien einlesen
  const articles = fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(folder, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug: file.replace(".md", ""),
        title: data.title || file.replace(".md", ""),
      };
    });

  return {
    props: { category, articles },
  };
}
