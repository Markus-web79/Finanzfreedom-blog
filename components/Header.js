import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        Finanz<span>Freedom</span>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
          Startseite
        </Link>
        <Link href="/willkommen" className={router.pathname === '/willkommen' ? styles.active : ''}>
          Willkommen
        </Link>
        <Link href="/ueber-uns" className={router.pathname === '/ueber-uns' ? styles.active : ''}>
          Über uns
        </Link>
        <Link href="/kontakt" className={router.pathname === '/kontakt' ? styles.active : ''}>
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
