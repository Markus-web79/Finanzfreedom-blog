import Link from "next/link";

export default function WissenStart() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "800",
          marginBottom: "1rem",
        }}
      >
        Grundlagen: So funktioniert Geld wirklich
      </h1>

      <p style={{ fontSize: "1.15rem", opacity: 0.9, lineHeight: 1.7, marginBottom: "2rem" }}>
        Bevor du investierst oder sparst, musst du die Basics verstehen: Geldflüsse, Inflation,
        Risiko und Zeit. Wer diese Zusammenhänge nicht kennt, trifft Entscheidungen im Blindflug.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>1) Geldflüsse (Cashflow)</h2>
        <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
          Dein Vermögen wächst nicht durch „viel verdienen“, sondern durch: Einnahmen – Ausgaben.
          Kontrolle über Cashflow ist der Startpunkt. Erst dann macht Investieren überhaupt Sinn.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>2) Inflation</h2>
        <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
          Geld auf dem Konto verliert Kaufkraft. Das ist der Grund, warum „nur sparen“ dich
          langfristig ausbremst – selbst wenn du diszipliniert bist.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>3) Risiko & Zeit</h2>
        <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
          Zeit ist dein größter Hebel. Je länger du investierst, desto stärker wirkt Zinseszins.
          Risiko bedeutet nicht „Zocken“, sondern Schwankungen auszuhalten – mit Strategie.
        </p>
      </section>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
        <Link href="/start" style={buttonStyle}>
          ← Zurück zur Einstiegsseite
        </Link>
        <Link href="/etfs" style={buttonStyle}>
          Weiter: ETF-Grundlagen →
        </Link>
      </div>
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
