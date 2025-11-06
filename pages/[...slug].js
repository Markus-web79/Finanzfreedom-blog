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
          lineHeight: "1.6",
        }}
      >
        <Link href="/" style={{ color: "#00bfa5" }}>
          ← Zurück
<Link
  href="/"
  style={{
    display: "inline-block",
    color: "#00bfa5",
    marginBottom: "1.5rem",
    textDecoration: "none",
    fontWeight: "500",
  }}
>
  ← Zurück zur Übersicht
</Link>

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
        const slug = path
          .relative(contentDir, fullPath)
          .replace(/\.md$/, "")
          .split(path.sep);
        paths.push({ params: { slug } });
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
    const filePath = path.join(process.cwd(), "content", `${slugPath}.md`);

    if (!fs.existsSync(filePath)) {
      console.error("❌ Datei nicht gefunden:", filePath);
      return { notFound: true };
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(raw);
    const html = marked(content);

    return { props: { frontmatter, html } };
  } catch (err) {
    console.error("Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
