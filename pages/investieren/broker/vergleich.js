import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.container}>
      <h1 style={styles.h1}>Broker-Vergleich</h1>
      <p style={styles.intro}>
        Welcher Broker passt zu dir? Hier vergleichen wir die bekanntesten
        Anbieter für ETF-Sparpläne und langfristigen Vermögensaufbau –
        verständlich, unabhängig und übersichtlich.
      </p>

      <section style={styles.grid}>
        {/* Trade Republic */}
        <div style={styles.card}>
          <h2>Trade Republic</h2>
          <ul style={styles.list}>
            <li>✔ Sehr einfache Bedienung</li>
            <li>✔ Viele kostenlose ETF-Sparpläne</li>
            <li>✔ Ideal für Einsteiger</li>
            <li>✖ Weniger Analyse-Tools</li>
          </ul>
          <p style={styles.bestFor}>
            <strong>Am besten für:</strong> Einsteiger & kleine bis mittlere
            Sparpläne
          </p>
          <Link
            href="/investieren/broker/trade-republic"
            style={styles.link}
          >
            Trade Republic im Detail →
          </Link>
        </div>

        {/* Scalable Capital */}
        <div style={styles.card}>
          <h2>Scalable Capital</h2>
          <ul style={styles.list}>
            <li>✔ Sehr große ETF-Auswahl</li>
            <li>✔ Flatrate-Modell für Vielanleger</li>
            <li>✔ Web & App nutzbar</li>
            <li>✖ Etwas komplexer als TR</li>
          </ul>
          <p style={styles.bestFor}>
            <strong>Am besten für:</strong> Langfristige Anleger & größere Depots
          </p>
          <Link
            href="/investieren/broker/scalable-capital"
            style={styles.link}
          >
            Scalable Capital im Detail →
          </Link>
        </div>
      </section>

      {/* Entscheidungshilfe */}
      <section style={styles.decision}>
        <h3>Unsere Einschätzung</h3>
        <p>
          Wenn du gerade startest und es möglichst einfach willst, ist
          <strong> Trade Republic</strong> oft die bessere Wahl.
        </p>
        <p>
          Wenn du langfristig investieren möchtest, viele ETFs vergleichen willst
          oder ein größeres Depot planst, bietet
          <strong> Scalable Capital</strong> mehr Flexibilität.
        </p>
      </section>

      {/* Transparenz */}
      <section style={styles.transparency}>
        <h3>Transparenz-Hinweis</h3>
        <p>
          FinanzFreedom ist unabhängig. Einige Anbieter können Partner sein.
          Empfehlungen entstehen aus Analyse – nicht aus Provisionen.
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
    maxWidth: "750px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "linear-gradient(180deg, #0b1220, #05070c)",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
  },
  list: {
    paddingLeft: "18px",
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  bestFor: {
    color: "#22d3ee",
    marginBottom: "14px",
  },
  link: {
    color: "#22d3ee",
    textDecoration: "none",
    fontWeight: "600",
  },
  decision: {
    marginTop: "60px",
    maxWidth: "750px",
    color: "#d1d5db",
  },
  transparency: {
    marginTop: "50px",
    paddingTop: "30px",
    borderTop: "1px solid #1f2933",
    color: "#9ca3af",
    maxWidth: "750px",
  },
};
