import Link from "next/link";

export default function ScalableCapital() {
  return (
    <main style={styles.container}>
      <h1 style={styles.h1}>Scalable Capital im Test</h1>

      <p style={styles.intro}>
        Scalable Capital ist ein moderner Online-Broker, der sich besonders an
        langfristige Anleger richtet. Neben ETF- und Aktiensparplänen bietet
        Scalable auch optionale Flatrate-Modelle für aktive Investoren.
      </p>

      {/* Fakten */}
      <section style={styles.section}>
        <h2>Die wichtigsten Fakten</h2>
        <ul style={styles.list}>
          <li>✔ Kostenloses Depot</li>
          <li>✔ Über 2.500 ETF-Sparpläne</li>
          <li>✔ PRIME-Flatrate für Vieltrader</li>
          <li>✔ Web & App verfügbar</li>
          <li>✖ Oberfläche etwas komplexer als bei Trade Republic</li>
        </ul>
      </section>

      {/* Für wen geeignet */}
      <section style={styles.section}>
        <h2>Für wen ist Scalable Capital geeignet?</h2>
        <p>
          Scalable Capital ist ideal für:
        </p>
        <ul style={styles.list}>
          <li>ETF-Anleger mit größerem Depot</li>
          <li>Investoren, die regelmäßig handeln</li>
          <li>Nutzer, die Web & App nutzen möchten</li>
        </ul>
        <p>
          Wer nur einen einfachen Sparplan sucht, findet bei anderen Brokern
          teilweise eine minimalistischere Lösung.
        </p>
      </section>

      {/* Vorteile & Nachteile */}
      <section style={styles.sectionGrid}>
        <div style={styles.card}>
          <h3>Vorteile</h3>
          <ul style={styles.list}>
            <li>Sehr große ETF-Auswahl</li>
            <li>Flatrate-Modell für Vieltrader</li>
            <li>Web- & App-Zugang</li>
            <li>Professioneller Gesamtauftritt</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Nachteile</h3>
          <ul style={styles.list}>
            <li>Flatrate kostet monatlich</li>
            <li>Etwas komplexer für Anfänger</li>
            <li>Weniger minimalistisch</li>
          </ul>
        </div>
      </section>

      {/* Fazit */}
      <section style={styles.fazit}>
        <h2>Fazit</h2>
        <p>
          Scalable Capital ist besonders für Anleger geeignet, die größere
          Summen investieren oder regelmäßig handeln. Durch das PRIME-Modell
          lassen sich bei hoher Aktivität deutlich Kosten sparen.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <p>
          👉 Aktuelle Konditionen und Details findest du direkt beim Anbieter.
        </p>
        <a
          href="#"
          style={styles.ctaButton}
        >
          Scalable Capital ansehen
        </a>
        <p style={styles.hint}>
          (Hinweis: Partnerlink folgt nach Freigabe)
        </p>
      </section>

      {/* Transparenz */}
      <section style={styles.transparency}>
        <h3>Transparenz</h3>
        <p>
          FinanzFreedom ist unabhängig. Bewertungen basieren auf Recherche
          und Erfahrung. Zukünftig können Partnervergütungen bestehen.
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
