import Head from "next/head";
import Link from "next/link";

export default function Transparenz() {
  return (
    <>
      <Head>
        <title>Transparenz & Unabhängigkeit | FinanzFreedom</title>
        <meta
          name="description"
          content="Wie FinanzFreedom arbeitet: Unabhängigkeit, Affiliate-Links, Kriterien für Vergleiche und unser Anspruch an Qualität."
        />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> → Transparenz
        </nav>

        <header style={styles.header}>
          <h1 style={styles.title}>Transparenz & Unabhängigkeit</h1>
          <p style={styles.subtitle}>
            Wir möchten, dass du jederzeit nachvollziehen kannst, wie dieses
            Portal finanziert wird und wie wir Inhalte erstellen.
          </p>
        </header>

        <section style={styles.card}>
          <h2>Affiliate-Links</h2>
          <p>
            Einige Seiten können Affiliate-Links enthalten. Wenn du über einen
            solchen Link ein Produkt abschließt, erhalten wir ggf. eine
            Provision. Für dich entstehen dabei keine zusätzlichen Kosten.
          </p>

          <h2>Unabhängigkeit</h2>
          <p>
            Unsere Inhalte sollen verständlich, fair und nützlich sein.
            Wir versuchen, Produkte anhand klarer Kriterien einzuordnen.
          </p>

          <h2>Wie Vergleiche entstehen</h2>
          <ul>
            <li>Kosten & Gebühren</li>
            <li>Produktumfang & Funktionen</li>
            <li>Sicherheit & Regulierung</li>
            <li>Nutzerfreundlichkeit</li>
          </ul>

          <h2>Hinweis</h2>
          <p>
            FinanzFreedom ersetzt keine individuelle Anlageberatung. Bitte prüfe
            Entscheidungen immer im Kontext deiner persönlichen Situation.
          </p>
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
};
