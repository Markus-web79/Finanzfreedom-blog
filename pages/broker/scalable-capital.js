import Link from "next/link";

export default function ScalableCapital() {
  return (
    <main style={styles.page}>
      {/* Back */}
      <Link href="/broker" style={styles.back}>
        ← Zur Broker-Übersicht
      </Link>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Scalable Capital Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Scalable Capital ist einer der größten Neobroker in Deutschland.
          Besonders beliebt bei langfristigen Anlegern mit größerem Depot –
          aber ist er wirklich besser als Trade Republic?
        </p>
      </header>

      {/* Quick Facts */}
      <section style={styles.facts}>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Depotführung</span>
          <strong>Meist kostenlos</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>ETF-Sparpläne</span>
          <strong>Sehr große Auswahl</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Orderkosten</span>
          <strong>ab 0,99 € / Trade</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Geeignet für</span>
          <strong>Einsteiger & Fortgeschrittene</strong>
        </div>
      </section>

      {/* Inhalt */}
      <section style={styles.content}>
        <h2>Was ist Scalable Capital?</h2>
        <p>
          Scalable Capital ist ein deutscher Neobroker, der sich auf günstiges
          und strukturiertes Investieren per App und Web spezialisiert hat.
          Im Fokus stehen ETF-Sparpläne, Einzelinvestments und der langfristige
          Vermögensaufbau.
        </p>
        <p>
          Im Vergleich zu Trade Republic richtet sich Scalable stärker an Anleger,
          die mehr Auswahl, mehr Kontrolle und ein langfristig wachsendes Depot
          aufbauen möchten.
        </p>

        <h2>Welche Produkte bietet Scalable Capital?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne (sehr große Auswahl)</li>
          <li>Aktien & Einmalinvestments</li>
          <li>Kryptowährungen (je nach Region)</li>
          <li>Portfolio-Übersicht & Auswertungen</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <p>
          Scalable Capital bietet zwei Modelle:
        </p>
        <ul>
          <li>
            <strong>Free-Modell:</strong> ab 0,99 € pro Trade
          </li>
          <li>
            <strong>Prime-Modell:</strong> Flatrate für häufiges Handeln
          </li>
        </ul>

        <div style={styles.tip}>
          💡 <strong>Praxis-Tipp:</strong>  
          Für langfristige ETF-Sparpläne reicht oft das Free-Modell.
          Wenn du häufiger handelst oder viele Einzelkäufe tätigst,
          kann sich das Prime-Modell lohnen.
        </div>

        <h2>Vorteile & Nachteile</h2>

        <h3>Vorteile</h3>
        <ul>
          <li>Sehr große ETF- & Aktienauswahl</li>
          <li>App & Web nutzbar</li>
          <li>Flexible Gebührenmodelle</li>
          <li>Gut geeignet für größere Depots</li>
        </ul>

        <h3>Nachteile</h3>
        <ul>
          <li>Etwas komplexer als Trade Republic</li>
          <li>Prime-Modell lohnt sich nicht für jeden</li>
        </ul>

        <h2>Für wen eignet sich Scalable Capital?</h2>
        <p>
          Scalable Capital eignet sich besonders für:
        </p>
        <ul>
          <li>Langfristige ETF-Anleger</li>
          <li>Investoren mit größerem Depot</li>
          <li>Nutzer, die mehr Auswahl & Kontrolle möchten</li>
        </ul>

        <p>
          Wenn du dein Depot strukturiert aufbauen und langfristig erweitern
          möchtest, ist Scalable Capital eine sehr starke Wahl.
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
