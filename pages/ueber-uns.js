import Head from "next/head";

export default function UeberUns() {
  return (
    <>
      <Head>
        <title>Über uns | FinanzFreedom</title>
        <meta
          name="description"
          content="FinanzFreedom ist ein unabhängiges Finanzportal für Investieren, Vermögensaufbau und finanzielle Bildung – ohne Verkaufsdruck."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.header}>
          <h1>Über FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Ein unabhängiges Finanzportal – sachlich, verständlich und langfristig gedacht.
          </p>
        </section>

        <section style={styles.block}>
          <h2>Warum FinanzFreedom?</h2>
          <p>
            FinanzFreedom wurde gegründet, um Finanzwissen verständlich,
            strukturiert und ohne Verkaufsdruck zugänglich zu machen.
            Viele Finanzseiten verfolgen vor allem eigene Interessen –
            wir setzen auf Transparenz und Klarheit.
          </p>
        </section>

        <section style={styles.block}>
          <h2>Unsere Philosophie</h2>
          <ul style={styles.list}>
            <li>Unabhängige Informationen statt reiner Produktempfehlungen</li>
            <li>Langfristiges Denken statt kurzfristiger Trends</li>
            <li>Verständliche Erklärungen ohne Fachchinesisch</li>
            <li>Strukturierte Inhalte statt unübersichtlicher Blog-Flut</li>
          </ul>
        </section>

        <section style={styles.block}>
          <h2>Was wir nicht sind</h2>
          <p>
            FinanzFreedom ist kein Finanzberater, kein Verkaufsportal
            und kein Ort für schnelle Versprechen.
            Wir liefern Wissen, Vergleiche und Orientierung –
            Entscheidungen triffst du selbst.
          </p>
        </section>

        <section style={styles.block}>
          <h2>Langfristige Vision</h2>
          <p>
            FinanzFreedom soll sich zu einem umfassenden Finanzportal entwickeln:
            mit fundierten Artikeln, Vergleichsrechnern, Tools
            und Inhalten für verschiedene Länder.
            Unser Fokus liegt auf nachhaltigem Vermögensaufbau
            und finanzieller Selbstbestimmung.
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "820px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    lineHeight: 1.7,
  },
  header: {
    marginBottom: "3rem",
  },
  subtitle: {
    opacity: 0.85,
    marginTop: "0.75rem",
  },
  block: {
    marginBottom: "2.5rem",
  },
  list: {
    paddingLeft: "1.2rem",
  },
};
