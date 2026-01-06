import Link from "next/link";
import BackLink from "../../components/BackLink";
import styles from "../../styles/CategoryPage.module.css";

export default function Versicherungen() {
  return (
    <div className={styles.page}>
      <BackLink href="/" label="Zur Startseite" />

      <h1>Versicherungen – sinnvoll & verständlich</h1>
      <p className={styles.intro}>
        Welche Versicherungen brauchst du wirklich – und welche nicht?
        Unabhängige Erklärungen, ohne Verkaufsdruck.
      </p>

      <div className={styles.grid}>
        <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>
            Die wichtigste Versicherung überhaupt. Warum sie unverzichtbar ist
            und worauf du achten musst.
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
            Existenzsicherung bei Krankheit. Für wen sie wichtig ist – und
            für wen nicht.
          </p>
        </Link>

        <Link href="/versicherungen/krankenversicherung" className={styles.card}>
          <h3>Krankenversicherung</h3>
          <p>
            Gesetzlich oder privat? Unterschiede, Vor- und Nachteile
            einfach erklärt.
          </p>
        </Link>
      </div>
    </div>
  );
}
