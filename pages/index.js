import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ articles = [] }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzen verstehen & Freiheit erreichen</title>
        <meta
          name="description"
          content="FinanzFreedom – Lerne, investiere und erreiche finanzielle Unabhängigkeit. Aktuelle Guides zu ETFs, Versicherungen, Sparen & mehr."
        />
      </Head>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Werde finanziell frei mit <span>FinanzFreedom</span>
          </h1>
          <p>
            Lerne, wie du dein Geld richtig anlegst, clever sparst und Schritt
            für Schritt finanzielle Unabhängigkeit erreichst.
          </p>
          <Link href="#themen" className={styles.ctaButton}>
            Jetzt starten
          </Link>
        </div>
      </section>

      {/* THEMENBEREICHE */}
      <section id="themen" className={styles.topics}>
        <h2>Themenwelten</h2>
        <div className={styles.topicGrid}>
          <Link href="/etfs" className={styles.topicCard}>
            <h3>Investieren</h3>
            <p>Alles über ETFs, Aktien und langfristigen Vermögensaufbau.</p>
          </Link>
          <Link href="/versicherungen" className={styles.topicCard}>
            <h3>Versichern</h3>
            <p>Welche Versicherungen wirklich wichtig sind – einfach erklärt.</p>
          </Link>
          <Link href="/geld-vermehren" className={styles.topicCard}>
            <h3>Geld vermehren</h3>
            <p>Strategien, Tipps & Tools für mehr Wachstum deines Geldes.</p>
          </Link>
        </div>
      </section>

      {/* ARTIKELÜBERSICHT */}
      <section className={styles.articles}>
        <h2>Aktuelle Artikel</h2>
        <div className={styles.articleGrid}>
          {articles.length === 0 ? (
            <p className={styles.noArticles}>
              Noch keine Artikel verfügbar – neue Inhalte werden bald geladen.
            </p>
          ) : (
            articles.map((article, index) => (
              <Link
                key={index}
                href={`/${article.slug}`}
                className={styles.articleCard}
              >
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className={styles.readMore}>Weiterlesen →</span>
              </Link>
            ))
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} FinanzFreedom – Dein Weg zur Freiheit</p>
        <div className={styles.footerLinks}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </footer>
    </>
  );
}
