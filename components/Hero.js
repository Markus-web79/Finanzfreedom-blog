import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Hero-Bild */}
      <Image
        src="/hero.png"
        alt="FinanzFreedom – Dein Weg zur finanziellen Freiheit"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Overlay mit Text */}
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Willkommen bei <span className={styles.highlight}>FinanzFreedom</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Dein Weg zur finanziellen Freiheit beginnt hier. Lerne, investiere
            und wachse mit unserem Wissen.
          </p>

          <div className={styles.heroButtons}>
            <a href="#artikel" className={styles.btnPrimary}>
              Jetzt starten
            </a>
            <a href="#newsletter" className={styles.btnSecondary}>
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
