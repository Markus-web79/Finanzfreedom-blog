import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";
import CATEGORY_CONFIG from "../../config/categories.json";

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – {config.label}</title>
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
        <section className={styles.articleSection}>
          <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>
          <div className={styles.grid}>
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/${category}/${a.slug}`}
                className={styles.card}
              >
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className={styles.cardLink}>Weiterlesen →</span>
              </Link>
            ))}
          </div>
        </section>

        {config.faq && (
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Häufige Fragen</h2>
            <div className={styles.faqGrid}>
              {config.faq.map((q, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{q.question}</h3>
                  <p>{q.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {config.nextSteps && (
          <section className={styles.nextStepsSection}>
            <h2 className={styles.sectionTitle}>Nächste Schritte</h2>
            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((n, i) => (
                <Link key={i} href={n.href} className={styles.nextCard}>
                  <span className={styles.nextBadge}>{n.badge}</span>
                  <h3>{n.title}</h3>
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

export async function getStaticPaths() {
  const categories = fs
    .readdirSync("content")
    .filter((dir) => fs.statSync(path.join("content", dir)).isDirectory());

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;

  const configFile = fs.readFileSync(
    path.join(process.cwd(), "config", "categories.json"),
    "utf8"
  );
  const CONFIG = JSON.parse(configFile);

  const config = CONFIG[category] || CONFIG["default"] || {};

  const folder = path.join(process.cwd(), "content", category);

  let articles = [];
  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const fullPath = path.join(folder, file);
      const content = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(content);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "Artikel",
        description: data.description || "",
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
