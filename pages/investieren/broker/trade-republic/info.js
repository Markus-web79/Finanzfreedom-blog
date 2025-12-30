import Link from "next/link";

export default function TradeRepublicInfo() {
  return (
    <main style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link href="/investieren">Investieren</Link> →{" "}
        <Link href="/investieren/broker">Broker</Link> → Trade Republic
      </p>

      <h1 style={styles.title}>Trade Republic – Erfahrungen & Infos</h1>
      <p style={styles.subtitle}>
        Trade Republic ist einer der bekanntesten Neobroker in Deutschland und
        besonders bei Einsteigern sehr beliebt.
      </p>

      {/* Kosten */}
      <section style={styles.card}>
        <h2>Kosten & Gebühren</h2>
        <ul>
          <li>Depotführung: kostenlos</li>
          <li>ETF-Sparpläne: kostenlos</li>
          <li>Aktien & ETFs: 1 € Fremdkostenpauschale pro Trade</li>
        </ul>
        <p style={styles.note}>
          Tipp: Besonders für langfristige Anleger mit Sparplänen sehr attraktiv.
        </p>
      </section>

      {/* Vorteile / Nachteile */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>Vorteile</h3>
          <ul>
            <li>Sehr einfache Bedienung</li>
            <li>Viele kostenlose ETF-Sparpläne</li>
            <li>Sehr niedrige Gebühren</li>
            <li>App extrem einsteigerfreundlich</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Nachteile</h3>
          <ul>
            <li>Nur ein Handelsplatz (LS Exchange)</li>
            <li>Wenig Analyse-Tools</li>
            <li>Für aktive Trader eingeschränkt</li>
          </ul>
        </div>
      </section>

      {/* Zielgruppe */}
      <section style={styles.card}>
        <h2>Für wen ist Trade Republic geeignet?</h2>
        <p>
          Trade Republic eignet sich besonders für Einsteiger, Sparplan-Nutzer
          und Anleger, die einfach und günstig investieren möchten – ohne
          komplexe Funktionen.
        </p>
      </section>

      {/* Vergleich */}
      <section style={styles.card}>
        <h2>Trade Republic vs. Scalable Capital</h2>
        <p>
          Trade Republic ist besonders simpel und günstig, während Scalable
          Capital mehr Auswahl und Flexibilität bietet – vor allem bei größeren
          Portfolios.
        </p>

        <Link href="/investieren/broker/vergleich" style={styles.link}>
          → Zum Broker-Vergleich
        </Link>
      </section>

      {/* FAQ */}
      <section style={styles.card}>
        <h2>FAQ</h2>

        <h4>Ist Trade Republic sicher?</h4>
        <p>
          Ja. Trade Republic ist ein regulierter deutscher Broker mit
          Einlagensicherung bis 100.000 €.
        </p>

        <h4>Gibt es Trade Republic als App?</h4>
        <p>
          Ja. Trade Republic ist primär als Smartphone-App konzipiert, kann aber
          auch im Browser genutzt werden.
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
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
    marginBottom: "32px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "24px",
  },
  note: {
    opacity: 0.8,
    marginTop: "12px",
    fontSize: "0.95rem",
  },
  link: {
    color: "#38bdf8",
    fontWeight: 500,
  },
};
