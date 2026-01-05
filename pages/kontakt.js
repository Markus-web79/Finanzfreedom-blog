import Head from "next/head";
import Link from "next/link";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt | FinanzFreedom</title>
        <meta
          name="description"
          content="Kontakt zu FinanzFreedom: Feedback, Themenvorschläge oder Kooperationen."
        />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> → Kontakt
        </nav>

        <header style={styles.header}>
          <h1 style={styles.title}>Kontakt</h1>
          <p style={styles.subtitle}>
            Feedback, Themenvorschläge oder Kooperationen? Schreib uns gern.
          </p>
        </header>

        <section style={styles.card}>
          <h2>Kontaktmöglichkeiten</h2>
          <p>
            Aktuell bevorzugen wir Kontakt per E-Mail. (Ein Formular kann später
            ergänzt werden.)
          </p>

          <div style={styles.box}>
            <p style={{ margin: 0, opacity: 0.9 }}>E-Mail:</p>
            <p style={{ margin: "6px 0 0" }}>
              <b>kontakt@finanzfreedom.de</b>
            </p>
          </div>

          <h2>Kooperationen</h2>
          <p>
            Wenn du eine Kooperation vorschlagen möchtest, sende bitte eine kurze
            Nachricht mit:
          </p>
          <ul>
            <li>Produkt / Angebot</li>
            <li>Zielgruppe</li>
            <li>Vergütungsmodell</li>
          </ul>
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
  box: {
    marginTop: "12px",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    background: "#0b1224",
  },
};
