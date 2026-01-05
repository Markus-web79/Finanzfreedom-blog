import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Broker.module.css";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Test & Erfahrungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Überblick: Kosten, ETF-Sparpläne, Vorteile, Nachteile und für wen sich der Neobroker eignet."
        />
      </Head>

      <main className="page">
        <section className="pageHeader">
          <span className="eyebrow">BROKER</span>
          <h1>Trade Republic</h1>
          <p>
            Mobiler Neobroker für ETFs, Aktien und Sparpläne – einfach & günstig.
          </p>
        </section>

        {/* KACHELN */}
        <div className={styles.cardGrid}>
          <div className={styles.brokerCard}>
            <div className={styles.cardTitle}>Kosten</div>
            <div className={styles.cardText}>
              0 € Depotführung<br />
              1 € pro Trade
            </div>
          </div>

          <div className={styles.brokerCard}>
            <div className={styles.cardTitle}>Geeignet für</div>
            <div className={styles.cardText}>
              Einsteiger & langfristige Anleger
            </div>
          </div>

          <div className={styles.brokerCard}>
            <div className={styles.cardTitle}>Besonderheiten</div>
            <div className={styles.cardText}>
              ETF-Sparpläne, App-Fokus, einfache Bedienung
            </div>
          </div>

          <div className={styles.brokerCard}>
            <div className={styles.cardTitle}>Hinweis</div>
            <div className={styles.cardText}>
              Kein klassischer Desktop-Broker
            </div>
          </div>
        </div>

        {/* TEXTBEREICH */}
        <section className="content">
          <h2>Was ist Trade Republic?</h2>
          <p>
            Trade Republic ist ein deutscher Neobroker, der den Handel mit ETFs,
            Aktien und Derivaten stark vereinfacht. Der Fokus liegt auf einer
            mobilen App und sehr niedrigen Kosten.
          </p>

          <h2>Für wen ist Trade Republic sinnvoll?</h2>
          <p>
            Besonders geeignet ist Trade Republic für Anleger, die langfristig
            investieren möchten und Wert auf einfache Bedienung sowie günstige
            ETF-Sparpläne legen.
          </p>

          <h2>Stärken & Grenzen</h2>
          <p>
            Stärken sind die sehr niedrigen Kosten und die einfache Struktur.
            Einschränkungen gibt es bei Analyse-Tools und klassischen
            Order-Funktionen.
          </p>

          <a
            href="#"
            className="primaryButton"
            style={{ marginTop: "24px", display: "inline-block" }}
          >
            Zu Trade Republic
          </a>

          <div style={{ marginTop: "28px" }}>
            <Link href="/investieren/broker/vergleich">
              ← Zum Broker-Vergleich
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
