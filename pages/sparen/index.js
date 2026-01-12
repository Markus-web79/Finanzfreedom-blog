import Link from "next/link";

export default function Sparen() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>

      {/* Zurück */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/">
          ← Zur Startseite
        </Link>
      </div>

      {/* Headline */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Sparen & Rücklagen aufbauen
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "3rem" }}>
        Sparen ist die Grundlage jeder finanziellen Freiheit. Bevor du investierst,
        solltest du deine Ausgaben im Griff haben und Rücklagen für Notfälle bilden.
        Hier findest du praxisnahe Anleitungen, die wirklich funktionieren.
      </p>

      {/* Grundlagen */}
      <h2 style={{ marginBottom: "1.5rem" }}>Grundlagen</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}
      >

        {/* Notgroschen */}
        <div style={cardStyle}>
          <h3>Notgroschen aufbauen</h3>
          <p>
            Warum jeder einen finanziellen Puffer braucht, wie hoch er sein sollte
            und wie du ihn stressfrei aufbaust.
          </p>
          <Link href="/sparen/grundlagen/notgroschen">
            Zum Artikel →
          </Link>
        </div>

        {/* Variable Kosten senken */}
        <div style={cardStyle}>
          <h3>Variable Kosten senken</h3>
          <p>
            Mit einfachen Hebeln dauerhaft Geld sparen – ohne auf Lebensqualität
            zu verzichten.
          </p>
          <Link href="/sparen/grundlagen/variable-kosten-senken">
            Zum Artikel →
          </Link>
        </div>

        {/* Fixkosten senken */}
        <div style={cardStyle}>
          <h3>Fixkosten senken</h3>
          <p>
            Verträge, Abos und laufende Kosten optimieren, um dauerhaft mehr
            finanziellen Spielraum zu schaffen.
          </p>
          <Link href="/sparen/grundlagen/fixkosten-senken">
            Zum Artikel →
          </Link>
        </div>

      </div>

    </main>
  );
}

const cardStyle = {
  background: "linear-gradient(180deg, #0c1622, #0a1320)",
  borderRadius: "14px",
  padding: "1.5rem",
  boxShadow: "0 0 0 1px rgba(31,209,185,0.25)",
  transition: "all 0.25s ease"
};
