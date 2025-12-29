import Head from "next/head";
import Link from "next/link";

export default function Investieren() {
  return (
    <>
      <Head>
        <title>Investieren lernen | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht erklärt: ETFs, Sparpläne, Strategien & Vermögensaufbau – unabhängig und verständlich."
        />
      </Head>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        {/* Hero */}
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.5rem" }}>Investieren</h1>
          <p style={{ maxWidth: "700px", margin: "1.5rem auto", opacity: 0.85 }}>
            Lerne, wie du dein Geld sinnvoll investierst – verständlich, unabhängig
            und ohne leere Versprechen.
          </p>
        </section>

        {/* Kategorien */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Card
            title="ETFs"
            text="Grundlagen, Vergleiche und Strategien für langfristigen Vermögensaufbau."
            href="/blog"
          />
          <Card
            title="Sparpläne"
            text="Automatisch investieren – Schritt für Schritt erklärt."
            href="/blog"
          />
          <Card
            title="Für Einsteiger"
            text="Der einfache Einstieg ins Investieren – ohne Vorwissen."
            href="/blog"
          />
          <Card
            title="Strategien"
            text="Langfristige Investment-Strategien verständlich erklärt."
            href="/blog"
          />
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", marginTop: "4rem" }}>
          <p style={{ opacity: 0.8 }}>Du willst tiefer einsteigen?</p>
          <Link href="/blog" style={{ color: "#2dd4bf", fontWeight: 600 }}>
            → Zu den Artikeln
          </Link>
        </section>
      </main>
    </>
  );
}

function Card({ title, text, href }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "1.5rem",
        borderRadius: "14px",
        background: "linear-gradient(180deg, #0f172a, #020617)",
        textDecoration: "none",
        color: "inherit",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ opacity: 0.8 }}>{text}</p>
    </Link>
  );
}
