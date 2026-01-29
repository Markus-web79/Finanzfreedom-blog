import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} FinanzFreedom
        </span>

        <nav className={styles.links}>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/buecher">Buchempfehlungen</Link>
        </nav>
      </div>
    </footer>
  );
}
