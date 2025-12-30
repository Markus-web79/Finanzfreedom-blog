import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link href="/investieren">Investieren</Link> →{" "}
        <Link href="/investieren/broker">Broker</Link> → Vergleich
      </p>

      <h1 style={styles.title}>Broker Vergleich: Trade Republic vs. Scalable Capital</h1>
      <p style={styles.subtitle}>
        Welcher Broker passt besser zu dir? Hier findest du einen klaren,
        ehrlichen Vergleich – ohne Marketing-Blabla.
      </p>

      {/* Vergleichstabelle */}
      <section style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Kriterium</th>
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
              <td>0 € (Free Broker) / Flatrate möglich</td>
            </tr>
            <tr>
              <td>Produktvielfalt</td>
              <td>Gut</td>
              <td>Sehr groß</td>
            </tr>
            <tr>
              <td>Bedienung</td>
              <td>Sehr einfach</td>
              <td>Etwas komplexer</td>
            </tr>
            <tr>
              <td>Geeignet für</td>
              <td>Einsteiger & Sparpläne</td>
              <td>Langfristige & größere Portfolios</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Empfehlung */}
      <section style={styles.card}>
        <h2>Unsere Einschätzung</h2>
        <p>
          <strong>Trade Republic</strong> ist ideal, wenn du einfach, günstig und
          ohne viel Aufwand investieren willst – besonders als Einsteiger.
        </p>
        <p>
          <strong>Scalable Capital</strong> bietet dir mehr Flexibilität,
          Auswahl und Wachstumsmöglichkeiten – ideal für langfristige Strategien.
        </p>
      </section>

      {/* Links */}
      <section style={styles.grid}>
        <Link href="/investieren/broker/trade-republic/info" style={styles.linkCard}>
          → Trade Republic im Detail
        </Link>

        <Link href="/investieren/broker/scalable-capital/info" style={styles.linkCard}>
          → Scalable Capital im Detail
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
    maxWidth: "1000px",
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
    opacity: 0.9,
    marginBottom: "32px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "32px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  linkCard: {
    display: "block",
    textAlign: "center",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#38bdf8",
    fontWeight: 600,
  },
};
