import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";

export default function PostPage({ frontmatter, html, category }) {
  if (!frontmatter) {
    return (
      <div style={{ color: "white", textAlign: "center", padding: "4rem" }}>
        <h1>404 – Artikel nicht gefunden</h1>
        <Link href="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta
          name="description"
          content={
            frontmatter.description ||
            "Artikel auf FinanzFreedom – Finanzen einfach erklärt."
          }
        />
      </Head>

      <main style={{ maxWidth: "850px", margin: "2rem auto", color: "white" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "1.5rem", fontSize: "0.9rem", color: "#aaa" }}>
          <Link href="/" style={{ color: "#00c2b3", textDecoration: "none" }}>
            Startseite
          </Link>
          {category && (
            <>
              {" "}›{" "}
              <Link
                href={`/${category}`}
                style={{ color: "#00c2b3", textDecoration: "none" }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </>
          )}
        </nav>

        <h1 style={{ marginBottom: "1rem" }}>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />

        {/* Zurück-Button */}
        <div style={{ marginTop: "2.5rem" }}>
          {category ? (
            <Link
              href={`/${category}`}
              style={{
                display: "inline-block",
                color: "#00c2b3",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              ← Zurück zur Kategorie {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ) : (
            <Link
              href="/"
              style={{
                display: "inline-block",
                color: "#00c2b3",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              ← Zurück zur Startseite
            </Link>
          )}
        </div>
      </main>
    </>
  );
}

// 🔹 Hilfsfunktion: Alle Markdown-Dateien rekursiv finden
function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = getAllMarkdownFiles(contentDir);

  const paths = files.map((file) => {
    const relPath = path.relative(contentDir, file).replace(/\.md$/, "");
    const slugArray = relPath.split(path.sep);
    return { params: { slug: slugArray } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug)
      ? params.slug.join("/")
      : params.slug;

    const contentDir = path.join(process.cwd(), "content");
    const fullPath = path.join(contentDir, `${slugPath}.md`);

    if (!fs.existsSync(fullPath)) {
      console.error("❌ Datei nicht gefunden:", fullPath);
      return { notFound: true };
    }

    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data: frontmatter, content } = matter(raw);
    const html = marked(content);

    // Kategorie aus Pfad extrahieren
    const parts = slugPath.split("/");
    const category = parts.length > 1 ? parts[0] : null;

    return { props: { frontmatter, html, category } };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
