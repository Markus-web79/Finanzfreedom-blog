import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../../styles/CategoryPage.module.css";

// ================================
// KATEGORIE-KONFIGURATION
// ================================
const categoryConfig = {
  "investieren": {
    slug: "investieren",
    shortLabel: "Investieren",
    label: "Investieren",
    kicker: "Strategien & Grundlagen",
    heroTitle: "Investieren – verständlich erklärt",
    heroSubtitle: "ETFs, Aktien, Strategien – leicht erklärt.",
    seoDescription: "Investieren: ETFs, Aktien, Strategien – verständlich erklärt auf FinanzFreedom.",
    faq: [
      {
        question: "Womit sollte ich anfangen?",
        answer: "Starte mit Rücklagen für 3–6 Monatsausgaben. Danach ETFs oder andere Anlagen."
      }
    ],
    nextSteps: [
      {
        title: "ETF-Sparplan starten",
        text: "Die einfachste Methode, langfristig Vermögen aufzubauen.",
        href: "/investieren/etf-sparplan-starten",
        badge: "Guide"
      }
    ]
  },

  // ================================
  // VERSICHERUNGEN
  // ================================
  "versicherungen": {
    slug: "versicherungen",
    shortLabel: "Versicherungen",
    label: "Versicherungen verstehen & sparen",
    kicker: "Kategorie: Versicherungen",
    heroTitle: "Nur die Policen, die du wirklich brauchst.",
    heroSubtitle: "Wir zeigen dir, welche Versicherungen sinnvoll sind – und auf welche du verzichten kannst.",
    seoDescription:
      "Versicherungen einfach erklärt: Welche du brauchst, wie du sparst und Fehler vermeidest.",
    faq: [
      {
        question: "Welche Versicherungen braucht man wirklich?",
        answer: "Privathaftpflicht, Berufsunfähigkeit und Hausrat zählen zu den wichtigsten."
      },
      {
        question: "Welche Versicherungen sind überflüssig?",
        answer: "Geräteversicherungen, Handyversicherungen und viele Zusatzpakete."
      }
    ],
    nextSteps: [
      {
        title: "Die wichtigsten Versicherungen",
        text: "Shortlist: schnell Klarheit gewinnen.",
        href: "/versicherungen/diese-versicherungen-brauchst-du-wirklich",
        badge: "Guide"
      }
    ]
  },

  // ================================
  // GELD VERMEHREN
  // ================================
  "geld-vermehren": {
    slug: "geld-vermehren",
    shortLabel: "Geld vermehren",
    label: "Geld vermehren",
    kicker: "Tipps & Strategien",
    heroTitle: "Geld vermehren: Tipps & Strategien für 2025",
    heroSubtitle: "Lerne, wie dein Geld für dich arbeitet – verständlich erklärt.",
    seoDescription:
      "Strategien und Tipps, wie du dein Geld vermehrst und ein Vermögen aufbaust.",
    faq: [
      {
        question: "Womit sollte ich anfangen?",
        answer: "Starte mit Rücklagen, dann ETFs oder andere Anlagen – Schritt für Schritt."
      }
    ],
    nextSteps: [
      {
        title: "Passives Einkommen aufbauen",
        text: "Wie du Schritt für Schritt ein regelmäßiges Einkommen aufbaust.",
        href: "/geld-vermehren/passives-einkommen-2025",
        badge: "Guide"
      }
    ]
  }
};

// ================================
// STATIC PATHS – erzeugt URLs
// ================================
export async function getStaticPaths() {
  const categories = Object.keys(categoryConfig);

  const paths = categories.map((category) => ({
    params: { category }
  }));

  return {
    paths,
    fallback: false
  };
}

// ================================
// STATIC PROPS – lädt Artikel einer Kategorie
// ================================
export async function getStaticProps({ params }) {
  const { category } = params;

  const folder = path.join(process.cwd(), "content", category);

  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder);

    articles = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const fullPath = path.join(folder, file);
        const fileContent = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContent);

        return {
          ...data,
          slug: data.slug || file.replace(".md", "")
        };
      });
  }

  return {
    props: {
      category,
      articles,
      config: categoryConfig[category]
    }
  };
}

// ================================
// KOMPONENTE – Darstellung der Seite
// ================================
export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} | FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.pageWrapper}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.kicker}>{config.kicker}</div>
          <h1 className={styles.heroTitle}>{config.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{config.heroSubtitle}</p>
        </section>

        {/* ARTIKEL LISTE */}
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionHeader}>Artikel</h2>

          <div className={styles.articlesGrid}>
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/${category}/${a.slug}`}
                className={styles.card}
              >
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
