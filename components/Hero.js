import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Hintergrundbild */}
      <div className={styles.heroImageWrapper}>
        <img
          src="/hero.png"
          alt="FinanzFreedom – Dein Weg zur finanziellen Freiheit"
          className={styles.heroImage}
        />
      </div>

      {/* Overlay und Textinhalt */}
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Finanzielle Freiheit beginnt{" "}
            <span className={styles.highlight}>heute</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien,
            die wirklich funktionieren.
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
      </div>
    </section>
  );
}
