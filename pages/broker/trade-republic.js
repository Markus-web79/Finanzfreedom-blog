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
          Der beliebteste Neobroker in Deutschland – Kosten, Vorteile, Nachteile
          und für wen sich Trade Republic wirklich lohnt.
        </p>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <h2>Was ist Trade Republic?</h2>
        <p>
          Trade Republic ist ein deutscher Neobroker mit Sitz in Berlin, der sich
          auf günstiges Investieren per App spezialisiert hat. Besonders bekannt
          ist Trade Republic für kostenlose ETF-Sparpläne, niedrige Gebühren und
          eine extrem einfache Bedienung.
        </p>

        <h2>Welche Produkte bietet Trade Republic?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien</li>
          <li>Kryptowährungen</li>
          <li>Anleihen</li>
          <li>Zinsen auf Guthaben</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <p>
          Trade Republic arbeitet mit einem sehr einfachen Gebührenmodell:
        </p>
        <ul>
          <li>0 € Depotführung</li>
          <li>0 € ETF-Sparpläne</li>
          <li>1 € Fremdkostenpauschale pro Trade</li>
        </ul>

        <h2>Vorteile von Trade Republic</h2>
        <ul>
          <li>Sehr einfache App – ideal für Einsteiger</li>
          <li>Kostenlose ETF-Sparpläne</li>
          <li>Keine versteckten Gebühren</li>
          <li>BaFin-reguliert & Einlagensicherung</li>
        </ul>

        <h2>Nachteile von Trade Republic</h2>
        <ul>
          <li>Keine klassische Web-Oberfläche (App-Fokus)</li>
          <li>Begrenzte Analyse-Tools</li>
          <li>Kein direkter Telefon-Support</li>
        </ul>

        <h2>Für wen eignet sich Trade Republic?</h2>
        <p>
          Trade Republic eignet sich besonders für:
        </p>
        <ul>
          <li>ETF-Einsteiger</li>
          <li>Sparer mit langfristigem Anlagehorizont</li>
          <li>Personen, die günstig investieren möchten</li>
        </ul>

        <h2>Fazit: Lohnt sich Trade Republic?</h2>
        <p>
          Trade Republic ist einer der besten Broker für Einsteiger und
          langfristige ETF-Investoren. Wer einfache Bedienung und niedrige Kosten
          sucht, ist hier sehr gut aufgehoben.
        </p>

        <div style={styles.ctaBox}>
          <p><strong>Tipp:</strong> Vergleiche Trade Republic mit anderen Brokern.</p>
          <Link href="/broker/vergleich" style={styles.cta}>
            Zum Broker-Vergleich →
          </Link>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "#020617",
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
  ctaBox: {
    marginTop: "40px",
    padding: "24px",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    background: "#020617",
    textAlign: "center",
  },
  cta: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    fontWeight: 600,
    textDecoration: "none",
  },
};
