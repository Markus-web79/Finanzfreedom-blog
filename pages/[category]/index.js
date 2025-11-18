import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";


// ------------------------------------------------------------
// ZENTRALE KONFIGURATION FÜR ALLE KATEGORIEN
// → Neue Kategorien nur hier hinzufügen, läuft alles automatisch
// ------------------------------------------------------------
const CATEGORY_CONFIG = {
  "etfs": {
    label: "ETFs & Indexfonds",
    kicker: "Kategorie • ETFs",
    heroTitle: "ETFs verstehen. Clever investieren.",
    heroSubtitle:
      "Klare ETF-Strategien, Einsteigerwissen und moderne Vermögensbildung — verständlich erklärt.",
    seoDescription:
      "ETF-Wissen, Strategien, Tipps und Vergleiche. Lerne langfristig Vermögen aufzubauen.",
  },

  "geld-vermehren": {
    label: "Geld vermehren",
    kicker: "Kategorie • Geld vermehren",
    heroTitle: "Clever Geld vermehren — ohne Risiko-Chaos.",
    heroSubtitle:
      "Strategien, die wirklich funktionieren. Für Berufstätige, Einsteiger & Fortgeschrittene.",
    seoDescription:
      "Strategien, Tools & Anleitungen, um dein Geld planbar zu vermehren.",
  },

  "investieren": {
    label: "Investieren",
    kicker: "Kategorie • Investieren",
    heroTitle: "Investieren für Einsteiger & Profis.",
    heroSubtitle:
      "Lerne, wie du dein Geld sinnvoll und strukturiert anlegst.",
    seoDescription:
      "Investieren leicht erklärt – Aktien, ETFs, Immobilien & mehr.",
  },

  "versicherung": {
    label: "Versicherungen",
    kicker: "Kategorie • Versicherungen",
    heroTitle: "Versicherungen verstehen. Richtig absichern.",
    heroSubtitle:
      "Einfach erklärt, ohne Fachchinesisch. Welche Versicherungen du wirklich brauchst.",
    seoDescription:
      "Versicherungen erklärt: welche wichtig sind, welche Geld kosten – aber nichts bringen.",
  },

  "spar-tipps": {
    label: "Sparen & Haushaltsgeld",
    kicker: "Kategorie • Sparen",
    heroTitle: "Sparen ohne Verzicht.",
    heroSubtitle:
      "Praktische Spartipps, Geldorganisation & clevere Methoden fürs tägliche Leben.",
    seoDescription:
      "Sparen, Budget, Haushaltsgeld – verständlich erklärt mit modernen Methoden.",
  },

  "kinder": {
    label: "Finanzen für Kinder",
    kicker: "Kategorie • Kinder",
    heroTitle: "Sparen & Investieren für Kinder.",
    heroSubtitle:
      "Wie du für Kinder oder Enkel optimal sprichwörtlich die Zukunft finanzierst.",
    seoDescription:
      "ETF-Sparen für Kinder, Konto, Vermögensaufbau – modern & verständlich.",
  },
};


// ------------------------------------------------------------
// PAGE KOMPONENTE
// ------------------------------------------------------------
export default function CategoryPage({ category, config, articles }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.container}>
        {/* HERO / HEADER */}
        <header className={styles.hero}>
          <span className={styles.kicker}>{config.kicker}</span>
          <h1 className={styles.heroTitle}>{config.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{config.heroSubtitle}</p>
        </header>

        {/* ARTIKELLISTE */}
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>Alle Artikel in {config.label}</h2>

          {articles.length === 0 && (
            <p className={styles.empty}>In dieser Kategorie gibt es noch keine Artikel.</p>
          )}

          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${category}/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardInner}>
                  <span className={styles.cardKicker}>{config.label}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>

                  <div className={styles.cardMeta}>
                    <span>{article.readingTime} Min. Lesezeit</span>
                    {article.date && (
                      <span>{new Date(article.date).toLocaleDateString("de-DE")}</span>
                    )}
                  </div>

                  <span className={styles.cardLink}>Weiterlesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}



// ------------------------------------------------------------
// STATIC PATHS
// ------------------------------------------------------------
export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_CONFIG).map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
}



// ------------------------------------------------------------
// STATIC PROPS
// ------------------------------------------------------------
export async function getStaticProps({ params }) {
  const category = params.category;

  const config = CATEGORY_CONFIG[category] || {
    label: "Unbekannt",
    heroTitle: "Kategorie",
    heroSubtitle: "",
    seoDescription: "",
    kicker: "",
  };

  const folder = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder).filter((file) => file.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title || "Ohne Titel",
        description: data.description || "",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200),
      };
    });
  }

  // Neueste zuerst
  articles.sort((a, b) =>
    new Date(b.date || "1990") - new Date(a.date || "1990")
  );

  return {
    props: { category, config, articles },
  };
}
