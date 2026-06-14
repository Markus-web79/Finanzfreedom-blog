import Link from "next/link";

export default function KreditIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Kreditvergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Kredite, finde günstige Zinsen und spare bei deiner
          Finanzierung.
        </p>

        <a
          href="https://www.verivox.de/kredit/"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Kredite vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Kreditvergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Die Unterschiede bei Kreditzinsen können mehrere hundert oder sogar
          tausend Euro ausmachen. Ein Vergleich hilft dir, passende Angebote
          schnell zu finden.
        </p>

        <p style={styles.p}>
          Besonders bei größeren Anschaffungen lohnt sich ein genauer Blick auf
          Zinssatz, Laufzeit und Gesamtkosten.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Kreditvergleich achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💶 Effektivzins</h3>
            <p style={styles.cardText}>
              Der Effektivzins zeigt die tatsächlichen jährlichen Kosten des
              Kredits und ist die wichtigste Kennzahl beim Vergleich.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>📅 Laufzeit</h3>
            <p style={styles.cardText}>
              Längere Laufzeiten senken die Monatsrate, erhöhen aber häufig die
              Gesamtkosten.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🔄 Sondertilgung</h3>
            <p style={styles.cardText}>
              Flexible Sondertilgungen ermöglichen eine schnellere Rückzahlung
              ohne zusätzliche Kosten.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich ein Kreditvergleich?</h2>

        <ul style={styles.list}>
          <li>Autofinanzierung</li>
          <li>Umschuldung bestehender Kredite</li>
          <li>Renovierungen und Modernisierung</li>
          <li>Größere Anschaffungen</li>
          <li>Finanzielle Reserven aufbauen</li>
        </ul>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Kredite jetzt vergleichen</h2>

        <p style={styles.p}>
          Vergleiche verschiedene Kreditangebote und finde passende Konditionen
          für deine Finanzierung.
        </p>

        <a
          href="https://www.verivox.de/kredit/"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Kreditvergleich starten →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Partnerlink einen Kredit abschließt. Für dich entstehen
          dadurch keine zusätzlichen Kosten.
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
  },

  header: {
    maxWidth: "900px",
    margin: "0 auto 40px",
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
    fontSize: "2.5rem",
    marginBottom: "12px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    lineHeight: 1.7,
    marginBottom: "24px",
  },

  heroButton: {
    display: "inline-block",
    background: "#2dd4bf",
    color: "#020617",
    padding: "14px 22px",
    borderRadius: "12px",
    fontWeight: 700,
    textDecoration: "none",
  },

  section: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    background: "rgba(2, 6, 23, 0.45)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },

  h2: {
    fontSize: "1.5rem",
    marginBottom: "14px",
    color: "#ffffff",
  },

  p: {
    lineHeight: 1.7,
    marginBottom: "12px",
  },

  compare: {
    maxWidth: "1100px",
    margin: "0 auto 40px",
  },

  compareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  compareCard: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },

  compareTitle: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    color: "#ffffff",
  },

  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },

  list: {
    lineHeight: 1.9,
    paddingLeft: "20px",
  },

  ctaBox: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
    textAlign: "center",
  },

  ctaButton: {
    display: "inline-block",
    marginTop: "12px",
    background: "#2dd4bf",
    color: "#020617",
    padding: "14px 22px",
    borderRadius: "12px",
    fontWeight: 700,
    textDecoration: "none",
  },

  disclaimer: {
    marginTop: "18px",
    fontSize: "0.85rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
};
