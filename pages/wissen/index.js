import Link from "next/link";

export default function WissenIndex() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        color: "#ffffff",
      }}
    >
      {/* HEADLINE */}
      <h1
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3rem)",
          fontWeight: "800",
          marginBottom: "1.5rem",
        }}
      >
        Finanzwissen – die Basis für jede Entscheidung
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          opacity: 0.9,
          marginBottom: "3rem",
        }}
      >
        Bevor du investierst, sparst oder optimierst:  
        Verstehe, wie Geld wirklich funktioniert. Hier findest du die Grundlagen,
        die jede finanzielle Freiheit erst möglich machen.
      </p>

      {/* KARTEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* GRUNDLAGEN */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Grundlagen verstehen</h3>
          <p style={cardText}>
            Cashflow, Inflation, Risiko & Zeit – die Basics, die fast jeder
            unterschätzt.
          </p>
          <Link href="/wissen/start" style={cardLink}>
            Zu den Grundlagen →
          </Link>
        </div>

        {/* ETFS */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>ETF-Grundlagen</h3>
          <p style={cardText}>
            Warum ETFs für Einsteiger ideal sind und wie sie langfristig Vermögen aufbauen.
          </p>
          <Link href="/etfs" style={cardLink}>
            ETFs verstehen →
          </Link>
        </div>

        {/* INVESTIEREN */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Investieren verstehen</h3>
          <p style={cardText}>
            Strategie statt Zocken: So baust du Vermögen mit Plan auf.
          </p>
          <Link href="/investieren" style={cardLink}>
            Zum Investieren →
          </Link>
        </div>
      </section>

      {/* BACK */}
      <div style={{ marginTop: "4rem" }}>
        <Link href="/" style={{ opacity: 0.7 }}>
          ← Zur Startseite
        </Link>
      </div>
    </main>
  );
}

/* STYLES */

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  borderRadius: "14px",
  padding: "2rem",
  border: "1px solid rgba(255,255,255,0.08)",
};

const cardTitle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  marginBottom: "0.75rem",
};

const cardText = {
  opacity: 0.9,
  marginBottom: "1.5rem",
  lineHeight: 1.6,
};

const cardLink = {
  display: "inline-block",
  fontWeight: "700",
  color: "#2dd4bf",
  textDecoration: "none",
};
