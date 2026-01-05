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
          content="Trade Republic im Test: Kosten, Sparpläne, Vorteile & Nachteile. Für wen lohnt sich der Neobroker wirklich?"
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <span className={styles.badge}>BROKER</span>
          <h1>Trade Republic</h1>
          <p className={styles.subtitle}>
            Mobiler Neobroker für ETFs, Aktien und Sparpläne – einfach & günstig.
          </p>
        </section>

        {/* KACHELN */}
        <section className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Kosten</h3>
            <p>0 € Depotführung<br />1 € pro Trade</p>
          </div>

          <div className={styles.card}>
            <h3>Geeignet für</h3>
            <p>Einsteiger & langfristige Anleger</p>
          </div>

          <div className={styles.card}>
            <h3>Besonderheiten</h3>
            <p>ETF-Sparpläne, App-Fokus, einfache Bedienung</p>
          </div>

          <div className={styles.card}>
            <h3>Hinweis</h3>
            <p>Kein klassischer Desktop-Broker</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className={styles.content}>
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
        </section>

        {/* CTA */}
        <section className={styles.ctaBox}>
          <h3>Jetzt Depot bei Trade Republic eröffnen</h3>
          <p>
            Ideal für Einsteiger und langfristige ETF-Sparpläne.<br />
            Geringe Kosten, einfache App, schneller Start.
          </p>

          <a
            href="#"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Jetzt zu Trade Republic
          </a>

          <Link href="/investieren/broker/vergleich" className={styles.backLink}>
            ← Zum Broker-Vergleich
          </Link>
        </section>
      </main>
    </>
  );
}
