import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>FinanzFreedom</h1>
        <p className={styles.subtitle}>
          Das unabhängige Finanzportal für Investieren, Vergleiche &
          fundierte Entscheidungen.
        </p>

        <div className={styles.cardsGrid}>
          <Link href="/investieren" className={styles.card}>
            <h3>Investieren</h3>
            <p>ETFs, Aktien, Strategien & langfristiger Vermögensaufbau.</p>
          </Link>

          <Link href="/vergleiche" className={styles.card}>
            <h3>Broker & Vergleiche</h3>
            <p>Neutrale Vergleiche von Brokern & Finanzprodukten.</p>
          </Link>

          <Link href="/rechner" className={styles.card}>
            <h3>Rechner & Tools</h3>
            <p>ETF-Rechner, Sparplan-Tools & Finanzhilfen.</p>
          </Link>

          <Link href="/wissen" className={styles.card}>
            <h3>Finanzwissen</h3>
            <p>Grundlagen, Zusammenhänge & Orientierung.</p>
          </Link>

          <Link href="/versicherungen" className={styles.card}>
            <h3>Versicherungen</h3>
            <p>
              Sinnvolle Versicherungen, klare Erklärungen &
              unabhängige Entscheidungen.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
