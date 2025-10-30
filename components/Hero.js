import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Dein Weg zur <span>finanziellen Freiheit</span>
        </h1>
        <p>
          Lerne, wie du dein Geld clever investierst, sparst und unabhängig wirst –
          einfach erklärt und praxisnah.
        </p>

        <Link href="#artikel" className={styles.button}>
          Jetzt starten
        </Link>
      </div>
    </section>
  );
}
