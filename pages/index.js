import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom: Investieren, ETFs, Sparpläne, Vergleiche & Tools – unabhängig, verständlich und portalartig aufgebaut."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau und
            finanzielle Freiheit.
          </p>
        </section>

        {/* HAUPT-KATEGORIEN */}
        <section style={styles.grid}>
          <Link href="/investieren" style={styles.card}>
            <h2>Investieren</h2>
            <p>
              ETFs, Aktien, Sparpläne & Strategien für langfristigen
              Vermögensaufbau.
            </p>
          </Link>

          <Link href="/versicherungen" style={styles.card}>
            <h2>Versicherungen</h2>
            <p>
              Welche Versicherungen wirklich sinnvoll sind – klar &
              unabhängig erklärt.
            </p>
          </Link>

          <Link href="/sparen" style={styles.card}>
            <h2>Sparen & Haushalt</h2>
            <p>
              Mehr Geld behalten, Ausgaben optimieren und finanzielle Kontrolle
              gewinnen.
            </p>
          </Link>

          <Link href="/wissen" style={styles.card}>
            <h2>Wissen</h2>
            <p>
              Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.
            </p>
          </Link>
        </section>

        {/* PORTAL CALL TO ACTION */}
        <section style={styles.portalCta}>
          <h2 style={styles.portalTitle}>Starte jetzt mit FinanzFreedom</h2>

          <div style={styles.portalGrid}>
            <Link href="/investieren" style={styles.portalCard}>
              <h3>📈 Investieren lernen</h3>
              <p>
                ETF-Strategien, MSCI World, Sparpläne & Grundlagen verständlich
                erklärt.
              </p>
            </Link>

            <Link
              href="/tools/etf-sparplan-rechner"
              style={styles.portalCard}
            >
              <h3>🧮 ETF-Sparplan berechnen</h3>
              <p>
                Berechne in Sekunden, wie viel Vermögen du langfristig aufbauen
                kannst.
              </p>
            </Link>

            <Link
              href="/investieren/bester-broker-fuer-etf-sparplaene"
              style={styles.portalCard}
            >
              <h3>🏦 Broker vergleichen</h3>
              <p>
                Finde den besten ETF-Broker für Sparpläne, Kosten & Konditionen.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* =======================
   STYLES
======================= */

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 60px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "16px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    background: "linear-gradient(145deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },

  /* PORTAL CTA */
  portalCta: {
    marginTop: "80px",
    textAlign: "center",
  },

  portalTitle: {
    fontSize: "2rem",
    marginBottom: "32px",
    color: "#ffffff",
  },

  portalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  portalCard: {
    background: "linear-gradient(145deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
};
