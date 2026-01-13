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
      <div className="grid">
        {/* Notgroschen */}
        <div className="card">
          <div className="icon">🛟</div>
          <h3>Notgroschen aufbauen</h3>
          <p>
            Dein finanzieller Airbag für unerwartete Ausgaben. Erfahre, wie hoch dein
            Notgroschen sein sollte und wie du ihn stressfrei aufbaust.
          </p>
          <Link href="/sparen/grundlagen/notgroschen">Zum Artikel →</Link>
        </div>

        {/* Fixkosten */}
        <div className="card">
          <div className="icon">📉</div>
          <h3>Fixkosten senken</h3>
          <p>
            Der größte Hebel für dauerhaft mehr Geld. Reduziere laufende Kosten, ohne
            auf Lebensqualität zu verzichten.
          </p>
          <Link href="/sparen/grundlagen/fixkosten-senken">
            Zum Artikel →
          </Link>
        </div>

        {/* Haushaltsbudget */}
        <div className="card">
          <div className="icon">📊</div>
          <h3>Haushaltsbudget erstellen</h3>
          <p>
            Mit einem klaren Budget behältst du die Kontrolle über dein Geld.
            Die 50-30-20-Regel hilft dir, sinnvoll zu sparen.
          </p>
          <Link href="/sparen/haushaltsbudget">Zum Artikel →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h3>Du willst strukturiert starten?</h3>
        <p>
          Beginne mit dem Notgroschen. Er schützt dich vor Schulden und gibt dir die
          Sicherheit, später entspannt zu investieren.
        </p>
        <Link href="/sparen/grundlagen/notgroschen" className="ctaButton">
          👉 Zum Notgroschen-Guide
        </Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .card {
          background: linear-gradient(180deg, #0f172a, #020617);
          border-radius: 14px;
          padding: 1.75rem;
          border-top: 3px solid #2dd4bf;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .icon {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
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

        .cta {
          margin-top: 4rem;
          padding: 2.5rem;
          border-radius: 16px;
          background: linear-gradient(180deg, #020617, #020617);
          border: 1px solid rgba(45, 212, 191, 0.25);
          text-align: center;
        }

        .cta h3 {
          margin-bottom: 0.5rem;
        }

        .cta p {
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .ctaButton {
          display: inline-block;
          background: #2dd4bf;
          color: #020617;
          padding: 0.75rem 1.25rem;
          border-radius: 999px;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
