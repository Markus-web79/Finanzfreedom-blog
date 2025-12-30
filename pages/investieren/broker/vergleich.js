import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>Broker Vergleich 2025 – Trade Republic vs Scalable Capital</title>
        <meta
          name="description"
          content="Großer Broker Vergleich 2025: Trade Republic vs Scalable Capital. Kosten, ETFs, Sparpläne & Empfehlung für Einsteiger."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <Link href="/">Startseite</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/broker">Broker</Link> → Vergleich
        </div>

        {/* Hero */}
        <h1 style={styles.title}>Broker Vergleich 2025</h1>
        <p style={styles.subtitle}>
          Trade Republic oder Scalable Capital?  
          Hier findest du den klaren Vergleich für Einsteiger & ETF-Sparer.
        </p>

        {/* Vergleich */}
        <section style={styles.card}>
          <h2>🟢 Trade Republic</h2>
          <ul>
            <li>✔ Sehr einfache App</li>
            <li>✔ Ideal für Einsteiger</li>
            <li>✔ Kostenlose ETF-Sparpläne</li>
            <li>✔ Niedrige Gebühren</li>
          </ul>
          <Link href="/investieren/broker/trade-republic">
            → Zum Trade Republic Test
          </Link>
        </section>

        <section style={styles.card}>
          <h2>🔵 Scalable Capital</h2>
          <ul>
            <li>✔ Große ETF-Auswahl</li>
            <li>✔ Web & App nutzbar</li>
            <li>✔ Flatrate-Modell möglich</li>
            <li>✔ Gut für langfristige Sparer</li>
          </ul>
          <Link href="/investieren/broker/scalable-capital">
            → Zum Scalable Capital Test
          </Link>
        </section>

        {/* Empfehlung */}
        <section style={styles.recommendation}>
          <h2>⭐ Unsere Empfehlung</h2>
          <p>
            👉 <strong>Trade Republic</strong> für absolute Einsteiger  
            <br />
            👉 <strong>Scalable Capital</strong> für größere ETF-Portfolios
          </p>
        </section>

        {/* Zurück */}
        <div style={styles.back}>
          <Link href="/investieren/broker">← Zurück zur Broker-Übersicht</Link>
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
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
    marginBottom: "40px",
  },
  card: {
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  recommendation: {
    marginTop: "40px",
    padding: "24px",
    borderRadius: "14px",
    background: "rgba(16, 185, 129, 0.1)",
  },
  back: {
    marginTop: "40px",
  },
};
