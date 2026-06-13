import Link from "next/link";

export default function StromIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Stromvergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Stromtarife, senke deine monatlichen Kosten und finde
          einen passenden Anbieter für deinen Haushalt.
        </p>

        <a
          href="https://www.verivox.de/stromvergleich/"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt Stromtarife vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein Stromvergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Viele Haushalte zahlen unnötig viel für Strom, weil sie jahrelang im
          alten Tarif bleiben. Ein regelmäßiger Vergleich kann helfen, bessere
          Konditionen zu finden und laufende Kosten zu senken.
        </p>

        <p style={styles.p}>
          Besonders nach Preisänderungen, einem Umzug oder dem Ende einer
          Preisgarantie lohnt es sich, die aktuellen Angebote zu prüfen.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim Stromvergleich achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💶 Arbeitspreis</h3>
            <p style={styles.cardText}>
              Der Arbeitspreis zeigt, was du pro verbrauchter Kilowattstunde
              zahlst. Gerade bei hohem Verbrauch ist dieser Wert entscheidend.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>📅 Vertragslaufzeit</h3>
            <p style={styles.cardText}>
              Kurze Laufzeiten geben dir mehr Flexibilität. Lange Laufzeiten
              können sinnvoll sein, wenn die Konditionen attraktiv sind.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>🔒 Preisgarantie</h3>
            <p style={styles.cardText}>
              Eine Preisgarantie kann dich für eine bestimmte Zeit vor
              steigenden Strompreisen schützen.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich ein Wechsel besonders?</h2>

        <ul style={styles.list}>
          <li>Wenn du noch in der Grundversorgung bist</li>
          <li>Wenn dein Tarif lange nicht geprüft wurde</li>
          <li>Wenn deine Stromkosten stark gestiegen sind</li>
          <li>Wenn deine Preisgarantie bald endet</li>
          <li>Wenn du nach einem Umzug einen neuen Tarif brauchst</li>
        </ul>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>Stromtarife jetzt prüfen</h2>

        <p style={styles.p}>
          Ein Stromvergleich dauert meist nur wenige Minuten. Du gibst deinen
          Verbrauch und deine Postleitzahl ein und siehst passende Tarife für
          deinen Haushalt.
        </p>

        <a
          href="https://www.verivox.de/stromvergleich/"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          Stromtarife vergleichen →
        </a>

        <p style={styles.disclaimer}>
          Hinweis: FinanzFreedom erhält möglicherweise eine Provision, wenn du
          über einen Link einen Tarif abschließt. Für dich entstehen dadurch
          keine zusätzlichen Kosten.
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
    background: "#022c22",
    border: "1px solid #14b8a6",
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
    color: "#99f6e4",
    lineHeight: 1.6,
  },
};
