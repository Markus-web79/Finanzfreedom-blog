import Link from "next/link";

export default function VersicherungenIndex() {
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

      {/* Headline */}
      <h1 style={{ marginTop: "1.5rem" }}>Versicherungen</h1>
      <p style={{ maxWidth: "700px", marginTop: "1rem", opacity: 0.9 }}>
        Welche Versicherungen wirklich sinnvoll sind – verständlich erklärt,
        unabhängig bewertet und ohne Verkaufsdruck. Hier findest du die
        Absicherungen, die du wirklich brauchst.
      </p>

      <h2 style={{ marginTop: "3rem" }}>Grundlagen</h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* Privathaftpflicht */}
        <div className="card">
          <div className="icon">🛡️</div>
          <h3>Privathaftpflicht</h3>
          <p>
            Die wichtigste Versicherung überhaupt. Schützt dich vor finanziellen
            Folgen bei Schäden an anderen – oft schon für wenige Euro im Monat.
          </p>
          <Link href="/versicherungen/privathaftpflicht">
            Zum Artikel →
          </Link>
        </div>

        {/* Hausrat */}
        <div className="card">
          <div className="icon">🏠</div>
          <h3>Hausrat</h3>
          <p>
            Absicherung für dein Hab und Gut bei Einbruch, Feuer oder
            Wasserschäden. Sinnvoll, wenn dein Besitz einen echten Wert hat.
          </p>
          <Link href="/versicherungen/hausrat">
            Zum Artikel →
          </Link>
        </div>

        {/* Berufsunfähigkeit */}
        <div className="card">
          <div className="icon">💼</div>
          <h3>Berufsunfähigkeit</h3>
          <p>
            Schützt dein Einkommen, wenn du deinen Beruf aus gesundheitlichen
            Gründen nicht mehr ausüben kannst – oft existenziell wichtig.
          </p>
          <Link href="/versicherungen/berufsunfaehigkeit">
            Zum Artikel →
          </Link>
        </div>

        {/* Krankenversicherung */}
        <div className="card">
          <div className="icon">🏥</div>
          <h3>Krankenversicherung</h3>
          <p>
            Gesetzlich oder privat? Unterschiede, Vor- und Nachteile – und wann
            sich ein Wechsel wirklich lohnt.
          </p>
          <Link href="/versicherungen/krankenversicherung">
            Zum Artikel →
          </Link>
        </div>
      </div>

      {/* CTA BOX */}
      <div className="ctaBox">
        <h3>Du willst sinnvoll starten?</h3>
        <p>
          Beginne mit der Privathaftpflicht. Sie schützt dich vor existenziellen
          Risiken und kostet meist weniger als ein Streaming-Abo.
        </p>
        <Link href="/versicherungen/privathaftpflicht" className="ctaLink">
          👉 Zum Privathaftpflicht-Guide
        </Link>
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

        .icon {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
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

        .ctaBox {
          margin-top: 4rem;
          padding: 2rem;
          border-radius: 16px;
          background: linear-gradient(180deg, #020617, #0f172a);
          border: 1px solid rgba(45, 212, 191, 0.3);
          text-align: center;
        }

        .ctaBox h3 {
          margin-bottom: 0.5rem;
        }

        .ctaBox p {
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .ctaLink {
          color: #2dd4bf;
          font-weight: 600;
          font-size: 1.05rem;
        }
      `}</style>
    </main>
  );
}
