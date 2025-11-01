import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Finanz<span>Freedom</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Startseite</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="/ueber-uns" className={styles.navLink}>Über uns</Link>
        <Link href="/kontakt" className={styles.navLink}>Kontakt</Link>
      </nav>
    </header>
  );
}
