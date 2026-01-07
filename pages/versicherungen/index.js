import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export default function Versicherungen() {
  return (
    <div className={styles.page}>
      <h1>Versicherungen – sinnvoll & verständlich</h1>
      <p className={styles.intro}>
        Welche Versicherungen brauchst du wirklich – und welche nicht?
        Unabhängige Erklärungen, klare Empfehlungen.
      </p>

      <div className={styles.grid}>
        <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>Die wichtigste Versicherung überhaupt.</p>
        </Link>

        <div className={styles.card}>
          <h3>Hausratversicherung</h3>
          <p>Schutz für dein Hab und Gut.</p>
        </div>

        <div className={styles.card}>
          <h3>Berufsunfähigkeit</h3>
          <p>Existenzsicherung bei Krankheit.</p>
        </div>

        <div className={styles.card}>
          <h3>Krankenversicherung</h3>
          <p>Gesetzlich oder privat?</p>
        </div>
      </div>
    </div>
  );
}
