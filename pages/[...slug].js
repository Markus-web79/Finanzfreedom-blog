import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";

export default function PostPage({ frontmatter, html }) {
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

    <main
      style={{
        maxWidth: "850px",
        margin: "2rem auto",
        padding: "0 1rem",
        color: "#fff",
        lineHeight: "1.8",
      }}
    >
      {/* Dynamischer Zurück-Link */}
      <Link
        href={`/${frontmatter.category || ""}`}
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "#00bfa5",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Zurück zur Kategorie{" "}
        {frontmatter.category ? frontmatter.category.toUpperCase() : ""}
      </Link>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#00bfa5" }}>
        {frontmatter.title}
      </h1>

      <article dangerouslySetInnerHTML={{ __html: html }} />

      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        <Link
          href={`/${frontmatter.category || ""}`}
          style={{
            background: "#00bfa5",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "background 0.3s ease",
          }}
        >
          ← Zurück zu{" "}
          {frontmatter.category ? frontmatter.category.toUpperCase() : "allen Artikeln"}
        </Link>
      </div>
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

        if (["impressum", "kontakt", "datenschutz"].includes(baseName)) continue;

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

    return { props: { frontmatter, html } };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
