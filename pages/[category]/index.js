import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "./CategoryPage.module.css";

// 🔥 Dynamisch: Kategorien aus config laden
import CATEGORIES from "../../config/categories";

export default function CategoryPage({ category, config, articles }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.container}>
        {/* HERO-BEREICH */}
        <section className={styles.hero}>
          <span className={styles.kicker}>{config.kicker}</span>
          <h1>{config.heroTitle}</h1>
          <p>{config.heroSubtitle}</p>
        </section>

        {/* ARTIKEL-GRID */}
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>

          {articles.length === 0 ? (
            <p className={styles.noArticles}>Noch keine Artikel vorhanden.</p>
          ) : (
            <div className={styles.grid}>
              {articles.map((a, i) => (
                <Link
                  key={i}
                  href={`/${category}/${a.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardKicker}>{config.shortLabel}</div>
                  <h3>{a.title}</h3>
                  <p className={styles.cardDescription}>{a.description}</p>

                  <div className={styles.cardMeta}>
                    {a.date && (
                      <span>
                        {new Date(a.date).toLocaleDateString("de-DE")} •{" "}
                      </span>
                    )}
                    <span>{a.readingTime} Min. Lesezeit</span>
                  </div>

                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* FAQ */}
        {config.faq?.length > 0 && (
          <section className={styles.faqSection}>
            <h2>Häufige Fragen</h2>
            <div className={styles.faqGrid}>
              {config.faq.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEXT STEPS */}
        {config.nextSteps?.length > 0 && (
          <section className={styles.nextStepsSection}>
            <h2>Nächste Schritte</h2>

            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((s, i) => (
                <Link key={i} href={s.href} className={styles.nextCard}>
                  <span className={styles.nextBadge}>{s.badge}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
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

export async function getStaticPaths() {
  // Alle Kategorien dynamisch aus config
  const paths = Object.keys(CATEGORIES).map((cat) => ({
    params: { category: cat }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const config = CATEGORIES[category];

  const folder = path.join(process.cwd(), "content", category);

  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const src = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(src);

      const slug = data.slug || file.replace(".md", "");

      const readingTime = Math.ceil(content.split(" ").length / 200);

      return {
        slug,
        title: data.title || "Unbenannter Artikel",
        description: data.description || "FinanzFreedom Artikel",
        date: data.date || null,
        readingTime
      };
    });

    articles.sort((a, b) =>
      !a.date || !b.date ? 0 : new Date(b.date) - new Date(a.date)
    );
  }

  return {
    props: {
      category,
      config,
      articles
    }
  };
}
