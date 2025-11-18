import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

// ==== COMPONENT ====

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.heroTitle} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>{config.kicker}</span>
          <h1>{config.heroTitle}</h1>
          <p>{config.heroSubtitle}</p>
        </div>
      </header>

      <main className={styles.main}>

        {/* ARTICLES */}
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
                  <h3>{article.title}</h3>
                  <p className={styles.cardMeta}>
                    {article.date && (
                      <span>
                        {new Date(article.date).toLocaleDateString("de-DE")} •{" "}
                      </span>
                    )}
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </p>
                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {config.faq && config.faq.length > 0 && (
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

        {/* NEXT STEPS */}
        {config.nextSteps && config.nextSteps.length > 0 && (
          <section className={styles.nextStepsSection}>
            <h2 className={styles.sectionTitle}>Nächste Schritte</h2>

            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((item, i) => (
                <Link key={i} href={item.href} className={styles.nextCard}>
                  <span className={styles.nextBadge}>{item.badge}</span>
                  <h3>{item.title}</h3>
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

// ==== STATIC GENERATION ====

// alle Kategorien dynamisch aus der Config lesen
export async function getStaticPaths() {
  const configPath = path.join(process.cwd(), "config", "categories.json");
  const configFile = JSON.parse(fs.readFileSync(configPath, "utf8"));

  const paths = Object.keys(configFile).map((cat) => ({
    params: { category: cat },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;

  /** CONFIG */
  const configPath = path.join(process.cwd(), "config", "categories.json");
  const CONFIG = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const config = CONFIG[category] || {};

  /** CONTENT */
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

      const readingTime = Math.ceil(content.split(" ").length / 200);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "Artikel",
        description: data.description || "",
        date: data.date || null,
        readingTime,
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
