import Link from "next/link";

export default function EtfsIndex() {
  return (
    <main style={styles.page}>
      <h1 style={styles.title}>ETFs – einfach & verständlich erklärt</h1>

      <p style={styles.intro}>
        ETFs (Exchange Traded Funds) sind die beliebteste Möglichkeit,
        langfristig Vermögen aufzubauen. Sie sind günstig, transparent
        und ideal für Einsteiger.
      </p>

      <section style={styles.grid}>
        <Card
          title="ETF-Sparplan"
          text="Der einfachste Einstieg in den Vermögensaufbau – Schritt für Schritt erklärt."
          href="/investieren/etfs/etf-sparplan"
        />

        <Card
          title="MSCI World ETF"
          text="Der Klassiker unter den ETFs – breit gestreut über Industrieländer."
          href="/investieren/etfs/msci-world"
        />

        <Card
          title="MSCI Emerging Markets"
          text="Ergänzung zum MSCI World – Schwellenländer mit höherem Risiko & Potenzial."
          href="/investieren/etfs/msci-emerging-markets"
        />

        <Card
          title="All-World ETFs"
          text="Ein ETF für die ganze Welt – Industrie- & Schwellenländer kombiniert."
          href="/investieren/etfs/all-world"
        />

        <Card
          title="ETF-Vergleich"
          text="MSCI World vs. All-World – welcher ETF passt besser zu dir?"
          href="/investieren/etfs/vergleich-msci-world-vs-all-world"
        />
      </section>

      <Link href="/investieren" style={styles.back}>
        ← Zurück zu Investieren
      </Link>
    </main>
  );
}

function Card({ title, text, href }) {
  return (
    <Link href={href} style={styles.card}>
      <h2>{title}</h2>
      <p>{text}</p>
      <span style={styles.link}>Mehr erfahren →</span>
    </Link>
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
  title: {
    fontSize: "2.2rem",
    marginBottom: "16px",
  },
  intro: {
    opacity: 0.85,
    marginBottom: "48px",
    maxWidth: "700px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "24px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  link: {
    color: "#2dd4bf",
    marginTop: "12px",
    display: "inline-block",
  },
  back: {
    display: "inline-block",
    marginTop: "60px",
    color: "#2dd4bf",
    textDecoration: "none",
  },
};
