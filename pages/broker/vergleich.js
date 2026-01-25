import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Broker-Vergleich</h1>
        <p style={styles.subtitle}>
          Trade Republic vs. Scalable Capital – welcher Broker passt besser zu dir?
        </p>
      </section>

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
              <td>1 €</td>
              <td>ab 0,99 € / Flatrate</td>
            </tr>
            <tr>
              <td>ETF-Auswahl</td>
              <td>Gut</td>
              <td>Sehr groß</td>
            </tr>
            <tr>
              <td>App & Bedienung</td>
              <td>Extrem einfach</td>
              <td>Etwas umfangreicher</td>
            </tr>
            <tr>
              <td>Geeignet für</td>
              <td>Einsteiger</td>
              <td>Fortgeschrittene & Vieltrader</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.links}>
          <Link href="/broker/trade-republic">→ Trade Republic Details</Link>
          <Link href="/broker/scalable-capital">→ Scalable Capital Details</Link>
        </div>
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
  content: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  links: {
    marginTop: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
