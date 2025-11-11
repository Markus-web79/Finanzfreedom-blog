// ✅ FinanzFreedom – Vergleichsübersicht (automatisch, SEO-optimiert)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function VergleicheOverview({ comparisons }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom Vergleiche 2025</title>
        <meta
          name="description"
          content="Aktuelle Anbieter- und Produktvergleiche rund um ETFs, Sparpläne, Versicherungen, Konten, Kredite und mehr – strukturiert, neutral und transparent von FinanzFreedom."
        />
        <link rel="canonical" href="https://finanzfreedom.de/vergleiche" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="compare-wrapper">
        <h1>💡 FinanzFreedom Vergleiche 2025</h1>
        <p className="intro">
          Entdecke aktuelle Vergleiche zu <strong>ETFs</strong>,{" "}
          <strong>Versicherungen</strong>, <strong>Krediten</strong>,{" "}
          <strong>Sparplänen</strong> und mehr. Finde schnell die besten
          Anbieter, Tools und Konditionen für deinen Finanzweg.
        </p>

        {comparisons.length === 0 ? (
          <p className="no-data">
            Es sind noch keine Vergleichsartikel vorhanden.
          </p>
        ) : (
          <div className="grid">
            {comparisons.map((item) => (
              <Link
                key={item.slug}
                href={`/vergleiche/${item.slug}`}
                className="card"
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span className="more">Weiterlesen →</span>
              </Link>
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        .compare-wrapper {
          max-width: 1100px;
          margin: 60px auto;
          padding: 20px;
          text-align: center;
          color: #fff;
        }
        h1 {
          color: #00e5cf;
          font-size: 2.2rem;
          margin-bottom: 15px;
        }
        .intro {
          color: #ccc;
          max-width: 750px;
          margin: 0 auto 40px auto;
        }
        .no-data {
          color: #777;
          margin-top: 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 20px;
        }
        .card {
          background: #0a0a0a;
          border: 1px solid #00e5cf33;
          border-radius: 10px;
          padding: 25px;
          text-align: left;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-3px);
          border-color: #00e5cf;
        }
        .card h2 {
          font-size: 1.2rem;
          color: #00e5cf;
          margin-bottom: 8px;
        }
        .card p {
          color: #ccc;
          font-size: 0.95rem;
        }
        .more {
          display: inline-block;
          margin-top: 10px;
          color: #00e5cf;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .compare-wrapper {
            margin: 20px;
            padding: 10px;
          }
          h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
}

// ==============================
// 🔧 getStaticProps – lädt alle Vergleichsartikel
// ==============================
export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "vergleiche");

  if (!fs.existsSync(dir)) {
    return { props: { comparisons: [] } };
  }

  const files = fs.readdirSync(dir);

  const comparisons = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(content);
      return {
        slug: file.replace(".md", ""),
        title: data.title || "Unbenannter Vergleich",
        description:
          data.description ||
          "Detaillierter Anbieter- und Produktvergleich mit echten Mehrwerten.",
      };
    });

  return { props: { comparisons } };
}
