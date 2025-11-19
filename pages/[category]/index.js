import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";
import categoryConfig from "../../config/categoryConfig";

// kleine Reading-Time Funktion
function getReadingTime(text) {
  const words = text.split(" ").length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.heroTitle} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <p className={styles.kicker}>{config.kicker}</p>
          <h1>{config.heroTitle}</h1>
          <p className={styles.subtitle}>{config.heroSubtitle}</p>
        </section>

        {/* ARTICLES */}
        <section className={styles.articleSection}>
          <h2>Artikel in {config.shortLabel}</h2>
          {articles.length === 0 && <p>Keine Artikel vorhanden.</p>}

          <div className={styles.grid}>
            {articles.map((article, index) => (
              <Link
                href={`/${category}/${article.slug}`}
                key={index}
                className={styles.card}
              >
                <div className={styles.cardKicker}>{config.shortLabel}</div>
                <h3>{article.title}</h3>
                <p className={styles.cardDescription}>{article.description}</p>

                <div className={styles.cardMeta}>
                  {article.date && (
                    <span>{new Date(article.date).toLocaleDateString("de-DE")}</span>
                  )}
                  <span>{article.readingTime} Min. Lesezeit</span>
                </div>

                <span className={styles.cardLink}>Weiterlesen →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// ===== STATIC PATHS =====
export async function getStaticPaths() {
  const categories = Object.keys(categoryConfig);

  return {
    paths: categories.map((cat) => ({ params: { category: cat } })),
    fallback: false,
  };
}

// ===== STATIC PROPS =====
export async function getStaticProps({ params }) {
  const category = params.category;
  const config = categoryConfig[category];

  const folder = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((file) => file.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      const slug = data.slug || file.replace(".md", "");

      return {
        slug: slug.toLowerCase(),
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        date: data.date || null,
        readingTime: getReadingTime(content),
      };
    });

    // Sortieren nach Datum
    articles.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    });
  }

  return {
    props: {
      category,
      articles,
      config,
    },
  };
}
