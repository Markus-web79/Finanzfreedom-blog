import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Versicherungen() {
  return (
    <div className={styles.grid}>
      <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
        <h3>Privathaftpflicht</h3>
        <p>Die wichtigste Versicherung überhaupt.</p>
      </Link>

      <Link href="/versicherungen/hausrat" className={styles.card}>
        <h3>Hausrat</h3>
      </Link>

      <Link href="/versicherungen/berufsunfaehigkeit" className={styles.card}>
        <h3>Berufsunfähigkeit</h3>
      </Link>

      <Link href="/versicherungen/krankenversicherung" className={styles.card}>
        <h3>Krankenversicherung</h3>
      </Link>
    </div>
  );
}
