import Head from "next/head";
import Link from "next/link";

export default function Versicherungen() {
  return (
    <>
      <Head>
        <title>Versicherungen – Was wirklich sinnvoll ist | FinanzFreedom</title>
        <meta
          name="description"
          content="Welche Versicherungen brauchst du wirklich? Überblick zu Haftpflicht, Hausrat, Berufsunfähigkeit & mehr – verständlich erklärt."
        />
      </Head>

      <main style={styles.page}>
        <h1 style={styles.title}>Versicherungen</h1>
        <p style={styles.intro}>
          Nicht jede Versicherung ist sinnvoll. Hier findest du eine klare,
          ehrliche Übersicht – ohne Verkaufsdruck.
        </p>

        <section style={styles.grid}>
          <Link href="/versicherungen/haftpflicht" style={styles.card}>
            <h2>Haftpflicht</h2>
            <p>Die wichtigste Versicherung für fast jeden.</p>
          </Link>

          <Link href="/versicherungen/hausrat" style={styles.card}>
            <h2>Hausrat</h2>
            <p>Schützt dein Eigentum vor Schäden & Verlust.</p>
          </Link>

          <Link href="/versicherungen/berufsunfaehigkeit" style={styles.card}>
            <h2>Berufsunfähigkeit</h2>
            <p>Einkommen absichern, wenn Arbeiten nicht mehr geht.</p>
          </Link>

          <Link href="/versicherungen/kfz" style={styles.card}>
            <h2>Kfz-Versicherung</h2>
            <p>Pflichtversicherung mit großen Preisunterschieden.</p>
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  intro: {
    maxWidth: "700px",
    marginBottom: "2.5rem",
    opacity: 0.85,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "24px",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    background: "#0f172a",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.15s ease",
  },
};
