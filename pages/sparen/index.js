import Link from "next/link";

export default function SparenIndex() {
  return (
    <main className="page">
      <Link href="/" className="backLink">
        ← Zur Startseite
      </Link>

      <h1>Sparen & Rücklagen aufbauen</h1>

      <p className="intro">
        Sparen ist die Grundlage jeder finanziellen Freiheit. Bevor du
        investierst, solltest du deine Ausgaben im Griff haben und
        Rücklagen für Notfälle bilden. Hier findest du praxisnahe
        Anleitungen, die wirklich funktionieren.
      </p>

      <section>
        <h2>Grundlagen</h2>

        <div className="cardGrid">
          {/* Notgroschen */}
          <Link href="/sparen/grundlagen/notgroschen" className="card">
            <h3>Notgroschen aufbauen</h3>
            <p>
              Warum jeder einen finanziellen Puffer braucht, wie hoch er
              sein sollte und wie du ihn stressfrei aufbaust.
            </p>
            <span className="cardLink">Zum Artikel →</span>
          </Link>

          {/* Fixkosten senken */}
          <Link href="/sparen/grundlagen/fixkosten-senken" className="card">
            <h3>Fixkosten senken</h3>
            <p>
              Mit einfachen Hebeln dauerhaft Geld sparen – ohne auf
              Lebensqualität zu verzichten.
            </p>
            <span className="cardLink">Zum Artikel →</span>
          </Link>

          {/* Haushaltsbudget */}
          <Link href="/sparen/haushaltsbudget" className="card">
            <h3>Haushaltsbudget erstellen</h3>
            <p>
              Mit der 50-30-20 Regel dein Geld sinnvoll aufteilen und
              dauerhaft Kontrolle gewinnen.
            </p>
            <span className="cardLink">Zum Artikel →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
