import Link from "next/link";

export default function BrokerIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Broker vergleichen</h1>

        <p style={styles.subtitle}>
          Finde den passenden Broker für ETFs, Sparpläne und langfristigen
          Vermögensaufbau.
        </p>
      </section>

      {/* Einführung / Führung */}
      <section style={styles.section}>
        <h2 style={styles.h2}>So findest du den passenden Broker</h2>

        <p style={styles.p}>
          Nicht jeder Broker passt zu jedem Anleger. Manche sind perfekt für den
          einfachen ETF-Sparplan, andere bieten mehr Auswahl und Funktionen.
        </p>

        <p style={styles.p}>
          👉 <strong>Unser Vorschlag:</strong> Schau dir zuerst die einzelnen
          Broker an und nutze danach den direkten Vergleich, um eine klare
          Entscheidung zu treffen.
        </p>

        <ul style={styles.ul}>
          <li style={styles.li}>
            1️⃣ Broker einzeln anschauen (Trade Republic oder Scalable Capital)
          </li>
          <li style={styles.li}>
            2️⃣ Kosten, Sparpläne & Bedienung vergleichen
          </li>
          <li style={styles.li}>
            3️⃣ Den Broker wählen, der zu deinem Ziel passt
          </li>
        </ul>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        {/* Trade Republic */}
        <Link href="/broker/trade-republic" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Trade Republic</h3>
          <p style={styles.cardText}>
            Beliebter Neobroker mit günstigen ETF-Sparplänen und extrem einfacher
            App. Ideal für Einsteiger.
          </p>
          <span style={styles.cta}>Zum Artikel →</span>
        </Link>

        {/* Scalable Capital */}
        <Link href="/broker/scalable-capital" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Scalable Capital</h3>
          <p style={styles.cardText}>
            Großer ETF-Anbieter mit Flatrate-Modell, viel Auswahl und mehr
            Funktionen für größere Depots.
          </p>
          <span style={styles.cta}>Zum Artikel →</span>
        </Link>

        {/* Broker Vergleich */}
        <Link href="/broker/vergleich" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>Broker Vergleich</h3>
          <p style={styles.cardText}>
            Direkter Vergleich der wichtigsten Broker nach Kosten, Angebot und
            Sparplänen.
          </p>
          <span style={styles.cta}>Zum Vergleich →</span>
        </Link>
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
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
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
  ul: {
    paddingLeft: "18px",
    lineHeight: 1.7,
  },
  li: {
    marginBottom: "8px",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.25s ease",
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
    fontSize: "1.25rem",
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
    marginTop: "14px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
};
