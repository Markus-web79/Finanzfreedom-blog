import Link from "next/link";

export default function Start() {
  return (
    <main
      style={{
        maxWidth: "900px",
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
        Dein Einstieg in finanzielle Freiheit
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          opacity: 0.9,
          marginBottom: "3rem",
        }}
      >
        Finanzielle Freiheit ist kein Glück und kein Geheimwissen.  
        Sie entsteht durch Struktur, Verständnis und konsequente Entscheidungen.
      </p>

      {/* STEP 1 */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          1. Verstehen, wie Geld wirklich funktioniert
        </h2>
        <p style={{ opacity: 0.9, marginBottom: "1rem" }}>
          Bevor du investierst oder sparst, musst du die Grundlagen verstehen:
          Geldflüsse, Inflation, Risiko und Zeit.
        </p>
        <Link href="/wissen" style={buttonStyle}>
          Grundlagen lernen
        </Link>
      </section>

      {/* STEP 2 */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          2. Klar investieren – ohne Zocken
        </h2>
        <p style={{ opacity: 0.9, marginBottom: "1rem" }}>
          Langfristiger Vermögensaufbau funktioniert mit Strategie,
          nicht mit Bauchgefühl oder Trends.
        </p>
        <Link href="/investieren" style={buttonStyle}>
          Investieren verstehen
        </Link>
      </section>

      {/* STEP 3 */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
          3. Struktur aufbauen und dranbleiben
        </h2>
        <p style={{ opacity: 0.9, marginBottom: "1rem" }}>
          Freiheit entsteht durch Konsequenz – nicht durch Perfektion.
          Kleine Schritte, sauber umgesetzt.
        </p>
        <Link href="/etfs" style={buttonStyle}>
          ETF-Grundlagen ansehen
        </Link>
      </section>

      {/* BACK */}
      <Link href="/" style={{ opacity: 0.7 }}>
        ← Zurück zur Startseite
      </Link>
    </main>
  );
}

const buttonStyle = {
  display: "inline-block",
  padding: "0.75rem 1.25rem",
  background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
  color: "#001f1f",
  borderRadius: "8px",
  fontWeight: "700",
  textDecoration: "none",
};
