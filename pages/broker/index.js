import Link from "next/link";

export default function BrokerIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>
          Der beste Broker für ETF-Sparpläne (2026)
        </h1>

        <p style={styles.subtitle}>
          Unser ehrlicher Vergleich zeigt dir klar, welcher Broker für ETF-Einsteiger
          die beste Wahl ist – und wann sich eine Alternative lohnt.
        </p>
      </section>

      {/* Klare Empfehlung */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Unsere klare Empfehlung</h2>

        <p style={styles.p}>
          Für die meisten Anleger, die einfach und günstig mit einem ETF-Sparplan
          starten möchten, ist <strong>Trade Republic</strong> aktuell die beste Wahl.
        </p>

        <p style={styles.p}>
          Wenn du ein größeres Depot planst, mehr ETF-Auswahl möchtest oder
          häufiger investierst, kann <strong>Scalable Capital</strong> die bessere
          Alternative sein.
        </p>
      </section>

      {/* Broker-Vergleich (Karten statt Tabelle) */}
      <section style={styles.compare}>
        <h2 style={styles.h2}>Direkter Broker-Vergleich</h2>

        <div style={styles.compareGrid}>
          {/* Trade Republic */}
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🥇 Trade Republic</h3>
            <ul style={styles.compareList}>
              <li>ETF-Sparpläne: kostenlos</li>
              <li>Orderkosten: 1 € pro Trade</li>
              <li>ETF-Auswahl: 2.000+</li>
              <li>Geeignet für: Einsteiger</li>
            </ul>
            <Link href="/broker/trade-republic" style={styles.compareCta}>
              Zur Bewertung →
            </Link>
          </div>

          {/* Scalable Capital */}
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🥈 Scalable Capital</h3>
            <ul style={styles.compareList}>
              <li>ETF-Sparpläne: kostenlos</li>
              <li>Orderkosten: 0 € / Flatrate</li>
              <li>ETF-Auswahl: 2.500+</li>
              <li>Geeignet für: größere Depots</li>
            </ul>
            <Link href="/broker/scalable-capital" style={styles.compareCta}>
              Zur Bewertung →
            </Link>
          </div>
        </div>
      </section>

      {/* Weiterführende Tools */}
      <section style={styles.grid}>
        <Link href="/broker/kostenrechner" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>🧮 Broker-Kosten-Rechner</h3>
          <p style={styles.cardText}>
            Berechne, welcher Broker dich langfristig am wenigsten kostet –
            basierend auf deinem Spar- und Kaufverhalten.
          </p>
          <span style={styles.cta}>Kosten berechnen →</span>
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
    margin: "0 auto 40px",
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

  section: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    background: "rgba(2, 6, 23, 0.45)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },

  h2: {
    fontSize: "1.5rem",
    marginBottom: "14px",
    color: "#ffffff",
  },

  p: {
    lineHeight: 1.7,
    marginBottom: "12px",
  },

  compare: {
    maxWidth: "1100px",
    margin: "0 auto 60px",
  },

  compareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  compareCard: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },

  compareTitle: {
    fontSize: "1.3rem",
    marginBottom: "12px",
    color: "#ffffff",
  },

  compareList: {
    lineHeight: 1.8,
    marginBottom: "16px",
    paddingLeft: "16px",
  },

  compareCta: {
    display: "inline-block",
    color: "#2dd4bf",
    fontWeight: 600,
    textDecoration: "none",
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
