import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Broker im Test | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Überblick: Kosten, Funktionen, Vorteile und Alternativen für ETF- und Aktien-Anleger."
        />
      </Head>

      <main className="page">
        <section className="container">
          <span className="badge">BROKER</span>
          <h1>Trade Republic</h1>
          <p className="subtitle">
            Mobiler Neobroker für ETFs, Aktien und Sparpläne – einfach & günstig.
          </p>

          {/* KACHELN */}
          <div className="brokerGrid">
            <div className="brokerCard">
              <h3>Kosten</h3>
              <p>0 € Depotführung<br />1 € pro Trade</p>
            </div>

            <div className="brokerCard">
              <h3>Geeignet für</h3>
              <p>Einsteiger & langfristige Anleger</p>
            </div>

            <div className="brokerCard">
              <h3>Besonderheiten</h3>
              <p>ETF-Sparpläne, App-Fokus, einfache Bedienung</p>
            </div>

            <div className="brokerCard">
              <h3>Hinweis</h3>
              <p>Kein klassischer Desktop-Broker</p>
            </div>
          </div>

          {/* CONTENT */}
          <h2>Was ist Trade Republic?</h2>
          <p>
            Trade Republic ist ein deutscher Neobroker, der den Handel mit ETFs,
            Aktien und Derivaten stark vereinfacht. Der Fokus liegt auf einer
            mobilen App und sehr niedrigen Kosten.
          </p>

          <h2>Für wen ist Trade Republic sinnvoll?</h2>
          <p>
            Besonders geeignet für Anleger, die langfristig investieren möchten
            und Wert auf einfache Bedienung sowie günstige ETF-Sparpläne legen.
          </p>

          <h2>Stärken & Grenzen</h2>
          <p>
            Stärken sind die sehr niedrigen Kosten und die einfache Struktur.
            Einschränkungen gibt es bei Analyse-Tools und klassischen
            Order-Funktionen.
          </p>

          <div className="ctaBox">
            <a
              href="#"
              className="btnPrimary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zu Trade Republic
            </a>
          </div>

          <Link href="/investieren/broker/vergleich" className="backLink">
            ← Zum Broker-Vergleich
          </Link>
        </section>
      </main>
    </>
  );
}
