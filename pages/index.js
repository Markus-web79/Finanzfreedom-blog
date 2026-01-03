import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom: Investieren, Versicherungen, Sparen & Wissen – unabhängig, verständlich und portalartig aufgebaut."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau und
            finanzielle Freiheit.
          </p>
        </section>

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

        <section style={styles.blogHint}>
          <p>Du willst tiefer einsteigen?</p>
          <Link href="/blog" style={styles.blogLink}>
            → Zum Blog
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
  blogHint: {
    marginTop: "60px",
    textAlign: "center",
    color: "#9ca3af",
  },
  blogLink: {
    display: "inline-block",
    marginTop: "8px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },
};
<section style={{ marginTop: "80px", textAlign: "center" }}>
  <h2>ETF-Sparplan Rechner</h2>
  <p style={{ color: "#9ca3af" }}>
    Berechne kostenlos, wie viel Vermögen du mit einem ETF-Sparplan aufbauen kannst.
  </p>
  <a
    href="/tools/etf-sparplan-rechner"
    style={{
      display: "inline-block",
      marginTop: "16px",
      padding: "14px 24px",
      background: "#2dd4bf",
      color: "#020617",
      borderRadius: "10px",
      fontWeight: "600",
      textDecoration: "none",
    }}
  >
    Zum ETF-Sparplan-Rechner →
  </a>
</section>
