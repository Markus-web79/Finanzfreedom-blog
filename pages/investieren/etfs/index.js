import Link from "next/link";

export default function ETFs() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>ETFs – einfach erklärt</h1>

      <p style={styles.lead}>
        ETFs (Exchange Traded Funds) sind eine der beliebtesten und einfachsten
        Möglichkeiten, langfristig Vermögen aufzubauen – auch ohne
        Finanz-Vorkenntnisse.
      </p>

      <section style={styles.card}>
        <h2>Was ist ein ETF?</h2>
        <p>
          Ein ETF bildet einen Index wie den MSCI World oder den DAX nach.
          Anstatt einzelne Aktien zu kaufen, investierst du automatisch in
          hunderte oder tausende Unternehmen gleichzeitig.
        </p>
      </section>

      <section style={styles.card}>
        <h2>Warum ETFs sinnvoll sind</h2>
        <ul>
          <li>✔ Sehr breite Streuung</li>
          <li>✔ Geringe Kosten</li>
          <li>✔ Ideal für langfristigen Vermögensaufbau</li>
          <li>✔ Einfach per Sparplan investierbar</li>
        </ul>
      </section>

      <section style={styles.card}>
        <h2>Für wen eignen sich ETFs?</h2>
        <p>
          ETFs eignen sich besonders für Einsteiger, langfristige Anleger und
          alle, die ohne Stress und Zeitaufwand investieren möchten.
        </p>
      </section>

      <section style={styles.card}>
        <h2>Wie investiert man in ETFs?</h2>
        <p>
          Der einfachste Weg ist ein ETF-Sparplan über einen Online-Broker wie
          Trade Republic oder Scalable Capital.
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
    fontSize: "2.5rem",
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
};
