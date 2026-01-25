import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Broker-Vergleich: Trade Republic vs. Scalable Capital</h1>
        <p style={styles.subtitle}>
          Zwei der beliebtesten Neobroker in Deutschland – aber welcher passt wirklich zu dir?
        </p>
      </section>

      {/* Einordnung */}
      <section style={styles.intro}>
        <p>
          Wenn du mit ETFs starten willst, landest du fast automatisch bei{" "}
          <strong>Trade Republic</strong> oder <strong>Scalable Capital</strong>.
          Beide sind günstig, modern und für langfristiges Investieren geeignet –
          unterscheiden sich aber deutlich im Fokus.
        </p>
      </section>

      {/* Vergleichstabelle */}
      <section style={styles.content}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Merkmal</th>
              <th>Trade Republic</th>
              <th>Scalable Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Depotführung</td>
              <td>Kostenlos</td>
              <td>Kostenlos</td>
            </tr>
            <tr>
              <td>ETF-Sparpläne</td>
              <td>Kostenlos</td>
              <td>Kostenlos</td>
            </tr>
            <tr>
              <td>Orderkosten</td>
              <td>1 € pro Trade</td>
              <td>ab 0,99 € oder Flatrate</td>
            </tr>
            <tr>
              <td>ETF-Auswahl</td>
              <td>Gut (fokussiert)</td>
              <td>Sehr groß</td>
            </tr>
            <tr>
              <td>Bedienung</td>
              <td>Extrem einfach</td>
              <td>Etwas komplexer</td>
            </tr>
            <tr>
              <td>Geeignet für</td>
              <td>Einsteiger & Sparplan-Starter</td>
              <td>Fortgeschrittene & größere Depots</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Entscheidungshilfe */}
      <section style={styles.decision}>
        <h2>Unsere klare Empfehlung</h2>

        <p>
          👉 <strong>Trade Republic</strong> ist ideal, wenn du einfach starten willst,
          wenig nachdenken möchtest und einen soliden ETF-Sparplan suchst.
        </p>

        <p>
          👉 <strong>Scalable Capital</strong> lohnt sich, wenn du mehr Auswahl willst,
          häufiger handelst oder dein Depot langfristig größer aufbauen möchtest.
        </p>
      </section>

      {/* CTAs */}
      <section style={styles.ctas}>
        <Link href="/broker/trade-republic" style={styles.ctaPrimary}>
          Trade Republic im Detail ansehen
        </Link>
        <Link href="/broker/scalable-capital" style={styles.ctaSecondary}>
          Scalable Capital im Detail ansehen
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
  intro: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto 40px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  decision: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    lineHeight: 1.7,
  },
  ctas: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  ctaPrimary: {
    background: "#2dd4bf",
    color: "#020617",
    padding: "14px 18px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: 700,
    textDecoration: "none",
  },
  ctaSecondary: {
    border: "1px solid #2dd4bf",
    color: "#2dd4bf",
    padding: "14px 18px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: 600,
    textDecoration: "none",
  },
};
