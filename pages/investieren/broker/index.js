import Head from "next/head";
import Link from "next/link";

export default function Broker() {
  return (
    <>
      <Head>
        <title>Broker & Anbieter | FinanzFreedom</title>
        <meta
          name="description"
          content="Broker-Vergleiche bei FinanzFreedom: Trade Republic, Scalable Capital & weitere Anbieter verständlich erklärt."
        />
      </Head>

      <main style={styles.page}>
        <h1 style={styles.title}>Broker & Anbieter</h1>
        <p style={styles.intro}>
          Welcher Broker passt zu dir? Hier findest du Anbieter, Vergleiche und
          Entscheidungshilfen – unabhängig und übersichtlich.
        </p>

        <section style={styles.grid}>
          <Link href="/broker/trade-republic" style={styles.card}>
            <h2>Trade Republic</h2>
            <p>
              Einfacher Neobroker für ETFs & Aktien – beliebt bei Einsteigern.
            </p>
          </Link>

          <Link href="/broker/scalable" style={styles.card}>
            <h2>Scalable Capital</h2>
            <p>
              ETF-Sparpläne, Aktien & langfristige Anlagestrategien.
            </p>
          </Link>

          <Link href="/broker/vergleich" style={styles.card}>
            <h2>Broker-Vergleich</h2>
            <p>
              Vergleiche Gebühren, Funktionen & Vorteile auf einen Blick.
            </p>
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
