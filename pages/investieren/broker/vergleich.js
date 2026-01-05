import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>Broker Vergleich | FinanzFreedom</title>
        <meta
          name="description"
          content="Broker Vergleich: Trade Republic, Scalable Capital & weitere Anbieter. Kosten, ETFs, Sparpläne & Entscheidungshilfe."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Broker Vergleich</h1>
          <p style={styles.subtitle}>
            Vergleiche die wichtigsten Online-Broker und finde den Anbieter,
            der zu deiner Anlagestrategie passt.
          </p>
        </section>

        {/* VERGLEICH */}
        <section style={styles.grid}>
          {/* Trade Republic */}
          <div style={styles.card}>
            <h2>Trade Republic</h2>
            <ul style={styles.list}>
              <li>✔ Sehr niedrige Kosten</li>
              <li>✔ ETF-Sparpläne</li>
              <li>✔ Mobile App</li>
            </ul>

            <div style={styles.actions}>
              <Link href="/investieren/broker/trade-republic" style={styles.secondary}>
                Details ansehen
              </Link>
              <a href="#" style={styles.primary}>
                Zum Anbieter
              </a>
            </div>
          </div>

          {/* Scalable Capital */}
          <div style={styles.card}>
            <h2>Scalable Capital</h2>
            <ul style={styles.list}>
              <li>✔ Große ETF-Auswahl</li>
              <li>✔ Flatrate-Modelle</li>
              <li>✔ Web & App</li>
            </ul>

            <div style={styles.actions}>
              <Link href="/investieren/broker/scalable-capital" style={styles.secondary}>
                Details ansehen
              </Link>
              <a href="#" style={styles.primary}>
                Zum Anbieter
              </a>
            </div>
          </div>
        </section>

        {/* TRANSPARENZ */}
        <section style={styles.transparency}>
          <p>
            Transparenz-Hinweis: Einige Verlinkungen können Affiliate-Links sein.
            Für dich entstehen dadurch keine zusätzlichen Kosten.
          </p>
        </section>

        {/* BACK */}
        <div style={styles.back}>
          <Link href="/investieren">← Zurück zu Investieren</Link>
        </div>
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
    margin: "0 auto 50px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
  },
  list: {
    marginTop: "16px",
    marginBottom: "24px",
    lineHeight: 1.6,
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  primary: {
    padding: "10px 16px",
    borderRadius: "8px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 600,
    textDecoration: "none",
  },
  secondary: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #22d3ee",
    color: "#22d3ee",
    textDecoration: "none",
  },
  transparency: {
    maxWidth: "900px",
    margin: "40px auto 0",
    fontSize: "0.85rem",
    opacity: 0.6,
    textAlign: "center",
  },
  back: {
    textAlign: "center",
    marginTop: "40px",
  },
};
