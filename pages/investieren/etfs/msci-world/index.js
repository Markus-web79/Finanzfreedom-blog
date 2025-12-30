import Link from "next/link";

export default function MSCIWorld() {
  return (
    <main style={styles.page}>
      <nav style={styles.breadcrumb}>
        <Link href="/">Start</Link> ›{" "}
        <Link href="/investieren">Investieren</Link> ›{" "}
        <Link href="/investieren/etfs">ETFs</Link> › MSCI World
      </nav>

      <h1 style={styles.h1}>MSCI World ETF – einfach erklärt</h1>
      <p style={styles.intro}>
        Der MSCI World ist einer der bekanntesten Aktienindizes weltweit und
        bildet die Grundlage vieler ETF-Sparpläne. Hier erfährst du verständlich,
        was dahintersteckt, für wen er geeignet ist und worauf du achten solltest.
      </p>

      <section style={styles.card}>
        <h2>📌 Was ist der MSCI World?</h2>
        <p>
          Der MSCI World Index umfasst über <strong>1.500 Unternehmen</strong> aus
          23 Industrienationen. Enthalten sind große Konzerne wie Apple, Microsoft,
          Nestlé oder Amazon.
        </p>
        <p>
          Ziel ist eine breite Streuung über Länder und Branchen – ideal für den
          langfristigen Vermögensaufbau.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>✅ Vorteile</h3>
          <ul>
            <li>Sehr breite Diversifikation</li>
            <li>Geringe laufende Kosten (TER)</li>
            <li>Ideal für Einsteiger</li>
            <li>Weltweite Marktabdeckung</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>⚠️ Nachteile</h3>
          <ul>
            <li>Kein Schwellenländer-Anteil</li>
            <li>Starker Fokus auf USA</li>
            <li>Marktschwankungen möglich</li>
          </ul>
        </div>
      </section>

      <section style={styles.card}>
        <h2>👤 Für wen ist ein MSCI-World-ETF geeignet?</h2>
        <p>
          Besonders geeignet für Anleger, die langfristig investieren möchten
          und eine einfache, solide Basis für ihr Portfolio suchen.
        </p>
      </section>

      <section style={styles.card}>
        <h2>🔁 MSCI World vs. andere Indizes</h2>
        <p>
          Häufige Alternativen sind der <strong>FTSE All-World</strong> oder eine
          Kombination aus MSCI World & MSCI Emerging Markets.
        </p>
        <Link href="/investieren/etfs">
          → Zu weiteren ETF-Strategien
        </Link>
      </section>

      <section style={styles.card}>
        <h2>🧠 Fazit</h2>
        <p>
          Ein MSCI-World-ETF ist einer der besten Einstiege in die Geldanlage.
          Einfach, günstig und langfristig bewährt.
        </p>
      </section>

      <Link href="/blog" style={styles.back}>
        ← Zurück zum Blog
      </Link>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#e5e7eb",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  h1: {
    fontSize: "2.2rem",
    marginBottom: "12px",
  },
  intro: {
    fontSize: "1.1rem",
    opacity: 0.9,
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginBottom: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "20px",
  },
  back: {
    display: "inline-block",
    marginTop: "24px",
    color: "#22d3ee",
  },
};
