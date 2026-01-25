import Link from "next/link";

export default function SparenIndex() {
  return (
    <main>
      {/* Zurück */}
      <div className="back">
        <Link href="/">← Zur Startseite</Link>
      </div>

      {/* Header */}
      <header className="header">
        <h1>Sparen & Geld organisieren</h1>
        <p>
          Bevor du investierst, solltest du dein Geld im Griff haben.
          Hier lernst du, wie du sinnvoll sparst, Fixkosten senkst und
          ein stabiles finanzielles Fundament aufbaust.
        </p>
      </header>

      {/* Führung (EINMAL!) */}
      <section className="intro">
        <h2>So startest du sinnvoll mit dem Sparen</h2>
        <p>
          Sparen bedeutet nicht Verzicht, sondern Kontrolle.
          Geh am besten strukturiert vor.
        </p>
        <ul>
          <li>1️⃣ Fixkosten analysieren & senken</li>
          <li>2️⃣ Haushaltsbudget erstellen</li>
          <li>3️⃣ Notgroschen aufbauen</li>
        </ul>
      </section>

      {/* Karten */}
      <section className="grid">
        <div className="card">
          <div className="icon">💸</div>
          <h3>Fixkosten senken</h3>
          <p>
            Der größte Hebel für dauerhaft mehr Geld.
            Reduziere laufende Kosten, ohne auf Lebensqualität zu verzichten.
          </p>
          <Link href="/sparen/grundlagen/fixkosten-senken">
            Zum Artikel →
          </Link>
        </div>

        <div className="card">
          <div className="icon">📊</div>
          <h3>Haushaltsbudget erstellen</h3>
          <p>
            Mit einem klaren Budget behältst du die Kontrolle über dein Geld.
            Die 50-30-20-Regel hilft dir, sinnvoll zu sparen.
          </p>
          <Link href="/sparen/haushaltsbudget">
            Zum Artikel →
          </Link>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .back {
          max-width: 900px;
          margin: 20px auto;
        }

        .back a {
          color: #2dd4bf;
          text-decoration: none;
          font-weight: 600;
        }

        .header {
          max-width: 900px;
          margin: 40px auto;
          text-align: center;
        }

        .header h1 {
          font-size: 2.4rem;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .header p {
          font-size: 1.05rem;
          line-height: 1.7;
          opacity: 0.9;
        }

        .intro {
          max-width: 900px;
          margin: 0 auto 40px;
          padding: 26px;
          border-radius: 16px;
          background: rgba(2, 6, 23, 0.6);
          border: 1px solid #1e293b;
        }

        .intro h2 {
          margin-bottom: 12px;
          color: #ffffff;
        }

        .intro ul {
          padding-left: 18px;
          line-height: 1.8;
        }

        .grid {
          max-width: 900px;
          margin: 0 auto 60px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .card {
          background: linear-gradient(180deg, #0f172a, #020617);
          border-radius: 14px;
          padding: 28px;
          border-top: 3px solid #2dd4bf;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .icon {
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        .card h3 {
          margin-bottom: 8px;
          color: #ffffff;
        }

        .card p {
          opacity: 0.85;
          margin-bottom: 14px;
          line-height: 1.6;
        }

        .card a {
          color: #2dd4bf;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>
    </main>
  );
}
