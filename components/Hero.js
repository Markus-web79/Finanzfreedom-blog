import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Textbereich links */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>FinanzFreedom</p>
          <h1 className={styles.title}>
            Behalte deine Finanzen{" "}
            <span className={styles.highlight}>im Griff.</span>
          </h1>
          <p className={styles.subtitle}>
            Lerne Schritt für Schritt, wie du dein Geld strukturierst,
            investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch
            und Verkaufsdruck.
          </p>

          <div className={styles.buttons}>
            <Link href="/etfs" className={styles.btnPrimary}>
              Jetzt starten
            </Link>
            <Link href="/ueber-uns" className={styles.btnGhost}>
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Visueller Bereich rechts – „Finanz-Dashboard“ */}
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.heroBadge}>Dein Finanz-Dashboard</span>
              <span className={styles.heroChip}>Bald mit echten Tools</span>
            </div>

            <div className={styles.heroChart}>
              <div className={styles.heroLine} />
              <div className={styles.heroDot} />
            </div>

            <div className={styles.heroStats}>
              <div>
                <p className={styles.statLabel}>Vermögen (Beispiel)</p>
                <p className={styles.statValue}>27.450 €</p>
              </div>
              <div>
                <p className={styles.statLabel}>Sparrate</p>
                <p className={styles.statValue}>450 €/Monat</p>
              </div>
              <div>
                <p className={styles.statLabel}>Ziel: Finanzielle Freiheit</p>
                <p className={styles.statValue}>2040</p>
              </div>
            </div>

            <p className={styles.heroFootnote}>
              Demo-Ansicht – später ergänzt mit Vergleichsrechnern und echten
              Auswertungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
