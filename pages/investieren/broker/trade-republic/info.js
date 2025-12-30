import Link from "next/link";

export default function TradeRepublicInfo() {
  return (
    <main style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link href="/investieren">Investieren</Link> →{" "}
        <Link href="/investieren/broker">Broker</Link> → Trade Republic
      </p>

      <h1 style={styles.title}>Trade Republic – Erfahrungen, Kosten & Bewertung</h1>

      <p style={styles.intro}>
        Trade Republic zählt zu den beliebtesten Neo-Brokern in Deutschland.
        Der Fokus liegt auf einfachem Investieren, günstigen Gebühren und einer
        besonders einsteigerfreundlichen App.
      </p>

      {/* KOSTEN */}
      <section style={styles.card}>
        <h2>Kosten & Gebühren</h2>
        <ul>
          <li>Depotführung: kostenlos</li>
          <li>ETF-Sparpläne: kostenlos</li>
          <li>Aktien & ETFs: 1 € pro Trade</li>
          <li>Kryptohandel: 1 € Fremdkostenpauschale</li>
        </ul>
        <p style={styles.note}>
          Tipp: Für langfristige Anleger mit Sparplänen ist Trade Republic besonders günstig.
        </p>
      </section>

      {/* VORTEILE / NACHTEILE */}
      <section style={styles.grid}>
        <div style={styles.card}>
          <h2>Vorteile</h2>
          <ul>
            <li>Sehr einfache & intuitive App</li>
            <li>Extrem niedrige Kosten</li>
            <li>Kostenlose ETF-Sparpläne</li>
            <li>Ideal für Einsteiger</li>
            <li>Moderne Benutzeroberfläche</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2>Nachteile</h2>
          <ul>
            <li>Begrenzte Produktauswahl</li>
            <li>Kein klassischer Web-Broker (App-Fokus)</li>
            <li>Weniger Funktionen für aktive Trader</li>
          </ul>
        </div>
      </section>

      {/* FÜR WEN */}
      <section style={styles.card}>
        <h2>Für wen ist Trade Republic geeignet?</h2>
        <p>
          Trade Republic ist ideal für Einsteiger, junge Anleger und alle,
          die unkompliziert in ETFs, Aktien oder Kryptowährungen investieren
          möchten – ohne hohe Gebühren oder komplexe Handelsoberflächen.
        </p>
      </section>

      {/* VERGLEICH */}
      <section style={styles.card}>
        <h2>Trade Republic vs. Scalable Capital</h2>
        <p>
          Trade Republic punktet mit maximaler Einfachheit und niedrigen Kosten.
          Scalable Capital bietet hingegen mehr Auswahl und zusätzliche Funktionen
          für erfahrene Anleger.
        </p>

        <Link href="/investieren/broker/vergleich" style={styles.link}>
          → Zum Broker-Vergleich
        </Link>
      </section>

      {/* FAZIT */}
      <section style={styles.card}>
        <h2>Fazit</h2>
        <p>
          Trade Republic ist einer der besten Broker für Einsteiger in Deutschland.
          Wer günstig, einfach und langfristig investieren möchte, trifft hier
          eine sehr solide Wahl.
        </p>
      </section>

      <div style={styles.back}>
        <Link href="/investieren/broker">← Zur Broker-Übersicht</Link>
      </div>
    </main>
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
  title: {
    fontSize: "2.2rem",
    marginBottom: "16px",
  },
  intro: {
    fontSize: "1.05rem",
    marginBottom: "32px",
    lineHeight: 1.6,
    opacity: 0.9,
  },
  card: {
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "28px",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "28px",
  },
  note: {
    fontSize: "0.9rem",
    opacity: 0.75,
    marginTop: "12px",
  },
  link: {
    color: "#2dd4bf",
    fontWeight: 500,
    textDecoration: "none",
  },
  back: {
    marginTop: "40px",
    fontSize: "0.95rem",
  },
};
