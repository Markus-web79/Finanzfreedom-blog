import Link from "next/link";

export default function InvestierenIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/">
          <span style={styles.back}>← Zur Startseite</span>
        </Link>

        <h1 style={styles.title}>Investieren verstehen</h1>
        <p style={styles.subtitle}>
          Investieren bedeutet, dein Geld gezielt für dich arbeiten zu lassen.
          Wichtig ist nicht Perfektion – sondern ein klarer, einfacher Start.
        </p>
      </section>

      {/* Führung */}
      <section style={styles.guide}>
        <h2 style={styles.h2}>So startest du sinnvoll mit dem Investieren</h2>
        <p style={styles.p}>
          Gerade am Anfang zählt Struktur. Diese Reihenfolge hat sich für die
          meisten Anleger bewährt:
        </p>

        <ul style={styles.list}>
          <li>① Grundlagen verstehen (Risiko & Zeithorizont)</li>
          <li>② Passende Produkte wählen (meist ETFs)</li>
          <li>③ Broker auswählen & starten</li>
        </ul>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        <Link href="/investieren/etfs">
          <div style={styles.card}>
            <div style={styles.cardBar} />
            <h3 style={styles.cardTitle}>ETFs verstehen</h3>
            <p style={styles.cardText}>
              Warum ETFs für Einsteiger ideal sind und wie sie langfristig
              Vermögen aufbauen.
            </p>
            <span style={styles.cta}>Zu den ETFs →</span>
          </div>
        </Link>

        <Link href="/sparen">
          <div style={styles.card}>
            <div style={styles.cardBar} />
            <h3 style={styles.cardTitle}>Sparen & Basis schaffen</h3>
            <p style={styles.cardText}>
              Rücklagen, Fixkosten & Haushaltsbudget – die Basis vor dem
              Investieren.
            </p>
            <span style={styles.cta}>Zum Sparen →</span>
          </div>
        </Link>

        <Link href="/investieren/broker">
          <div style={styles.card}>
            <div style={styles.cardBar} />
            <h3 style={styles.cardTitle}>Broker vergleichen</h3>
            <p style={styles.cardText}>
              Finde den passenden Broker für ETFs und Sparpläne – ohne
              Verkaufsdruck.
            </p>
            <span style={styles.cta}>Zum Broker-Vergleich →</span>
          </div>
        </Link>
      </section>

      {/* Nächster Schritt – Sackgasse geschlossen */}
      <section style={styles.nextStep}>
        <h2 style={styles.h2}>Dein nächster Schritt</h2>
        <p style={styles.p}>
          Verstehen kommt vor Rendite. Starte mit den Grundlagen und gehe dann
          strukturiert weiter.
        </p>

        <div style={styles.nextLinks}>
          <Link href="/wissen/start">
            <span style={styles.nextCta}>Grundlagen lernen</span>
          </Link>

          <Link href="/investieren/etfs">
            <span style={styles.nextCta}>ETFs verstehen</span>
          </Link>
        </div>
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
    fontWeight: 600,
    cursor: "pointer",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    opacity: 0.9,
  },
  guide: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    background: "rgba(2, 6, 23, 0.5)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  h2: {
    fontSize: "1.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  p: {
    marginBottom: "12px",
    lineHeight: 1.7,
  },
  list: {
    paddingLeft: "18px",
    lineHeight: 1.8,
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
    color: "#e5e7eb",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "8px",
    color: "#ffffff",
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },
  cta: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
  nextStep: {
    maxWidth: "900px",
    margin: "60px auto 0",
    padding: "32px",
    textAlign: "center",
    background: "rgba(2, 6, 23, 0.6)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
  },
  nextLinks: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "16px",
  },
  nextCta: {
    padding: "10px 18px",
    background: "#2dd4bf",
    color: "#020617",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer",
  },
};
