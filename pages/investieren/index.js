import Head from "next/head";
import Link from "next/link";

export default function InvestierenHub() {
  return (
    <>
      <Head>
        <title>Investieren – FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht erklärt: ETFs, Broker-Vergleiche, Sparplan-Rechner & Strategien für langfristigen Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Investieren leicht erklärt</h1>
          <p style={styles.subtitle}>
            Alles, was du für erfolgreichen Vermögensaufbau brauchst – verständlich,
            unabhängig und praxisnah.
          </p>
        </section>

        {/* PRIMARY ACTION */}
        <section style={styles.primary}>
          <div style={styles.primaryBox}>
            <h2>ETF-Sparplan berechnen</h2>
            <p>
              Berechne in Sekunden, wie viel Vermögen du mit einem ETF-Sparplan
              langfristig aufbauen kannst.
            </p>
            <Link href="/tools/etf-sparplan-rechner" style={styles.primaryButton}>
              Zum ETF-Sparplan-Rechner →
            </Link>
          </div>
        </section>

        {/* HUB GRID */}
        <section style={styles.grid}>
          <Link href="/investieren/etfs" style={styles.card}>
            <h3>ETFs & Strategien</h3>
            <p>
              Grundlagen, Strategien, MSCI World, Dividenden & langfristiger
              Vermögensaufbau.
            </p>
          </Link>

          <Link href="/investieren/broker" style={styles.card}>
            <h3>Broker vergleichen</h3>
            <p>
              Die besten Broker für ETF-Sparpläne, Gebühren, Vorteile &
              Empfehlungen.
            </p>
          </Link>

          <Link href="/tools/etf-sparplan-rechner" style={styles.card}>
            <h3>Tools & Rechner</h3>
            <p>
              ETF-Rechner, Sparplan-Simulationen & praktische Finanz-Tools.
            </p>
          </Link>
        </section>

        {/* TRUST SECTION */}
        <section style={styles.trust}>
          <h3>Warum FinanzFreedom?</h3>
          <p>
            Kein Finanzvertrieb. Keine leeren Versprechen.  
            Sondern ein unabhängiges Finanzportal mit klarer Struktur,
            ehrlichen Vergleichen und automatisierten Tools.
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto 80px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "16px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
  primary: {
    maxWidth: "900px",
    margin: "0 auto 80px",
  },
  primaryBox: {
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "32px",
    background: "linear-gradient(145deg, #020617, #020617)",
  },
  primaryButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 26px",
    borderRadius: "12px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: "700",
    textDecoration: "none",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto 80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "linear-gradient(145deg, #020617, #020617)",
    color: "#e5e7eb",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
  trust: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
};
