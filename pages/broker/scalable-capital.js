import Link from "next/link";

export default function ScalableCapital() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Scalable Capital Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Kosten, Vorteile, Nachteile & für wen sich Scalable Capital wirklich lohnt.
        </p>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <h2>Was ist Scalable Capital?</h2>
        <p>
          Scalable Capital ist ein deutscher Neobroker mit Sitz in München. Der Broker
          ist besonders bekannt für günstige ETF-Sparpläne, eine große ETF-Auswahl
          und flexible Flatrate-Modelle für aktive Anleger.
        </p>

        <h2>Welche Produkte bietet Scalable Capital?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien & Aktien-Sparpläne</li>
          <li>ETCs & ETPs</li>
          <li>Investmentfonds</li>
        </ul>

        <h2>Kosten & Gebühren</h2>
        <ul>
          <li>ETF-Sparpläne: <strong>0 €</strong></li>
          <li>Einzelkäufe: ab <strong>0,99 €</strong></li>
          <li>Flatrate PRIME: ab <strong>2,99 € / Monat</strong></li>
          <li>Keine Depotführungsgebühr</li>
        </ul>

        <h2>Vorteile von Scalable Capital</h2>
        <ul>
          <li>Sehr große ETF-Auswahl</li>
          <li>Kostenlose ETF-Sparpläne</li>
          <li>Flatrate ideal für Vieltrader</li>
          <li>Übersichtliche App & Web-Plattform</li>
        </ul>

        <h2>Nachteile</h2>
        <ul>
          <li>Orderkosten ohne Flatrate</li>
          <li>Kein klassisches Girokonto</li>
          <li>Weniger geeignet für Daytrading</li>
        </ul>

        <h2>Für wen eignet sich Scalable Capital?</h2>
        <p>
          Scalable Capital eignet sich besonders für langfristige ETF-Investoren
          und Anleger, die regelmäßig investieren oder viele Trades mit niedrigen
          Kosten durchführen möchten.
        </p>

        <h2>Scalable Capital oder Trade Republic?</h2>
        <p>
          Während Trade Republic besonders einfach für Einsteiger ist,
          bietet Scalable Capital mehr Flexibilität und Vorteile für
          fortgeschrittene Anleger und Vieltrader.
        </p>

        <div style={styles.links}>
          <Link href="/broker/trade-republic">→ Trade Republic im Vergleich</Link>
          <Link href="/broker/vergleich">→ Broker-Vergleich ansehen</Link>
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
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  links: {
    marginTop: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
