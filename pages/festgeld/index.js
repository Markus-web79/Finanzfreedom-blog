import Link from "next/link";

const FESTGELD_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Ffestgeld%2F";

export default function FestgeldIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Festgeldvergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Festgeldangebote, sichere dir feste Zinsen und lege dein
          Geld planbar über eine feste Laufzeit an.
        </p>

        <a
          href={FESTGELD_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Festgeld vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Festgeldvergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Beim Festgeld legst du dein Geld für eine feste Laufzeit an und
          erhältst dafür einen vorher festgelegten Zinssatz. Dadurch weißt du
          bereits vorab, welche Rendite du erwarten kannst.
        </p>

        <p style={styles.p}>
          Ein Vergleich lohnt sich, weil sich Zinssätze, Laufzeiten,
          Mindestanlagebeträge und Konditionen je nach Bank deutlich
          unterscheiden können.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Festgeld achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💰 Zinssatz</h3>
            <p style={styles.cardText}>
              Vergleiche die angebotenen Zinsen genau. Schon kleine Unterschiede
              können bei höheren Anlagebeträgen spürbar mehr Ertrag bringen.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>⏳ Laufzeit</h3>
            <p style={styles.cardText}>
              Wähle eine Laufzeit, die zu deiner Planung passt. Während der
              Laufzeit ist dein Geld in der Regel nicht flexibel verfügbar.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🔒 Einlagensicherung</h3>
            <p style={styles.cardText}>
              Achte darauf, in welchem Land die Bank sitzt und wie dein Geld
              durch die gesetzliche Einlagensicherung geschützt ist.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich Festgeld?</h2>

        <ul style={styles.list}>
          <li>Für Geld, das du für einige Monate oder Jahre nicht brauchst</li>
          <li>Für planbare Sparziele mit fester Laufzeit</li>
          <li>Für sicherheitsorientierte Anleger</li>
          <li>Als Ergänzung zu Tagesgeld und ETF-Investments</li>
          <li>Wenn du feste Zinsen statt täglicher Verfügbarkeit bevorzugst</li>
        </ul>
      </section>

      <section style={styles.relatedSection}>
        <h2 style={styles.h2}>Weitere passende Themen</h2>

        <div style={styles.relatedGrid}>
          <Link href="/tagesgeld" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>🏦 Tagesgeld</h3>
            <p style={styles.cardText}>
              Wenn du flexibel bleiben möchtest, kann Tagesgeld die bessere
              Alternative zum Festgeld sein.
            </p>
          </Link>

          <Link href="/tagesgeld/tagesgeld-vs-festgeld" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>⚖️ Tagesgeld vs. Festgeld</h3>
            <p style={styles.cardText}>
              Vergleiche beide Anlageformen und finde heraus, welche besser zu
              deinem Ziel passt.
            </p>
          </Link>

          <Link href="/girokonto" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>🏧 Girokonto</h3>
            <p style={styles.cardText}>
              Dein Girokonto ist die Basis deiner Finanzen. Prüfe, ob es noch
              zu deinem Alltag passt.
            </p>
          </Link>

          <Link href="/etfs" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>📈 ETFs</h3>
            <p style={styles.cardText}>
              Für langfristigen Vermögensaufbau können ETFs eine sinnvolle
              Ergänzung zu sicheren Zinsanlagen sein.
            </p>
          </Link>
        </div>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Festgeld jetzt vergleichen</h2>

        <p style={styles.p}>
          Vergleiche aktuelle Festgeldangebote und finde eine Laufzeit, die zu
          deiner finanziellen Planung passt.
        </p>

        <a
          href={FESTGELD_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Festgeldvergleich starten →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Partnerlink ein Festgeldangebot abschließt. Für dich
          entstehen dadurch keine zusätzlichen Kosten.
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

  relatedSection: {
    maxWidth: "1100px",
    margin: "0 auto 40px",
  },

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },

  relatedCard: {
    display: "block",
    background: "rgba(2, 6, 23, 0.55)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "24px",
    color: "#e5e7eb",
    textDecoration: "none",
  },

  relatedTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#ffffff",
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
