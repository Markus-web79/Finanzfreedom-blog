// ✅ FinanzFreedom – Vergleichs-Übersicht 2025
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function Vergleiche({ comparisons }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom Vergleiche 2025 – ETFs, Versicherungen, Kreditkarten & mehr</title>
        <meta
          name="description"
          content="Aktuelle FinanzFreedom Vergleiche 2025 – Finde die besten Anbieter für ETFs, Versicherungen, Sparpläne, Kreditkarten und mehr. Neutral, transparent und immer aktuell."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://finanzfreedom.de/vergleiche" />
      </Head>

      <main className="content-container">
        <h1>💡 FinanzFreedom Vergleiche 2025</h1>
        <p className="subtitle">
          Aktuelle Anbieter- und Produktvergleiche rund um ETFs, Sparpläne,
          Versicherungen und mehr.
        </p>

        {comparisons.length === 0 ? (
          <p style={{ opacity: 0.6 }}>Es sind noch keine Vergleichsartikel vorhanden.</p>
        ) : (
          <div className="comparison-grid">
            {comparisons.map((cmp) => (
              <div key={cmp.slug} className="comparison-card">
                <h2>
                  <Link href={`/vergleiche/${cmp.slug}`}>{cmp.title}</Link>
                </h2>
                <p>{cmp.description}</p>
                <Link href={`/vergleiche/${cmp.slug}`} className="readmore">
                  👉 Zum Vergleich
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        .content-container {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 20px;
          text-align: center;
        }
        .subtitle {
          color: #777;
          margin-bottom: 40px;
        }
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .comparison-card {
          background: #fff;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease;
        }
        .comparison-card:hover {
          transform: translateY(-4px);
        }
        .readmore {
          display: inline-block;
          margin-top: 10px;
          color: #00e5cf;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

// ============================
// 📂 Artikel aus content/vergleiche laden
// ============================
export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "vergleiche");
  let comparisons = [];

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    comparisons = files.map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Unbekannter Vergleich",
        description: data.description || "FinanzFreedom Vergleichsartikel",
      };
    });
  }

  // Sortiere nach Datum (neueste oben)
  comparisons.sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: { comparisons },
  };
}
