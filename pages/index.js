import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>FinanzFreedom</h1>
        <p>
          Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau und
          finanzielle Freiheit – verständlich & ohne Verkaufsdruck.
        </p>
      </section>

      {/* HAUPT-KATEGORIEN */}
      <section className={styles.cardGrid}>
        <Link href="/investieren" className={styles.card}>
          <h3>Investieren</h3>
          <p>
            ETFs, Aktien, Sparpläne & Strategien für langfristigen
            Vermögensaufbau.
          </p>
        </Link>

        <Link href="/versicherungen" className={styles.card}>
          <h3>Versicherungen</h3>
          <p>
            Welche Versicherungen wirklich sinnvoll sind – klar & unabhängig
            erklärt.
          </p>
        </Link>

        <Link href="/sparen" className={styles.card}>
          <h3>Sparen & Haushalt</h3>
          <p>
            Mehr Geld behalten, Ausgaben optimieren und Kontrolle gewinnen.
          </p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <h3>Wissen</h3>
          <p>
            Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.
          </p>
        </Link>
      </section>

      {/* PORTAL-AKTIONEN */}
      <section className={styles.actions}>
        <h2>Beliebte Themen</h2>

        <div className={styles.actionGrid}>
          <Link href="/investieren/etfs" className={styles.action}>
            ETFs verstehen
          </Link>

          <Link href="/investieren/broker" className={styles.action}>
            Broker vergleichen
          </Link>

          <Link href="/versicherungen" className={styles.action}>
            Versicherungen prüfen
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className={styles.trust}>
        <h2>Warum FinanzFreedom?</h2>
        <ul>
          <li>✔ Keine Produkte, kein Verkaufsdruck</li>
          <li>✔ Klar, strukturiert & unabhängig</li>
          <li>✔ Für echte Entscheidungen – nicht für Provisionen</li>
          <li>✔ Kostenlos & transparent</li>
        </ul>
      </section>
    </main>
  );
}
