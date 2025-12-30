import Link from "next/link";

export default function BrokerOverview() {
  return (
    <div style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link href="/">Startseite</Link> →{" "}
        <Link href="/investieren">Investieren</Link> → Broker
      </p>

      <h1 style={styles.title}>Broker-Vergleich</h1>
      <p style={styles.subtitle}>
        Finde den passenden Broker für ETFs, Aktien und langfristigen
        Vermögensaufbau.
      </p>

      <div style={styles.grid}>
        {/* Trade Republic */}
        <div style={styles.card}>
          <h2>Trade Republic</h2>
          <p>
            Sehr günstiger Broker mit einfachem Sparplan-Modell. Ideal für
            Einsteiger und ETF-Sparer.
          </p>
          <Link href="/investieren/broker/trade-republic">
            <button style={styles.button}>Zum Test</button>
          </Link>
        </div>

        {/* Scalable Capital */}
        <div style={styles.card}>
          <h2>Scalable Capital</h2>
          <p>
            Starker ETF-Broker mit Flatrate-Modell, großer Auswahl und
            langfristiger Strategie-Ausrichtung.
          </p>
          <Link href="/investieren/broker/scalable-capital">
            <button style={styles.button}>Zum Test</button>
          </Link>
        </div>

        {/* Platzhalter ING */}
        <div style={{ ...styles.card, opacity: 0.6 }}>
          <h2>ING</h2>
          <p>
            Großer deutscher Broker mit Fokus auf Sicherheit und klassische
            Geldanlage.
          </p>
          <button style={styles.buttonDisabled}>Kommt bald</button>
        </div>
      </div>

      <div style={styles.back}>
        <Link href="/investieren">← Zurück zu Investieren</Link>
      </div>
    </div>
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
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
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
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  button: {
    marginTop: "16px",
    background: "#0ea5e9",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "0.95rem",
    cursor: "pointer",
    color: "#020617",
  },
  buttonDisabled: {
    marginTop: "16px",
    background: "#334155",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "0.95rem",
    color: "#94a3b8",
    cursor: "not-allowed",
  },
  back: {
    marginTop: "50px",
    fontSize: "0.95rem",
  },
};
