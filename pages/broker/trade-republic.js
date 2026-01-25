import Link from "next/link";

export default function TradeRepublic() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Trade Republic Erfahrungen (2026)</h1>
        <p style={styles.subtitle}>
          Kosten, Vorteile, Nachteile & für wen sich Trade Republic wirklich lohnt.
        </p>
      </section>

      {/* Inhalt */}
      <section style={styles.content}>
        <h2>Was ist Trade Republic?</h2>
        <p>
          Trade Republic ist ein deutscher Neobroker mit Sitz in Berlin. Er
          ermöglicht günstiges Investieren per App und richtet sich vor allem an
          Einsteiger, ETF-Sparer und langfristige Anleger.
        </p>

        <h2>Welche Produkte bietet Trade Republic?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien & Derivate</li>
          <li>Krypto (über Partner)</li>
          <li>Zinsen auf nicht investiertes Guthaben</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <ul>
          <li>0 € Depotführung</li>
          <li>0 € ETF-Sparpläne</li>
          <li>1 € pro Einzelorder</li>
          <li>keine versteckten Kosten</li>
        </ul>

        <h2>Vorteile von Trade Republic</h2>
        <ul>
          <li>sehr günstige Kostenstruktur</li>
          <li>einfache, übersichtliche App</li>
          <li>ideal für Einsteiger</li>
          <li>große Auswahl an ETFs</li>
        </ul>

        <h2>Nachteile</h2>
        <ul>
          <li>keine klassische Web-Oberfläche</li>
          <li>kein persönlicher Ansprechpartner</li>
          <li>eingeschränkte Analyse-Tools</li>
        </ul>

        <h2>Für wen eignet sich Trade Republic?</h2>
        <p>
          Trade Republic eignet sich besonders für Anleger, die regelmäßig in ETFs
          investieren möchten, wenig handeln und eine einfache Lösung ohne
          Schnickschnack suchen.
        </p>

        <h2>Fazit</h2>
        <p>
          Trade Republic ist einer der besten Broker für ETF-Sparer und Einsteiger.
          Wer langfristig investieren möchte und niedrige Kosten schätzt, ist hier
          sehr gut aufgehoben.
        </p>

        <Link href="/broker/vergleich" style={styles.cta}>
          → Broker vergleichen
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
    margin: "0 auto 50px",
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
    lineHeight: 1.7,
  },
  cta: {
    display: "inline-block",
    marginTop: "30px",
    color: "#2dd4bf",
    fontWeight: 600,
    textDecoration: "none",
  },
};
