import Head from "next/head";
import Link from "next/link";

export default function Investieren() {
  return (
    <>
      <Head>
        <title>Investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren bei FinanzFreedom: ETFs, Aktien und Strategien verständlich erklärt."
        />
      </Head>

      <main style={styles.page}>
        <h1 style={styles.title}>Investieren</h1>
        <p style={styles.intro}>
          Hier findest du alles rund um langfristigen Vermögensaufbau – ohne
          Hype, ohne Verkaufsdruck.
        </p>

        <section style={styles.grid}>
          <Link href="/investieren/etfs" style={styles.card}>
            <h2>ETFs</h2>
            <p>Einfach investieren, breit streuen, langfristig denken.</p>
          </Link>

          <Link href="/investieren/aktien" style={styles.card}>
            <h2>Aktien</h2>
            <p>Grundlagen, Chancen & Risiken verständlich erklärt.</p>
          </Link>

          <Link href="/investieren/strategien" style={styles.card}>
            <h2>Strategien</h2>
            <p>Langfristige Konzepte statt kurzfristiger Zockerei.</p>
          </Link>
        </section>

        <div style={styles.back}>
          <Link href="/">← Zurück zur Startseite</Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  intro: {
    color: "#9ca3af",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  back: {
    marginTop: "50px",
  },
};
