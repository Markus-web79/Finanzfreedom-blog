import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Broker-Vergleich</h1>
        <p style={styles.subtitle}>
          Vergleich folgt in Kürze.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.05rem",
    color: "#9ca3af",
  },
};
