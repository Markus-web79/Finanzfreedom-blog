import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – einfach, ehrlich und unabhängig. Finanzielle Freiheit beginnt mit Wissen."
        />
      </Head>

      {/* Hero-Bereich */}
      <Hero />

      {/* Hauptinhalt */}
      <main className={styles.main}>
        <section id="artikel" className={styles.container}>
          <h2 className={styles.sectionTitle}>Aktuelle Themen</h2>

          <div className={styles.grid}>
            {/* Artikel 1 */}
            <div className={styles.card}>
              <h3>ETF Broker Vergleich 2025</h3>
              <p>
                Finde den besten Anbieter für deine ETF-Investitionen – günstig,
                sicher und transparent.
              </p>
              <Link href="/etf-broker-vergleich" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>

            {/* Artikel 2 */}
            <div className={styles.card}>
              <h3>Diese Versicherungen brauchst du wirklich</h3>
              <p>
                Welche Policen sind sinnvoll – und welche kannst du dir sparen?
                Wir klären auf.
              </p>
              <Link href="/versicherungen" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>

            {/* Artikel 3 */}
            <div className={styles.card}>
              <h3>Dein Weg zur finanziellen Freiheit</h3>
              <p>
                Schritt für Schritt zu mehr Unabhängigkeit – lerne, wie du dein
                Geld für dich arbeiten lässt.
              </p>
              <Link href="/finanzielle-freiheit" className={styles.link}>
                Weiterlesen →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
