import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="FinanzFreedom: Lerne, wie du dein Geld strukturierst, investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch und Verkaufsdruck."
        />
      </Head>

      {/* ===== Hero-Bereich ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <p className={styles.subheadline}>FINANZFREEDOM</p>
            <h1>
              Behalte deine Finanzen{" "}
              <span className={styles.highlight}>im Griff.</span>
            </h1>
            <p className={styles.description}>
              Lerne Schritt für Schritt, wie du dein Geld strukturierst,
              investierst und langfristig Vermögen aufbaust – ohne
              Fachchinesisch und Verkaufsdruck.
            </p>

            <div className={styles.buttons}>
              <Link href="/blog" className={styles.primaryBtn}>
                Jetzt starten
              </Link>
              <Link href="/ueber-uns" className={styles.secondaryBtn}>
                Mehr erfahren
              </Link>
            </div>
          </div>

          <div className={styles.dashboard}>
            <h3>Dein Finanz-Dashboard</h3>
            <div className={styles.card}>
              <div className={styles.stat}>
                <p>Vermögen (Beispiel)</p>
                <h2>27.450 €</h2>
              </div>
              <div className={styles.stat}>
                <p>Sparrate</p>
                <h2>450 €/Monat</h2>
              </div>
              <div className={styles.stat}>
                <p>Ziel: Finanzielle Freiheit</p>
                <h2>2040</h2>
              </div>
            </div>
            <p className={styles.note}>
              Demo-Ansicht – später ergänzt mit echten Tools und Auswertungen.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Themenwelten ===== */}
<section className={styles.topics}>
  <h2>Themenwelten</h2>
  <div className={styles.topicGrid}>
    <div className={styles.topicCard}>
      <h3>Investieren</h3>
      <p>Alles über ETFs, Aktien und langfristigen Vermögensaufbau.</p>
      <Link href="/etfs">Weiterlesen →</Link>
    </div>
    <div className={styles.topicCard}>
      <h3>Versichern</h3>
      <p>Welche Versicherungen wirklich wichtig sind – einfach erklärt.</p>
      <Link href="/versicherungen">Weiterlesen →</Link>
    </div>
    <div className={styles.topicCard}>
      <h3>Geld vermehren</h3>
      <p>Strategien, Tipps & Tools für mehr Wachstum deines Geldes.</p>
      <Link href="/geld-anlegen">Weiterlesen →</Link>
    </div>
    <div className={styles.topicCard}>
      <h3>Rechner & Tools</h3>
      <p>Nutze Zinsrechner, ETF-Planer und Budget-Tools für deine Finanzen.</p>
      <Link href="/tools">Weiterlesen →</Link>
    </div>
    <div className={styles.topicCard}>
      <h3>Vergleiche</h3>
      <p>Finde die besten Anbieter für Depots, Kreditkarten und Versicherungen.</p>
      <Link href="/vergleiche">Weiterlesen →</Link>
    </div>
    <div className={styles.topicCard}>
      <h3>Steuern & Finanztipps</h3>
      <p>Alles zu Steuertricks, Absetzungen und rechtssicheren Spartipps.</p>
      <Link href="/steuern">Weiterlesen →</Link>
    </div>
  </div>
</section>
