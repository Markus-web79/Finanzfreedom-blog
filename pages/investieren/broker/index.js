import Link from "next/link";

export default function BrokerIndex() {
  return (
    <main style={styles.container}>
      <h1 style={styles.h1}>Broker & Anbieter</h1>
      <p style={styles.intro}>
        Welcher Broker passt zu dir? Hier findest du unabhängige Einschätzungen,
        Vergleiche und Entscheidungshilfen für langfristigen Vermögensaufbau.
      </p>

      <section style={styles.grid}>
        {/* Trade Republic */}
        <div style={styles.card}>
          <h2>Trade Republic</h2>
          <p style={styles.target}>
            <strong>Geeignet für:</strong> Einsteiger & einfache ETF-Sparpläne
          </p>
          <p>
            Trade Republic ist ein beliebter Neobroker mit Fokus auf einfache
            Bedienung, günstige Gebühren und provisionsfreie ETF-Sparpläne.
          </p>
          <Link href="/investieren/broker/trade-republic" style={styles.link}>
            Mehr zu Trade Republic →
          </Link>
        </div>

        {/* Scalable Capital */}
        <div style={styles.card}>
          <h2>Scalable Capital</h2>
          <p style={styles.target}>
            <strong>Geeignet für:</strong> Langfristige Anleger & größere Depots
          </p>
          <p>
            Scalable Capital bietet viele ETF-Sparpläne, Aktien und ein
            Flatrate-Modell für Vielanleger – per App und Desktop.
          </p>
          <Link href="/investieren/broker/scalable-capital" style={styles.link}>
            Mehr zu Scalable Capital →
          </Link>
        </div>

        {/* Vergleich */}
        <div style={styles.card}>
          <h2>Broker-Vergleich</h2>
          <p style={styles.target}>
            <strong>Geeignet für:</strong> Unentschlossene & Preisvergleiche
          </p>
          <p>
            Du bist unsicher? Vergleiche Gebühren, Funktionen und Unterschiede
            mehrerer Broker auf einen Blick.
          </p>
          <Link href="/investieren/broker/vergleich" style={styles.link}>
            Zum Broker-Vergleich →
          </Link>
        </div>
      </section>

      {/* Transparenz */}
      <section style={styles.transparency}>
        <h3>Unabhängigkeit & Transparenz</h3>
        <p>
          FinanzFreedom ist kein Broker. Wir erklären und vergleichen unabhängig.
          Einige Anbieter können Partner sein – für dich entstehen dadurch keine
          Mehrkosten.
        </p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  h1: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  intro: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    maxWidth: "700px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "linear-gradient(180deg, #0b1220, #05070c)",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  target: {
    color: "#22d3ee",
    marginBottom: "10px",
  },
  link: {
    display: "inline-block",
    marginTop: "14px",
    color: "#22d3ee",
    textDecoration: "none",
    fontWeight: "600",
  },
  transparency: {
    marginTop: "60px",
    paddingTop: "30px",
    borderTop: "1px solid #1f2933",
    color: "#9ca3af",
    maxWidth: "700px",
  },
};
