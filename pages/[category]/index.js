import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export default function CategoryPage({ category, articles }) {
  return (
    <>
      <Head>
        <title>{category} – FinanzFreedom</title>
        <meta
          name="description"
          content={`Artikel und Ratgeber zum Thema ${category} auf FinanzFreedom.`}
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>{category}</h1>

        {articles.length === 0 && (
          <p className={styles.noArticles}>
            Für diese Kategorie existieren noch keine Artikel.
          </p>
        )}

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <Link
              href={`/${category}/${article.slug}`}
              key={i}
              className={styles.card}
            >
              <h3>{article.title}</h3>
              <p>{article.description}</p>

              <div className={styles.meta}>
                {article.date && (
                  <span>
                    {new Date(article.date).toLocaleDateString("de-DE")}
                  </span>
                )}
                <span>{article.readingTime} Min.</span>
              </div>

              <span className={styles.readMore}>Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");

  const categories = fs
    .readdirSync(contentDir)
    .filter((item) =>
      fs.statSync(path.join(contentDir, item)).isDirectory()
    );

  return {
    paths: categories.map((category) => ({
      params: { category }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const folder = path.join(process.cwd(), "content", category);

  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      const slug = data.slug || file.replace(".md", "");

      return {
        slug,
        title: data.title || slug.replaceAll("-", " "),
        description:
          data.description || "FinanzFreedom – einfach erklärt.",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200)
      };
    });

    // Sortierung nach Datum (neu zuerst)
    articles.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }

  return {
    props: {
      category,
      articles
    }
  };
}
