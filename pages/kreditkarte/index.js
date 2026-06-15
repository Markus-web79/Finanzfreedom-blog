import Link from "next/link";

const KREDITKARTE_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Fkreditkarte%2F";

export default function KreditkarteIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Kreditkarten Vergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Kreditkarten, prüfe Gebühren, Leistungen und finde eine
          Karte, die zu deinem Alltag passt.
        </p>

        <a
          href={KREDITKARTE_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Kreditkarten vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Kreditkartenvergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Kreditkarten unterscheiden sich deutlich bei Jahresgebühren,
          Fremdwährungsgebühren, Bargeldabhebungen, Versicherungen und
          Zusatzleistungen.
        </p>

        <p style={styles.p}>
          Ein Vergleich hilft dir, unnötige Kosten zu vermeiden und eine
          Kreditkarte zu finden, die wirklich zu deinem Nutzungsverhalten passt.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du bei Kreditkarten achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💳 Gebühren</h3>
            <p style={styles.cardText}>
              Achte auf Jahresgebühren, Kosten für Bargeldabhebungen und
              mögliche Gebühren beim Bezahlen in Fremdwährungen.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🌍 Reisen</h3>
            <p style={styles.cardText}>
              Für Reisen können kostenlose Zahlungen im Ausland,
              Reiseversicherungen oder Mietwagenleistungen besonders wichtig
              sein.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>⚠️ Rückzahlung</h3>
            <p style={styles.cardText}>
              Prüfe, ob die Kreditkarte automatisch vollständig ausgeglichen
              wird oder ob Teilzahlungen mit hohen Zinsen voreingestellt sind.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich ein Kreditkartenvergleich?</h2>

        <ul style={styles.list}>
          <li>Für Menschen, die regelmäßig online einkaufen</li>
          <li>Für Reisende und Urlauber</li>
          <li>Für alle, die Gebühren bei Zahlungen im Ausland vermeiden möchten</li>
          <li>Für Nutzer, die Zusatzleistungen wie Versicherungen vergleichen wollen</li>
          <li>Für alle, die eine Kreditkarte passend zum Girokonto suchen</li>
        </ul>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Kreditkarten jetzt vergleichen</h2>

        <p style={styles.p}>
          Vergleiche aktuelle Kreditkartenangebote und finde eine Karte, die zu
          deinem Zahlungs- und Reiseverhalten passt.
        </p>

        <a
          href={KREDITKARTE_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Kreditkartenvergleich starten →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Partnerlink eine Kreditkarte beantragst. Für dich entstehen
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
