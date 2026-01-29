import Head from "next/head";

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
        <h1>Buchempfehlungen</h1>

        <p>
          Wer seine Finanzen langfristig verstehen und verbessern will, kommt an
          soliden Grundlagen nicht vorbei. Diese Bücher helfen dir, typische
          Denkfehler zu vermeiden, ein gesundes Mindset zu entwickeln und
          bessere finanzielle Entscheidungen zu treffen.
        </p>

        <h2>Unsere Empfehlungen</h2>

        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Der reichste Mann von Babylon</strong> – George S. Clason  
            <br />
            Zeitlose Prinzipien zu Sparen, Investieren und Vermögensaufbau.
          </li>

          <li>
            <strong>Psychologie des Geldes</strong> – Morgan Housel  
            <br />
            Warum Verhalten wichtiger ist als Fachwissen.
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
          Transparenz-Hinweis: Zukünftig können einige Links Affiliate-Links
          sein. Für dich entstehen dadurch keine Nachteile.
        </p>
      </main>
    </>
  );
}
