// pages/[...slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";

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
          maxWidth: "800px",
          margin: "2rem auto",
          color: "white",
        }}
      >
        <Link href="/" style={{ color: "#00bfa5" }}>
          ← Zurück
        </Link>
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

// Alle Markdown-Dateien (rekursiv) einsammeln
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

// Statische Pfade für alle Artikel erzeugen
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = getAllMarkdownFiles(contentDir);

  const paths = files.map((file) => {
    // relativen Pfad ab "content/"
    const relative = file
      .replace(contentDir + path.sep, "")
      .replace(/\\/g, "/")
      .replace(/\.md$/, "");

    const slugArray = relative.split("/");
    return { params: { slug: slugArray } };
  });

  return {
    paths,
    fallback: false, // alle bekannten Artikel vorab bauen
  };
}

// Konkreten Artikel laden
export async function getStaticProps({ params }) {
  try {
    const slugSegments = Array.isArray(params.slug)
      ? params.slug
      : [params.slug];

    const relativePath = slugSegments.join("/");

    const contentDir = path.join(process.cwd(), "content");
    const fullPath = path.join(contentDir, `${relativePath}.md`);

    if (!fs.existsSync(fullPath)) {
      console.error("❌ Datei nicht gefunden:", fullPath);
      return { notFound: true };
    }

    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data: frontmatter, content } = matter(raw);
    const html = marked.parse(content);

    return {
      props: {
        frontmatter: frontmatter || null,
        html,
      },
    };
  } catch (err) {
    console.error("Fehler beim Laden des Artikels:", err);
    return { notFound: true };
  }
}
