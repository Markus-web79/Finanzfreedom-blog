// ✅ FinanzFreedom – Vergleichsseiten Renderer (SEO & mobil-optimiert)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function VergleichPage({ frontmatter, content }) {
  if (!frontmatter) {
    return (
      <main style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Vergleich nicht gefunden</h1>
        <Link href="/vergleiche">← Zurück zur Übersicht</Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>
          {frontmatter.title
            ? `${frontmatter.title} | FinanzFreedom Vergleich`
            : "FinanzFreedom Vergleich"}
        </title>
        <meta
          name="description"
          content={
            frontmatter.description ||
            "Vergleiche Anbieter und Produkte zu ETFs, Konten, Versicherungen und mehr auf FinanzFreedom."
          }
        />
        <link
          rel="canonical"
          href={`https://finanzfreedom.de/vergleiche/${frontmatter.slug}`}
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="vergleich-container">
        <article>
          <h1>🔎 {frontmatter.title}</h1>
          {frontmatter.updated && (
            <p className="meta">
              Letztes Update:{" "}
              {new Date(frontmatter.updated).toLocaleDateString("de-DE")}
            </p>
          )}
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        <Link href="/vergleiche" className="back-link">
          ← Zurück zu allen Vergleichen
        </Link>
      </main>

      <style jsx>{`
        .vergleich-container {
          max-width: 950px;
          margin: 60px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
          color: #222;
        }
        h1 {
          color: #00e5cf;
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .meta {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 25px;
        }
        article {
          line-height: 1.7;
        }
        .back-link {
          display: inline-block;
          margin-top: 30px;
          color: #00e5cf;
        }

        @media (max-width: 768px) {
          .vergleich-container {
            margin: 20px;
            padding: 15px;
          }
          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

// =============================
// 🔧 getStaticPaths – Alle Vergleichsdateien laden
// =============================
export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "vergleiche");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  const paths = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(".md", "") },
    }));

  return { paths, fallback: false };
}

// =============================
// 🔧 getStaticProps – Einzelne Vergleichsdatei laden
// =============================
export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "vergleiche",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: { ...data, slug: params.slug },
      content,
    },
  };
}
