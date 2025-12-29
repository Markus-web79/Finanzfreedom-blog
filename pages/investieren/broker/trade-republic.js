import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Erfahrungen & Test – FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test: Kosten, ETF-Sparpläne, Sicherheit & Erfahrungen. Ist Trade Republic der richtige Broker für dich?"
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> ›{" "}
          <Link href="/investieren">Investieren</Link> ›{" "}
          <Link href="/investieren/broker">Broker</Link> › Trade Republic
        </nav>

        {/* HERO */}
        <header style={styles.hero}>
          <h1 style={styles.title}>Trade Republic im Test</h1>
          <p style={styles.subtitle}>
            Kosten, ETF-Sparpläne, Sicherheit & Erfahrungen – verständlich und
            unabhängig erklärt.
          </p>
        </header>

        {/* FACTS */}
        <section style={styles.card}>
          <h2>Überblick</h2>
          <ul style={styles.list}>
            <li><strong>Broker:</strong> Trade Republic</li>
            <li><strong>Kosten:</strong> 0 € pro Trade</li>
            <li><strong>ETF-Sparpläne:</strong> kostenlos</li>
            <li><strong>Mindestsparrate:</strong> ab 1 €</li>
            <li><strong>Sitz:</strong> Deutschland</li>
            <li><strong>Einlagensicherung:</strong> 100.000 €</li>
          </ul>
        </section>

        {/* PRO / CONTRA */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Vorteile</h3>
            <ul style={styles.list}>
              <li>Sehr einfache App</li>
              <li>Kostenlose ETF-Sparpläne</li>
              <li>Keine Depotgebühren</li>
              <li>Ideal für Einsteiger</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Nachteile</h3>
            <ul style={styles.list}>
              <li>Keine klassische Web-Plattform</li>
              <li>Wenig Analyse-Tools</li>
              <li>App-Fokus (nicht für jeden ideal)</li>
            </ul>
          </div>
        </section>

        {/* FAZIT */}
        <section style={styles.card}>
          <h2>Fazit</h2>
          <p>
            Trade Republic ist besonders für Einsteiger und ETF-Sparer geeignet.
            Wer günstig, einfach und langfristig investieren möchte, findet hier
            einen sehr guten Einstieg.
          </p>

          {/* Affiliate Platzhalter */}
          <div style={styles.cta}>
            <p><strong>Empfehlung:</strong> Für ETF-Sparpläne & Anfänger.</p>
            <button style={styles.button}>
              Jetzt informieren →
            </button>
            <p style={styles.note}>
              * Affiliate-Link folgt transparent & rechtssicher
            </p>
          </div>
        </section>

        {/* BACK */}
        <div style={styles.back}>
          <Link href="/investieren/broker">← Zurück zum Broker-Vergleich</Link>
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
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  hero: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  list: {
    lineHeight: 1.9,
    marginTop: "12px",
  },
  cta: {
    marginTop: "20px",
    textAlign: "center",
  },
  button: {
    marginTop: "12px",
    padding: "12px 26px",
    borderRadius: "999px",
    background: "#2dd4bf",
    color: "#020617",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
  },
  note: {
    marginTop: "8px",
    fontSize: "0.8rem",
    opacity: 0.6,
  },
  back: {
    marginTop: "40px",
    textAlign: "center",
  },
};
