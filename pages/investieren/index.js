import Head from "next/head";
import Link from "next/link";

export default function InvestierenHub() {
  return (
    <>
      <Head>
        <title>Investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht gemacht: Broker vergleichen, ETFs verstehen und Strategien für langfristigen Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Investieren</h1>
          <p style={styles.subtitle}>
            Alles rund um Broker, ETFs und Anlagestrategien – strukturiert,
            unabhängig und verständlich.
          </p>
        </section>

        <section style={styles.grid}>
          <Link href="/investieren/broker/vergleich" style={styles.card}>
            <h2>Broker vergleichen</h2>
            <p>
              Trade Republic, Scalable Capital & weitere Anbieter im direkten
              Vergleich.
            </p>
          </Link>

          <Link href="/investieren/etfs" style={styles.card}>
            <h2>ETFs & Indizes</h2>
            <p>
              MSCI World, All-World, Sparpläne & Grundlagen für langfristiges
              Investieren.
            </p>
          </Link>

          <div style={styles.cardDisabled}>
            <h2>Strategien</h2>
            <p>Langfristige Konzepte & Rechner – folgt in Kürze.</p>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "32px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  cardDisabled: {
    padding: "32px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px dashed #334155",
    opacity: 0.6,
  },
};
