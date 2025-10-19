import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          FinanzFreedom
        </Link>

        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>
            Start
          </Link>
          <Link href="/about" style={styles.navLink}>
            Über
          </Link>
          <Link href="/contact" style={styles.navLink}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #e5e5e5",
    padding: "1rem 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "600",
    textDecoration: "none",
    color: "#111",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
};
