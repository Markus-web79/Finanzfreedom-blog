import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link href="/">Startseite</Link> →{" "}
        <Link href="/investieren">Investieren</Link> →{" "}
        <Link href="/investieren/broker">Broker</Link> → Vergleich
      </div>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Broker-Vergleich</h1>
        <p style={styles.subtitle}>
          Welcher Broker passt zu dir? Vergleiche die beliebtesten Anbieter für
          ETF- & Aktien-Investments in Deutschland.
        </p>
      </header>

      {/* Vergleichstabelle */}
      <section style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Broker</th>
              <th>Kosten</th>
              <th>ETFs</th>
              <th>Geeignet für</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Trade Republic</strong></td>
              <td>Sehr günstig</td>
              <td>Große Auswahl</td>
              <td>Einsteiger, Sparpläne</td>
              <td>
                <Link href="/investieren/broker/trade-republic">
                  Zum Test →
                </Link>
              </td>
            </tr>
            <tr>
              <td><strong>Scalable Capital</strong></td>
              <td>Flatrate möglich</td>
              <td>Sehr große Auswahl</td>
              <td>Langfristige Anleger</td>
              <td>
                <Link href="/investieren/broker/scalable-capital">
                  Zum Test →
                </Link>
              </td>
            </tr>
            <tr style={{ opacity: 0.6 }}>
              <td><strong>ING</strong></td>
              <td>Höher</td>
              <td>Große Auswahl</td>
              <td>Sicherheitsorientiert</td>
              <td>Kommt bald</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Empfehlung */}
      <section style={styles.card}>
        <h2>Unsere Empfehlung</h2>
        <p>
          Für die meisten Einsteiger sind <strong>Trade Republic</strong> oder{" "}
          <strong>Scalable Capital</strong> die beste Wahl – abhängig davon, ob
          du eher einfach sparen oder aktiver investieren möchtest.
        </p>
      </section>

      {/* Back */}
      <div style={styles.back}>
        <Link href="/investieren/broker">← Zurück zur Broker-Übersicht</Link>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  header: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
  },
  tableWrap: {
    overflowX: "auto",
    marginBottom: "40px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "40px",
  },
  back: {
    marginTop: "40px",
    opacity: 0.8,
  },
};
