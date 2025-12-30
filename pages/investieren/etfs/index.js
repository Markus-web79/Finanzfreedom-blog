import Link from "next/link";

export default function EtfUebersicht() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>ETF-Übersicht</h1>
      <p style={styles.subtitle}>
        ETFs sind die Basis für langfristigen Vermögensaufbau.  
        Hier findest du die wichtigsten ETF-Typen einfach erklärt.
      </p>

      <div style={styles.grid}>
        {/* MSCI World */}
        <div style={styles.card}>
          <h2>MSCI World ETF</h2>
          <p>
            Der Klassiker für Einsteiger: breit gestreut über
            Industrieländer weltweit.
          </p>
<Link href="/investieren/etfs">
  Mehr erfahren →
</Link>
        </div>

        {/* All World (Platzhalter) */}
        <div style={styles.card}>
          <h2>All-World ETF</h2>
          <p>
            Noch breiter gestreut – inkl. Schwellenländer.
          </p>
          <span style={styles.disabled}>
            Inhalt folgt
          </span>
        </div>
      </div>

      <Link href="/investieren">
        ← Zurück zu Investieren
      </Link>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#e5e7eb",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  card: {
    padding: "24px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.04)",
  },
  disabled: {
    opacity: 0.5,
    fontStyle: "italic",
  },
};
