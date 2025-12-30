import Link from "next/link";

export default function BrokerOverview() {
  return (
    <div style={styles.page}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link href="/">Startseite</Link> →{" "}
        <Link href="/investieren">Investieren</Link> → Broker
      </div>

      {/* Headline */}
      <h1 style={styles.title}>Broker-Vergleich</h1>
      <p style={styles.subtitle}>
        Welcher Broker passt zu dir? Wir vergleichen die beliebtesten Online-Broker
        für ETF-Sparpläne, Einsteiger und langfristigen Vermögensaufbau.
      </p>

      {/* Cards */}
      <div style={styles.grid}>
        {/* Trade Republic */}
        <div style={styles.card}>
          <h2>Trade Republic</h2>
          <p>
            Ideal für Einsteiger & ETF-Sparpläne. Sehr niedrige Kosten,
            einfache App und große Auswahl.
          </p>
          <ul>
            <li>✔ 1 € pro Trade</li>
            <li>✔ Kostenlose ETF-Sparpläne</li>
            <li>✔ Sehr einfache Bedienung</li>
          </ul>
          <Link href="/investieren/broker/trade-republic" style={styles.button}>
            Zum Broker →
          </Link>
        </div>

        {/* Platzhalter Scalable */}
        <div style={styles.card}>
          <h2>Scalable Capital</h2>
          <p>
            Für Anleger mit höherem Handelsvolumen. Flat-Fee-Modell und große
            ETF-Auswahl.
          </p>
          <ul>
            <li>✔ Viele ETFs & Aktien</li>
            <li>✔ Flat-Fee möglich</li>
            <li>✔ Für Fortgeschrittene</li>
          </ul>
          <span style={styles.disabled}>Kommt als Nächstes</span>
        </div>

        {/* Platzhalter ING */}
        <div style={styles.card}>
          <h2>ING</h2>
          <p>
            Solider deutscher Broker mit Banklizenz. Gut für langfristige
            Anleger, weniger für Vieltrader.
          </p>
          <ul>
            <li>✔ Große deutsche Bank</li>
            <li>✔ Hohe Sicherheit</li>
            <li>✖ Höhere Kosten</li>
          </ul>
          <span style={styles.disabled}>Kommt als Nächstes</span>
        </div>
      </div>

      {/* CTA */}
      <div style={styles.cta}>
        <Link href="/blog">→ Mehr Wissen im Blog</Link>
      </div>
    </div>
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
  title: {
    fontSize: "2.5rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    maxWidth: "700px",
    marginBottom: "40px",
    opacity: 0.85,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "linear-gradient(180deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  button: {
    display: "inline-block",
    marginTop: "16px",
    padding: "10px 16px",
    borderRadius: "8px",
    background: "#0f766e",
    color: "#ecfeff",
    textDecoration: "none",
    fontWeight: "600",
  },
  disabled: {
    display: "inline-block",
    marginTop: "16px",
    opacity: 0.5,
    fontSize: "0.9rem",
  },
  cta: {
    marginTop: "60px",
    fontSize: "1rem",
  },
};
