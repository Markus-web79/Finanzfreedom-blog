import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Werde finanziell frei</title>
        <meta
          name="description"
          content="FinanzFreedom: Lerne alles über Geld, Finanzen, Investments und den Weg zur finanziellen Freiheit."
        />
      </Head>

      {/* Hero-Bereich */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>FinanzFreedom</h1>
          <p>Dein Weg zur finanziellen Freiheit – einfach erklärt, ehrlich und machbar.</p>
          <Link href="#artikel" className={styles.ctaButton}>
            Jetzt starten
          </Link>
        </div>
      </section>

      {/* Drei Themenbereiche */}
      <section className={styles.themen}>
        <h2>Entdecke unsere Themen</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>💰 Investieren</h3>
            <p>Alles über ETFs, Aktien und passives Einkommen.</p>
            <Link href="/etf-grundlagen">Mehr erfahren →</Link>
          </div>

          <div className={styles.card}>
            <h3>🏦 Sparen & Budget</h3>
            <p>Wie du dein Geld smarter verwaltest und mehr behältst.</p>
            <Link href="/geldfehler-vermeiden">Zum Artikel →</Link>
          </div>

          <div className={styles.card}>
            <h3>🛡️ Versicherungen</h3>
            <p>Welche Versicherungen du wirklich brauchst – und welche nicht.</p>
            <Link href="/versicherungen">Jetzt lesen →</Link>
          </div>
        </div>
      </section>

      {/* Artikelvorschau */}
      <section id="artikel" className={styles.artikel}>
        <h2>Neueste Artikel</h2>
        <div className={styles.grid}>
          {allPosts?.length > 0 ? (
            allPosts.map((post) => (
              <div key={post.slug} className={styles.card}>
                <Link href={`/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>Keine Artikel gefunden.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} FinanzFreedom – Dein Weg zur Freiheit</p>
      </footer>
    </>
  );
}
