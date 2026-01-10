import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export default function Versicherungen() {
  return (
    <div className={styles.page}>
      
      {/* Back Button */}
      <div className={styles.backLink}>
        <Link href="/">← Zur Startseite</Link>
      </div>

      <h1 className={styles.title}>Versicherungen</h1>
      <p className={styles.subtitle}>
        Welche Versicherungen wirklich sinnvoll sind – unabhängig erklärt.
      </p>

      <div className={styles.grid}>
        <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>Die wichtigste Versicherung überhaupt.</p>
        </Link>

        <Link href="/versicherungen/hausrat" className={styles.card}>
          <h3>Hausrat</h3>
          <p>Schützt dein Hab und Gut.</p>
        </Link>

        <Link href="/versicherungen/berufsunfaehigkeit" className={styles.card}>
          <h3>Berufsunfähigkeit</h3>
          <p>Absicherung deiner Arbeitskraft.</p>
        </Link>

        <Link href="/versicherungen/krankenversicherung" className={styles.card}>
          <h3>Krankenversicherung</h3>
          <p>Gesetzlich oder privat – die Unterschiede.</p>
        </Link>
      </div>
    </div>
  );
}
