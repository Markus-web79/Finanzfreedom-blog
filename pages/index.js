import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Vergleiche die besten Finanzprodukte, lerne über ETFs, Versicherungen & Geldanlage – einfach, verständlich und unabhängig."
        />
      </Head>

      {/* HERO-BEREICH */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>FinanzFreedom</h1>
          <p>Dein Weg zur finanziellen Freiheit – einfach, sicher und seriös.</p>
          <a href="#themen" className={styles.cta}>
            Jetzt durchstarten 🚀
          </a>
        </div>
      </header>

      {/* HAUPTBEREICH */}
      <main className={styles.main}>
        {/* THEMEN / ARTIKEL */}
        <section id="themen" className={styles.section}>
          <h2>Aktuelle Themen & Vergleiche</h2>
          <div className={styles.grid}>
            {allPosts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
                <h3>{post.title}</h3>
                <p>{post.description || post.excerpt}</p>
                <span className={styles.readMore}>Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* INFOTEXT */}
        <section className={styles.section}>
          <h2>Warum FinanzFreedom?</h2>
          <p>
            Wir zeigen dir, wie du dein Geld verstehst, sinnvoll anlegst und Schritt für Schritt
            finanzielle Freiheit erreichst – ohne Fachchinesisch oder unrealistische Versprechen.
          </p>
        </section>

        {/* CALL TO ACTION */}
        <section className={styles.ctaSection}>
          <h2>Starte jetzt deine Reise zur finanziellen Freiheit</h2>
          <p>
            Erhalte klare Finanzvergleiche, einfache ETF-Guides und Tipps für den Vermögensaufbau.
          </p>
          <a href="#themen" className={styles.ctaLarge}>
            Jetzt vergleichen 🔍
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} FinanzFreedom – Wissen. Freiheit. Zukunft.
        </p>
      </footer>
    </>
  );
}

// Artikel laden
export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "description", "excerpt", "date"]);
  return {
    props: { allPosts },
  };
}
