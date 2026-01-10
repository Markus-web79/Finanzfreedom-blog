import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit aufbauen</title>
        <meta
          name="description"
          content="Unabhängiges Finanzportal für Investieren, ETFs, Versicherungen und finanzielle Freiheit."
        />
      </Head>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1 className={styles.title}>FinanzFreedom</h1>
          <p className={styles.subtitle}>
            Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
            finanzielle Freiheit.
          </p>
        </section>

        {/* PORTAL GRID */}
        <section className={styles.portal}>
          <div className={styles.grid}>
            <Link
              href="/investieren"
              className={`${styles.card} ${styles.cardAccent}`}
            >
              <h3>Investieren</h3>
              <p>
                ETFs, Aktien & Strategien für langfristigen Vermögensaufbau.
              </p>
            </Link>

            <Link
              href="/etfs"
              className={`${styles.card} ${styles.cardAccent}`}
            >
              <h3>ETFs</h3>
              <p>
                ETF-Grundlagen, Sparpläne und verständliche Erklärungen.
              </p>
            </Link>

            <Link
              href="/versicherungen"
              className={`${styles.card} ${styles.cardAccent}`}
            >
              <h3>Versicherungen</h3>
              <p>
                Welche Versicherungen sinnvoll sind – unabhängig erklärt.
              </p>
            </Link>

            <Link href="/sparen" className={styles.card}>
              <h3>Sparen</h3>
              <p>
                Ausgaben optimieren & finanzielle Kontrolle gewinnen.
              </p>
            </Link>

            <Link href="/wissen" className={styles.card}>
              <h3>Wissen</h3>
              <p>
                Finanzgrundlagen einfach & verständlich erklärt.
              </p>
            </Link>

            <div className={`${styles.card} ${styles.cardDisabled}`}>
              <h3>Broker</h3>
              <p>Broker-Vergleiche & Empfehlungen (kommt bald).</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
