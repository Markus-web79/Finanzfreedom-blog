import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import styles from "../../styles/CategoryPage.module.css";

export default function Versicherungen() {
  return (
    <PageLayout>
      <div className={styles.page}>
        <h1>Versicherungen – sinnvoll & verständlich</h1>

        <p className={styles.intro}>
          Welche Versicherungen brauchst du wirklich – und welche nicht?
          Unabhängige Erklärungen, klare Empfehlungen.
        </p>

        <div className={styles.grid}>
          <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
            <h3>Privathaftpflicht</h3>
            <p>
              Die wichtigste Versicherung überhaupt. Warum sie unverzichtbar
              ist und worauf du achten musst.
            </p>
          </Link>

          <div className={styles.card}>
            <h3>Hausratversicherung</h3>
            <p>Schutz für dein Hab und Gut – sinnvoll oder überbewertet?</p>
          </div>

          <div className={styles.card}>
            <h3>Berufsunfähigkeit</h3>
            <p>Existenzsicherung bei Krankheit – für wen wirklich wichtig?</p>
          </div>

          <div className={styles.card}>
            <h3>Krankenversicherung</h3>
            <p>Gesetzlich oder privat? Unterschiede einfach erklärt.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
