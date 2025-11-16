import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import styles from "../../styles/ArticlePage.module.css";

// =======================================
//   ARTIKEL-SEITE
// =======================================
export default function ArticlePage({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | FinanzFreedom</title>
        <meta name="description" content={article.description} />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>{article.title}</h1>

        <p className={styles.meta}>
          {article.date && (
            <span>
              {new Date(article.date).toLocaleDateString("de-DE")} •{" "}
            </span>
          )}
          {article.readingTime} Min. Lesezeit
        </p>

        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </main>
    </>
  );
}

// =======================================
//   GET STATIC PATHS
// =======================================
export async function getStaticPaths() {
  const contentRoot = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentRoot);

  let paths = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentRoot, category);

    // Nur echte Kategorie-Ordner
    if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) return;

    // Problematische Ordner ausschließen
    if (category === "vergleiche") return;

    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      if (!file.endsWith(".md")) return;

      const fullPath = path.join(categoryPath, file);
      const source = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(source);
      const slug = data.slug || file.replace(".md", "");

      paths.push({
        params: {
          category,
          slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

// =======================================
//   GET STATIC PROPS
// =======================================
export async function getStaticProps({ params }) {
  const { category, slug } = params;

  const filePath = path.join(
    process.cwd(),
    "content",
    category,
    `${slug}.md`
  );

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  const html = marked.parse(content);
  const readingTime = Math.ceil(content.split(" ").length / 200);

  return {
    props: {
      article: {
        ...data,
        html,
        readingTime,
      },
    },
  };
}
