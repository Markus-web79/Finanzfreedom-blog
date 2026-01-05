import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic im Überblick | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Überblick: Kosten, ETF-Sparpläne, Sicherheit, Vorteile & Nachteile. Für wen eignet sich der Broker wirklich?"
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Trade Republic</h1>
          <p style={styles.subtitle}>
            Einer der beliebtesten Neobroker in Deutschland – günstige ETF-Sparpläne,
            einfache App und schlanke Kostenstruktur.
          </p>
        </section>

        {/* FAKTEN */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h2>Kosten</h2>
            <p>
              ETF-Sparpläne kostenlos, Einzelkäufe ab 1 € Fremdkostenpauschale.
              Keine Depotführungsgebühr.
            </p>
          </div>

          <div style={styles.card}>
            <h2>ETF-Sparpläne</h2>
            <p>
              Große Auswahl an ETFs, Sparpläne ab 1 € möglich,
              ideal für langfristigen Vermögensaufbau.
            </p>
          </div>

          <div style={styles.card}>
            <h2>App & Bedienung</h2>
            <p>
              Mobile-First-Ansatz mit sehr einfacher App.
              Perfekt für Einsteiger, weniger für aktive Trader.
            </p>
          </div>

          <div style={styles.card}>
            <h2>Sicherheit</h2>
            <p>
              Deutscher Broker, BaFin-reguliert, Einlagensicherung bis 100.000 €.
            </p>
          </div>
        </section>

        {/* GEEIGNET */}
        <section style={styles.section}>
          <h2>Für wen eignet sich Trade Republic?</h2>
          <ul style={styles.list}>
            <li>✔ ETF-Sparer & langfristige Anleger</li>
            <li>✔ Einsteiger mit Fokus auf einfache Bedienung</li>
            <li>✔ Nutzer, die mobil investieren wollen</li>
            <li>✖ Weniger geeignet für Daytrader & Profis</li>
          </ul>
        </section>

        {/* FAZIT */}
        <section style={styles.highlight}>
          <h2>Fazit</h2>
          <p>
            Trade Republic ist ein extrem günstiger und einfacher Broker
            für ETF-Sparpläne und langfristige Anleger.
            Wer viele Handelsplätze oder Profi-Tools braucht,
            ist bei klassischen Brokern besser aufgehoben.
          </p>
        </section>

        {/* NAVIGATION */}
        <section style={styles.nav}>
          <Link href="/investieren/broker" style={styles.link}>
            ← Zurück zur Broker-Übersicht
          </Link>
          <Link href="/investieren/broker/vergleich" style={styles.linkPrimary}>
            Broker vergleichen →
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
    fontSize: "3rem",
    marginBottom: "16px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto 60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "linear-gradient(145deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
  },
  section: {
    maxWidth: "900px",
    margin: "0 auto 60px",
  },
  list: {
    marginTop: "16px",
    lineHeight: "1.8",
    color: "#9ca3af",
  },
  highlight: {
    maxWidth: "900px",
    margin: "0 auto 60px",
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid #2dd4bf",
    background: "linear-gradient(145deg, #022c2a, #020617)",
  },
  nav: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
  link: {
    color: "#9ca3af",
    textDecoration: "none",
  },
  linkPrimary: {
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },
};
