import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CategoryNav from "../components/CategoryNav";
import Hero from "../components/Hero";

export default function Home({ articles = [] }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Wissen, das dich frei macht</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien, die wirklich funktionieren."
        />
      </Head>

      {/* Neuer Hero-Bereich */}
      <Hero />

      {/* Kategorie-Navigation */}
      <CategoryNav />

      <main className={styles.main}>
        {/* Themenwelten */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Themenwelten</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <h3>Investieren</h3>
              <p>Alles über ETFs, Aktien und langfristigen Vermögensaufbau.</p>
              <Link href="/etfs" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>

            <div className={styles.categoryCard}>
              <h3>Versichern</h3>
              <p>
                Welche Versicherungen wirklich wichtig sind – einfach erklärt.
              </p>
              <Link href="/versicherungen" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>

            <div className={styles.categoryCard}>
              <h3>Geld vermehren</h3>
              <p>
                Strategien, Tipps & Tools für mehr Wachstum deines Geldes.
              </p>
              <Link href="/geld-anlegen" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>
          </div>
        </section>

        {/* Aktuelle Artikel */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>
          {articles.length === 0 ? (
            <p className={styles.emptyText}>
              Noch keine Artikel verfügbar – neue Inhalte werden bald geladen.
            </p>
          ) : (
            <div className={styles.articlesGrid}>
              {articles.map((article) => (
                <div key={article.slug} className={styles.card}>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <Link href={`/${article.category}/${article.slug}`}>
                    Weiterlesen →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 FinanzFreedom – Dein Weg zur Freiheit</p>
        <div className={styles.footerLinks}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </footer>
    </>
  );
}
