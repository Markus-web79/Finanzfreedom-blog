import Head from "next/head";
import Link from "next/link";

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über uns | FinanzFreedom</title>
        <meta
          name="description"
          content="FinanzFreedom ist ein unabhängiges Finanzportal. Unser Ziel: verständliche Inhalte, Tools und Vergleiche für bessere finanzielle Entscheidungen."
        />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> → Über uns
        </nav>

        <header style={styles.header}>
          <h1 style={styles.title}>Über FinanzFreedom</h1>
          <p style={styles.subtitle}>
            FinanzFreedom ist ein unabhängiges Finanzportal mit dem Ziel,
            Finanzwissen verständlich zu machen – ohne Fachchinesisch und ohne
            unnötige Komplexität.
          </p>
        </header>

        <section style={styles.card}>
          <h2>Unser Anspruch</h2>
          <ul>
            <li>✅ Klarer Portal-Aufbau statt Blog-Chaos</li>
            <li>✅ Tools & Rechner, die Entscheidungen erleichtern</li>
            <li>✅ Vergleiche, die Nutzer wirklich weiterbringen</li>
            <li>✅ Langfristig: internationale Versionen (DE/EN)</li>
          </ul>

          <h2>Für wen ist FinanzFreedom?</h2>
          <p>
            Für alle, die ihre Finanzen selbst in die Hand nehmen wollen:
            Einsteiger, Fortgeschrittene und Menschen, die langfristig Vermögen
            aufbauen möchten.
          </p>

          <h2>Kontakt</h2>
          <p>
            Du hast Feedback, Fragen oder möchtest ein Thema vorschlagen?
            Dann nutze bitte die Kontaktseite.
          </p>

          <Link href="/kontakt" style={styles.linkButton}>
            → Zur Kontaktseite
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "18px",
  },
  header: {
    marginBottom: "24px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "10px",
    color: "#ffffff",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#020617",
    lineHeight: 1.8,
  },
  linkButton: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 16px",
    borderRadius: "10px",
    background: "#22d3ee",
    color: "#020617",
    textDecoration: "none",
    fontWeight: 700,
  },
};
