import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";

export default function Vergleich({ frontmatter, html }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom Vergleich 2025</title>
        <meta
          name="description"
          content={
            frontmatter.description ||
            "FinanzFreedom Vergleich – Transparente Übersicht aktueller Finanzprodukte."
          }
        />
      </Head>

      <main style={{ maxWidth: "800px", margin: "3rem auto", padding: "0 1rem", color: "white" }}>
        <Link
          href="/vergleiche"
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

        <h1 style={{ color: "#00e5cf" }}>{frontmatter.title}</h1>
        {frontmatter.table && (
          <div
            style={{
              margin: "1.5rem 0",
              border: "1px solid rgba(0,229,207,0.2)",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h3 style={{ color: "#00bfa5" }}>Vergleichstabelle</h3>
            <div dangerouslySetInnerHTML={{ __html: frontmatter.table }} />
          </div>
        )}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "vergleiche");
  const paths = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: { slug: file.replace(/\.md$/, "") },
    }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", "vergleiche", `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(raw);
  const html = marked(content);

  return {
    props: { frontmatter, html },
  };
}
