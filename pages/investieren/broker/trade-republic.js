import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Test & Erfahrungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test: Kosten, Funktionen, Vorteile & Nachteile. Erfahre, ob Trade Republic der richtige Broker für dich ist."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> ›{" "}
          <Link href="/broker">Broker</Link> › Trade Republic
        </nav>

        {/* Header */}
        <header style={styles.header}>
          <h1>Trade Republic im Test</h1>
          <p style={styles.excerpt}>
            Trade Republic ist einer der bekanntesten Neobroker in Deutschland.
            Wir zeigen dir Kosten, Funktionen sowie Vor- und Nachteile.
          </p>

          {/* AFFILIATE BUTTON */}
          <a
            href="HIER_DEIN_AFFILIATE_LINK"
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={styles.ctaButton}
          >
            Jetzt bei Trade Republic starten
          </a>

          <p style={styles.disclaimer}>
            * Mit Sternchen gekennzeichnete Links sind Affiliate-Links. Für dich
            entstehen keine Mehrkosten.
          </p>
        </header>

        {/* CONTENT */}
        <section style={styles.content}>
          <h2>Was ist Trade Republic?</h2>
          <p>
            Trade Republic ist ein deutscher Online-Broker, der besonders durch
            einfache Bedienung und niedrige Kosten bekannt geworden ist. Der
            Fokus liegt auf Wertpapierhandel per App.
          </p>

          <h2>Kosten & Gebühren</h2>
          <ul>
            <li>0 € Depotführung</li>
            <li>1 € Fremdkostenpauschale pro Trade</li>
            <li>Kostenlose ETF-Sparpläne</li>
          </ul>

          <h2>Vorteile</h2>
          <ul>
            <li>Sehr einfache Bedienung</li>
            <li>Günstige Kostenstruktur</li>
            <li>Große Auswahl an ETFs</li>
          </ul>

          <h2>Nachteile</h2>
          <ul>
            <li>Begrenzte Handelsplätze</li>
            <li>Wenig Zusatzfunktionen für Profis</li>
          </ul>
        </section>

        {/* BACK */}
        <div style={styles.back}>
          <Link href="/broker">← Zurück zur Broker-Übersicht</Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    color: "#e5e7eb",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "1.5rem",
  },
  header: {
    marginBottom: "3rem",
  },
  excerpt: {
    fontSize: "1.05rem",
    opacity: 0.85,
    marginBottom: "1.5rem",
  },
  ctaButton: {
    display: "inline-block",
    padding: "14px 26px",
    background: "#2dd4bf",
    color: "#020617",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    marginTop: "1rem",
  },
  disclaimer: {
    fontSize: "0.8rem",
    opacity: 0.7,
    marginTop: "10px",
  },
  content: {
    lineHeight: 1.7,
  },
  back: {
    marginTop: "3rem",
  },
};
