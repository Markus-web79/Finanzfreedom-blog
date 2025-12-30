import Link from "next/link";

export default function ETFSparplan() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>ETF-Sparplan für Anfänger – einfach erklärt</h1>

      <p style={styles.lead}>
        Ein ETF-Sparplan ist eine der einfachsten Möglichkeiten, langfristig
        Vermögen aufzubauen. Schon mit kleinen monatlichen Beträgen kannst du
        regelmäßig investieren.
      </p>

      <section style={styles.card}>
        <h2>Was ist ein ETF-Sparplan?</h2>
        <p>
          Bei einem ETF-Sparplan investierst du automatisch jeden Monat einen
          festen Betrag in einen oder mehrere ETFs. Dadurch profitierst du vom
          sogenannten Cost-Average-Effekt und musst dich nicht um den perfekten
          Einstiegszeitpunkt kümmern.
        </p>
      </section>

      <section style={styles.card}>
        <h2>Warum ein ETF-Sparplan sinnvoll ist</h2>
        <ul>
          <li>✔ Regelmäßiges Investieren ohne Stress</li>
          <li>✔ Schon ab kleinen Beträgen möglich</li>
          <li>✔ Sehr geringe Kosten</li>
          <li>✔ Ideal für langfristigen Vermögensaufbau</li>
        </ul>
      </section>

      <section style={styles.card}>
        <h2>Wie starte ich einen ETF-Sparplan?</h2>
        <ol>
          <li>Broker auswählen</li>
          <li>ETF aussuchen (z. B. MSCI World)</li>
          <li>Monatlichen Sparbetrag festlegen</li>
          <li>Sparplan starten</li>
        </ol>
      </section>

      <section style={styles.card}>
        <h2>Geeignete Broker für ETF-Sparpläne</h2>
        <p>
          Besonders beliebt für ETF-Sparpläne sind günstige Online-Broker wie
          Trade Republic und Scalable Capital.
        </p>

        <div style={styles.links}>
          <Link href="/investieren/broker/trade-republic/info">
            → Trade Republic ansehen
          </Link>
          <Link href="/investieren/broker/scalable-capital/info">
            → Scalable Capital ansehen
          </Link>
        </div>
      </section>

      <section style={styles.card}>
        <h2>Fazit</h2>
        <p>
          Ein ETF-Sparplan ist eine der besten Möglichkeiten für Einsteiger, um
          langfristig Vermögen aufzubauen – einfach, günstig und automatisiert.
        </p>
      </section>

      <div style={styles.back}>
        <Link href="/investieren/etfs">← Zur ETF-Übersicht</Link>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "20px",
  },
  lead: {
    fontSize: "1.1rem",
    opacity: 0.9,
    marginBottom: "40px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  links: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  back: {
    marginTop: "32px",
    fontSize: "0.95rem",
  },
};
