import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          FinanzFreedom – Dein Weg zur finanziellen Freiheit
        </h1>
        <p className={styles.heroSubtitle}>
          Lerne, dein Geld klug zu investieren, Rücklagen aufzubauen und finanzielle Freiheit zu erreichen –
          Schritt für Schritt, verständlich erklärt.
        </p>
        <div className={styles.heroButtons}>
          <Link href="#artikel" className={styles.btnPrimary}>
            Jetzt starten
          </Link>
          <Link href="/ueber-uns" className={styles.btnSecondary}>
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
}
