import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function CategoryPage({ category, articles }) {
  return (
    <>
      <Head>
        <title>{category} – FinanzFreedom</title>
        <meta
          name="description"
          content={`Alle Artikel, Tipps und Strategien zum Thema ${category} – klar, verständlich und ohne Fachchinesisch.`}
        />
      </Head>

      <main style={{ maxWidth: "1100px", margin: "3rem auto", padding: "0 1rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#00a3f5" }}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>

        {articles.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>
            Noch keine Artikel in dieser Kategorie vorhanden.
          </p>
        ) : (
          <div className={styles.articleGrid}>
            {articles.map((a) => (
              <div className={styles.articleCard} key={a.slug}>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.description?.slice(0, 130)}…</p>
                </div>

                <Link href={`/${a.slug}`} style={{ marginTop: "1rem" }}>
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
    .readdirSync(contentDir)
    .filter((f) => fs.statSync(path.join(contentDir, f)).isDirectory());

  const paths = categories.map((c) => ({ params: { category: c } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const categoryDir = path.join(process.cwd(), "content", category);

  const files = fs.readdirSync(categoryDir);
  const articles = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const fullPath = path.join(categoryDir, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);

    articles.push({
      title: data.title || file.replace(".md", ""),
      description: data.metaDescription || data.description || "",
      slug: `${category}/${file.replace(".md", "")}`,
    });
  }

  return {
    props: {
      category,
      articles,
    },
  };
}
