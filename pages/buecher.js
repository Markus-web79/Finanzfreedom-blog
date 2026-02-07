import Head from "next/head";
import Link from "next/link";

export default function Buecher() {
  return (
    <>
      <Head>
        <title>Buchempfehlungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Empfohlene Finanz- und Investmentbücher für Einsteiger und Fortgeschrittene."
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        {/* Zurück-Link */}
        <div style={{ marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "#4fd1c5", textDecoration: "none" }}>
            ← Zur Startseite
          </Link>
        </div>

        <h1>Buchempfehlungen</h1>

        <p>
          Wer seine Finanzen langfristig verstehen und verbessern will, kommt an
          soliden Grundlagen nicht vorbei. Diese Bücher helfen dir, typische
          Denkfehler zu vermeiden, ein gesundes Mindset zu entwickeln und bessere
          finanzielle Entscheidungen zu treffen.
        </p>

        <h2>Unsere Empfehlungen</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Der reichste Mann von Babylon</strong> – George S. Clason
            <br />
            Zeitlose Prinzipien zu Sparen, Investieren und Vermögensaufbau.
            <br />
            👉{" "}
            <a
              href="https://amzn.to/3Mbihvw"
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{ color: "#4fd1c5" }}
            >
              Bei Amazon ansehen
            </a>
          </li>

          <li>
            <strong>Psychologie des Geldes</strong> – Morgan Housel
            <br />
            Warum Verhalten oft wichtiger ist als Fachwissen.
          </li>

          <li>
            <strong>Rich Dad Poor Dad</strong> – Robert Kiyosaki
            <br />
            Ein anderer Blick auf Geld, Arbeit und Vermögensaufbau.
          </li>

          <li>
            <strong>Souverän investieren mit Indexfonds & ETFs</strong> – Gerd Kommer
            <br />
            Sachliche Grundlagen für langfristiges ETF-Investieren.
          </li>
        </ul>

        <p style={{ marginTop: "2rem", opacity: 0.8 }}>
          Transparenz-Hinweis: Einige Links auf dieser Seite sind Affiliate-Links.
          Für dich entstehen dadurch keine Mehrkosten.
        </p>
      </main>
    </>
  );
}
