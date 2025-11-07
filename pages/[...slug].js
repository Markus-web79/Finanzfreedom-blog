import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { marked } from "marked";

// --------------------
// Artikel-Seite
// --------------------
export default function PostPage({ frontmatter, html }) {
  const router = useRouter();

  // Falls beim Build/Fetch etwas schiefging → 404
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

  // ----- Kategorie aus URL / Frontmatter bestimmen -----
  const slugFromRouter = router.query.slug;

  let slugArray = [];
  if (Array.isArray(slugFromRouter)) {
    slugArray = slugFromRouter;
  } else if (typeof slugFromRouter === "string") {
    slugArray = slugFromRouter.split("/");
  }

  // Kategorie: bevorzugt aus Frontmatter, sonst aus erstem URL-Segment
  const categorySegment =
    (frontmatter.category && String(frontmatter.category)) ||
    (slugArray.length > 0 ? slugArray[0] : null);

  const categoryHref = categorySegment ? `/${categorySegment}` : "/";
  const categoryLabel = categorySegment
    ? categorySegment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    : "Übersicht";

  // --------------------
  // Render
  // --------------------
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
          padding: "0 1.5rem",
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Brotkrumen"
          style={{
            fontSize: "0.9rem",
            marginBottom: "1.25rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#00bfa5",
              textDecoration: "none",
            }}
          >
            Startseite
          </Link>

          {categorySegment && (
            <>
              <span
                style={{
                  margin: "0 0.4rem",
                  color: "#888",
                }}
              >
                ›
              </span>
              <Link
                href={categoryHref}
                style={{
                  color: "#00bfa5",
                  textDecoration: "none",
                }}
              >
                {categoryLabel}
              </Link>
            </>
          )}

          <span
            style={{
              margin: "0 0.4rem",
              color: "#888",
            }}
          >
            ›
          </span>

          <span style={{ color: "#fff" }}>{frontmatter.title}</span>
        </nav>

        {/* Zurück zur Kategorie */}
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

        <h1
          style={{
            marginBottom: "1.5rem",
          }}
        >
          {frontmatter.title}
        </h1>

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

// --------------------
// Pfade für alle Artikel erzeugen
// --------------------
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
        const baseName = entry.name.replace(/\.md$/, "").toLowerCase();

        // Diese Sonderseiten werden von eigenen Pages behandelt
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

// --------------------
// Inhalte für einen Artikel laden
// --------------------
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
    const { data, content } = matter(raw);
    const html = marked.parse ? marked.parse(content) : marked(content);

    const firstSegment = slugPath.split("/")[0];

    return {
      props: {
        frontmatter: {
          ...data,
          // falls keine Kategorie im Frontmatter: aus Pfad ableiten
          category: data.category || firstSegment,
        },
        html,
      },
    };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
