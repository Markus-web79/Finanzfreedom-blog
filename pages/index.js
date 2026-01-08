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

      {/* KATEGORIEN */}
      <section className={styles.grid}>
        <Link href="/investieren" className={styles.card}>
          <h3>Investieren</h3>
          <p>ETFs, Aktien & Strategien für langfristigen Vermögensaufbau.</p>
        </Link>

        <Link href="/investieren/etfs" className={styles.card}>
          <h3>ETFs</h3>
          <p>ETF-Grundlagen, Sparpläne und verständliche Erklärungen.</p>
        </Link>

        <Link href="/broker" className={styles.cardDisabled}>
          <h3>Broker</h3>
          <p>Broker-Vergleiche & Empfehlungen (kommt bald).</p>
        </Link>

        <Link href="/versicherungen" className={styles.card}>
          <h3>Versicherungen</h3>
          <p>Welche Versicherungen sinnvoll sind – unabhängig erklärt.</p>
        </Link>

        <Link href="/sparen" className={styles.cardDisabled}>
          <h3>Sparen</h3>
          <p>Ausgaben optimieren & Kontrolle gewinnen (kommt bald).</p>
        </Link>

        <Link href="/wissen" className={styles.cardDisabled}>
          <h3>Wissen</h3>
          <p>Finanzgrundlagen einfach & verständlich.</p>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <Link href="/ueber-uns">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/transparenz">Transparenz</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/impressum">Impressum</Link>
      </footer>
    </main>
  );
}
