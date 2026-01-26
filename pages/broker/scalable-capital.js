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
          Scalable Capital ist ein beliebter Broker mit großer ETF-Auswahl und
          flexiblen Sparplan-Optionen. Erfahre, für wen sich der Anbieter
          lohnt und wo seine Stärken liegen.
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
          <strong>teilweise kostenlos</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Orderkosten</span>
          <strong>Flat-Fee oder Free-Modelle</strong>
        </div>
        <div style={styles.factCard}>
          <span style={styles.factLabel}>Geeignet für</span>
          <strong>ETF-Diversität & Vielnutzer</strong>
        </div>
      </section>

      {/* Inhalt */}
      <section style={styles.content}>
        <h2>Was ist Scalable Capital?</h2>
        <p>
          Scalable Capital ist ein deutscher Online-Broker mit Fokus auf
          kostengünstigen Handel und ein breites Portfolio an ETFs, Aktien und
          weiteren Finanzprodukten. Der Broker bietet flexible Sparpläne,
          große Auswahl und verschiedene Preismodelle an.
        </p>

        <h2>Welche Produkte bietet Scalable?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien & Einmalinvestments</li>
          <li>Fonds</li>
          <li>Teile von Aktien (Bruchteile)</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <p>
          Scalable Capital bietet verschiedene Preisoptionen, darunter
          kostenlose Sparpläne unter bestimmten Bedingungen sowie
          Flatrate-Modelle für Vieltrader.
        </p>
        <ul>
          <li>Depotführung: kostenlos</li>
          <li>ETF-Sparpläne: teilweise kostenlos</li>
          <li>Orderkosten: abhängig vom gewählten Tarif</li>
        </ul>

        <div style={styles.tip}>
          💡 <strong>Praxis-Tipp:</strong>  
          Wenn du viele verschiedene ETFs besparen möchtest oder
          Bruchteile von Wertpapieren suchst, kann Scalable eine
          attraktive Option sein.
        </div>

        <h2>Vorteile & Nachteile</h2>
        <h3>Vorteile</h3>
        <ul>
          <li>Große Auswahl an ETFs und Produkten</li>
          <li>Flexible Sparplanmodelle</li>
          <li>Teilweise kostenlose Sparpläne</li>
          <li>Optionale Flatrate-Modelle</li>
        </ul>

        <h3>Nachteile</h3>
        <ul>
          <li>Preis- und Tarifmodell kann komplex wirken</li>
          <li>Funktionsumfang für Anfänger etwas unübersichtlich</li>
          <li>Mobile & Desktop-Erlebnis kann variieren</li>
        </ul>

        <h2>Für wen eignet sich Scalable?</h2>
        <ul>
          <li>Anleger mit Fokus auf ETF-Diversität</li>
          <li>Vielnutzer mit häufigen Trades</li>
          <li>Anleger, die flexible Tarife bevorzugen</li>
        </ul>

        <h2>Fazit</h2>
        <p>
          Scalable Capital ist eine gute Wahl für Anleger, die Wert auf
          große Produktvielfalt und flexible Sparpläne legen. Die
          Preisstruktur kann Vorteile für Vielnutzer bieten, ist aber
          etwas komplexer als bei anderen Brokern.
        </p>

        {/* Affiliate Hinweis */}
        <div style={styles.affiliate}>
          Hinweis: Die folgenden Links sind sogenannte Affiliate-Links. Wenn
          du über einen dieser Links ein Konto eröffnest, erhalten wir ggf. eine
          Provision. Für dich entstehen dadurch keine zusätzlichen Kosten.
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
  affiliate: {
    marginTop: "40px",
    fontSize: "0.9rem",
    color: "#9ca3af",
    borderTop: "1px solid #1e293b",
    paddingTop: "20px",
  },
};
