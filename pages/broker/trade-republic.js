import Link from "next/link";

export default function TradeRepublic() {
  return (
    <main style={styles.page}>
      {/* Back */}
      <Link href="/broker" style={styles.back}>
        ← Zur Broker-Übersicht
      </Link>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Trade Republic Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Trade Republic gehört zu den bekanntesten Neobrokern in Deutschland.
          Aber für wen lohnt sich der Broker wirklich – und wo liegen die Grenzen?
        </p>
      </header>

      {/* Quick Facts */}
      <section style={styles.facts}>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Depotführung</span>
          <strong>Kostenlos</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>ETF-Sparpläne</span>
          <strong>Kostenlos</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Orderkosten</span>
          <strong>1 € pro Trade</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Geeignet für</span>
          <strong>Einsteiger & Sparpläne</strong>
        </div>
      </section>

      {/* Inhalt */}
      <section style={styles.content}>
        <h2>Was ist Trade Republic?</h2>
        <p>
          Trade Republic ist ein deutscher Neobroker mit Sitz in Berlin, der sich
          auf extrem günstiges und einfaches Investieren spezialisiert hat.
          Der Fokus liegt klar auf ETF-Sparplänen und langfristigem
          Vermögensaufbau.
        </p>
        <p>
          Die Nutzung erfolgt hauptsächlich über die App, was Trade Republic
          besonders für Einsteiger attraktiv macht.
        </p>

        <h2>Welche Produkte bietet Trade Republic?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien & Einmalinvestments</li>
          <li>Kryptowährungen</li>
          <li>Zinsen auf Guthaben (je nach Marktphase)</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <p>
          Trade Republic ist bekannt für sein einfaches Gebührenmodell:
        </p>
        <ul>
          <li>Depotführung: kostenlos</li>
          <li>ETF-Sparpläne: kostenlos</li>
          <li>Einmal-Käufe & Verkäufe: 1 € pro Trade</li>
        </ul>

        <div style={styles.tip}>
          💡 <strong>Praxis-Tipp:</strong>  
          Für langfristige ETF-Sparpläne ist Trade Republic eine der günstigsten
          und einfachsten Lösungen am Markt.
        </div>

        <h2>Vorteile & Nachteile</h2>
        <h3>Vorteile</h3>
        <ul>
          <li>Sehr einfache Bedienung</li>
          <li>Kostenlose ETF-Sparpläne</li>
          <li>Transparentes Gebührenmodell</li>
          <li>Ideal für Einsteiger</li>
        </ul>

        <h3>Nachteile</h3>
        <ul>
          <li>Begrenztere ETF-Auswahl als bei Scalable</li>
          <li>App-fokussiert (Web nur eingeschränkt)</li>
          <li>Wenig Zusatzfunktionen für Profis</li>
        </ul>

        <h2>Für wen eignet sich Trade Republic?</h2>
        <p>
          Trade Republic eignet sich besonders für:
        </p>
        <ul>
          <li>ETF-Einsteiger</li>
          <li>Sparplan-Investoren</li>
          <li>Personen, die es einfach & günstig wollen</li>
        </ul>

        <p>
          Wenn du regelmäßig investieren willst, ohne dich mit vielen
          Einstellungen oder Funktionen zu beschäftigen, bist du hier richtig.
        </p>
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
  back: {
    display: "inline-block",
    marginBottom: "20px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    textAlign: "center",
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
  facts: {
    maxWidth: "1100px",
    margin: "0 auto 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  factCard: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "20px",
  },
  factLabel: {
    display: "block",
    fontSize: "0.85rem",
    color: "#9ca3af",
    marginBottom: "6px",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  tip: {
    margin: "30px 0",
    padding: "20px",
    borderRadius: "14px",
    background: "rgba(45,212,191,0.08)",
    border: "1px solid rgba(45,212,191,0.25)",
  },
};
