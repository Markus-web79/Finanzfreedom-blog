import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CATEGORY_CONFIG from "../../config/categoryConfig.js";
import Link from "next/link";

export default function CategoryPage({ category, articles }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.label}</h1>
      <p>{category.heroSubtitle}</p>

      <ul style={{ marginTop: "2rem", lineHeight: "2rem" }}>
        {articles.map((a) => (
          <li key={a.slug}>
            {/* Artikel-Seite liegt bei /[slug] */}
            <Link href={`/${a.slug}`}>{a.title}</Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "3rem" }}>
        <Link href="/kategorie">← Zurück zur Kategorien-Übersicht</Link>
      </div>
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

  if (!category) {
    return { notFound: true };
  }

  const folder = path.join(process.cwd(), "content", category.slug);

  let articles = [];
  if (fs.existsSync(folder)) {
    articles = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith(".md"))
      .map((file) => {
        const fullPath = path.join(folder, file);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(raw);

        const slugFromFile = file.replace(/\.md$/, "");

        return {
          slug: data.slug || slugFromFile,
          title: data.title || slugFromFile,
        };
      });
  }

  return {
    props: {
      category,
      articles,
    },
  };
}
