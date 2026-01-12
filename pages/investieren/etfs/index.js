import Link from "next/link";

export default function EtfsPage() {
  return (
    <main className="page">
      {/* EINLEITUNG */}
      <section className="hero">
        <h1>ETFs – einfach & langfristig investieren</h1>

        <p className="subtitle">
          ETFs (Exchange Traded Funds) sind das Fundament für langfristigen
          Vermögensaufbau. Sie ermöglichen kostengünstiges, breit gestreutes
          Investieren – ideal für Einsteiger und Sparpläne.
        </p>

        <ul className="checklist">
          <li>✔ Breite Streuung mit nur einem Produkt</li>
          <li>✔ Sehr geringe laufende Kosten</li>
          <li>✔ Ideal für ETF-Sparpläne</li>
        </ul>
      </section>

      {/* INHALTE */}
      <section className="grid">
        <Link href="/etfs/msci-world" className="card">
          <h3>MSCI World ETF</h3>
          <p>
            Der bekannteste ETF der Welt – Chancen, Risiken und warum er für
            viele Anleger der Einstieg ist.
          </p>
          <span>Zum Artikel →</span>
        </Link>

        <Link href="/etfs/etf-sparplan" className="card">
          <h3>ETF-Sparplan starten</h3>
          <p>
            Schritt für Schritt erklärt: So investierst du monatlich,
            automatisch und stressfrei.
          </p>
          <span>Zur Anleitung →</span>
        </Link>

        <Link href="/broker" className="card">
          <h3>Broker vergleichen</h3>
          <p>
            Finde den passenden Broker für ETFs, Sparpläne und langfristige
            Strategien.
          </p>
          <span>Zum Vergleich →</span>
        </Link>
      </section>

      {/* BACK BUTTON */}
      <div className="back">
        <Link href="/investieren">← Zur Investieren-Übersicht</Link>
      </div>
    </main>
  );
}
