import Head from "next/head";
import Link from "next/link";

export default function EtfIndex() {
  return (
    <>
      <Head>
        <title>ETFs verstehen & vergleichen | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs einfach erklärt: MSCI World, All-World, Sparpläne & langfristiger Vermögensaufbau – verständlich & unabhängig."
        />
      </Head>

      <main style={styles.page}>
        {/* HEADER */}
        <header style={styles.header}>
          <Link href="/" style={styles.back}>
            ← Zur Startseite
          </Link>
          <h1 style={styles.title}>ETFs</h1>
          <p style={styles.subtitle}>
            Exchange Traded Funds einfach erklärt – die Grundlage für
            langfristigen Vermögensaufbau.
          </p>
        </header>

        {/* CONTENT */}
        <section style={styles.grid}>
          <Link href="/etf/msci-world" style={styles.card}>
            <span style={styles.cardBar} />
            <h2>MSCI World ETF</h2>
            <p>
              Der bekannteste ETF der Welt – Chancen, Risiken und für wen er
              geeignet ist.
            </p>
          </Link>

          <div style={styles.cardDisabled}>
            <span style={styles.cardBar} />
            <h2>All-World ETFs</h2>
            <p>
              Breiter investieren mit Industrie- und Schwellenländern.
              (kommt bald)
            </p>
          </div>

          <div style={styles.cardDisabled}>
            <span style={styles.cardBar} />
            <h2>ETF-Sparplan</h2>
            <p>
              Monatlich investieren & vom Zinseszinseffekt profitieren.
              (kommt bald)
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px 80px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 50px",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 500,
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    maxWidth: "700px",
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
    padding: "26px",
    background: "#020617",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    color: "#e5e7eb",
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardDisabled: {
    position: "relative",
    padding: "26px",
    background: "#020617",
    borderRadius: "14px",
    border: "1px solid #1e293b",
    color: "#9ca3af",
    opacity: 0.6,
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "4px",
    width: "100%",
    background: "linear-gradient(90deg, #2dd4bf, #14b8a6)",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
  },
};
