import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

// 🔥 Hilfsfunktion: Lesedauer berechnen
function getReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200)); // 200 Wörter = 1 Minute
}

// 🔥 Konfiguration aller Kategorien
const CATEGORY_CONFIG = {
  "etfs": {
    slug: "etfs",
    shortLabel: "ETFs",
    label: "ETFs & Indexfonds",
    kicker: "Kategorie • ETFs",
    heroTitle: "ETFs verstehen und gezielt nutzen.",
    heroSubtitle:
      "Von den Grundlagen bis zu cleveren Strategien – hier findest du alles, um entspannt und strukturiert in ETFs zu investieren.",
    seoDescription:
      "ETF-Guides, Broker-Vergleiche und Strategien – verständlich erklärt für deinen Vermögensaufbau.",
    faq: [
      {
        question: "Was ist ein ETF?",
        answer:
          "Ein ETF ist ein börsengehandelter Fonds, der einen Index wie den MSCI World nachbildet."
      },
      {
        question: "Wie starte ich einen ETF-Sparplan?",
        answer:
          "Wähle einen breit gestreuten ETF, lege eine Sparrate fest und richte einen Sparplan ein."
      }
    ],
    nextSteps: [
      {
        title: "ETF-Broker Vergleich",
        text: "Finde den besten Broker für dich.",
        href: "/vergleiche",
        badge: "Vergleich"
      }
    ]
  },

  // ==========================
  "geld-anlegen": {
    slug: "geld-anlegen",
    shortLabel: "Geld anlegen",
    label: "Geld anlegen & Vermögen aufbauen",
    kicker: "Kategorie • Geld anlegen",
    heroTitle: "Struktur für dein Geld – statt Chaos auf dem Konto.",
    heroSubtitle:
      "Hier lernst du, wie du Rücklagen bildest, sinnvoll investierst und Schritt für Schritt Vermögen aufbaust.",
    seoDescription:
      "Strategien, Grundlagen und Praxis-Guides rund ums Geld anlegen.",
    faq: [
      {
        question: "Womit sollte ich anfangen?",
        answer:
          "Mit Rücklagen für 3–6 Monatsausgaben. Danach ETFs oder andere Anlagen."
      }
    ],
    nextSteps: [
      {
        title: "ETF-Sparplan starten",
        text: "Die einfachste Methode, langfristig Vermögen aufzubauen.",
        href: "/etfs",
        badge: "Guide"
      }
    ]
  },

  // ==========================
  "versicherungen": {
    slug: "versicherungen",
    shortLabel: "Versicherungen",
    label: "Versicherungen verstehen & sparen",
    kicker: "Kategorie • Versicherungen",
    heroTitle: "Nur die Policen, die du wirklich brauchst.",
    heroSubtitle:
      "Wir zeigen dir, welche Versicherungen sinnvoll sind – und auf welche du verzichten kannst.",
    seoDescription:
      "Versicherungen einfach erklärt: Welche du brauchst, wie du sparst und Fehler vermeidest.",
    faq: [
      {
        question: "Welche Versicherungen braucht man wirklich?",
        answer:
          "Privathaftpflicht, Berufsunfähigkeit und Hausrat zählen zu den wichtigsten."
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
        href: "/versicherungen",
        badge: "Guide"
      }
    ]
  }
};

// =====================================================
//                 HAUPT-KOMPONENTE
// =====================================================

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} | FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.pageWrapper}>
        {/* ---------------- HERO ---------------- */}
        <section className={styles.hero}>
          <div className={styles.breadcrumb}>
            Startseite › {config.shortLabel}
          </div>

          <div className={styles.kicker}>{config.kicker}</div>

          <h1 className={styles.heroTitle}>{config.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{config.heroSubtitle}</p>
        </section>

        {/* ---------------- ARTICLE LIST ---------------- */}
        <section className={styles.articlesSection}>
          <div className={styles.sectionHeader}>
            <h2>Aktuelle Artikel in „{config.shortLabel}“</h2>
            <p>Alle Inhalte sind so aufgebaut, dass du Schritt für Schritt einsteigen kannst.</p>
          </div>

          {articles.length === 0 ? (
            <p style={{ color: "#ccc", textAlign: "center" }}>
              In dieser Kategorie gibt es noch keine Artikel.
            </p>
          ) : (
            <div className={styles.articlesGrid}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${category}/${article.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardKicker}>{config.shortLabel}</div>
                  <h3>{article.title}</h3>

                  <p className={styles.cardDescription}>{article.description}</p>

                  <div className={styles.cardMeta}>
                    <span>
                      {article.date
                        ? new Date(article.date).toLocaleDateString("de-DE")
                        : "—"}
                    </span>
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </div>

                  <span className={styles.cardLink}>Weiterlesen →</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ---------------- FAQ ---------------- */}
        {config.faq && config.faq.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
              <h2>Häufige Fragen</h2>
            </div>

            <div className={styles.faqGrid}>
              {config.faq.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ---------------- NEXT STEPS ---------------- */}
        {config.nextSteps && config.nextSteps.length > 0 && (
          <section className={styles.nextStepsSection}>
            <div className={styles.sectionHeader}>
              <h2>Nächste Schritte</h2>
            </div>

            <div className={styles.nextStepsGrid}>
              {config.nextSteps.map((step, i) => (
                <Link key={i} href={step.href} className={styles.nextCard}>
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

// =====================================================
//                 STATIC PATHS / PROPS
// =====================================================

export async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_CONFIG);

  return {
    paths: categories.map((category) => ({ params: { category } })),
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
      const filePath = path.join(folder, file);
      const src = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(src);

      const slug = (data.slug || file.replace(/\.md$/, "")).toLowerCase();

      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "Praxisnah erklärt auf FinanzFreedom.",
        date: data.date || null,
        readingTime: getReadingTime(content)
      };
    });

    // Neueste zuerst sortieren
    articles.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }

  return {
    props: {
      category,
      config,
      articles
    }
  };
}
