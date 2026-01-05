import Head from "next/head";
import Link from "next/link";

export default function ScalableCapital() {
  return (
    <>
      <Head>
        <title>Scalable Capital im Test | FinanzFreedom</title>
        <meta
          name="description"
          content="Scalable Capital im Test: Kosten, ETF-Sparpläne, Prime-Modell, Sicherheit & Erfahrungen. Für wen eignet sich der Broker?"
        />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <section style={styles.header}>
          <h1>Scalable Capital im Überblick</h1>
          <p>
            Scalable Capital ist ein moderner Online-Broker mit großer ETF-Auswahl,
            Web-Plattform und flexiblen Tarifen für aktive Anleger.
          </p>
        </section>

        {/* Kurzfakten */}
        <section style={styles.box}>
          <h2>Wichtige Fakten</h2>
          <ul style={styles.list}>
            <li>✔ Deutscher Anbieter</li>
            <li>✔ BaFin-reguliert</li>
            <li>✔ Viele ETF-Sparpläne</li>
            <li>✔ App & Web-Plattform</li>
          </ul>
        </section>

        {/* Für wen geeignet */}
        <section style={styles.box}>
          <h2>Für wen eignet sich Scalable Capital?</h2>
          <p>
            Scalable Capital richtet sich an Anleger, die neben ETF-Sparplänen
            auch häufiger handeln oder eine Web-Oberfläche nutzen möchten.
            Besonders interessant ist das Prime-Modell mit Flat-Fee.
          </p>
        </section>

        {/* Vorteile / Nachteile */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Vorteile</h3>
            <ul style={styles.list}>
              <li>✔ Sehr große ETF-Auswahl</li>
              <li>✔ Web & App verfügbar</li>
              <li>✔ Flat-Fee möglich (Prime)</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Nachteile</h3>
            <ul style={styles.list}>
              <li>✖ Prime-Modell kostenpflichtig</li>
              <li>✖ Für absolute Einsteiger etwas komplexer</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2>Unser Fazit</h2>
          <p>
            Scalable Capital ist eine sehr gute Wahl für fortgeschrittene
            Anleger, die mehr Funktionen und Flexibilität wünschen – besonders
            bei regelmäßigen Trades.
          </p>

          <button style={styles.ctaButton}>
            Zum Anbieter (Affiliate folgt)
          </button>
        </section>

        {/* Navigation */}
        <section style={styles.back}>
          <Link href="/investieren/broker/vergleich">
            ← Zum Broker-Vergleich
          </Link>
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
  header: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  box: {
    maxWidth: "800px",
    margin: "0 auto 32px",
    padding: "24px",
    borderRadius: "14px",
    background: "#020617",
    border: "1px solid #1e293b",
  },
  grid: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "24px",
    borderRadius: "14px",
    background: "#020617",
    border: "1px solid #1e293b",
  },
  list: {
    paddingLeft: "18px",
    marginTop: "10px",
    color: "#9ca3af",
  },
  cta: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    padding: "32px",
    borderRadius: "16px",
    background: "linear-gradient(145deg, #020617, #022c22)",
    border: "1px solid #2dd4bf",
    textAlign: "center",
  },
  ctaButton: {
    marginTop: "16px",
    padding: "0.7rem 1.4rem",
    borderRadius: "8px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
  },
  back: {
    textAlign: "center",
    marginTop: "40px",
  },
};
