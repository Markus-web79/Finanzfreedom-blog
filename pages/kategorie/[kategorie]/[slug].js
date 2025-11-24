// pages/kategorie/[kategorie]/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import CATEGORY_CONFIG from "../../../config/categoryConfig.js";
import getArticlesByCategory from "../../../lib/getArticlesByCategory.js";

const contentRoot = path.join(process.cwd(), "content");

export default function ArticlePage({ frontmatter, content, categoryData }) {
  return (
    <main style={{ padding: "2rem" }}>
      <article>
        <header style={{ marginBottom: "1.5rem" }}>
          <h1>{frontmatter.title}</h1>
          <p style={{ color: "#64748b" }}>
            {frontmatter.date}
            {frontmatter.readingTime && ` · ca. ${frontmatter.readingTime} Min. Lesezeit`}
          </p>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          style={{ lineHeight: 1.7 }}
        />
      </article>

      <br />
      <p>
        <Link href={`/kategorie/${categoryData.slug}`}>
          Zurück zu {categoryData.label}
        </Link>
        {" · "}
        <Link href="/">Zur Startseite</Link>
      </p>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = [];

  const categoryKeys = Object.keys(CATEGORY_CONFIG);

  for (const key of categoryKeys) {
    const articles = getArticlesByCategory(key);
    articles.forEach((article) => {
      if (!article.slug) return;
      paths.push({
        params: {
          kategorie: key,
          slug: article.slug,
        },
      });
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { kategorie, slug } = params;

  const categoryInfo = CATEGORY_CONFIG[kategorie];
  if (!categoryInfo) {
    return { notFound: true };
  }

  const categoryDir = path.join(contentRoot, kategorie);

  // Datei mit passendem slug suchen
  const files = fs.readdirSync(categoryDir);
  let found = null;

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const fullPath = path.join(categoryDir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    if (data.slug === slug) {
      found = { frontmatter: data, content };
      break;
    }
  }

  if (!found) {
    return { notFound: true };
  }

  const { frontmatter, content } = found;

  return {
    props: {
      frontmatter: {
        title: frontmatter.title || "",
        date: frontmatter.date || "",
        readingTime: frontmatter.readingTime || null,
      },
      content,
      categoryData: {
        slug: kategorie,
        label: categoryInfo.label,
      },
    },
  };
}
