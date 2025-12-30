import Link from "next/link";

export default function MsciEmergingMarkets() {
  return (
    <main style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link href="/investieren/etfs">ETFs</Link> → MSCI Emerging Markets
      </p>

      <h1 style={styles.title}>MSCI Emerging Markets ETF erklärt</h1>

      <p style={styles.intro}>
        Der MSCI Emerging Markets ETF ermöglicht dir, in Schwellenländer
        wie China, Indien, Brasilien oder Taiwan zu investieren.
        Er bietet höhere Wachstumschancen – aber auch mehr Schwankungen.
      </p>

      <section style={styles.card}>
        <h2>Was ist der MSCI Emerging Markets?</h2>
        <p>
          Der MSCI Emerging Markets Index bildet große und mittelgroße
          Unternehmen aus über 20 Schwellenländern ab.
          Dazu zählen unter anderem China, Indien, Südkorea und Brasilien.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.box}>
          <h3>Vorteile</h3>
          <ul>
            <li>Höheres langfristiges Wachstumspotenzial</li>
            <li>Breite Streuung über viele Länder</li>
            <li>Sinnvolle Ergänzung zum MSCI World</li>
          </ul>
        </div>

        <div style={styles.box}>
          <h3>Nachteile</h3>
          <ul>
            <li>Stärkere Kursschwankungen</li>
            <li>Politische & wirtschaftliche Risiken</li>
            <li>Teilweise geringere Transparenz</li>
          </ul>
        </div>
      </section>

      <section style={styles.card}>
        <h2>Für wen ist der MSCI Emerging Markets geeignet?</h2>
        <p>
          Dieser ETF eignet sich für Anleger, die langfristig investieren,
          höhere Schwankungen aushalten können und ihr Portfolio breiter
          diversifizieren möchten.
        </p>
      </section>

      <section style={styles.card}>
        <h2>MSCI Emerging Markets im Portfolio</h2>
        <p>
          Viele Anleger kombinieren den MSCI Emerging Markets mit einem
          MSCI World ETF, z. B. im Verhältnis 70 % World / 30 % Emerging Markets.
        </p>
      </section>

      <div style={styles.links}>
        <Link href="/investieren/etfs/msci-world">→ MSCI World ETF</Link>
        <Link href="/investieren/etfs/vergleich-msci-world-vs-all-world">
          → ETF-Vergleich ansehen
        </Link>
      </div>

      <Link href="/investieren/etfs" style={styles.back}>
        ← Zurück zur ETF-Übersicht
      </Link>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "16px",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "16px",
  },
  intro: {
    opacity: 0.85,
    marginBottom: "40px",
  },
  card: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginBottom: "32px",
  },
  box: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "20px",
  },
  links: {
    display: "flex",
    gap: "24px",
    marginBottom: "40px",
  },
  back: {
    color: "#2dd4bf",
    textDecoration: "none",
  },
};
