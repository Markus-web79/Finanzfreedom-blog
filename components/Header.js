import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Finanz<span>Freedom</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Startseite</Link>
        <Link href="/etfs">ETFs</Link>
        <Link href="/geld-anlegen">Geld anlegen</Link>
        <Link href="/versicherungen">Versicherungen</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
