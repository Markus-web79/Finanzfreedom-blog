import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Versicherungen.module.css";

export default function VersicherungenIndex() {
  return (
    <>
      <Head>
        <title>Versicherungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Die wichtigsten Versicherungen verständlich erklärt – unabhängig & übersichtlich."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Versicherungen</h1>
          <p className={styles.subtitle}>
            Welche Versicherungen brauchst du wirklich – und welche nicht?
          </p>
        </section>

        <section className={styles.grid}>
          <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
            <h3>Privathaftpflicht</h3>
            <p>Die wichtigste Versicherung für fast jeden.</p>
          </Link>

          <Link href="/versicherungen/hausrat" className={styles.card}>
            <h3>Hausrat</h3>
            <p>Schützt dein Eigentum bei Schaden & Diebstahl.</p>
          </Link>

          <Link
            href="/versicherungen/berufsunfaehigkeit"
            className={styles.card}
          >
            <h3>Berufsunfähigkeit</h3>
            <p>Sichert dein Einkommen langfristig ab.</p>
          </Link>

          <Link
            href="/versicherungen/krankenversicherung"
            className={styles.card}
          >
            <h3>Krankenversicherung</h3>
            <p>Gesetzlich oder privat – richtig entscheiden.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
