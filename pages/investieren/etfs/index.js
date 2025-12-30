import Link from "next/link";

export default function Investieren() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Investieren</h1>
      <p style={styles.subtitle}>
        Baue langfristig Vermögen auf – mit ETFs, Aktien, Sparplänen und der
        richtigen Strategie.
      </p>

      <div style={styles.grid}>
        {/* ETF Sparpläne */}
        <div style={styles.card}>
          <h2>ETF-Sparpläne</h2>
          <p>
            Die einfachste Art zu investieren. Ideal für Einsteiger und
            langfristigen Vermögensaufbau.
          </p>
          <Link href="/investieren/etfs" style={styles.link}>
            Mehr erfahren →
          </Link>
        </div>

        {/* Aktien & Strategien */}
        <div style={styles.card}>
          <h2>Aktien & Strategien</h2>
          <p>
            Einzelaktien, Dividenden, Buy & Hold – verständlich erklärt ohne
            Hype.
          </p>
          <Link href="/investieren/aktien" style={styles.link}>
            Mehr erfahren →
          </Link>
        </div>

        {/* Broker vergleichen */}
        <div style={styles.card}>
          <h2>Broker vergleichen</h2>
          <p>
            Welcher Broker passt zu dir? Kosten, Funktionen und Vorteile im
            Überblick.
          </p>
          <Link href="/investieren/broker" style={styles.link}>
            Broker ansehen →
          </Link>
        </div>

        {/* Einsteiger Guide */}
        <div style={styles.card}>
          <h2>Einsteiger-Guide</h2>
          <p>
            Schritt für Schritt starten – auch ohne Vorkenntnisse oder großes
            Kapital.
          </p>
          <Link href="/blog" style={styles.link}>
            Guide lesen →
          </Link>
        </div>
      </div>

      <Link href="/" style={styles.back}>
        ← Zur Startseite
      </Link>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background:
      "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(15,23,42,0.9)",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 500,
  },
  back: {
    display: "block",
    marginTop: "60px",
    textAlign: "center",
    opacity: 0.6,
    color: "#e5e7eb",
    textDecoration: "none",
  },
};
