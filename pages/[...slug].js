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

  // Dynamischer Zurück-Link: führt zur Kategorie
  const backLink = category ? `/${category}` : "/";

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
        <Link
          href={backLink}
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

        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const paths = [];

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const baseName = entry.name.replace(".md", "").toLowerCase();

        // ❌ Ausschließen: keine statischen Seiten
        if (["impressum", "kontakt", "datenschutz"].includes(baseName)) {
          continue;
        }

        const relPath = path.relative(contentDir, fullPath);
        const slugArray = relPath.replace(/\.md$/, "").split(path.sep);
        paths.push({ params: { slug: slugArray } });
      }
    }
  }

  scanDir(contentDir);

  return { paths, fallback: "blocking" };
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

    // Kategorie aus dem Pfad ermitteln
    const parts = slugPath.split("/");
    const category = parts.length > 1 ? parts[0] : null;

    return { props: { frontmatter, html, category } };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
