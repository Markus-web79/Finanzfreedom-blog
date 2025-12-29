import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Portal.module.css";

export default function Investieren() {
  return (
    <>
      <Head>
        <title>Investieren – FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht erklärt: ETFs, Aktien, Sparpläne & Strategien für langfristigen Vermögensaufbau."
        />
      </Head>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Investieren</h1>
          <p>
            Baue langfristig Vermögen auf – mit klaren Strategien,
            verständlichen Erklärungen und unabhängigen Empfehlungen.
          </p>
        </section>

        {/* THEMEN */}
        <section className={styles.grid}>

          <div className={styles.card}>
            <h3>ETF-Grundlagen</h3>
            <p>
              Was ETFs sind, wie sie funktionieren und warum sie für
              Einsteiger ideal sind.
            </p>
            <Link href="/blog">Mehr erfahren →</Link>
          </div>

          <div className={styles.card}>
            <h3>ETF-Sparpläne</h3>
            <p>
              Monatlich investieren, automatisch Vermögen aufbauen
              und langfristig profitieren.
            </p>
            <Link href="/blog">Zu den Sparplänen →</Link>
          </div>

          <div className={styles.card}>
            <h3>Broker & Depots</h3>
            <p>
              Welche Broker wirklich günstig, sicher und sinnvoll sind –
              unabhängig verglichen.
            </p>
            <Link href="/blog">Broker vergleichen →</Link>
          </div>

          <div className={styles.card}>
            <h3>Strategien</h3>
            <p>
              Von Buy-and-Hold bis Weltportfolio –
              bewährte Investment-Strategien einfach erklärt.
            </p>
            <Link href="/blog">Strategien ansehen →</Link>
          </div>

        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p>Bereit für den nächsten Schritt?</p>
          <Link href="/blog" className={styles.primaryBtn}>
            → Zum Investieren-Guide
          </Link>
        </section>
      </main>
    </>
  );
}
