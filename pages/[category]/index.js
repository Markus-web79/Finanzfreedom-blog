import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";
import { getReadingTime } from "../../utils/readingTime";

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.wrapper}>

        {/* HERO-BEREICH -------------------------------------- */}
        <section className={styles.hero}>
          <p className={styles.kicker}>{config.kicker}</p>
          <h1>{config.heroTitle}</h1>
          <p className={styles.subtitle}>{config.heroSubtitle}</p>
        </section>

        {/* ARTIKEL-LISTE -------------------------------------- */}
        <section className={styles.articleSection}>
          <h2 className={styles.sectionTitle}>Aktuelle Inhalte</h2>

          {articles.length === 0 ? (
            <p className={styles.noArticles}>
              In dieser Kategorie gibt es noch keine Artikel.
            </p>
          ) : (
            <div className={styles.grid}>
              {articles.map((article, index) => (
                <Link
                  key={index}
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
                        {new Date(article.date).toLocaleDateString("de-DE")} •{" "}
                      </span>
                    )}
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </div>

                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* FAQ ------------------------------------------------ */}
        {config.faq && config.faq.length > 0 && (
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Häufige Fragen</h2>

            <div className={styles.faqGrid}>
              {config.faq.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEXT STEPS ---------------------------------------- */}
        {config.nextSteps && (
          <section className={styles.nextStepsSection}>
            <h2 className={styles.sectionTitle}>Nächste Schritte</h2>

            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((step, index) => (
                <Link key={index} href={step.href} className={styles.nextCard}>
                  <span className={styles.nextBadge}>{step.badge}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
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

/* DYNAMISCHE PFADE -------------------------------------------- */
export async function getStaticPaths() {
  const categoriesPath = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(categoriesPath);

  return {
    paths: categories.map((category) => ({
      params: { category }
    })),
    fallback: false,
  };
}

/* LADEN VON ARTIKELN ------------------------------------------ */
export async function getStaticProps({ params }) {
  const category = params.category;

  // Dynamische Config: liest automatisch aus /content/<category>/config.json
  const configFile = path.join(process.cwd(), "content", category, "config.json");

  let config = {
    slug: category,
    label: category.toUpperCase(),
    shortLabel: category,
    kicker: "Kategorie",
    heroTitle: "Kategorie",
    heroSubtitle: "",
    seoDescription: `Artikel über ${category}.`
  };

  if (fs.existsSync(configFile)) {
    config = { ...config, ...JSON.parse(fs.readFileSync(configFile, "utf8")) };
  }

  const folder = path.join(process.cwd(), "content", category);
  const articles = [];

  if (fs.existsSync(folder)) {
    fs.readdirSync(folder).forEach((file) => {
      if (!file.endsWith(".md")) return;

      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      articles.push({
        slug: data.slug || file.replace(".md", ""),
        title: data.title,
        description: data.description || "",
        date: data.date || null,
        readingTime: getReadingTime(content),
      });
    });
  }

  // Sortieren nach Datum (neu → alt)
  articles.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      category,
      articles,
      config,
    },
  };
}
