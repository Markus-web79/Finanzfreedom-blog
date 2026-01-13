import Link from "next/link";
import styles from "../../styles/Overview.module.css";

export default function EtfsIndex() {
  return (
    <main className={styles.container}>
      {/* Back Button */}
      <div className={styles.back}>
        <Link href="/">← Zur Startseite</Link>
      </div>

      {/* Headline */}
      <header className={styles.header}>
        <h1>ETFs verstehen & investieren</h1>
        <p>
          ETFs sind eine der einfachsten und beliebtesten Möglichkeiten,
          langfristig Vermögen aufzubauen. Hier findest du alle Grundlagen,
          Strategien und konkreten Anleitungen.
        </p>
      </header>

      {/* Cards */}
      <section className={styles.grid}>
        <Link href="/etfs/grundlagen" className={styles.card}>
          <span className={styles.topBar}></span>
          <h3>ETF-Grundlagen</h3>
          <p>
            Was ist ein ETF, wie funktioniert er und warum sind ETFs so beliebt?
            Der perfekte Einstieg für Anfänger.
          </p>
        </Link>

        <Link href="/etfs/msci-world" className={styles.card}>
          <span className={styles.topBar}></span>
          <h3>MSCI World erklärt</h3>
          <p>
            Der bekannteste ETF der Welt. Chancen, Risiken und für wen sich der
            MSCI World wirklich eignet.
          </p>
        </Link>

        <Link href="/etfs/etf-sparplan" className={styles.card}>
          <span className={styles.topBar}></span>
          <h3>ETF-Sparplan</h3>
          <p>
            Schritt-für-Schritt erklärt: So startest du einen ETF-Sparplan und
            investierst automatisch jeden Monat.
          </p>
        </Link>

        <Link href="/etfs/strategie" className={styles.card}>
          <span className={styles.topBar}></span>
          <h3>ETF-Strategien</h3>
          <p>
            Ein-ETF-Strategie, Weltportfolio oder mehrere ETFs? Welche Strategie
            passt zu deinem Ziel?
          </p>
        </Link>
      </section>
    </main>
  );
}
