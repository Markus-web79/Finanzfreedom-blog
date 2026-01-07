import Head from "next/head";
import Link from "next/link";

export default function Rechner() {
  return (
    <>
      <Head>
        <title>Rechner & Tools | FinanzFreedom</title>
        <meta
          name="description"
          content="Finanzrechner bei FinanzFreedom: ETF-Rechner, Sparplan-Rechner und Zinseszins einfach berechnen."
        />
      </Head>

      <main style={styles.page}>
        <h1 style={styles.title}>Rechner & Tools</h1>
        <p style={styles.intro}>
          Mit unseren Rechnern bekommst du ein Gefühl dafür, was langfristiges
          Investieren wirklich bedeutet – einfach & verständlich.
        </p>

        <section style={styles.grid}>
          <Link href="/rechner/etf" style={styles.card}>
            <h2>ETF-Rechner</h2>
            <p>
              Berechne, wie sich ein ETF-Sparplan über Jahre entwickeln kann.
            </p>
          </Link>

          <Link href="/rechner/sparplan" style={styles.card}>
            <h2>Sparplan-Rechner</h2>
            <p>
              Monatlich sparen und Vermögen aufbauen – realistisch simuliert.
            </p>
          </Link>

          <Link href="/rechner/zinseszins" style={styles.card}>
            <h2>Zinseszins-Rechner</h2>
            <p>
              Verstehe den wichtigsten Effekt beim Vermögensaufbau.
            </p>
          </Link>
        </section>

        <div style={styles.back}>
          <Link href="/">← Zurück zur Startseite</Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  intro: {
    color: "#9ca3af",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  back: {
    marginTop: "50px",
  },
};
