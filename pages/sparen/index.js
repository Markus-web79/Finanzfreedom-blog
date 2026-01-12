import Link from "next/link";

export default function SparenIndex() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/">← Zur Startseite</Link>
      </div>

      <h1>Sparen & Rücklagen aufbauen</h1>

      <p style={{ marginTop: "1rem", maxWidth: "800px" }}>
        Sparen ist die Basis jeder finanziellen Freiheit. Bevor du investierst,
        solltest du Kontrolle über deine Ausgaben haben und Rücklagen für
        Notfälle bilden. Hier findest du einfache, praxiserprobte Anleitungen.
      </p>

      <section style={{ marginTop: "3rem" }}>
        <h2>Grundlagen</h2>

        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            borderRadius: "12px",
            background: "#0f172a",
          }}
        >
          <h3>Notgroschen aufbauen</h3>
          <p style={{ marginTop: "0.5rem" }}>
            Warum jeder einen finanziellen Puffer braucht, wie hoch er sein
            sollte und wie du ihn stressfrei aufbaust.
          </p>

          <Link href="/sparen/notgroschen" style={{ color: "#2dd4bf" }}>
            Zum Artikel →
          </Link>
        </div>
      </section>
    </main>
  );
}
