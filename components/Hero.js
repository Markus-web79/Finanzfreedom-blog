import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Hintergrundbild */}
      <div className={styles.heroImageWrapper}>
        <Image
          src="/hero.png"
          alt="FinanzFreedom – Dein Weg zur finanziellen Freiheit"
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Halbtransparente Overlay-Ebene */}
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Finanzielle <span className={styles.highlight}>Freiheit</span> beginnt heute
          </h1>
          <p className={styles.heroSubtitle}>
            Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien,
            die wirklich funktionieren. Unabhängig. Verständlich. Schritt für Schritt.
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
