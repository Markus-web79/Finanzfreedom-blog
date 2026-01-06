import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>FinanzFreedom</h1>
        <p>
          Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau und
          finanzielle Freiheit – verständlich & ohne Verkaufsdruck.
        </p>
      </section>

      {/* KACHELN */}
      <section className={styles.cards}>
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
            Mehr Geld behalten, Ausgaben optimieren und finanzielle Kontrolle
            gewinnen.
          </p>
        </Link>

        <Link href="/wissen" className={styles.card}>
          <h3>Wissen</h3>
          <p>
            Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.
          </p>
        </Link>
      </section>

      {/* WARUM */}
      <section className={styles.why}>
        <h2>Warum FinanzFreedom?</h2>
        <p>
          Wir verkaufen keine Produkte. Wir erklären Finanzen so, dass du selbst
          entscheiden kannst – unabhängig, strukturiert und ohne Panikmache.
        </p>
      </section>
    </main>
  );
}
