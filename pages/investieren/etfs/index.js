import Link from "next/link";

export default function EtfsOverview() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>ETF-Übersicht</h1>
      <p style={styles.subtitle}>
        Hier findest du die wichtigsten ETFs für langfristigen Vermögensaufbau –
        einfach erklärt und übersichtlich eingeordnet.
      </p>

      <div style={styles.grid}>
        {/* MSCI World */}
        <Link href="/investieren/etfs/msci-world" style={styles.card}>
          <h2>MSCI World ETF</h2>
          <p>
            Der Klassiker für Einsteiger: Weltweit investieren in über
            1.500 Unternehmen aus Industrieländern.
          </p>
          <span style={styles.link}>Zum Artikel →</span>
        </Link>

        {/* Platzhalter für spätere ETFs */}
        <div style={{ ...styles.card, opacity: 0.4 }}>
          <h2>MSCI ACWI (kommt bald)</h2>
          <p>Industrieländer + Schwellenländer in einem ETF.</p>
        </div>

        <div style={{ ...styles.card, opacity: 0.4 }}>
          <h2>Emerging Markets (kommt bald)</h2>
          <p>Fokus auf Schwellenländer mit höherem Risiko & Potenzial.</p>
        </div>
      </div>

      <Link href="/investieren" style={styles.back}>
        ← Zurück zu Investieren
      </Link>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    opacity: 0.85,
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
    borderRadius: "12px",
    padding: "24px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    color: "#22c55e",
    fontWeight: "600",
  },
  back: {
    display: "inline-block",
    marginTop: "40px",
    color: "#22c55e",
    textDecoration: "none",
  },
};
