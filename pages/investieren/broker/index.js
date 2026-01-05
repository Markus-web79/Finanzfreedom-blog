import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>Broker vergleichen | FinanzFreedom</title>
        <meta
          name="description"
          content="Broker vergleichen: Kosten, Sparpläne & Sicherheit. Finde den passenden Broker für langfristigen Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Broker vergleichen</h1>
          <p style={styles.subtitle}>
            Der richtige Broker ist entscheidend für langfristigen
            Vermögensaufbau. Vergleiche Kosten, Sparpläne und Funktionen
            – unabhängig & verständlich.
          </p>
        </section>

        {/* PRIMARY CTA */}
        <section style={styles.primary}>
          <div style={styles.primaryCard}>
            <h2>Broker vergleichen & Kosten sparen</h2>
            <p>
              Finde den Broker, der zu deiner Investment-Strategie passt
              – einfach, transparent und unabhängig.
            </p>
            <span style={styles.primaryButton}>Vergleich starten →</span>
          </div>
        </section>

        {/* BROKER GRID */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Trade Republic</h3>
            <p>
              Sehr günstiger Broker für Einsteiger und Sparpläne.
              Einfach, mobil und provisionsarm.
            </p>
            <span style={styles.cta}>Zum Anbieter →</span>
          </div>

          <div style={styles.card}>
            <h3>Scalable Capital</h3>
            <p>
              Flexibler Broker mit großer ETF-Auswahl und
              günstigen Sparplänen.
            </p>
            <span style={styles.cta}>Zum Anbieter →</span>
          </div>
        </section>

        {/* INFO */}
        <section style={styles.info}>
          <h2>Worauf solltest du bei einem Broker achten?</h2>
          <ul>
            <li>Kosten & Gebühren</li>
            <li>ETF- & Sparplan-Auswahl</li>
            <li>Sicherheit & Regulierung</li>
            <li>Bedienbarkeit & Funktionen</li>
          </ul>
        </section>
      </main>
    </>
  );
}

/* STYLES */

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
    marginBottom: "16px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  primary: {
    maxWidth: "900px",
    margin: "0 auto 60px",
  },
  primaryCard: {
    padding: "32px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, #0f172a, #020617)",
    border: "1px solid #22d3ee",
  },
  primaryButton: {
    display: "inline-block",
    marginTop: "16px",
    color: "#22d3ee",
    fontWeight: "600",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto 60px",
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
  },
  cta: {
    display: "inline-block",
    marginTop: "12px",
    color: "#22d3ee",
    fontWeight: "600",
  },
  info: {
    maxWidth: "900px",
    margin: "0 auto",
    color: "#9ca3af",
  },
};
