import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Investieren verstehen. Freiheit aufbauen.</title>
        <meta
          name="description"
          content="FinanzFreedom ist dein Finanzportal für Investieren, ETFs und Vermögensaufbau – verständlich, unabhängig und langfristig."
        />
      </Head>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        {/* HERO */}
        <section style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Investieren verstehen.<br />Freiheit aufbauen.
          </h1>

          <p style={{ fontSize: "1.2rem", opacity: 0.85, maxWidth: "700px" }}>
            FinanzFreedom ist dein unabhängiges Finanzportal.
            Kein Verkaufsdruck. Kein Bullshit.
            Sondern klare Strategien für langfristigen Vermögensaufbau.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/blog">
              <a style={{
                padding: "0.9rem 1.6rem",
                background: "#0fb9b1",
                color: "#000",
                borderRadius: "6px",
                fontWeight: "600"
              }}>
                Jetzt starten
              </a>
            </Link>
          </div>
        </section>

        {/* WARUM */}
        <section style={{ marginBottom: "4rem" }}>
          <h2>Warum FinanzFreedom?</h2>
          <ul style={{ marginTop: "1rem", lineHeight: 1.8 }}>
            <li>✔ Verständliche Erklärungen ohne Fachchinesisch</li>
            <li>✔ Fokus auf Investieren & Vermögensaufbau</li>
            <li>✔ Unabhängig & langfristig gedacht</li>
            <li>✔ Für Einsteiger und Fortgeschrittene</li>
          </ul>
        </section>

        {/* THEMEN */}
        <section style={{ marginBottom: "4rem" }}>
          <h2>Unsere Schwerpunkte</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem"
          }}>
            <div className="card">📈 Investieren & ETFs</div>
            <div className="card">🏠 Vermögensaufbau</div>
            <div className="card">🛡️ Versicherungen</div>
            <div className="card">🌍 Finanzielle Freiheit</div>
          </div>
        </section>

        {/* VERTRAUEN */}
        <section>
          <h2>Unser Ansatz</h2>
          <p style={{ maxWidth: "700px", lineHeight: 1.7, opacity: 0.85 }}>
            Wir zeigen dir nicht den schnellen Reichtum,
            sondern ein System, das funktioniert –
            heute, morgen und in zehn Jahren.
          </p>
        </section>
      </main>

      <style jsx>{`
        .card {
          padding: 1.5rem;
          background: linear-gradient(180deg, #0f172a, #020617);
          border-radius: 10px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
