import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom – Unabhängiges Finanzportal für Vermögensaufbau, Investieren und finanzielle Freiheit."
        />
      </Head>

      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>FinanzFreedom</h1>
          <p className={styles.heroSubtitle}>
            Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
            finanzielle Freiheit.
          </p>
        </section>

        {/* KATEGORIEN */}
        <section className={styles.grid}>
          <Link href="/investieren" className={styles.card}>
            <h3>Investieren</h3>
            <p>
              ETFs, Aktien & Strategien für langfristigen Vermögensaufbau.
            </p>
          </Link>

          <Link href="/etfs" className={styles.card}>
            <h3>ETFs</h3>
            <p>
              ETF-Grundlagen, Sparpläne und verständliche Erklärungen.
            </p>
          </Link>

          <Link href="/broker" className={styles.card}>
            <h3>Broker</h3>
            <p>
              Broker-Vergleiche, Depotanbieter und Empfehlungen.
            </p>
          </Link>

          <Link href="/versicherungen" className={styles.card}>
            <h3>Versicherungen</h3>
            <p>
              Welche Versicherungen sinnvoll sind – unabhängig erklärt.
            </p>
          </Link>

          <Link href="/sparen" className={styles.card}>
            <h3>Sparen</h3>
            <p>
              Ausgaben optimieren, Geld zurückholen und Kontrolle gewinnen.
            </p>
          </Link>

          <Link href="/wissen" className={styles.card}>
            <h3>Wissen</h3>
            <p>
              Finanzgrundlagen einfach und verständlich erklärt.
            </p>
          </Link>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <Link href="/ueber-uns">Über uns</Link>
          <span>·</span>
          <Link href="/kontakt">Kontakt</Link>
          <span>·</span>
          <Link href="/transparenz">Transparenz</Link>
          <span>·</span>
          <Link href="/datenschutz">Datenschutz</Link>
          <span>·</span>
          <Link href="/impressum">Impressum</Link>
        </footer>
      </main>
    </>
  );
}
