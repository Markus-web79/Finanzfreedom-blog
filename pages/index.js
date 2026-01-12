import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>FinanzFreedom</h1>
        <p>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* CARDS */}
      <section className={styles.cardGrid}>
        <Link href="/etfs" className={styles.card}>
          <div className={styles.cardAccent}></div>
          <h3>ETFs</h3>
          <p>
            ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau –
            verständlich erklärt.
          </p>
        </Link>

        <Link href="/versicherungen" className={styles.card}>
          <div className={styles.cardAccent}></div>
          <h3>Versicherungen</h3>
          <p>
            Welche Versicherungen sinnvoll sind – unabhängig & ohne
            Verkaufsdruck.
          </p>
        </Link>

        <Link href="/sparen" className={styles.card}>
          <div className={styles.cardAccent}></div>
          <h3>Sparen</h3>
          <p>
            Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld
            gewinnen.
          </p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <div className={styles.cardAccent}></div>
          <h3>Wissen</h3>
          <p>Finanzgrundlagen einfach & verständlich erklärt.</p>
        </Link>

        <Link href="/broker" className={styles.card}>
          <div className={styles.cardAccent}></div>
          <h3>Broker</h3>
          <p>
            Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne.
          </p>
        </Link>
      </section>
    </main>
  );
}
