import Link from "next/link";

const TAGESGELD_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Ftagesgeld%2F";

export default function TagesgeldIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Tagesgeldvergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Tagesgeldkonten, sichere dir attraktive Zinsen und parke
          dein Geld flexibel.
        </p>

        <a
          href={TAGESGELD_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Tagesgeld vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Tagesgeldvergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Viele Menschen lassen ihr Geld unverzinst auf dem Girokonto liegen.
          Tagesgeld kann eine einfache Möglichkeit sein, Rücklagen flexibel zu
          parken und trotzdem Zinsen zu erhalten.
        </p>

        <p style={styles.p}>
          Besonders für den Notgroschen, kurzfristige Rücklagen oder geplante
          Ausgaben kann Tagesgeld sinnvoll sein.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Tagesgeld achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💰 Zinssatz</h3>
            <p style={styles.cardText}>
              Achte auf den aktuellen Zinssatz und darauf, ob er nur für
              Neukunden oder nur für einen bestimmten Zeitraum gilt.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🔒 Einlagensicherung</h3>
            <p style={styles.cardText}>
              Prüfe, ob dein Geld durch die gesetzliche Einlagensicherung
              geschützt ist und in welchem Land die Bank sitzt.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>⚡ Verfügbarkeit</h3>
            <p style={styles.cardText}>
              Tagesgeld sollte flexibel verfügbar bleiben. Für langfristige
              Bindungen kann Festgeld besser geeignet sein.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich Tagesgeld?</h2>

        <ul style={styles.list}>
          <li>Für deinen Notgroschen</li>
          <li>Für kurzfristige Rücklagen</li>
          <li>Für geplante Ausgaben in den nächsten Monaten</li>
          <li>Als sicherer Parkplatz neben ETF-Investments</li>
          <li>Wenn du Geld flexibel verfügbar halten möchtest</li>
        </ul>
      </section>

      <section style={styles.articleSection}>
        <h2 style={styles.h2}>Ratgeber zum Tagesgeld</h2>

        <div style={styles.articleGrid}>
          <Link href="/tagesgeld/was-ist-tagesgeld" style={styles.articleCard}>
            <h3 style={styles.articleTitle}>Was ist Tagesgeld?</h3>
            <p style={styles.cardText}>
              Einfach erklärt: Wie Tagesgeld funktioniert, für wen es sinnvoll
              ist und worauf du achten solltest.
            </p>
          </Link>

          <Link
            href="/tagesgeld/tagesgeld-vs-festgeld"
            style={styles.articleCard}
          >
            <h3 style={styles.articleTitle}>Tagesgeld vs. Festgeld</h3>
            <p style={styles.cardText}>
              Erfahre die wichtigsten Unterschiede und wann welche Anlageform
              besser zu deinem Ziel passt.
            </p>
          </Link>
        </div>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Tagesgeld jetzt vergleichen</h2>

        <p style={styles.p}>
          Vergleiche aktuelle Tagesgeldangebote und finde ein Konto, das zu
          deiner finanziellen Situation passt.
        </p>

        <a
          href={TAGESGELD_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Tagesgeldvergleich starten →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Partnerlink ein Tagesgeldkonto eröffnest. Für dich entstehen
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

  articleSection: {
    maxWidth: "1100px",
    margin: "0 auto 40px",
  },

  articleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  articleCard: {
    display: "block",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
    color: "#e5e7eb",
    textDecoration: "none",
  },

  articleTitle: {
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
