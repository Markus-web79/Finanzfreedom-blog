// pages/kategorie/index.js
import Head from "next/head";
import Link from "next/link";
import CATEGORY_CONFIG from "../../config/categoryConfig.js";

export default function CategoryOverviewPage() {
  const categories = Object.values(CATEGORY_CONFIG);

  return (
    <>
      <Head>
        <title>Kategorien | FinanzFreedom</title>
        <meta
          name="description"
          content="Alle Kategorien auf FinanzFreedom – Investieren, Sparen und Versicherungen im Überblick."
        />
      </Head>

      <main style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Kategorien</h1>
        <p style={{ marginBottom: "2rem" }}>
          Wähle eine Kategorie und entdecke passende Artikel rund um deine
          finanzielle Freiheit.
        </p>

        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
          {categories.map((cat) => (
            <li
              key={cat.slug}
              style={{
                border: "1px solid #0f766e",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <h2 style={{ marginBottom: "0.5rem" }}>{cat.label}</h2>
              <p style={{ marginBottom: "0.75rem" }}>{cat.heroSubtitle}</p>
              <Link href={`/kategorie/${cat.slug}`}>Zur Kategorie</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
