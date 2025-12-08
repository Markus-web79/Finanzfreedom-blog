import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.label}>FINANZFREEDOM</span>
          <h1>
            Behalte deine Finanzen <span className={styles.highlight}>im Griff.</span>
          </h1>
          <p>
            Lerne Schritt für Schritt, wie du dein Geld strukturierst, investierst
            und langfristig Vermögen aufbaust – ohne Fachchinesisch und Verkaufsdruck.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/willkommen" className={styles.btnPrimary}>
              Jetzt starten
            </Link>
            <Link href="/ueber-uns" className={styles.btnSecondary}>
              Mehr erfahren
            </Link>
          </div>
        </div>

        <div className={styles.heroDashboard}>
          <h3>Dein Finanz-Dashboard</h3>
          <div className={styles.dashboardBox}>
            <div className={styles.dashboardRow}>
              <span>Vermögen (Beispiel)</span>
              <strong>27.450 €</strong>
            </div>
            <div className={styles.dashboardRow}>
              <span>Sparrate</span>
              <strong>450 €/Monat</strong>
            </div>
            <div className={styles.dashboardRow}>
              <span>Ziel: Finanzielle Freiheit</span>
              <strong>2040</strong>
            </div>
          </div>
          <p className={styles.dashboardNote}>
            Demo-Ansicht – später ergänzt mit echten Tools und Auswertungen.
          </p>
        </div>
      </div>
    </section>
  );
}
