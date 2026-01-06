import Link from "next/link";
import styles from "../../styles/Portal.module.css";

export default function Versicherungen() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Versicherungen – sinnvoll & verständlich</h1>
        <p>
          Welche Versicherungen brauchst du wirklich – und welche nicht?
          Hier findest du unabhängige Erklärungen, Vergleiche und klare Empfehlungen.
        </p>
      </section>

      <section className={styles.grid}>
        <Link href="/versicherungen/haftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>
            Die wichtigste Versicherung überhaupt.
            Warum sie unverzichtbar ist und worauf du achten musst.
          </p>
        </Link>

        <Link href="/versicherungen/hausrat" className={styles.card}>
          <h3>Hausratversicherung</h3>
          <p>
            Schutz für dein Hab und Gut – sinnvoll oder überbewertet?
            Klar erklärt mit Beispielen.
          </p>
        </Link>

        <Link href="/versicherungen/berufsunfaehigkeit" className={styles.card}>
          <h3>Berufsunfähigkeit</h3>
          <p>
            Existenzsicherung bei Krankheit.
            Für wen sie wichtig ist – und für wen nicht.
          </p>
        </Link>

        <Link href="/versicherungen/krankenversicherung" className={styles.card}>
          <h3>Krankenversicherung</h3>
          <p>
            Gesetzlich oder privat?
            Unterschiede, Vor- und Nachteile einfach erklärt.
          </p>
        </Link>
      </section>

      <section className={styles.infoBox}>
        <h2>Unser Ansatz</h2>
        <p>
          FinanzFreedom steht für Klarheit statt Verkaufsdruck.
          Wir erklären Versicherungen so, dass du selbst entscheiden kannst –
          unabhängig, verständlich und ohne Panikmache.
        </p>
      </section>
    </main>
  );
}
