import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";

export default function PostPage({ frontmatter, html, categorySlug }) {
  if (!frontmatter) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "4rem",
        }}
      >
        <h1>404 – Artikel nicht gefunden</h1>
        <Link href="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  const categoryLabels = {
    etfs: "ETFs",
    "geld-anlegen": "Geld anlegen",
    "geld-vermehren": "Geld vermehren",
    tools: "Tools",
    versicherungen: "Versicherungen",
  };

  const label =
    (categorySlug && categoryLabels[categorySlug]) || "Kategorie";

  const categoryHref = categorySlug ? `/${categorySlug}` : "/";

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
        {/* Breadcrumb */}
        <nav
          style={{
            fontSize: "0.9rem",
            marginBottom: "1rem",
            color: "#9ca3af",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
            }}
          >
            Startseite
          </Link>
          {categorySlug && (
            <>
              <span style={{ margin: "0 0.4rem" }}>&gt;</span>
              <Link
                href={categoryHref}
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            </>
          )}
          <span style={{ margin: "0 0.4rem" }}>&gt;</span>
          <span style={{ color: "#e5e7eb" }}>{frontmatter.title}</span>
        </nav>

        {/* Zurück-Link */}
        {categorySlug && (
          <Link
            href={categoryHref}
            style={{
              display: "inline-block",
              color: "#00bfa5",
              marginBottom: "1.5rem",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Zurück zur Kategorie
          </Link>
        )}

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

        // Impressum / Kontakt / Datenschutz nicht als Artikel-Seite bauen
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

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const slugArray = Array.isArray(params.slug)
      ? params.slug
      : [params.slug];

    const slugPath = slugArray.join("/");

    const contentDir = path.join(process.cwd(), "content");
    const fullPath = path.join(contentDir, `${slugPath}.md`);

    if (!fs.existsSync(fullPath)) {
      console.error("❌ Datei nicht gefunden:", fullPath);
      return { notFound: true };
    }

    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data: frontmatter, content } = matter(raw);
    const html = marked(content);

    const categorySlug = slugArray[0] || null;

    return {
      props: {
        frontmatter: frontmatter || null,
        html,
        categorySlug,
      },
    };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
