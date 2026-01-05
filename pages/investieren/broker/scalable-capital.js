import Head from "next/head";
import Link from "next/link";

export default function ScalableCapital() {
  return (
    <>
      <Head>
        <title>Scalable Capital Broker im Test | FinanzFreedom</title>
        <meta
          name="description"
          content="Scalable Capital im Überblick: Kosten, Prime-Modell, ETF-Auswahl und Alternativen für langfristige Anleger."
        />
      </Head>

      <main className="page">
        <section className="container">
          <span className="badge">BROKER</span>
          <h1>Scalable Capital</h1>
          <p className="subtitle">
            ETF- & Aktienbroker für langfristigen Vermögensaufbau
          </p>

          {/* KACHELN */}
          <div className="brokerGrid">
            <div className="brokerCard accent">
              <h3>Kosten</h3>
              <p>
                ETF-Sparpläne kostenlos<br />
                Günstige Gebühren je nach Modell
              </p>
            </div>

            <div className="brokerCard accent">
              <h3>Geeignet für</h3>
              <p>
                Anleger, die langfristig mit ETFs & Aktien Vermögen aufbauen
                möchten
              </p>
            </div>

            <div className="brokerCard accent">
              <h3>Besonderheiten</h3>
              <p>
                Große ETF-Auswahl, Prime Broker Modell, flexible Sparpläne
              </p>
            </div>

            <div className="brokerCard accent">
              <h3>Hinweis</h3>
              <p>
                Kosten abhängig vom gewählten Preismodell
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <h2>Was ist Scalable Capital?</h2>
          <p>
            Scalable Capital ist ein moderner Online-Broker mit Fokus auf ETFs
            und langfristige Geldanlage. Anleger können zwischen einem
            kostenlosen Modell und dem Prime Broker wählen.
          </p>

          <h2>Für wen ist Scalable Capital sinnvoll?</h2>
          <p>
            Ideal für langfristige Investoren, die regelmäßig ETF-Sparpläne
            besparen oder größere Portfolios effizient verwalten möchten.
          </p>

          <h2>Stärken & Grenzen</h2>
          <p>
            Stärken sind die große ETF-Auswahl und flexible Preismodelle.
            Weniger geeignet für sehr aktive Trader mit komplexen
            Analyse-Anforderungen.
          </p>

          <div className="ctaBox">
            <a
              href="#"
              className="btnPrimary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zu Scalable Capital
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
