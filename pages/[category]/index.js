import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.heroTitle} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>{config.kicker}</span>
          <h1>{config.heroTitle}</h1>
          <p>{config.heroSubtitle}</p>
        </div>
      </header>

      <main className={styles.main}>
        {articles.length > 0 && (
          <section className={styles.articleSection}>
            <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>

            <div className={styles.grid}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${category}/${article.slug}`}
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
        )}

        {/* FAQ */}
        {config.faq && (
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Häufige Fragen</h2>

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

        {/* Next Steps */}
        {config.nextSteps && (
          <section className={styles.nextStepsSection}>
            <h2 className={styles.sectionTitle}>Nächste Schritte</h2>

            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((item, i) => (
                <Link key={i} href={item.href} className={styles.nextCard}>
                  <span className={styles.nextBadge}>{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className={styles.cardLink}>Ansehen →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

// ===== STATIC GENERATION =====

export async function getStaticPaths() {
  const categories = fs
    .readdirSync(path.join("content"))
    .filter((dir) =>
      fs.statSync(path.join("content", dir)).isDirectory()
    );

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;

  const categoryConfigPath = path.join(
    process.cwd(),
    "config",
    "categories.json"
  );

  const configFile = fs.readFileSync(categoryConfigPath, "utf8");
  const CONFIG = JSON.parse(configFile);

  const config =
    CONFIG[category] || CONFIG["default"] || {};

  const folder = path.join(process.cwd(), "content", category);

  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const fullPath = path.join(folder, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "Artikel",
        description: data.description || "",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200),
      };
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
