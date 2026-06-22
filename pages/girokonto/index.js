import Link from "next/link";

const GIROKONTO_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Fgirokontovergleich%2F";

export default function GirokontoIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Girokonto Vergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Girokonten, vermeide unnötige Gebühren und finde ein Konto,
          das zu deinem Alltag passt.
        </p>

        <a
          href={GIROKONTO_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Girokonto vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Girokonto-Vergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Viele Menschen zahlen unnötige Kontoführungsgebühren oder nutzen ein
          Girokonto, das nicht optimal zu ihren Bedürfnissen passt.
        </p>

        <p style={styles.p}>
          Ein Vergleich hilft dir dabei, kostenlose Konten, attraktive
          Zusatzleistungen und moderne Banking-Angebote zu finden.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Girokonto achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💳 Kontoführung</h3>
            <p style={styles.cardText}>
              Achte auf mögliche Kontoführungsgebühren und Bedingungen für ein
              kostenloses Girokonto.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🏧 Bargeldversorgung</h3>
            <p style={styles.cardText}>
              Prüfe, an welchen Geldautomaten du kostenlos Bargeld abheben
              kannst und wie gut das Automatennetz ausgebaut ist.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>📱 Online-Banking</h3>
            <p style={styles.cardText}>
              Moderne Apps, Echtzeitüberweisungen und einfache Bedienung können
              den Alltag deutlich erleichtern.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich ein Girokonto-Vergleich?</h2>

        <ul style={styles.list}>
          <li>Für Menschen mit hohen Kontoführungsgebühren</li>
          <li>Für Studenten und Berufseinsteiger</li>
          <li>Für Familien und Haushalte mit mehreren Konten</li>
          <li>Für Nutzer moderner Banking-Apps</li>
          <li>Für alle, die ihr Konto optimieren möchten</li>
        </ul>
      </section>

      <section style={styles.articleSection}>
        <h2 style={styles.h2}>Ratgeber zum Girokonto</h2>

        <div style={styles.articleGrid}>
          <Link
            href="/girokonto/was-ist-ein-girokonto"
            style={styles.articleCard}
          >
            <h3 style={styles.articleTitle}>Was ist ein Girokonto?</h3>
            <p style={styles.cardText}>
              Einfach erklärt: Wie ein Girokonto funktioniert und worauf du bei
              der Auswahl achten solltest.
            </p>
          </Link>

          <Link href="/girokonto/girokonto-wechseln" style={styles.articleCard}>
            <h3 style={styles.articleTitle}>Girokonto wechseln</h3>
            <p style={styles.cardText}>
              Schritt-für-Schritt-Anleitung für einen einfachen Kontowechsel
              ohne unnötige Fehler.
            </p>
          </Link>
        </div>
      </section>

      <section style={styles.relatedSection}>
        <h2 style={styles.h2}>Weitere passende Themen</h2>

        <div style={styles.relatedGrid}>
          <Link href="/tagesgeld" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>🏦 Tagesgeld</h3>
            <p style={styles.cardText}>
              Nutze Tagesgeld, um Rücklagen flexibel zu parken und Zinsen zu
              erhalten.
            </p>
          </Link>

          <Link href="/festgeld" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>🔒 Festgeld</h3>
            <p style={styles.cardText}>
              Wenn du Geld planbar für eine feste Laufzeit anlegen möchtest,
              kann Festgeld sinnvoll sein.
            </p>
          </Link>

          <Link href="/kreditkarte" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>💳 Kreditkarte</h3>
            <p style={styles.cardText}>
              Eine passende Kreditkarte kann dein Girokonto im Alltag und auf
              Reisen sinnvoll ergänzen.
            </p>
          </Link>

          <Link href="/sparen" style={styles.relatedCard}>
            <h3 style={styles.relatedTitle}>💸 Sparen</h3>
            <p style={styles.cardText}>
              Senke unnötige Kosten, baue Rücklagen auf und bringe Ordnung in
              deine Finanzen.
            </p>
          </Link>
        </div>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Girokonto jetzt vergleichen</h2>

        <p style={styles.p}>
          Vergleiche aktuelle Girokonten und finde ein Angebot, das zu deinen
          finanziellen Bedürfnissen passt.
        </p>

        <a
          href={GIROKONTO_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Girokontovergleich starten →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Partnerlink ein Girokonto eröffnest. Für dich entstehen
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
