import Head from "next/head";
import Link from "next/link";

export default function BrokerPage() {
  return (
    <>
      <Head>
        <title>Scalable Capital Test & Erfahrungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Scalable Capital im Test: Kosten, ETF-Sparpläne, Vorteile, Nachteile & für wen sich der Broker eignet."
        />
      </Head>

      <main style={styles.page}>
        {/* HEADER */}
        <section style={styles.header}>
          <h1>Scalable Capital</h1>
          <p>
            Scalable Capital ist ein moderner Online-Broker mit großer ETF-Auswahl,
            flexiblen Tarifmodellen und Fokus auf langfristigen Vermögensaufbau.
          </p>
        </section>

        {/* QUICK FACTS */}
        <section>
          <h2 style={styles.sectionTitle}>Das Wichtigste auf einen Blick</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Kosten</h3>
              <p>ETF-Sparpläne kostenlos, Prime-Modell mit Flat-Fee</p>
            </div>
            <div style={styles.card}>
              <h3>ETF-Auswahl</h3>
              <p>Sehr große Auswahl an ETFs & Sparplänen</p>
            </div>
            <div style={styles.card}>
              <h3>Plattform</h3>
              <p>Web & App verfügbar</p>
            </div>
            <div style={styles.card}>
              <h3>Sicherheit</h3>
              <p>BaFin-reguliert, Einlagensicherung bis 100.000 €</p>
            </div>
          </div>
        </section>

        {/* TARGET GROUP */}
        <section style={styles.box}>
          <h2>Für wen eignet sich Scalable Capital?</h2>
          <p>
            Scalable Capital eignet sich besonders für Anleger, die regelmäßig in ETFs investieren
            oder zusätzlich aktiv handeln möchten. Das Prime-Modell ist interessant für Nutzer
            mit höherem Handelsvolumen.
          </p>
        </section>

        {/* PRO / CONTRA */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Vorteile</h3>
            <ul>
              <li>✔ Sehr große ETF-Auswahl</li>
              <li>✔ Web & App nutzbar</li>
              <li>✔ Flat-Fee-Modell verfügbar</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3>Nachteile</h3>
            <ul>
              <li>✖ Prime-Modell kostenpflichtig</li>
              <li>✖ Für absolute Einsteiger etwas komplexer</li>
            </ul>
          </div>
        </section>

        {/* FAZIT */}
        <section style={styles.fazit}>
          <h2>Unser Fazit</h2>
          <p>
            Scalable Capital ist eine sehr gute Wahl für langfristige Anleger und
            Nutzer, die neben ETF-Sparplänen auch aktiv handeln möchten.
          </p>

          <a
            href="#"
            style={styles.cta}
          >
            Zum Anbieter (Affiliate folgt)
          </a>
        </section>

        {/* NAVIGATION */}
        <nav style={styles.nav}>
          <Link href="/investieren/broker/vergleich">← Zum Broker-Vergleich</Link>
        </nav>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  sectionTitle: {
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginBottom: "60px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  box: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "60px",
  },
  fazit: {
    background: "linear-gradient(145deg, #022c22, #020617)",
    border: "1px solid #0d9488",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    marginBottom: "40px",
  },
  cta: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 28px",
    background: "#14b8a6",
    color: "#020617",
    borderRadius: "999px",
    fontWeight: "600",
    textDecoration: "none",
  },
  nav: {
    textAlign: "center",
    marginTop: "20px",
  },
};
