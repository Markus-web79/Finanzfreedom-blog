import Link from "next/link";

export default function ScalableCapital() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Scalable Capital Erfahrungen 2026</h1>
        <p style={styles.subtitle}>
          Für wen lohnt sich Scalable wirklich? Kosten, Sparpläne, Funktionen, Vorteile & Nachteile – verständlich erklärt.
        </p>

        <div style={styles.badges}>
          <span style={styles.badge}>ETF-Sparpläne</span>
          <span style={styles.badge}>Neobroker</span>
          <span style={styles.badge}>2026 Update</span>
        </div>
      </section>

      {/* Quick Facts */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Scalable Capital auf einen Blick</h2>

        <div style={styles.factsGrid}>
          <div style={styles.factCard}>
            <div style={styles.factTitle}>Depotführung</div>
            <div style={styles.factValue}>Meist kostenlos (je nach Modell)</div>
            <div style={styles.factHint}>Je nach Free / Prime Modell</div>
          </div>

          <div style={styles.factCard}>
            <div style={styles.factTitle}>ETF-Sparpläne</div>
            <div style={styles.factValue}>Große Auswahl</div>
            <div style={styles.factHint}>Stark für langfristige Anleger</div>
          </div>

          <div style={styles.factCard}>
            <div style={styles.factTitle}>Orderkosten</div>
            <div style={styles.factValue}>ab 0,99 € / Trade</div>
            <div style={styles.factHint}>oder Flatrate im Prime Modell</div>
          </div>

          <div style={styles.factCard}>
            <div style={styles.factTitle}>Geeignet für</div>
            <div style={styles.factValue}>Einsteiger & Fortgeschrittene</div>
            <div style={styles.factHint}>besonders bei größerem Depot</div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Was ist Scalable Capital?</h2>
        <p style={styles.p}>
          Scalable Capital ist ein moderner Broker aus Deutschland, der sich auf günstiges Investieren per App und Web
          spezialisiert hat. Besonders stark ist Scalable bei der Auswahl an ETFs und der Möglichkeit, langfristig
          strukturiert ein Depot aufzubauen – entweder mit Einzelorders oder per Sparplan.
        </p>

        <h2 style={styles.h2}>Welche Produkte bietet Scalable?</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>ETFs & ETF-Sparpläne (breite Auswahl)</li>
          <li style={styles.li}>Aktien & Einmalinvestments</li>
          <li style={styles.li}>Kryptowährungen (je nach Angebot/Region)</li>
          <li style={styles.li}>Portfolio-Übersicht & Auswertungen</li>
        </ul>

        <h2 style={styles.h2}>Kosten & Gebühren</h2>
        <p style={styles.p}>
          Bei Scalable hängt das Gebührenmodell davon ab, ob du das Free-Modell oder ein Prime-Modell nutzt. Im Free-Modell
          liegen die Orderkosten typischerweise bei <strong>ab 0,99 € pro Trade</strong>. Im Prime Modell kann sich das
          besonders lohnen, wenn du häufiger handelst oder langfristig ein größeres Depot aufbaust.
        </p>

        <div style={styles.note}>
          <div style={styles.noteTitle}>💡 Praxis-Tipp</div>
          <div style={styles.noteText}>
            Wenn du langfristig investierst und eher selten kaufst, reicht oft das günstige Standard-Modell.  
            Wenn du regelmäßig investierst oder öfter umschichtest, kann sich eine Flatrate lohnen.
          </div>
        </div>

        <h2 style={styles.h2}>Vorteile von Scalable Capital</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Sehr große ETF-Auswahl</strong> – ideal für langfristige Depots</li>
          <li style={styles.li}><strong>Günstige Gebühren</strong> – besonders bei häufiger Nutzung</li>
          <li style={styles.li}><strong>Gute Depot-Übersicht</strong> – App & Web funktionieren stabil</li>
          <li style={styles.li}><strong>Geeignet für Fortgeschrittene</strong> – mehr Möglichkeiten als „nur Sparplan“</li>
        </ul>

        <h2 style={styles.h2}>Nachteile & mögliche Kritikpunkte</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Für komplette Anfänger manchmal etwas „mehr Optionen“ als nötig</li>
          <li style={styles.li}>Gebührenmodell kann verwirren (Free vs. Prime)</li>
          <li style={styles.li}>Nicht jeder braucht die große Auswahl – Fokus kann fehlen</li>
        </ul>

        <h2 style={styles.h2}>Für wen lohnt sich Scalable?</h2>
        <p style={styles.p}>
          Scalable ist besonders gut, wenn du <strong>mehr Auswahl</strong> willst, langfristig ein größeres Depot planst
          oder regelmäßiger investierst. Für Einsteiger funktioniert es ebenfalls, aber wenn du maximal simpel starten
          willst, ist Trade Republic oft der „noch einfachere“ Einstieg.
        </p>

        {/* Empfehlung */}
        <div style={styles.recoBox}>
          <h3 style={styles.h3}>Unsere klare Empfehlung</h3>
          <ul style={styles.ul}>
            <li style={styles.li}>
              👉 <strong>Scalable</strong> ist top, wenn du <strong>viel ETF-Auswahl</strong> willst und dein Depot langfristig
              größer aufbauen möchtest.
            </li>
            <li style={styles.li}>
              👉 Wenn du nur „simpel starten“ willst: schau dir auch <Link href="/broker/trade-republic" style={styles.inlineLink}>Trade Republic</Link> an.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={styles.ctaGrid}>
          <Link href="/broker/vergleich" style={styles.ctaSecondary}>
            Zum Broker-Vergleich
          </Link>
          <Link href="/broker/trade-republic" style={styles.ctaPrimary}>
            Trade Republic im Detail ansehen
          </Link>
        </div>
      </section>

      {/* Footer Mini */}
      <footer style={styles.footer}>
        <div style={styles.footerLine} />
        <p style={styles.footerText}>
          Hinweis: Keine Anlageberatung. Kosten & Konditionen können sich ändern – prüfe vor Abschluss immer die aktuelle
          Preisübersicht des Anbieters.
        </p>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "70px 22px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  header: {
    maxWidth: "980px",
    margin: "0 auto 44px",
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
    fontSize: "2.6rem",
    marginBottom: "12px",
    color: "#ffffff",
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    lineHeight: 1.6,
    maxWidth: "820px",
    margin: "0 auto",
  },
  badges: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  badge: {
    border: "1px solid #1e293b",
    background: "rgba(2, 6, 23, 0.55)",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "0.85rem",
    color: "#cbd5e1",
  },

  section: {
    maxWidth: "980px",
    margin: "0 auto 54px",
    background: "rgba(2, 6, 23, 0.45)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
  },

  h2: {
    fontSize: "1.55rem",
    margin: "14px 0 10px",
    color: "#ffffff",
  },
  h3: {
    fontSize: "1.25rem",
    margin: "0 0 10px",
    color: "#ffffff",
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#e5e7eb",
    margin: "0 0 14px",
  },

  ul: {
    margin: "0 0 14px",
    paddingLeft: "18px",
    lineHeight: 1.75,
    color: "#e5e7eb",
  },
  li: {
    marginBottom: "8px",
  },

  factsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
    marginTop: "14px",
  },
  factCard: {
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "16px",
    background: "rgba(2, 6, 23, 0.6)",
  },
  factTitle: {
    fontSize: "0.92rem",
    color: "#9ca3af",
    marginBottom: "6px",
  },
  factValue: {
    fontSize: "1.05rem",
    color: "#ffffff",
    fontWeight: 700,
    marginBottom: "4px",
  },
  factHint: {
    fontSize: "0.88rem",
    color: "#cbd5e1",
    opacity: 0.9,
  },

  note: {
    margin: "18px 0",
    border: "1px solid rgba(45, 212, 191, 0.35)",
    background: "rgba(45, 212, 191, 0.08)",
    borderRadius: "14px",
    padding: "14px 16px",
  },
  noteTitle: {
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "6px",
  },
  noteText: {
    color: "#e5e7eb",
    lineHeight: 1.7,
  },

  recoBox: {
    marginTop: "18px",
    border: "1px solid rgba(45, 212, 191, 0.35)",
    background: "rgba(2, 6, 23, 0.35)",
    borderRadius: "16px",
    padding: "16px",
  },

  inlineLink: {
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 700,
  },

  ctaGrid: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  ctaPrimary: {
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "#2dd4bf",
    color: "#001018",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(45, 212, 191, 0.35)",
  },
  ctaSecondary: {
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "transparent",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(45, 212, 191, 0.55)",
  },

  footer: {
    maxWidth: "980px",
    margin: "0 auto",
    opacity: 0.9,
  },
  footerLine: {
    height: "1px",
    background: "rgba(148, 163, 184, 0.25)",
    margin: "14px 0",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#9ca3af",
    lineHeight: 1.6,
    margin: 0,
  },
};
