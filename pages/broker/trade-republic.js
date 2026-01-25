import Link from "next/link";

export default function TradeRepublic() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Trade Republic Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Kosten, Vorteile, Nachteile und für wen sich Trade Republic wirklich lohnt.
        </p>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <h2>Was ist Trade Republic?</h2>
        <p>
          Trade Republic ist ein deutscher Neobroker mit Sitz in Berlin. Der Fokus liegt
          auf einfachem, günstigem Investieren per App – besonders für ETF-Sparpläne
          und langfristige Anleger.
        </p>

        <h2>Welche Produkte bietet Trade Republic?</h2>
        <ul>
          <li>ETFs & ETF-Sparpläne</li>
          <li>Aktien & Bruchstücke</li>
          <li>Kryptowährungen</li>
          <li>Anleihen & Derivate</li>
        </ul>

        <h2>Vorteile</h2>
        <ul>
          <li>Sehr niedrige Kosten</li>
          <li>Viele kostenlose ETF-Sparpläne</li>
          <li>Einfache, intuitive App</li>
          <li>Ideal für Einsteiger</li>
        </ul>

        <h2>Nachteile</h2>
        <ul>
          <li>Keine klassische Beratung</li>
          <li>Nur ein Handelsplatz (LS Exchange)</li>
          <li>Wenig Analyse-Tools für Profis</li>
        </ul>

        <h2>Für wen ist Trade Republic geeignet?</h2>
        <p>
          Besonders geeignet für Einsteiger, Sparplan-Anleger und alle, die
          langfristig und unkompliziert investieren möchten.
        </p>

        <p style={styles.note}>
          👉 Für viele Anfänger ist Trade Republic einer der einfachsten Einstiege
          in ETFs und Aktien.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 50px",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.05rem",
    color: "#9ca3af",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  note: {
    marginTop: "24px",
    fontWeight: 600,
    color: "#2dd4bf",
  },
};
