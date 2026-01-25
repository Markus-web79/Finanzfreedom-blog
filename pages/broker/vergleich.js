import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>
          Broker-Vergleich: Trade Republic vs. Scalable Capital
        </h1>

        <p style={styles.subtitle}>
          Zwei der beliebtesten Neobroker in Deutschland – aber welcher passt
          wirklich zu dir? Hier findest du den klaren, ehrlichen Vergleich ohne
          Marketing-Blabla.
        </p>
      </section>

      {/* Vergleichstabelle */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Direkter Vergleich</h2>

        <div style={styles.table}>
          <div style={styles.rowHead}>
            <div>Merkmal</div>
            <div>Trade Republic</div>
            <div>Scalable Capital</div>
          </div>

          {rows.map((row, i) => (
            <div key={i} style={styles.row}>
              <div style={styles.cellTitle}>{row.label}</div>
              <div>{row.tr}</div>
              <div>{row.sc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Entscheidungshilfe */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Unsere klare Einschätzung</h2>

        <div style={styles.compareGrid}>
          <div style={styles.box}>
            <h3 style={styles.h3}>👉 Trade Republic ist ideal, wenn du …</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>maximal einfach starten willst</li>
              <li style={styles.li}>hauptsächlich ETF-Sparpläne nutzt</li>
              <li style={styles.li}>keine Lust auf viele Einstellungen hast</li>
              <li style={styles.li}>mit kleinen bis mittleren Beträgen investierst</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h3 style={styles.h3}>👉 Scalable Capital ist ideal, wenn du …</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>eine sehr große ETF-Auswahl willst</li>
              <li style={styles.li}>häufiger investierst oder umschichtest</li>
              <li style={styles.li}>ein größeres Depot planst</li>
              <li style={styles.li}>mehr Kontrolle & Optionen suchst</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Fazit</h2>
        <p style={styles.p}>
          Beide Broker sind günstig, seriös und für langfristiges Investieren
          geeignet. Der Unterschied liegt nicht im „besser oder schlechter“,
          sondern im <strong>Anspruch</strong>:
        </p>

        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Trade Republic</strong> → maximal simpel, perfekt für Einsteiger
          </li>
          <li style={styles.li}>
            <strong>Scalable Capital</strong> → mehr Auswahl, besser für wachsende Depots
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section style={styles.ctaGrid}>
        <Link href="/broker/trade-republic" style={styles.ctaPrimary}>
          Trade Republic im Detail
        </Link>
        <Link href="/broker/scalable-capital" style={styles.ctaSecondary}>
          Scalable Capital im Detail
        </Link>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerLine} />
        <p style={styles.footerText}>
          Hinweis: Keine Anlageberatung. Konditionen können sich ändern – prüfe
          vor Abschluss immer die aktuellen Angaben der Anbieter.
        </p>
      </footer>
    </main>
  );
}

const rows = [
  { label: "Depotführung", tr: "Kostenlos", sc: "Kostenlos (je nach Modell)" },
  { label: "ETF-Sparpläne", tr: "Kostenlos", sc: "Kostenlos" },
  { label: "Orderkosten", tr: "1 € pro Trade", sc: "ab 0,99 € oder Flatrate" },
  { label: "ETF-Auswahl", tr: "Gut (fokussiert)", sc: "Sehr groß" },
  { label: "Bedienung", tr: "Extrem einfach", sc: "Etwas komplexer" },
  { label: "App & Web", tr: "App-fokussiert", sc: "App & Web sehr gut" },
  { label: "Geeignet für", tr: "Einsteiger", sc: "Einsteiger & Fortgeschrittene" },
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
    color: "#ffffff",
    marginBottom: "12px",
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
  rowHead: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    fontWeight: 800,
    borderBottom: "1px solid #334155",
    paddingBottom: "8px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    padding: "10px 0",
    borderBottom: "1px solid rgba(51, 65, 85, 0.35)",
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
    background: "rgba(2, 6, 23, 0.6)",
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
    lineHeight: 1.6,
  },
};
