import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          Finanz<span>Freedom</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.navLink} ${router.pathname === "/" ? styles.active : ""}`}
        >
          Startseite
        </Link>
        <Link
          href="/blog"
          className={`${styles.navLink} ${router.pathname.startsWith("/blog") ? styles.active : ""}`}
        >
          Blog
        </Link>
        <Link
          href="/ueber-uns"
          className={`${styles.navLink} ${router.pathname === "/ueber-uns" ? styles.active : ""}`}
        >
          Über uns
        </Link>
        <Link
          href="/kontakt"
          className={`${styles.navLink} ${router.pathname === "/kontakt" ? styles.active : ""}`}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
