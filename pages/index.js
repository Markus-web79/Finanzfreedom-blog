import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>FinanzFreedom</h1>
        <p>
          Das unabhängige Finanzportal für Investieren, Vergleiche & fundierte
          Entscheidungen.
        </p>
      </section>

      <section className={styles.grid}>
        <Link href="/investieren" className={styles.card}>
          <h3>Investieren</h3>
          <p>
            ETFs, Aktien, Strategien & langfristiger Vermögensaufbau.
          </p>
        </Link>

        <Link href="/broker" className={styles.card}>
          <h3>Broker & Vergleiche</h3>
          <p>
            Neutrale Vergleiche von Brokern & Finanzprodukten.
          </p>
        </Link>

        <Link href="/rechner" className={styles.card}>
          <h3>Rechner & Tools</h3>
          <p>
            ETF-Rechner, Sparplan-Tools & Finanzhilfen.
          </p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <h3>Finanzwissen</h3>
          <p>
            Grundlagen, Zusammenhänge & Orientierung.
          </p>
        </Link>

        {/* ✅ VERSICHERUNGEN – DAS HAT GEFEHLT */}
        <Link href="/versicherungen" className={styles.card}>
          <h3>Versicherungen</h3>
          <p>
            Sinnvolle Versicherungen, klare Erklärungen & unabhängige Entscheidungen.
          </p>
        </Link>
      </section>

      <section className={styles.why}>
        <h2>Warum FinanzFreedom?</h2>
        <p>
          Keine Bank, kein Produktverkauf. Nur unabhängige Inhalte,
          klare Vergleiche und echte Orientierung.
        </p>
      </section>
    </main>
  );
}
