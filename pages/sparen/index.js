import Link from "next/link";

export default function Sparen() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
      <Link href="/">
        <span style={{ color: "#2dd4bf", cursor: "pointer" }}>
          ← Zur Startseite
        </span>
      </Link>

      <h1 style={{ marginTop: "2rem" }}>Sparen & Rücklagen aufbauen</h1>

      <p style={{ marginTop: "1rem", lineHeight: "1.7" }}>
        Sparen ist die Grundlage jeder finanziellen Freiheit. Bevor du
        investierst, solltest du Rücklagen bilden und deine Ausgaben im Griff
        haben.
      </p>

      <h2 style={{ marginTop: "3rem" }}>Grundlagen</h2>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1.5rem",
          borderRadius: "12px",
          background: "linear-gradient(180deg, #0f172a, #020617)",
          borderTop: "3px solid #2dd4bf",
        }}
      >
        <h3>Notgroschen aufbauen</h3>
        <p style={{ marginTop: "0.5rem" }}>
          Warum jeder einen finanziellen Puffer braucht, wie hoch er sein
          sollte und wie du ihn stressfrei aufbaust.
        </p>

        <Link href="/sparen/grundlagen/notgroschen">
          <span
            style={{
              marginTop: "1rem",
              display: "inline-block",
              color: "#2dd4bf",
              cursor: "pointer",
            }}
          >
            Zum Artikel →
          </span>
        </Link>
      </div>
    </main>
  );
}
