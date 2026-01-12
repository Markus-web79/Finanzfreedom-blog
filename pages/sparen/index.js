import Link from "next/link";

export default function SparenIndex() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3.5rem 1.5rem",
      }}
    >
      {/* Back Link */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "#2dd4bf", textDecoration: "none" }}>
          ← Zur Startseite
        </Link>
      </div>

      {/* Headline */}
      <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
        Sparen & Rücklagen aufbauen
      </h1>

      <p style={{ maxWidth: "720px", color: "#cbd5e1", lineHeight: 1.6 }}>
        Sparen ist die Grundlage jeder finanziellen Freiheit. Bevor du
        investierst, solltest du deine Ausgaben im Griff haben und Rücklagen für
        Notfälle bilden. Hier findest du praxisnahe Anleitungen, die wirklich
        funktionieren.
      </p>

      {/* Section: Grundlagen */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>
          Grundlagen
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Notgroschen */}
          <Link
            href="/sparen/grundlagen/notgroschen"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, #0f172a, #020617)",
                borderRadius: "12px",
                padding: "1.5rem",
                borderTop: "3px solid #2dd4bf",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem", color: "#e5e7eb" }}>
                Notgroschen aufbauen
              </h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.5 }}>
                Warum jeder einen finanziellen Puffer braucht, wie hoch er sein
                sollte und wie du ihn stressfrei aufbaust.
              </p>
              <span style={{ color: "#2dd4bf" }}>Zum Artikel →</span>
            </div>
          </Link>

          {/* Fixkosten senken */}
          <Link
            href="/sparen/grundlagen/fixkosten-senken"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, #0f172a, #020617)",
                borderRadius: "12px",
                padding: "1.5rem",
                borderTop: "3px solid #2dd4bf",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem", color: "#e5e7eb" }}>
                Fixkosten senken
              </h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.5 }}>
                Mit einfachen Hebeln dauerhaft Geld sparen – ohne auf
                Lebensqualität zu verzichten.
              </p>
              <span style={{ color: "#2dd4bf" }}>Zum Artikel →</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
