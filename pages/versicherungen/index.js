import styles from "../../styles/CategoryPage.module.css";

export default function Versicherungen() {
  return (
    <div className={styles.page}>
      <h1>Versicherungen – sinnvoll & verständlich</h1>

      <p className={styles.pageIntro}>
        Welche Versicherungen brauchst du wirklich – und welche nicht?
        Hier findest du unabhängige Erklärungen, Vergleiche und klare Empfehlungen.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>
            Die wichtigste Versicherung überhaupt. Warum sie unverzichtbar ist
            und worauf du achten musst.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Hausratversicherung</h3>
          <p>
            Schutz für dein Hab und Gut – sinnvoll oder überbewertet?
            Klar erklärt mit Beispielen.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Berufsunfähigkeit</h3>
          <p>
            Existenzsicherung bei Krankheit. Für wen sie wichtig ist –
            und für wen nicht.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Krankenversicherung</h3>
          <p>
            Gesetzlich oder privat? Unterschiede, Vor- und Nachteile
            einfach erklärt.
          </p>
        </div>
      </div>
    </div>
  );
}
