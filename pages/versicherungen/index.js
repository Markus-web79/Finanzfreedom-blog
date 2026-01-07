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
      </p>

      <div className={styles.grid}>
        <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>Die wichtigste Versicherung überhaupt.</p>
        </Link>

        <div className={styles.card}><h3>Hausrat</h3></div>
        <div className={styles.card}><h3>Berufsunfähigkeit</h3></div>
        <div className={styles.card}><h3>Krankenversicherung</h3></div>
      </div>
    </div>
  );
}
