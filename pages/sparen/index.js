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
      {/* Back */}
      <Link href="/" style={{ color: "#2dd4bf" }}>
        ← Zur Startseite
      </Link>

      <h1 style={{ marginTop: "1.5rem" }}>Sparen & Rücklagen aufbauen</h1>

      <p style={{ maxWidth: "700px", marginTop: "1rem", opacity: 0.9 }}>
        Sparen ist die Grundlage jeder finanziellen Freiheit. Bevor du investierst,
        solltest du deine Ausgaben im Griff haben und Rücklagen für Notfälle bilden.
        Hier findest du praxisnahe Anleitungen, die wirklich funktionieren.
      </p>

      <h2 style={{ marginTop: "3rem" }}>Grundlagen</h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Notgroschen */}
        <div className="card">
          <h3>Notgroschen aufbauen</h3>
          <p>
            Der finanzielle Puffer für unerwartete Ausgaben. Erfahre, wie hoch dein
            Notgroschen sein sollte und wie du ihn stressfrei aufbaust.
          </p>
          <Link href="/sparen/grundlagen/notgroschen">Zum Artikel →</Link>
        </div>

        {/* Fixkosten */}
        <div className="card">
          <h3>Fixkosten senken</h3>
          <p>
            Der größte Hebel für dauerhaft mehr Geld. Reduziere deine laufenden Kosten,
            ohne Lebensqualität zu verlieren – Monat für Monat.
          </p>
          <Link href="/sparen/grundlagen/fixkosten-senken">Zum Artikel →</Link>
        </div>

        {/* Haushaltsbudget */}
        <div className="card">
          <h3>Haushaltsbudget erstellen</h3>
          <p>
            Mit einem klaren Budget behältst du die Kontrolle über dein Geld.
            Die 50-30-20-Regel hilft dir, sinnvoll zu sparen und trotzdem zu leben.
          </p>
          <Link href="/sparen/haushaltsbudget">Zum Artikel →</Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .card {
          background: linear-gradient(180deg, #0f172a, #020617);
          border-radius: 14px;
          padding: 1.5rem;
          border-top: 3px solid #2dd4bf;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .card h3 {
          margin-bottom: 0.5rem;
        }

        .card p {
          opacity: 0.85;
          margin-bottom: 1rem;
        }

        .card a {
          color: #2dd4bf;
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
