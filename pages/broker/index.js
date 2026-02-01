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
          Ein ehrlicher, unabhängiger Vergleich für Einsteiger und langfristige
          Anleger – ohne Verkaufsdruck, ohne Schönfärberei.
        </p>
      </section>

      {/* Klare Empfehlung */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Unsere Einschätzung</h2>

        <p style={styles.p}>
          Für viele Einsteiger, die regelmäßig per Sparplan investieren möchten,
          ist <strong>Trade Republic</strong> eine sehr einfache und kostengünstige
          Lösung.
        </p>

        <p style={styles.p}>
          Wer ein größeres Depot plant, mehr ETF-Auswahl möchte oder später
          flexibler investieren will, fährt mit <strong>Scalable Capital</strong>
          häufig besser.
        </p>
      </section>

      {/* Entscheidungshilfe */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Welcher Broker passt zu dir?</h2>

        <ul style={styles.list}>
          <li>
            <strong>Trade Republic:</strong> Wenn du einfach starten willst,
            per Sparplan investierst und eine sehr schlanke App suchst.
          </li>
          <li>
            <strong>Scalable Capital:</strong> Wenn du größere Beträge anlegst,
            mehr ETFs vergleichen willst oder langfristig mehr Flexibilität
            brauchst.
          </li>
        </ul>

        <p style={styles.note}>
          Tipp: Nutze den Kostenrechner weiter unten, um ein Gefühl dafür zu
          bekommen, wie sich Gebühren über Jahre auswirken können.
        </p>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        {/* Kostenrechner */}
        <Link href="/broker/kostenrechner" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>🧮 Broker-Kosten-Rechner</h3>
          <p style={styles.cardText}>
            Simuliere Sparpläne und Einmalinvestments und sieh, wie sich Kosten
            langfristig auf dein Vermögen auswirken können.
          </p>
          <span style={styles.cta}>Zum Kostenrechner →</span>
        </Link>

        {/* Trade Republic */}
        <Link href="/broker/trade-republic" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>
            🥇 Trade Republic – Einfacher Einstieg
          </h3>
          <p style={styles.cardText}>
            Keine Depotgebühr, ETF-Sparpläne häufig ohne Ausführungsgebühr.
            Handelskosten können je nach Produkt anfallen.
          </p>
          <span style={styles.cta}>Details ansehen →</span>
        </Link>

        {/* Scalable Capital */}
        <Link href="/broker/scalable-capital" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>
            🥈 Scalable Capital – Mehr Möglichkeiten
          </h3>
          <p style={styles.cardText}>
            Große ETF-Auswahl, optionale Flatrate-Modelle und mehr Funktionen
            für wachsende Depots.
          </p>
          <span style={styles.cta}>Details ansehen →</span>
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
    fontSize: "1.05rem",
    color: "#9ca3af",
    lineHeight: 1.6,
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
  list: {
    paddingLeft: "18px",
    lineHeight: 1.8,
    marginBottom: "12px",
  },
  note: {
    fontSize: "0.9rem",
    opacity: 0.8,
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
