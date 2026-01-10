import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link href="/">Startseite</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
