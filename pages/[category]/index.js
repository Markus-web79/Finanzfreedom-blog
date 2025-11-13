// pages/[category]/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

// Zentrale Konfiguration für alle Kategorien (Ultra-Variante)
const CATEGORY_CONFIG = {
  "etfs": {
    slug: "etfs",
    label: "ETFs & Indexfonds",
    shortLabel: "ETFs",
    kicker: "Kategorie • ETFs",
    heroTitle: "ETFs verstehen und gezielt nutzen.",
    heroSubtitle:
      "Von den Grundlagen bis zu cleveren Strategien – hier findest du alles, um entspannt und strukturiert in ETFs zu investieren.",
    seoDescription:
      "Lerne, wie du ETFs sinnvoll einsetzt, dein Risiko streust und langfristig Vermögen aufbaust. Praxisnahe Guides, Strategien und Vergleiche.",
    faq: [
      {
        question: "Was ist ein ETF und wie funktioniert er?",
        answer:
          "Ein ETF ist ein börsengehandelter Fonds, der einen Index wie den MSCI World nachbildet. Du kaufst mit einem Produkt automatisch viele einzelne Werte und streust so dein Risiko."
      },
      {
        question: "Wie starte ich mit einem ETF-Sparplan?",
        answer:
          "Suche dir einen breit gestreuten ETF, lege eine monatliche Sparrate fest und richte einen automatischen Sparplan bei deinem Broker ein. Wichtig: Durchhalten und nicht bei jedem Kursschwankungs-Panik verkaufen."
      },
      {
        question: "Wie viele ETFs brauche ich wirklich?",
        answer:
          "Für die meisten Privatanleger reichen 1–3 breit gestreute ETFs vollkommen aus. Wichtiger als die exakte Mischung ist, dass du eine einfache, verständliche Strategie hast, die du langfristig durchziehst."
      }
    ],
    nextSteps: [
      {
        title: "ETF-Broker Vergleich",
        text: "Vergleiche Gebühren, Sparpläne und Service der wichtigsten Broker.",
        href: "/vergleiche",
        badge: "Vergleich"
      },
      {
        title: "ETF-Sparplan Rechner",
        text: "Berechne, wie sich dein Vermögen mit ETFs über die Jahre entwickeln kann.",
        href: "/tools",
        badge: "Tool"
      }
    ]
  },
  "geld-anlegen": {
    slug: "geld-anlegen",
    label: "Geld anlegen & Vermögen aufbauen",
    shortLabel: "Geld anlegen",
    kicker: "Kategorie • Geld anlegen",
    heroTitle: "Struktur für dein Geld – statt Chaos auf dem Konto.",
    heroSubtitle:
      "Hier lernst du, wie du Rücklagen bildest, sinnvoll investierst und dir Schritt für Schritt dein Vermögen aufbaust.",
    seoDescription:
      "Strategien, Tipps und Praxis-Guides rund ums Geld anlegen – von Rücklagen über ETFs bis zu langfristigen Vermögensstrategien.",
    faq: [
      {
        question: "Womit sollte ich beim Geld anlegen anfangen?",
        answer:
          "Der erste Schritt ist immer ein Notgroschen von 3–6 Monatsausgaben auf einem sicheren Konto. Erst danach macht es Sinn, in ETFs, Aktien oder andere Anlagen zu investieren."
      },
      {
        question: "Wie viel sollte ich pro Monat investieren?",
        answer:
          "Als grobe Orientierung sind 10–20 % deines Nettoeinkommens ein guter Start. Wichtig: Konsequent bleiben und die Sparrate an dein Einkommen anpassen."
      },
      {
        question: "Sind Tagesgeld und Festgeld noch sinnvoll?",
        answer:
          "Ja – als Baustein für Rücklagen oder planbare Ziele. Für langfristigen Vermögensaufbau sind jedoch ETFs meist besser geeignet, weil sie mehr Renditechancen bieten."
      }
    ],
    nextSteps: [
      {
        title: "Top-Angebote vergleichen",
        text: "Finde die besten Konten, Depots und Sparangebote für deinen Start.",
        href: "/vergleiche",
        badge: "Vergleich"
      },
      {
        title: "Finanz-Dashboard nutzen",
        text: "Behalte deine Ziele, Sparraten und Investments im Blick.",
        href: "/",
        badge: "Dashboard"
      }
    ]
  },
  "versicherungen": {
    slug: "versicherungen",
    label: "Versicherungen verstehen & sortieren",
    shortLabel: "Versicherungen",
    kicker: "Kategorie • Versicherungen",
    heroTitle: "Nur die Policen, die du wirklich brauchst.",
    heroSubtitle:
      "Raus aus dem Versicherungs-Dschungel: Wir zeigen dir, welche Versicherungen sinnvoll sind – und welche du getrost kündigen kannst.",
    seoDescription:
      "Übersichtliche Guides zu Haftpflicht, Berufsunfähigkeit, Krankenversicherung und mehr. Verständlich erklärt, ohne Fachchinesisch.",
    faq: [
      {
        question: "Welche Versicherungen sind wirklich wichtig?",
        answer:
          "Für die meisten Menschen sind private Haftpflicht, Berufsunfähigkeits- und eine gute Krankenversicherung die wichtigsten Bausteine. Viele andere Policen sind verzichtbar oder nur in Spezialfällen sinnvoll."
      },
      {
        question: "Wie erkenne ich überflüssige Versicherungen?",
        answer:
          "Oft sind es doppelte Absicherungen (z. B. Handyversicherung + Hausrat) oder Produkte mit geringem Nutzen und hohen Kosten. Ein systematischer Check deiner Verträge bringt schnell Klarheit."
      },
      {
        question: "Lohnt sich ein Versicherungsberater?",
        answer:
          "Ein unabhängiger Honorarberater kann sich lohnen, wenn es um große Themen wie Berufsunfähigkeit oder Altersvorsorge geht. Wichtig ist, dass die Beratung nicht über Provisionen der Versicherer bezahlt wird."
      }
    ],
    nextSteps: [
      {
        title: "Versicherungstarife vergleichen",
        text: "Finde günstige Tarife mit guter Leistung – ohne Werbeversprechen.",
        href: "/vergleiche",
        badge: "Vergleich"
      },
      {
        title: "Vertragscheck starten",
        text: "Gehe deine bestehenden Policen Schritt für Schritt durch.",
        href: "/tools",
        badge: "Checkliste"
      }
    ]
  },
  "geld-vermehren": {
    slug: "geld-vermehren",
    label: "Geld vermehren & Einkommen steigern",
    shortLabel: "Geld vermehren",
    kicker: "Kategorie • Geld vermehren",
    heroTitle: "Mehr aus deinem Einkommen herausholen.",
    heroSubtitle:
      "Hier geht es um Strategien für zusätzliche Einnahmen, clevere Sparideen und smartes Investieren – ohne Lotto und ohne Hokuspokus.",
    seoDescription:
      "Nebenjobs, Side-Business, smarter Umgang mit Ausgaben und Investitionen: So steigerst du Schritt für Schritt dein verfügbares Geld.",
    faq: [
      {
        question: "Was ist der einfachste Weg, mehr Geld übrig zu haben?",
        answer:
          "Die Kombination aus Ausgaben-Check (Abos, Versicherungen, Alltagskosten) und einer automatischen Sparrate direkt nach Gehaltszahlung ist der schnellste Hebel."
      },
      {
        question: "Lohnt sich ein Nebenjob oder Side-Business?",
        answer:
          "Kurzfristig kann ein Nebenjob helfen, Rücklagen aufzubauen. Langfristig ist ein skalierbares Side-Business oder eine bessere Qualifikation oft sinnvoller."
      },
      {
        question: "Wie gefährlich sind „schnell reich werden“-Angebote?",
        answer:
          "Sehr gefährlich. Seriöser Vermögensaufbau dauert Jahre, nicht Tage. Hohe versprochene Renditen bedeuten meist auch ein hohes Risiko oder sind schlicht unseriös."
      }
    ],
    nextSteps: [
      {
        title: "Ideen für Zusatz-Einkommen",
        text: "Seriöse Möglichkeiten für mehr Einnahmen – ohne Schneeballsysteme.",
        href: "/blog",
        badge: "Inspiration"
      },
      {
        title: "Zinseszinseffekt nutzen",
        text: "Sieh dir an, wie regelmäßiges Investieren dein Vermögen wachsen lässt.",
        href: "/tools",
        badge: "Rechner"
      }
    ]
  },
  "tools": {
    slug: "tools",
    label: "Rechner & Tools",
    shortLabel: "Tools & Rechner",
    kicker: "Kategorie • Tools & Rechner",
    heroTitle: "Zahlen klar sehen, smarter entscheiden.",
    heroSubtitle:
      "Nutze Zinseszinsrechner, Sparplan-Tools und Vergleiche, um deine Finanzentscheidungen fundiert zu treffen.",
    seoDescription:
      "Interaktive Finanz-Tools: Zinseszins, Sparziele, Budgetplanung und mehr. Schnell ausprobieren, besser entscheiden.",
    faq: [
      {
        question: "Welche Rechner sind für den Start am wichtigsten?",
        answer:
          "Zinseszins- und Sparplanrechner zeigen dir, welchen Effekt regelmäßiges Investieren hat. Ein Haushalts- oder Budgetrechner hilft dir, Überblick über deine Ausgaben zu bekommen."
      },
      {
        question: "Wie zuverlässig sind Online-Rechner?",
        answer:
          "Sie liefern gute Näherungswerte, ersetzen aber keine individuelle Beratung. Wichtig ist, dass du die Annahmen verstehst (Rendite, Laufzeit, Steuern usw.)."
      },
      {
        question: "Kann ich meine echten Daten verwenden?",
        answer:
          "Du kannst Beispielwerte oder echte Zahlen nutzen. Persönliche Daten wie Kontonummern, Passwörter oder genaue Vermögenswerte gehören aber nie in Online-Formulare."
      }
    ],
    nextSteps: [
      {
        title: "Alle Tools entdecken",
        text: "Finde den passenden Rechner für dein aktuelles Finanzthema.",
        href: "/tools",
        badge: "Tools"
      },
      {
        title: "Passende Guides lesen",
        text: "Vertiefe dein Wissen mit passenden Artikeln aus den anderen Kategorien.",
        href: "/blog",
        badge: "Guides"
      }
    ]
  }
};

