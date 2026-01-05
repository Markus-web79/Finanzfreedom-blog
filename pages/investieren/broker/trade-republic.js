import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Broker im Test | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test: Kosten, ETF-Sparpläne, Sicherheit & Erfahrungen. Für wen eignet sich der Broker wirklich?"
        />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <section style={styles.header}>
          <h1>Trade Republic im Überblick</h1>
          <p>
            Trade Republic ist einer der beliebtesten Online-Broker in
            Deutschland – besonders für ETF-Sparpläne und Einsteiger.
          </p>
        </section>

        {/* Kurzfakten */}
        <section style={styles.box}>
          <h2>Wichtige Fakten</h2>
          <ul style={styles.list}>
            <li>✔ Sitz in Deutschland</li>
            <li>✔ BaFin-reguliert</li>
            <li>✔ Kostenloser ETF-Sparplan</li>
            <li>✔ Sehr einfache App</li>
          </ul>
        </section>

        {/* Für wen geeignet */}
        <section style={styles.box}>
          <h2>Für wen eignet sich Trade Republic?</h2>
          <p>
            Trade Republic eignet sich besonders für Anleger, die einfach und
            kostengünstig in ETFs investieren möchten. Die App ist klar
            strukturiert und ideal für langfristigen Vermögensaufbau.
          </p>
        </section>

        {/* Vorteile / Nachteile */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Vorteile</h3>
            <ul style={styles.list}>
              <li>✔ Sehr niedrige Kosten</li>
              <li>✔ Große Auswahl an ETF-Sparplänen</li>
              <li>✔ Einfache Bedienung</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Nachteile</h3>
            <ul style={styles.list}>
              <li>✖ Keine Web-Oberfläche</li>
              <li>✖ Weniger Analyse-Tools</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2>Unser Fazit</h2>
          <p>
            Trade Republic ist ein sehr guter Broker für Einsteiger und alle, die
            kostengünstig per ETF-Sparplan investieren wollen.
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
