import Link from "next/link";

export default function EtfGrundlagen() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/etfs" style={styles.back}>
          ← Zurück zu ETFs
        </Link>

        <h1 style={styles.title}>ETF Grundlagen – einfach erklärt</h1>
        <p style={styles.subtitle}>
          Was ETFs sind, wie sie funktionieren und warum sie für viele Anleger der beste Einstieg sind.
        </p>
      </section>

      <section style={styles.content}>
        <h2>Was ist ein ETF?</h2>
        <p>
          Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Fonds, der einen Index
          wie den MSCI World oder den DAX möglichst exakt nachbildet.
        </p>

        <h2>Warum sind ETFs so beliebt?</h2>
        <ul>
          <li>Sehr breite Streuung</li>
          <li>Niedrige laufende Kosten</li>
          <li>Einfacher Einstieg ohne Aktienauswahl</li>
          <li>Ideal für langfristigen Vermögensaufbau</li>
        </ul>

        <h2>ETF oder aktive Fonds?</h2>
        <p>
          ETFs sind transparent, kostengünstig und langfristig oft erfolgreicher als
          aktiv gemanagte Fonds – vor allem für Privatanleger.
        </p>

        <h2>Wie startet man mit ETFs?</h2>
        <p>
          Viele Anleger beginnen mit einem einfachen Sparplan auf einen breit
          gestreuten ETF wie den MSCI World oder einen All-World ETF.
        </p>

        <div style={styles.links}>
          <Link href="/etfs/msci-world">→ MSCI World ETF erklärt</Link>
          <Link href="/etfs/all-world-etfs">→ All-World ETFs im Vergleich</Link>
        </div>
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
    textAlign: "center",
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
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  links: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