// Kleine Hilfsfunktion: Lesezeit schätzen
function getReadingTime(text) {
  if (!text) return 2;
  const words = text.split(/\s+/).length;
  return Math.max(2, Math.round(words / 200)); // ca. 200 Wörter / Minute
}

export default function CategoryPage({ category, articles, config }) {
  return (
    <>
      <Head>
        <title>{config.label} – FinanzFreedom</title>
        <meta name="description" content={config.seoDescription} />
      </Head>

      <main className={styles.page}>
        {/* Hero-Bereich */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.breadcrumb}>
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>{config.shortLabel}</span>
            </div>

            <p className={styles.kicker}>{config.kicker}</p>
            <h1>{config.heroTitle}</h1>
            <p className={styles.subtitle}>{config.heroSubtitle}</p>

            <div className={styles.heroMeta}>
              <span>✓ Praxisnahe Inhalte</span>
              <span>✓ Verständlich erklärt</span>
              <span>✓ Fokus: finanzielle Freiheit</span>
            </div>
          </div>

          <div className={styles.heroCard}>
            <h2>{config.shortLabel} auf einen Blick</h2>
            <p>
              Du bist hier richtig, wenn du deine Finanzen sortieren, Fehler
              vermeiden und strukturiert Vermögen aufbauen möchtest – ohne
              Fachchinesisch und ohne Verkaufsdruck.
            </p>
            <ul>
              <li>🔍 Klare Einordnung statt Finanz-Wirrwarr</li>
              <li>📚 Schritt-für-Schritt Erklärungen</li>
              <li>🧠 Strategien, die du wirklich umsetzen kannst</li>
            </ul>
          </div>
        </section>

        {/* Themen-Navigation (einfach, aber übersichtlich) */}
        <nav className={styles.categoryNav}>
          <Link
            href="/etfs"
            className={
              category === "etfs"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            ETFs
          </Link>
          <Link
            href="/geld-anlegen"
            className={
              category === "geld-anlegen"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Geld anlegen
          </Link>
          <Link
            href="/versicherungen"
            className={
              category === "versicherungen"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Versicherungen
          </Link>
          <Link
            href="/geld-vermehren"
            className={
              category === "geld-vermehren"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Geld vermehren
          </Link>
          <Link
            href="/tools"
            className={
              category === "tools"
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Tools & Rechner
          </Link>
        </nav>

        {/* Artikel-Grid */}
        <section className={styles.articlesSection}>
          <div className={styles.sectionHeader}>
            <h2>Aktuelle Artikel in „{config.shortLabel}“</h2>
            <p>
              Alle Inhalte sind so aufgebaut, dass du sie Schritt für Schritt
              durchgehen kannst – ideal, um dir nach und nach dein Finanzwissen
              aufzubauen.
            </p>
          </div>

          {articles.length === 0 ? (
            <p className={styles.empty}>
              In dieser Kategorie sind noch keine Artikel veröffentlicht. Neue
              Inhalte werden bald automatisch generiert.
            </p>
          ) : (
            <div className={styles.grid}>
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
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
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </div>
                  <span className={styles.cardLink}>
                    Weiterlesen →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* FAQ / Fragen-Bereich */}
        {config.faq && config.faq.length > 0 && (
          <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
              <h2>Häufige Fragen zu {config.shortLabel}</h2>
              <p>
                Die wichtigsten Basics auf einen Blick – damit du schnell Klarheit
                bekommst, bevor du Entscheidungen triffst.
              </p>
            </div>

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

        {/* Nächste Schritte / Call-to-Action */}
        {config.nextSteps && config.nextSteps.length > 0 && (
          <section className={styles.nextStepsSection}>
            <div className={styles.sectionHeader}>
              <h2>Nächste Schritte</h2>
              <p>
                Wenn du das Thema weiter vertiefen möchtest, sind das hier deine
                besten nächsten Aktionen.
              </p>
            </div>

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

export async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_CONFIG);

  return {
    paths: categories.map((category) => ({
      params: { category }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;

  const config =
    CATEGORY_CONFIG[category] ||
    CATEGORY_CONFIG["geld-anlegen"]; // Fallback, sollte aber nicht passieren

  const folder = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((file) => file.endsWith(".md"));

    articles = files.map((file) => {
      const filePath = path.join(folder, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      const slug = (data.slug || file.replace(/\.md$/, "")).toLowerCase();

      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description:
          data.description || "Praxisnah erklärt auf FinanzFreedom.",
        date: data.date || null,
        readingTime: getReadingTime(content)
      };
    });

    // Neueste Artikel zuerst (falls Datum vorhanden)
    articles.sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }

  return {
    props: {
      category,
      articles,
      config
    }
  };
}
