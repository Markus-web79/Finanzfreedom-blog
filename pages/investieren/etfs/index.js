import Link from "next/link";

export default function ETFs() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>ETFs – einfach erklärt</h1>

      <p style={styles.lead}>
        ETFs (Exchange Traded Funds) gehören zu den beliebtesten
        Anlageformen weltweit. Sie ermöglichen einen einfachen,
        günstigen und breit gestreuten Vermögensaufbau.
      </p>

      <section style={styles.card}>
        <h2>Was ist ein ETF?</h2>
        <p>
          Ein ETF bildet einen Index wie den MSCI World oder den DAX nach.
          Statt einzelne Aktien zu kaufen, investierst du automatisch
          in viele Unternehmen gleichzeitig.
        </p>
      </section>

      <section style={styles.card}>
        <h2>Warum ETFs so beliebt sind</h2>
        <ul>
          <li>✔ Breite Streuung & geringes Risiko</li>
          <li>✔ Sehr niedrige Kosten</li>
          <li>✔ Ideal für langfristige Anleger</li>
          <li>✔ Einfach per Sparplan investierbar</li>
        </ul>
      </section>

      <section style={styles.card}>
        <h2>Wie investiert man in ETFs?</h2>
        <p>
          Der einfachste Weg ist ein ETF-Sparplan über einen Online-Broker.
          Besonders beliebt sind Trade Republic und Scalable Capital.
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
        <h2>Nächste ETF-Themen</h2>
        <ul>
          <li>ETF-Sparplan für Anfänger</li>
          <li>MSCI World erklärt</li>
          <li>ETF vs Einzelaktien</li>
        </ul>
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
