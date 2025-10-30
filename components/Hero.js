import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <Image
          src="/hero.jpg"
          alt="FinanzFreedom – Dein Weg zur finanziellen Freiheit"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.textContainer}>
          <h1>FinanzFreedom</h1>
          <p>Dein Weg zur finanziellen Freiheit beginnt hier.</p>
        </div>
      </div>
    </section>
  );
}
