// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">FinanzFreedom</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Start</Link>
        <Link href="/kategorien">Themen</Link>
        <Link href="/ueber-uns">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
