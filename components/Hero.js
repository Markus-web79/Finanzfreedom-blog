import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Dein Weg zur <span>finanziellen Freiheit</span>
        </h1>
        <p>
          Wir zeigen dir, wie du dein Geld verstehst, sinnvoll anlegst und Schritt für Schritt finanzielle Freiheit erreichst – ehrlich, einfach und seriös.
        </p>
        <Link href="/#artikel" className={styles.button}>
          Jetzt durchstarten 🚀
        </Link>
      </div>
    </section>
  );
}
