import Link from "next/link";

export default function EtfsIndex() {
  return (
    <main className="page">
      <section className="hero">
        <h1>ETFs – einfach & langfristig investieren</h1>
        <p>
          ETFs (Exchange Traded Funds) sind das Fundament für langfristigen
          Vermögensaufbau. Sie ermöglichen kostengünstiges, breit gestreutes
          Investieren – ideal für Einsteiger und Sparpläne.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>MSCI World ETF</h2>
          <p>
            Der bekannteste ETF der Welt – Chancen, Risiken und warum er für
            viele Anleger der Einstieg ist.
          </p>
          <Link href="/etfs/msci-world" className="link">
            Zum Artikel →
          </Link>
        </div>

        <div className="card">
          <h2>ETF-Sparplan starten</h2>
          <p>
            Schritt für Schritt erklärt: So investierst du monatlich,
            automatisiert und stressfrei.
          </p>
          <Link href="/etfs/sparplan" className="link">
            Zur Anleitung →
          </Link>
        </div>

        <div className="card">
          <h2>Broker vergleichen</h2>
          <p>
            Welche Broker eignen sich für ETFs, Sparpläne und langfristige
            Strategien?
          </p>
          <Link href="/broker" className="link">
            Zum Vergleich →
          </Link>
        </div>
      </section>

      <section className="back">
        <Link href="/" className="backLink">
          ← Zur Startseite
        </Link>
      </section>
    </main>
  );
}
