import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

const CATEGORY_CONFIG = {
  "etfs": {
    label: "ETFs & Indexfonds",
    kicker: "Kategorie • ETFs",
    heroTitle: "ETFs verstehen und gezielt nutzen.",
    heroSubtitle:
      "Einfach, klar und sicher investieren – alle ETF-Strategien auf einen Blick.",
    seoDescription: "Lerne ETFs richtig einzusetzen und langfristig Vermögen aufzubauen.",
  },

  "geld-vermehren": {
    label: "Geld vermehren",
    kicker: "Kategorie • Geld vermehren",
    heroTitle: "Starte heute: Wege, dein Geld intelligent wachsen zu lassen.",
    heroSubtitle:
      "Von Einsteiger-Methoden bis fortgeschrittenen Strategien – alles kompakt erklärt.",
    seoDescription:
      "Lerne, wie du dein Geld sicher und langfristig vermehren kannst.",
  },

  "investieren": {
    label: "Investieren",
    kicker: "Kategorie • Investieren",
    heroTitle: "Investieren Schritt für Schritt verstehen.",
    heroSubtitle:
      "Ein klarer Weg: Strategien, Grundlagen und Tools für deinen Vermögensaufbau.",
    seoDescription:
      "Alles über Investieren: Aktien, ETFs, Immobilien, Rohstoffe und mehr.",
  },

  "versicherungen": {
    label: "Versicherungen",
    kicker: "Kategorie • Versicherungen",
    heroTitle: "Die wichtigsten Versicherungen – klar und verständlich erklärt.",
    heroSubtitle:
      "Welche brauchst du wirklich? Wir sortieren, vergleichen und erklären.",
    seoDescription:
      "Versicherungen verstehen – ohne Fachchinesisch. Spare Geld und Nerven.",
  },

  "sparen-vorsorge": {
    label: "Sparen & Vorsorge",
    kicker: "Kategorie • Sparen & Vorsorge",
    heroTitle: "Sparen neu gedacht – für dich, deine Familie und die Zukunft.",
    heroSubtitle:
      "Für Kinder, Enkelkinder oder dich selbst: langfristige Vorsorge einfach erklärt.",
    seoDescription:
      "Alles rund ums Sparen, Rücklagen, Kinder-Depot, Altersvorsorge und Familienfinanzen.",
  }
};

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <header className={styles.hero}>
        <span className={styles.kicker}>{config.kicker}</span>
        <h1>{config.heroTitle}</h1>
        <p>{config.heroSubtitle}</p>
      </header>

      <main className={styles.container}>
        {articles.length === 0 ? (
          <p className={styles.noArticles}>
            Keine Artikel in dieser Kategorie vorhanden.
          </p>
        ) : (
          <div className={styles.grid}>
            {articles.map((a, i) => (
              <Link
                key={i}
                href={`/${category}/${a.slug}`}
                className={styles.card}
              >
                <div className={styles.cardKicker}>{config.label}</div>
                <h3>{a.title}</h3>
                <p className={styles.cardDescription}>{a.description}</p>

                <div className={styles.cardMeta}>
                  {a.date && (
                    <span>{new Date(a.date).toLocaleDateString("de-DE")}</span>
                  )}
                  <span>{a.readingTime} Min.</span>
                </div>

                <span className={styles.cardLink}>Weiterlesen →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_CONFIG).map((category) => ({
      params: { category }
    })),
    fallback: false
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
      const raw = fs.readFileSync(path.join(folder, file), "utf8");
      const { data, content } = matter(raw);

      const slug = data.slug || file.replace(".md", "");

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200),
      };
    });
  }

  return {
    props: { category, articles, config }
  };
}
