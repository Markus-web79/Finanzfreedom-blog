import Link from "next/link";

export default function BrokerHub() {
  return (
    <main style={styles.page}>
      <h1>Broker im Überblick</h1>

      <p style={styles.intro}>
        Broker ermöglichen dir den Handel mit Aktien, ETFs und anderen
        Wertpapieren. Hier findest du eine Übersicht der wichtigsten Anbieter
        sowie unabhängige Vergleiche.
      </p>

      <section style={styles.grid}>
        {/* Trade Republic */}
        <div style={styles.card}>
          <h2>Trade Republic</h2>
          <p>
            Sehr einfacher und günstiger Neobroker – ideal für Einsteiger und
            ETF-Sparpläne.
          </p>
          <div style={styles.links}>
            <Link href="/investieren/broker/trade-republic/info">
              → Details ansehen
            </Link>
          </div>
        </div>

        {/* Scalable Capital */}
        <div style={styles.card}>
          <h2>Scalable Capital</h2>
          <p>
            Flexibler Broker mit großer Produktauswahl – besonders für
            langfristige Anleger interessant.
          </p>
          <div style={styles.links}>
            <Link href="/investieren/broker/scalable-capital/info">
              → Details ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section style={styles.compare}>
        <h2>Broker vergleichen</h2>
        <p>
          Du bist unsicher, welcher Broker besser zu dir passt? In unserem
          Vergleich zeigen wir dir die wichtigsten Unterschiede.
        </p>
        <Link href="/investieren/broker/vergleich" style={styles.compareLink}>
          → Zum Broker-Vergleich
        </Link>
      </section>
    </main>
  );
}

const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  intro: {
    maxWidth: "700px",
    opacity: 0.9,
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginBottom: "48px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  links: {
    marginTop: "16px",
    fontWeight: 600,
  },
  compare: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "32px",
    textAlign: "center",
  },
  compareLink: {
    display: "inline-block",
    marginTop: "12px",
    fontWeight: 600,
    color: "#38bdf8",
  },
};
