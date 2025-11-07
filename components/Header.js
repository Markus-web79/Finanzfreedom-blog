import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Finanz<span>Freedom</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Startseite</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
