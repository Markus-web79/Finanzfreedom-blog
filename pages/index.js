import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import hero from "../styles/Hero.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – finanzielle Freiheit aufbauen</title>
        <meta
          name="description"
          content="FinanzFreedom – unabhängiges Finanzportal für Vermögensaufbau, Investieren und finanzielle Freiheit."
        />
      </Head>

      {/* HERO */}
      <section className={hero.hero}>
        <h1 className={hero.title}>FinanzFreedom</h1>
        <p className={hero.subtitle}>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KATEGORIEN */}
      <section className={styles.grid}>
        <Link href="/investieren" className={styles.card}>
          <h3>Investieren</h3>
          <p>ETFs, Aktien & Strategien für langfristigen Vermögensaufbau.</p>
        </Link>

        <Link href="/etfs" className={styles.card}>
          <h3>ETFs</h3>
          <p>ETF-Grundlagen, Sparpläne und verständliche Erklärungen.</p>
        </Link>

        <Link href="/versicherungen" className={styles.card}>
          <h3>Versicherungen</h3>
          <p>Welche Versicherungen sinnvoll sind – unabhängig erklärt.</p>
        </Link>

        <Link href="/sparen" className={styles.card}>
          <h3>Sparen</h3>
          <p>Ausgaben optimieren & finanzielle Kontrolle gewinnen.</p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <h3>Wissen</h3>
          <p>Finanzgrundlagen einfach & verständlich erklärt.</p>
        </Link>

        <div className={styles.card}>
          <h3>Broker</h3>
          <p>Broker-Vergleiche & Empfehlungen (kommt bald).</p>
        </div>
      </section>
    </>
  );
}
