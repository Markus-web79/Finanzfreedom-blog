import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

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

      {/* Overlay und Text */}
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Dein Weg zur <span className={styles.highlight}>finanziellen Freiheit</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Lerne, wie du dein Geld clever investierst, sparst und unabhängig wirst – 
            einfach erklärt und praxisnah.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/blog" className={styles.btnPrimary}>
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
