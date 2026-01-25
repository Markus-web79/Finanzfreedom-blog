import Link from "next/link";

export default function BrokerIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Broker vergleichen</h1>
        <p style={styles.subtitle}>
          Finde den passenden Broker für ETFs, Sparpläne und langfristigen Vermögensaufbau.
        </p>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        {/* Trade Republic */}
        <Link href="/broker/trade-republic" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Trade Republic</h3>
          <p style={styles.cardText}>
            Beliebter Neobroker mit günstigen ETF-Sparplänen und einfacher App.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>

        {/* Scalable Capital */}
        <Link href="/broker/scalable-capital" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Scalable Capital</h3>
          <p style={styles.cardText}>
            Großer ETF-Anbieter mit Flatrate-Modell und umfangreichem Angebot.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>

        {/* Broker Vergleich */}
        <Link href="/broker/vergleich" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Broker Vergleich</h3>
          <p style={styles.cardText}>
            Direktvergleich der besten Broker nach Kosten, Angebot und Sparplänen.
          </p>
          <span style={styles.cta}>Zum Vergleich</span>
        </Link>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.25s ease",
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "8px",
    color: "#ffffff",
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },
  cta: {
    display: "inline-block",
    marginTop: "14px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
};
