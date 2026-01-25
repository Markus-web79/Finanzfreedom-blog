import Head from "next/head";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutz | FinanzFreedom</title>
        <meta
          name="description"
          content="Datenschutzerklärung von FinanzFreedom – Informationen zur Verarbeitung personenbezogener Daten."
        />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> → Datenschutz
        </nav>

        <h1>Datenschutz</h1>

        <section style={styles.section}>
          <h2>Datenschutzerklärung</h2>
          <p>
            Wir nehmen den Schutz deiner persönlichen Daten sehr ernst.
            Nachfolgend informieren wir dich darüber, welche Daten erhoben und
            wie sie verwendet werden.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Verantwortliche Stelle</h2>
          <p>
            Markus Habermann<br />
            Elsa-Brandström-Str. 21<br />
            45699 Herten<br />
            Deutschland
          </p>
          <p>
            E-Mail: <a href="mailto:kontakt@finanzfreedom.de">kontakt@finanzfreedom.de</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch Daten wie IP-Adresse,
            verwendeter Browser, Betriebssystem, Referrer-URL sowie Uhrzeit der
            Serveranfrage erfasst.
          </p>
          <p>
            Diese Daten dienen ausschließlich der technischen Sicherheit und
            werden nicht zur Identifikation einer Person verwendet.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Cookies</h2>
          <p>
            Diese Website verwendet Cookies, um grundlegende Funktionen
            bereitzustellen und das Nutzererlebnis zu verbessern.
          </p>
          <p>
            Du kannst Cookies in deinem Browser einschränken oder deaktivieren.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Analyse-Tools</h2>
          <p>
            Wir verwenden ggf. anonymisierte Statistiktools (z. B. Google
            Analytics), um zu verstehen, welche Inhalte besonders gefragt sind.
          </p>
          <p>
            IP-Adressen werden anonymisiert verarbeitet.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Affiliate-Links und Werbung</h2>
          <p>
            Diese Website enthält Affiliate-Links. Wenn du über einen solchen
            Link ein Produkt kaufst, erhalten wir möglicherweise eine Provision.
          </p>
          <p>
            Für dich entstehen dabei keine Mehrkosten.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Deine Rechte</h2>
          <p>
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
            Einschränkung der Verarbeitung deiner personenbezogenen Daten.
          </p>
          <p>
            Wende dich dazu bitte an:
            <br />
            <a href="mailto:kontakt@finanzfreedom.de">kontakt@finanzfreedom.de</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung kann gelegentlich angepasst werden, um
            rechtlichen Anforderungen zu entsprechen.
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
    lineHeight: 1.7,
  },
  breadcrumb: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "24px",
  },
  section: {
    marginBottom: "36px",
  },
};
