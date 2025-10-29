import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ allPosts }) {
  return (
    <div className={styles.main}>
      {/* Hero-Bereich */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>FinanzFreedom</h1>
          <p>Dein Weg zur finanziellen Freiheit – einfach, sicher und seriös.</p>
          <Link href="#themen" className={styles.cta}>
            Jetzt entdecken 🚀
          </Link>
        </div>
      </section>

      {/* Artikelübersicht */}
      <main id="themen" className={styles.section}>
        <h2>Aktuelle Themen & Vergleiche</h2>
        <div className={styles.grid}>
          {allPosts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </main>

      {/* Über uns */}
      <section className={styles.about}>
        <h2>Warum FinanzFreedom?</h2>
        <p>
          Wir zeigen dir, wie du dein Geld verstehst, sinnvoll anlegst und Schritt für Schritt
          finanzielle Freiheit erreichst – ohne Fachchinesisch oder unrealistische Versprechen.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} FinanzFreedom – Wissen. Freiheit. Zukunft.</p>
      </footer>
    </div>
  );
}

// Beispiel-Props
export async function getStaticProps() {
  return {
    props: {
      allPosts: [
        // Platzhalter bis Daten dynamisch kommen
        { slug: "etf-broker-vergleich-2025", title: "ETF-Broker Vergleich 2025", description: "Finde den besten Anbieter im Überblick" },
      ],
    },
  };
}
