import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";
import CATEGORY_CONFIG from "../../config/categoryConfig";

// Hilfsfunktion für Lesedauer
function getReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default function CategoryPage({ articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.container}>
        {/* Hero-Bereich */}
        <section className={styles.hero}>
          <span className={styles.kicker}>{config.kicker}</span>
          <h1 className={styles.heroTitle}>{config.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{config.heroSubtitle}</p>
        </section>

        {/* Artikel-Liste */}
        <section className={styles.articleSection}>
          <h2 className={styles.sectionTitle}>Neueste Artikel</h2>

          {articles.length === 0 ? (
            <p>In dieser Kategorie sind noch keine Artikel vorhanden.</p>
          ) : (
            <div className={styles.grid}>
              {articles.map((article, index) => (
                <Link
                  key={index}
                  href={`/${config.slug}/${article.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardKicker}>
                    {config.shortLabel}
                  </div>
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
                    <span>{article.readingTime} Min.</span>
                  </div>

                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* FAQ */}
        {config.faq && (
          <section className={styles.faqSection}>
            <h2>Häufige Fragen</h2>
            <div className={styles.faqGrid}>
              {config.faq.map((item, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_CONFIG);

  return {
    paths: categories.map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const config = CATEGORY_CONFIG[category];

  const folder = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      const slug = data.slug || file.replace(".md", "");

      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "Jetzt auf FinanzFreedom lesen.",
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
      articles,
      config,
    },
  };
}
