import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";
import categories from "../../config/categories";

export default function CategoryPage({ categoryKey, config, articles }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.container}>
        {/* HERO / HEADER */}
        <header className={styles.header}>
          <p className={styles.kicker}>{config.kicker}</p>
          <h1>{config.heroTitle}</h1>
          <p className={styles.subtitle}>{config.heroSubtitle}</p>
        </header>

        {/* ARTICLE GRID */}
        {articles.length > 0 ? (
          <section className={styles.articles}>
            <div className={styles.grid}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${categoryKey}/${article.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardKicker}>{config.shortLabel}</div>
                  <h3>{article.title}</h3>
                  <p className={styles.cardDescription}>
                    {article.description}
                  </p>
                  <div className={styles.cardMeta}>
                    {article.date && (
                      <span>
                        {new Date(article.date).toLocaleDateString("de-DE")}
                      </span>
                    )}
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </div>
                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <p>In dieser Kategorie befinden sich aktuell noch keine Artikel.</p>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(categories).map((key) => ({
    params: { category: key }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const categoryKey = params.category;
  const config = categories[categoryKey];

  const folder = path.join(process.cwd(), "content", categoryKey);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((file) => file.endsWith(".md"));

    articles = files.map((file) => {
      const source = fs.readFileSync(path.join(folder, file), "utf8");
      const { data, content } = matter(source);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "Ohne Titel",
        description: data.description || "",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200)
      };
    });
  }

  return {
    props: {
      categoryKey,
      config,
      articles
    }
  };
}
