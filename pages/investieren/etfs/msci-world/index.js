import Head from "next/head";
import Link from "next/link";

export default function MsciWorldPage() {
  return (
    <>
      <Head>
        <title>MSCI World ETF erklärt | FinanzFreedom</title>
        <meta
          name="description"
          content="MSCI World ETF einfach erklärt: Aufbau, Vorteile, Risiken, Rendite & ob er für dich sinnvoll ist."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>MSCI World ETF</h1>
          <p style={styles.subtitle}>
            Der MSCI World ist der bekannteste ETF der Welt – und für viele Anleger
            der Einstieg in den langfristigen Vermögensaufbau.
          </p>
        </section>

        {/* CONTENT GRID */}
        <section style={styles.grid}>
          <div style={styles.box}>
            <h2>Was ist der MSCI World?</h2>
            <p>
              Der MSCI World ist ein Aktienindex, der über 1.500 große Unternehmen
              aus 23 Industrieländern abbildet. Mit nur einem ETF investierst du
              weltweit gestreut.
            </p>
          </div>

          <div style={styles.box}>
            <h2>Vorteile</h2>
            <ul>
              <li>✔ Sehr breite Streuung</li>
              <li>✔ Geringe Kosten</li>
              <li>✔ Ideal für Einsteiger</li>
              <li>✔ Langfristig bewährt</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h2>Risiken</h2>
            <ul>
              <li>– Hoher USA-Anteil</li>
              <li>– Keine Schwellenländer</li>
              <li>– Marktschwankungen möglich</li>
            </ul>
          </div>

          <div style={styles.boxHighlight}>
            <h2>Für wen geeignet?</h2>
            <p>
              Ideal für alle, die einfach, langfristig und automatisiert Vermögen
              aufbauen möchten – besonders mit einem ETF-Sparplan.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <Link href="/investieren/etfs/sparplan" style={styles.ctaButton}>
            ETF-Sparplan starten →
          </Link>
          <Link href="/investieren/etfs" style={styles.backLink}>
            ← Zur ETF-Übersicht
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
    fontSize: "2.6rem",
    marginBottom: "14px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.15rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  box: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
  },
  boxHighlight: {
    background: "linear-gradient(145deg, #022c22, #020617)",
    border: "1px solid #2dd4bf",
    borderRadius: "16px",
    padding: "26px",
  },
  cta: {
    marginTop: "60px",
    textAlign: "center",
  },
  ctaButton: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "14px 26px",
    background: "#2dd4bf",
    color: "#020617",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
  },
  backLink: {
    display: "block",
    marginTop: "8px",
    color: "#9ca3af",
    textDecoration: "none",
  },
};
