import Head from "next/head";
import Link from "next/link";

export default function MSCIWorldPage() {
  return (
    <>
      <Head>
        <title>MSCI World ETF – Erklärung, Auswahl & Sparplan | FinanzFreedom</title>
        <meta
          name="description"
          content="MSCI World ETF verständlich erklärt: Was steckt drin, welche Varianten gibt es, worauf achten, und wie du einen Sparplan startest."
        />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/etfs">ETFs</Link> → MSCI World
        </nav>

        <header style={styles.header}>
          <h1 style={styles.title}>MSCI World ETF: der Klassiker für Einsteiger?</h1>
          <p style={styles.subtitle}>
            Was der MSCI World ist, welche ETF-Varianten es gibt, worauf du bei der Auswahl achten solltest –
            und wie du einen Sparplan sauber startest.
          </p>
        </header>

        <section style={styles.card}>
          <h2>1) Was ist der MSCI World?</h2>
          <p>
            Der MSCI World ist ein Aktienindex mit großen und mittelgroßen Unternehmen aus Industrieländern.
            Ein MSCI-World-ETF bildet diesen Index nach und streut dein Geld über viele Unternehmen.
          </p>

          <h2>2) Welche Varianten gibt es?</h2>
          <ul>
            <li><b>Ausschüttend</b> vs. <b>Thesaurierend</b> (Auszahlung vs. Wiederanlage)</li>
            <li><b>Replikation</b>: physisch (echte Aktien) vs. synthetisch (Swap)</li>
            <li><b>TER</b> (Kostenquote) und Fondsgröße (Stabilität)</li>
          </ul>

          <h2>3) Worauf solltest du achten?</h2>
          <ul>
            <li><b>Gesamtkosten</b> (TER + Brokerkosten)</li>
            <li><b>Sparplanfähigkeit</b> (ab 1€ möglich? kostenlos?)</li>
            <li><b>Tracking Difference</b> statt nur TER</li>
            <li><b>Steuer</b>: thesaurierend ist oft „set & forget“</li>
          </ul>
        </section>

        <section style={styles.grid}>
          <div style={styles.box}>
            <h3>Sparplan-Rechner</h3>
            <p>Simuliere dein Zielvermögen und die monatliche Rate.</p>
            <Link href="/tools/etf-sparplan-rechner" style={styles.button}>
              Rechner öffnen →
            </Link>
          </div>

          <div style={styles.box}>
            <h3>Broker vergleichen</h3>
            <p>Finde den Broker mit günstigen Sparplänen.</p>
            <Link href="/investieren/broker" style={styles.buttonOutline}>
              Broker-Vergleich →
            </Link>
          </div>
        </section>

        <section style={styles.note}>
          <h3>Merksatz</h3>
          <p>
            Für die meisten Einsteiger ist ein MSCI-World-ETF + Sparplan ein solider Start.
            Später kann man erweitern (z. B. Emerging Markets) – aber erst, wenn die Basis läuft.
          </p>
        </section>

        <div style={styles.back}>
          <Link href="/investieren/etfs">← Zurück zu ETFs</Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "70px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "980px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "18px",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#ffffff",
    lineHeight: 1.2,
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#020617",
    lineHeight: 1.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
    marginTop: "22px",
  },
  box: {
    padding: "22px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#020617",
  },
  button: {
    display: "inline-block",
    marginTop: "12px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: 700,
    textDecoration: "none",
  },
  buttonOutline: {
    display: "inline-block",
    marginTop: "12px",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid #2dd4bf",
    color: "#2dd4bf",
    fontWeight: 700,
    textDecoration: "none",
  },
  note: {
    marginTop: "24px",
    padding: "22px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#0b1224",
    color: "#cbd5e1",
    lineHeight: 1.7,
  },
  back: {
    marginTop: "26px",
    textAlign: "center",
  },
};
