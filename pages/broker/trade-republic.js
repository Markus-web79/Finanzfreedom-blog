import Link from "next/link";

export default function TradeRepublic() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Trade Republic Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Trade Republic gehört zu den bekanntesten Neobrokern in Deutschland.
          Aber für wen lohnt sich der Broker wirklich – und wo liegen die Grenzen?
        </p>
      </section>

      {/* Überblick */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Kurzüberblick</h2>

        <div style={styles.table}>
          {facts.map((row, i) => (
            <div key={i} style={styles.row}>
              <div style={styles.cellTitle}>{row.label}</div>
              <div>{row.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Was ist Trade Republic */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Was ist Trade Republic?</h2>
        <p style={styles.p}>
          Trade Republic ist ein deutscher Neobroker mit Sitz in Berlin, der sich
          auf extrem günstiges und einfaches Investieren spezialisiert hat.
          Der Fokus liegt klar auf ETF-Sparplänen und langfristigem Vermögensaufbau.
        </p>
        <p style={styles.p}>
          Die Bedienung erfolgt hauptsächlich über die App, was Trade Republic
          besonders für Einsteiger attraktiv macht.
        </p>
      </section>

      {/* Produkte */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Welche Produkte bietet Trade Republic?</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>ETF-Sparpläne (kostenlos)</li>
          <li style={styles.li}>Aktien & ETFs</li>
          <li style={styles.li}>Anleihen</li>
          <li style={styles.li}>Derivate (Optionsscheine, Zertifikate)</li>
        </ul>
      </section>

      {/* Vorteile & Nachteile */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Vorteile & Nachteile</h2>

        <div style={styles.compareGrid}>
          <div style={styles.box}>
            <h3 style={styles.h3}>✅ Vorteile</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>Kostenlose ETF-Sparpläne</li>
              <li style={styles.li}>Sehr einfache App</li>
              <li style={styles.li}>Geringe Orderkosten (1 €)</li>
              <li style={styles.li}>Ideal für Anfänger</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h3 style={styles.h3}>❌ Nachteile</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>Nur ein Handelsplatz</li>
              <li style={styles.li}>Begrenzte ETF-Auswahl</li>
              <li style={styles.li}>Kaum Analyse-Tools</li>
              <li style={styles.li}>Wenig für aktive Trader</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Für wen geeignet */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen ist Trade Republic geeignet?</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>ETF-Einsteiger</li>
          <li style={styles.li}>Sparplan-Investoren</li>
          <li style={styles.li}>Personen mit wenig Zeit & Erfahrung</li>
          <li style={styles.li}>Kleine bis mittlere Depots</li>
        </ul>
      </section>

      {/* Fazit */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Unser Fazit</h2>
        <p style={styles.p}>
          Trade Republic ist einer der besten Broker für Einsteiger und alle,
          die unkompliziert mit ETFs starten möchten. Wer maximale Einfachheit
          sucht und langfristig investiert, ist hier richtig.
        </p>
        <p style={styles.p}>
          Für fortgeschrittene Anleger mit größerem Depot oder vielen Trades
          gibt es jedoch flexiblere Alternativen.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.ctaGrid}>
        <Link href="/broker/vergleich" style={styles.ctaSecondary}>
          Zum Broker-Vergleich
        </Link>
        <a
          href="#"
          style={styles.ctaPrimary}
          rel="nofollow sponsored"
        >
          Trade Republic jetzt ansehen
        </a>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerLine} />
        <p style={styles.footerText}>
          Hinweis: Keine Anlageberatung. Konditionen können sich ändern.
        </p>
      </footer>
    </main>
  );
}

const facts = [
  { label: "Depotführung", value: "Kostenlos" },
  { label: "ETF-Sparpläne", value: "Kostenlos" },
  { label: "Orderkosten", value: "1 € pro Trade" },
  { label: "ETF-Auswahl", value: "Gut (fokussiert)" },
  { label: "App & Web", value: "Primär App" },
  { label: "Zielgruppe", value: "Einsteiger & Sparplan-Investoren" },
];

const styles = {
  page: {
    minHeight: "100vh",
    padding: "70px 22px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "1000px",
    margin: "0 auto 42px",
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
    fontSize: "2.5rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    maxWidth: "820px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  section: {
    maxWidth: "1000px",
    margin: "0 auto 40px",
    background: "rgba(2, 6, 23, 0.45)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },
  h2: {
    fontSize: "1.5rem",
    marginBottom: "16px",
    color: "#ffffff",
  },
  h3: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#ffffff",
  },
  p: {
    lineHeight: 1.7,
    marginBottom: "12px",
  },
  table: {
    display: "grid",
    gap: "10px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    padding: "10px 0",
    borderBottom: "1px solid rgba(51,65,85,0.35)",
  },
  cellTitle: {
    fontWeight: 600,
    color: "#ffffff",
  },
  compareGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
  },
  box: {
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "18px",
    background: "rgba(2,6,23,0.6)",
  },
  ul: {
    paddingLeft: "18px",
    lineHeight: 1.7,
  },
  li: {
    marginBottom: "8px",
  },
  ctaGrid: {
    maxWidth: "1000px",
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  ctaPrimary: {
    textAlign: "center",
    padding: "14px",
    background: "#2dd4bf",
    color: "#001018",
    borderRadius: "12px",
    fontWeight: 800,
    textDecoration: "none",
  },
  ctaSecondary: {
    textAlign: "center",
    padding: "14px",
    border: "1px solid rgba(45,212,191,0.6)",
    color: "#2dd4bf",
    borderRadius: "12px",
    fontWeight: 800,
    textDecoration: "none",
  },
  footer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  footerLine: {
    height: "1px",
    background: "rgba(148,163,184,0.25)",
    marginBottom: "12px",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#9ca3af",
  },
};
