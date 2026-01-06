import Link from "next/link";
import styles from "../styles/Portal.module.css";

export default function Home() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>FinanzFreedom</h1>
        <p className={styles.heroText}>
          Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau
          und finanzielle Freiheit – verständlich & ohne Verkaufsdruck.
        </p>
      </section>

      {/* HAUPT-KATEGORIEN */}
      <section className={styles.grid}>
        <Link href="/investieren" className={styles.card}>
          <span className={styles.cardLine}></span>
          <h3>Investieren</h3>
          <p>ETFs, Aktien, Sparpläne & Strategien für langfristigen Vermögensaufbau.</p>
        </Link>

        <Link href="/versicherungen" className={styles.card}>
          <span className={styles.cardLine}></span>
          <h3>Versicherungen</h3>
          <p>Welche Versicherungen wirklich sinnvoll sind – klar & unabhängig erklärt.</p>
        </Link>

        <Link href="/sparen" className={styles.card}>
          <span className={styles.cardLine}></span>
          <h3>Sparen & Haushalt</h3>
          <p>Mehr Geld behalten, Ausgaben optimieren und Kontrolle gewinnen.</p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <span className={styles.cardLine}></span>
          <h3>Wissen</h3>
          <p>Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.</p>
        </Link>
      </section>

      {/* BELIEBTE THEMEN */}
      <section className={styles.highlight}>
        <h2>Beliebte Themen</h2>

        <div className={styles.gridSmall}>
          <Link href="/investieren/etfs" className={styles.smallCard}>
            ETFs für Einsteiger
          </Link>

          <Link href="/investieren/broker" className={styles.smallCard}>
            Broker vergleichen
          </Link>

          <Link href="/versicherungen" className={styles.smallCard}>
            Versicherungen verstehen
          </Link>

          <Link href="/wissen" className={styles.smallCard}>
            Finanzwissen aufbauen
          </Link>
        </div>
      </section>

      {/* VERTRAUEN */}
      <section className={styles.trust}>
        <h2>Warum FinanzFreedom?</h2>
        <p>
          Wir verkaufen keine Produkte.
          Wir erklären Finanzen so, dass du selbst entscheiden kannst –
          unabhängig, strukturiert und ohne Panikmache.
        </p>
      </section>

    </main>
  );
}
