import Link from "next/link";

export default function TradeRepublic() {
  return (
    <main style={styles.container}>
      <h1 style={styles.h1}>Trade Republic im Test</h1>

      <p style={styles.intro}>
        Trade Republic ist einer der bekanntesten Neobroker in Deutschland.
        Besonders beliebt ist der Anbieter bei Einsteigern, die einfach und
        günstig in ETFs und Aktien investieren möchten.
      </p>

      {/* Fakten */}
      <section style={styles.section}>
        <h2>Die wichtigsten Fakten</h2>
        <ul style={styles.list}>
          <li>✔ Kostenloses Depot</li>
          <li>✔ Über 2.000 ETF-Sparpläne</li>
          <li>✔ Sparpläne ab 1 € möglich</li>
          <li>✔ Sehr einfache App</li>
          <li>✖ Kaum Analyse- & Profi-Tools</li>
        </ul>
      </section>

      {/* Für wen geeignet */}
      <section style={styles.section}>
        <h2>Für wen ist Trade Republic geeignet?</h2>
        <p>
          Trade Republic eignet sich besonders für:
        </p>
        <ul style={styles.list}>
          <li>Einsteiger im ETF- & Aktienmarkt</li>
          <li>Langfristige ETF-Sparer</li>
          <li>Nutzer, die alles per App erledigen wollen</li>
        </ul>
        <p>
          Weniger geeignet ist der Broker für aktive Trader oder Anleger,
          die viele Analyse-Tools benötigen.
        </p>
      </section>

      {/* Vorteile & Nachteile */}
      <section style={styles.sectionGrid}>
        <div style={styles.card}>
          <h3>Vorteile</h3>
          <ul style={styles.list}>
            <li>Sehr einfache Bedienung</li>
            <li>Große ETF-Auswahl</li>
            <li>Keine Depotgebühren</li>
            <li>Ideal für Sparpläne</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Nachteile</h3>
          <ul style={styles.list}>
            <li>Kaum Analyse-Funktionen</li>
            <li>Kein klassischer Web-Broker</li>
            <li>Eher ungeeignet für Daytrading</li>
          </ul>
        </div>
      </section>

      {/* Fazit */}
      <section style={styles.fazit}>
        <h2>Fazit</h2>
        <p>
          Trade Republic ist einer der besten Broker für Einsteiger und
          langfristige ETF-Sparer. Wer günstig, einfach und ohne viel
          Schnickschnack investieren möchte, ist hier sehr gut aufgehoben.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <p>
          👉 Mehr Details und aktuelle Konditionen findest du direkt beim Anbieter.
        </p>
        <a
          href="#"
          style={styles.ctaButton}
        >
          Trade Republic ansehen
        </a>
        <p style={styles.hint}>
          (Hinweis: Partnerlink folgt nach Freigabe)
        </p>
      </section>

      {/* Transparenz */}
      <section style={styles.transparency}>
        <h3>Transparenz</h3>
        <p>
          FinanzFreedom ist unabhängig. Empfehlungen basieren auf Recherche
          und Erfahrung. Für einige Anbieter können zukünftig
          Partnervergütungen bestehen.
        </p>
      </section>

      <Link href="/investieren/broker/vergleich" style={styles.back}>
        ← Zurück zum Broker-Vergleich
      </Link>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  h1: {
    fontSize: "2.4rem",
    marginBottom: "16px",
  },
  intro: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    maxWidth: "750px",
    marginBottom: "40px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    marginBottom: "50px",
  },
  card: {
    background: "linear-gradient(180deg, #0b1220, #05070c)",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
  },
  list: {
    paddingLeft: "18px",
    lineHeight: "1.6",
  },
  fazit: {
    marginBottom: "50px",
    maxWidth: "750px",
  },
  cta: {
    background: "linear-gradient(135deg, #0ea5a4, #0f766e)",
    borderRadius: "18px",
    padding: "30px",
    color: "#042f2e",
    marginBottom: "50px",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "14px",
    background: "#042f2e",
    color: "#ecfeff",
    padding: "12px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
  },
  hint: {
    fontSize: "0.85rem",
    marginTop: "8px",
    color: "#d1fae5",
  },
  transparency: {
    marginTop: "40px",
    paddingTop: "30px",
    borderTop: "1px solid #1f2933",
    color: "#9ca3af",
    maxWidth: "750px",
  },
  back: {
    display: "inline-block",
    marginTop: "40px",
    color: "#22d3ee",
    textDecoration: "none",
    fontWeight: "500",
  },
};
