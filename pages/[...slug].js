// ✅ FinanzFreedom universelle Slug-Seite (korrigiert & optimiert)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function DynamicPage({ frontmatter, content }) {
  if (!frontmatter) {
    return (
      <main style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Seite nicht gefunden</h1>
        <Link href="/">← Zur Startseite</Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title || "FinanzFreedom Artikel"}</title>
        <meta
          name="description"
          content={frontmatter.description || "FinanzFreedom Blogartikel"}
        />
        <link rel="canonical" href={`https://finanzfreedom.de/${frontmatter.slug}`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="article-container">
        <article>
          <h1>{frontmatter.title}</h1>
          <p className="meta">
            {frontmatter.date && (
              <span>📅 {new Date(frontmatter.date).toLocaleDateString("de-DE")}</span>
            )}
            {frontmatter.category && (
              <span> | 🏷️ {frontmatter.category}</span>
            )}
          </p>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        <Link href="/" className="back-link">
          ← Zurück zur Startseite
        </Link>
      </main>

      <style jsx>{`
        .article-container {
          max-width: 900px;
          margin: 60px auto;
          padding: 20px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        article h1 {
          font-size: 2rem;
          color: #00e5cf;
        }
        .meta {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 20px;
        }
        .back-link {
          display: inline-block;
          margin-top: 30px;
          color: #00e5cf;
        }
      `}</style>
    </>
  );
}

// =============================
// 🔧 getStaticPaths (automatisch, aber mit Filterung)
// =============================
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");

  // Alle Unterordner durchsuchen
  const categories = fs.readdirSync(contentDir);
  const paths = [];

  categories.forEach((folder) => {
    const fullPath = path.join(contentDir, folder);
    if (fs.statSync(fullPath).isDirectory() && folder !== "vergleiche") {
      // 🔥 Vergleiche ausschließen, um Konflikte zu vermeiden
      const files = fs.readdirSync(fullPath);
      files.forEach((filename) => {
        if (filename.endsWith(".md")) {
          paths.push({
            params: { slug: [filename.replace(".md", "")] },
          });
        }
      });
    }
  });

  return { paths, fallback: false };
}

// =============================
// 🔧 getStaticProps (Inhalt laden)
// =============================
export async function getStaticProps({ params }) {
  const slug = params.slug[0]; // Array auflösen
  const categories = ["etfs", "geld-anlegen", "geld-vermehren", "versicherungen", "tools"];
  let filePath = null;

  // Datei suchen
  for (const cat of categories) {
    const possiblePath = path.join(process.cwd(), "content", cat, `${slug}.md`);
    if (fs.existsSync(possiblePath)) {
      filePath = possiblePath;
      break;
    }
  }

  if (!filePath) return { notFound: true };

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: { ...data, slug },
      content,
    },
  };
}
