import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <strong>FinanzFreedom</strong>
          <p>
            Unabhängiges Finanzportal für Investieren, Vergleiche & fundierte
            Entscheidungen.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <span>Portal</span>
            <Link href="/investieren">Investieren</Link>
            <Link href="/etfs">ETFs</Link>
            <Link href="/broker">Broker</Link>
            <Link href="/versicherungen">Versicherungen</Link>
          </div>

          <div>
            <span>Recht & Info</span>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} FinanzFreedom · Keine Anlageberatung
      </div>
    </footer>
  );
}
