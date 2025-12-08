import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import styles from "./CategoryPage.module.css";

export default function CategoryPage({ category, articles }) {
  return (
    <>
      <Head>
        <title>{category} – FinanzFreedom</title>
        <meta
          name="description"
          content={`Alle Artikel zum Thema ${category} auf FinanzFreedom.`}
        />
      </Head>

      <main style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}>
        <h1 className={styles.title}>{category}</h1>

        {articles.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>
            Noch keine Artikel in dieser Kategorie.
          </p>
        ) : (
          <div className={styles.grid}>
            {articles.map((article) => (
              <div key={article.slug} className={styles.card}>
                <h2>{article.title}</h2>
                <p>{article.description?.slice(0, 120) || ""}…</p>
                <Link href={`/${category}/${article.slug}`} className={styles.readmore}>
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");

  const categories = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const categoryDir = path.join(process.cwd(), "content", category);

  let articles = [];

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const raw = fs.readFileSync(path.join(categoryDir, file), "utf8");
      const { data } = matter(raw);

      articles.push({
        title: data.title || file.replace(".md", ""),
        description: data.description || "",
        slug: file.replace(".md", ""),
      });
    }
  }

  return {
    props: { category, articles },
  };
}
