import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>Broker Vergleich | FinanzFreedom</title>
        <meta
          name="description"
          content="Broker Vergleich: Trade Republic, Scalable Capital & weitere Anbieter im Überblick. Kosten, Sparpläne & Eignung."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Broker Vergleich</h1>
          <p style={styles.subtitle}>
            Welcher Broker passt zu dir? Hier findest du die wichtigsten Anbieter
            übersichtlich verglichen.
          </p>
        </section>

        <section style={styles.grid}>
          <Link href="/investieren/broker/trade-republic" style={styles.card}>
            <h2>Trade Republic</h2>
            <p>Extrem günstig · ETF-Sparpläne · Mobile App</p>
          </Link>

          <Link href="/investieren/broker/scalable-capital" style={styles.card}>
            <h2>Scalable Capital</h2>
            <p>Flatrate-Modelle · Viele ETFs · Web & App</p>
          </Link>

          <div style={styles.cardDisabled}>
            <h2>Weitere Broker</h2>
            <p>Coming soon…</p>
          </div>
        </section>

        <div style={styles.back}>
          <Link href="/investieren">← Zurück zu Investieren</Link>
        </div>
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
    fontSize: "2.8rem",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1000px",
    margin: "0 auto 60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  cardDisabled: {
    padding: "28px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px dashed #334155",
    opacity: 0.6,
  },
  back: {
    textAlign: "center",
    marginTop: "40px",
  },
};
