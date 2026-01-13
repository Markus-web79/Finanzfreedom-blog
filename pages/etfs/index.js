import Head from "next/head";
import Link from "next/link";

export default function ETFIndex() {
  return (
    <>
      <Head>
        <title>ETFs – Einfach investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs einfach erklärt: Überblick, Grundlagen und die wichtigsten ETF-Strategien für langfristigen Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        {/* Back */}
        <div style={styles.backNav}>
          <Link href="/">← Zur Startseite</Link>
        </div>

        {/* Header */}
        <section style={styles.header}>
          <h1>ETFs verstehen & investieren</h1>
          <p>
            ETFs (Exchange Traded Funds) sind eine der einfachsten und
            kostengünstigsten Möglichkeiten, langfristig Vermögen aufzubauen.
            Hier findest du einen strukturierten Überblick.
          </p>
        </section>

        {/* Grid */}
        <section style={styles.grid}>
          <Link href="/etf/msci-world" style={styles.card}>
            <div style={styles.cardBar}></div>
            <h2>MSCI World</h2>
            <p>
              Der Klassiker unter den ETFs – weltweit investieren mit nur einem
              Produkt.
            </p>
          </Link>

          <div style={styles.cardDisabled}>
            <div style={styles.cardBar}></div>
            <h2>MSCI Emerging Markets</h2>
            <p>Folgt demnächst – Schwellenländer einfach erklärt.</p>
          </div>

          <div style={styles.cardDisabled}>
            <div style={styles.cardBar}></div>
            <h2>MSCI ACWI</h2>
            <p>Folgt demnächst – Industrie- & Schwellenländer kombiniert.</p>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#020617",
    color: "#e5e7eb",
  },
  backNav: {
    maxWidth: "1100px",
    margin: "0 auto 20px",
    fontSize: "0.9rem",
  },
  header: {
    maxWidth: "1100px",
    margin: "0 auto 40px",
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
    borderRadius: "14px",
    padding: "24px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  cardDisabled: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    opacity: 0.5,
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#14b8a6",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
  },
};
