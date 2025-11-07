import Head from "next/head";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({ frontmatter, html, categorySlug }) {
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

      <main style={{ maxWidth: "800px", margin: "2rem auto", color: "white" }}>
        {/* Breadcrumb */}
        <p style={{ color: "#00bfa5", marginBottom: "1rem" }}>
          {categorySlug && (
            <>
              <Link href="/">Startseite</Link> /{" "}
              <Link href={`/${categorySlug}`}>{categorySlug}</Link> /{" "}
              <span>{frontmatter.title}</span>
            </>
          )}
        </p>

        {/* Zurück-Link */}
        {categorySlug && (
          <Link
            href={`/${categorySlug}`}
            style={{
              display: "inline-block",
              color: "#00bfa5",
              marginBottom: "1.5rem",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ← Zurück zur Kategorie
          </Link>
        )}

        {/* Artikelinhalt */}
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />

        {/* Themenübersicht */}
        <p style={{ color: "#00bfa5", marginTop: "2rem" }}>Mehr Themen entdecken:</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {[
            { name: "ETFs", path: "/etfs" },
            { name: "Geld anlegen", path: "/geld-anlegen" },
            { name: "Versicherungen", path: "/versicherungen" },
            { name: "Tools & Rechner", path: "/tools" },
          ].map((cat) => (
            <Link
              key={cat.path}
              href={cat.path}
              style={{
                color: "#d0d0d0",
                textDecoration: "none",
                border: "1px solid rgba(0,194,179,0.4)",
                padding: "0.4rem 0.8rem",
                borderRadius: "6px",
                transition: "0.2s",
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

// ---------- Generierung ----------

export async function getStaticPaths() {
  const fs = require("fs"); // ✅ nur hier erlaubt
  const contentDir = path.join(process.cwd(), "content");
  const paths = [];

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) scanDir(fullPath);
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const relPath = path.relative(contentDir, fullPath);
        const slugArray = relPath.replace(/\.md$/, "").split(path.sep);
        if (
          !["impressum", "kontakt", "datenschutz"].includes(
            slugArray[slugArray.length - 1].toLowerCase()
          )
        ) {
          paths.push({ params: { slug: slugArray } });
        }
      }
    }
  }

  scanDir(contentDir);
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const fs = require("fs"); // ✅ auch hier erlaubt
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

  // Kategorie bestimmen
  const parts = slugPath.split("/");
  const categorySlug = parts.length > 1 ? parts[0] : null;

  return { props: { frontmatter, html, categorySlug } };
}
