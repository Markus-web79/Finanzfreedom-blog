import Link from "next/link";

const DSL_AFFILIATE_LINK =
  "https://www.awin1.com/cread.php?awinmid=14797&awinaffid=2757918&ued=https%3A%2F%2Fwww.verivox.de%2Fdsl%2F";

export default function DSLIndex() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>DSL Vergleich 2026</h1>

        <p style={styles.subtitle}>
          Vergleiche Internetanbieter, finde schnellere Tarife und spare bei
          deinen monatlichen Internetkosten.
        </p>

        <a
  href={DSL_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.heroButton}
        >
          Jetzt DSL-Tarife vergleichen →
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Warum ein DSL-Vergleich sinnvoll ist</h2>

        <p style={styles.p}>
          Viele Haushalte zahlen zu viel für ihren Internetanschluss oder nutzen
          Tarife, die nicht mehr zeitgemäß sind. Ein regelmäßiger Vergleich kann
          helfen, Kosten zu senken und gleichzeitig höhere Geschwindigkeiten zu
          erhalten.
        </p>

        <p style={styles.p}>
          Besonders nach Ablauf der Mindestvertragslaufzeit lohnt sich ein Blick
          auf aktuelle Angebote.
        </p>
      </section>

      <section style={styles.compare}>
        <h2 style={styles.h2}>Worauf du beim DSL-Vergleich achten solltest</h2>

        <div style={styles.compareGrid}>
          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>⚡ Geschwindigkeit</h3>
            <p style={styles.cardText}>
              Je nach Nutzung können 50, 100 oder 250 MBit/s sinnvoll sein.
              Streaming, Homeoffice und Gaming profitieren von höheren
              Bandbreiten.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>📅 Vertragslaufzeit</h3>
            <p style={styles.cardText}>
              Kürzere Laufzeiten bieten mehr Flexibilität. Längere Verträge
              können durch attraktive Neukundenangebote interessant sein.
            </p>
          </div>

          <div style={styles.compareCard}>
            <h3 style={styles.compareTitle}>💰 Gesamtkosten</h3>
            <p style={styles.cardText}>
              Achte nicht nur auf den monatlichen Preis, sondern auch auf
              Anschlussgebühren, Routerkosten und mögliche Rabatte.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Für wen lohnt sich ein Wechsel besonders?</h2>

        <ul style={styles.list}>
          <li>Wenn dein Vertrag bald endet</li>
          <li>Wenn dein Internet zu langsam ist</li>
          <li>Wenn die monatlichen Kosten gestiegen sind</li>
          <li>Wenn du umziehst</li>
          <li>Wenn du bessere Neukundenangebote nutzen möchtest</li>
        </ul>
      </section>

      <section style={styles.ctaBox}>
        <h2 style={styles.h2}>DSL-Tarife jetzt prüfen</h2>

        <p style={styles.p}>
          Ein DSL-Vergleich dauert nur wenige Minuten. Gib deine Adresse ein und
          finde passende Internetangebote für deinen Haushalt.
        </p>

        <a
    href={DSL_AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={styles.ctaButton}
        >
          DSL-Tarife vergleichen →
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
