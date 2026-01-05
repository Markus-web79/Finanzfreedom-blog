import Head from "next/head";
import Link from "next/link";

export default function BrokerPage() {
  return (
    <>
      <Head>
        <title>Trade Republic Test & Erfahrungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test: Kosten, ETF-Sparpläne, Aktienhandel, Vorteile, Nachteile & für wen sich der Broker eignet."
        />
      </Head>

      <main style={styles.page}>
        {/* HEADER */}
        <section style={styles.header}>
          <h1>Trade Republic</h1>
          <p>
            Trade Republic ist einer der bekanntesten Neobroker in Deutschland
            und richtet sich besonders an Einsteiger und langfristige Anleger.
          </p>
        </section>

        {/* QUICK FACTS */}
        <section>
          <h2 style={styles.sectionTitle}>Das Wichtigste auf einen Blick</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Kosten</h3>
              <p>1 € pro Trade, ETF-Sparpläne kostenlos</p>
            </div>
            <div style={styles.card}>
              <h3>ETF-Auswahl</h3>
              <p>Große Auswahl an ETFs & Sparplänen</p>
            </div>
            <div style={styles.card}>
              <h3>Plattform</h3>
              <p>Mobile App (kein Web-Interface)</p>
            </div>
            <div style={styles.card}>
              <h3>Sicherheit</h3>
              <p>BaFin-reguliert, Einlagensicherung bis 100.000 €</p>
            </div>
          </div>
        </section>

        {/* TARGET GROUP */}
        <section style={styles.box}>
          <h2>Für wen eignet sich Trade Republic?</h2>
          <p>
            Trade Republic eignet sich besonders für Einsteiger, ETF-Sparer und
            Anleger, die einfach und kostengünstig investieren möchten.
            Durch die einfache App ist der Einstieg sehr niedrigschwellig.
          </p>
        </section>

        {/* PRO / CONTRA */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Vorteile</h3>
            <ul>
              <li>✔ Sehr einfache Bedienung</li>
              <li>✔ Kostenlose ETF-Sparpläne</li>
              <li>✔ Geringe Handelskosten</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3>Nachteile</h3>
            <ul>
              <li>✖ Kein Web-Zugang</li>
              <li>✖ Weniger Analyse-Tools</li>
            </ul>
          </div>
        </section>

        {/* FAZIT */}
        <section style={styles.fazit}>
          <h2>Unser Fazit</h2>
          <p>
            Trade Republic ist ideal für Einsteiger und langfristige Anleger,
            die unkompliziert investieren wollen und auf komplexe Tools verzichten können.
          </p>

          <a
            href="#"
            style={styles.cta}
          >
            Zu Trade Republic (Affiliate folgt)
          </a>
        </section>

        {/* NAVIGATION */}
        <nav style={styles.nav}>
          <Link href="/investieren/broker/vergleich">← Zum Broker-Vergleich</Link>
        </nav>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  sectionTitle: {
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginBottom: "60px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  box: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "60px",
  },
  fazit: {
    background: "linear-gradient(145deg, #022c22, #020617)",
    border: "1px solid #0d9488",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    marginBottom: "40px",
  },
  cta: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 28px",
    background: "#14b8a6",
    color: "#020617",
    borderRadius: "999px",
    fontWeight: "600",
    textDecoration: "none",
  },
  nav: {
    textAlign: "center",
    marginTop: "20px",
  },
};
