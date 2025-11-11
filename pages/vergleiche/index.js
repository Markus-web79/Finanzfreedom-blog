// ============================================
//  FinanzFreedom - Vergleichsübersicht
//  Zeigt automatisch alle Vergleichsartikel
// ============================================

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function Vergleiche({ articles }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom Vergleiche 2025 – Die besten Anbieter im Überblick</title>
        <meta
          name="description"
          content="Finde die besten Finanzprodukte 2025: ETF-Broker, Sparpläne, Tagesgeld & mehr. Aktuelle Vergleiche, übersichtlich erklärt."
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "3rem auto", padding: "0 1.5rem", color: "white" }}>
        <h1 style={{ color: "#00e5cf", textAlign: "center" }}>
          💡 FinanzFreedom Vergleiche 2025
        </h1>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "#ccc" }}>
          Aktuelle Anbieter- und Produktvergleiche rund um ETFs, Sparpläne, Versicherungen und mehr.
        </p>

        {articles.length === 0 ? (
          <p>Es sind noch keine Vergleichsartikel vorhanden.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {articles.map((a) => (
              <div
                key={a.slug}
                style={{
                  background: "#121212",
                  border: "1px solid rgba(0,229,207,0.2)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  transition: "transform 0.2s ease",
                }}
              >
                <Link href={`/vergleiche/${a.slug}`} style={{ textDecoration: "none" }}>
                  <h3 style={{ color: "#00e5cf", marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p style={{ color: "#bbb", fontSize: "0.95rem" }}>{a.description}</p>
                  <p style={{ color: "#00bfa5", fontSize: "0.85rem", marginTop: "0.8rem" }}>
                    → Jetzt vergleichen
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const folder = path.join(process.cwd(), "content", "vergleiche");
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder);

    articles = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(folder, file);
        const content = fs.readFileSync(filePath, "utf8");
        const { data } = matter(content);

        return {
          title: data.title || "Unbekannter Vergleich",
          description:
            data.description ||
            "Vergleich zu Finanzprodukten auf FinanzFreedom.",
          slug: file.replace(/\.md$/, ""),
        };
      });
  }

  return {
    props: { articles },
  };
}
