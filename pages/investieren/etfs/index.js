import Head from "next/head";
import Link from "next/link";

export default function EtfsHub() {
  return (
    <>
      <Head>
        <title>ETFs verstehen & vergleichen | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs einfach erklärt: MSCI World, ETF-Sparpläne, Vergleiche & Strategien – unabhängig und verständlich."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETFs – einfach & verständlich</h1>
          <p style={styles.subtitle}>
            ETFs sind das Fundament für langfristigen Vermögensaufbau. Hier findest du
            Übersichten, Strategien, Rechner und Vergleiche – klar strukturiert wie ein Portal.
          </p>
        </section>

        {/* GRID */}
        <section style={styles.grid}>
          <Link href="/investieren/etfs/msci-world" style={styles.card}>
            <h2>MSCI World ETF</h2>
            <p>
              Der bekannteste ETF der Welt. Erklärung, Chancen, Risiken und
              für wen er wirklich geeignet ist.
            </p>
          </Link>

          <Link href="/investieren/etfs/sparplan" style={styles.card}>
            <h2>ETF-Sparplan</h2>
            <p>
              Schritt für Schritt erklärt: So baust du automatisiert Vermögen
              mit einem ETF-Sparplan auf.
            </p>
          </Link>

          <Link href="/investieren/broker" style={styles.card}>
            <h2>Broker vergleichen</h2>
            <p>
              Welche Broker sind günstig, sicher und für ETF-Sparpläne geeignet?
              Klarer Vergleich ohne Werbung.
            </p>
          </Link>

          <Link href="/tools/etf-sparplan-rechner" style={styles.cardHighlight}>
            <h2>ETF-Sparplan-Rechner</h2>
            <p>
              Berechne in Sekunden, wie viel Vermögen du mit einem ETF-Sparplan
              langfristig aufbauen kannst.
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "16px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "linear-gradient(145deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.25s ease",
  },
  cardHighlight: {
    background: "linear-gradient(145deg, #022c22, #020617)",
    border: "1px solid #2dd4bf",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.25s ease",
  },
};
