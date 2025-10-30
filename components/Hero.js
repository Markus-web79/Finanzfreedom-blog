import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Bild im Hintergrund */}
      <div className={styles.heroImageWrapper}>
        <Image
          src="/hero.png"
          alt="FinanzFreedom – Dein Weg zur finanziellen Freiheit"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay und Textinhalt */}
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Finanzielle Freiheit beginnt <span className={styles.highlight}>heute</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien,
            die wirklich funktionieren.
          </p>

          <div className={styles.heroButtons}>
            <a href="/willkommen" className={styles.btnPrimary}>
              Jetzt starten
            </a>
            <a href="/ueber-uns" className={styles.btnSecondary}>
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
