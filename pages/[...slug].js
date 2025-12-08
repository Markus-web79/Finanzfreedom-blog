import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";

export default function PostPage({ frontmatter, html, category }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || "Finanzwissen einfach erklärt."}
        />
      </Head>

      <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
        {/* Breadcrumb */}
        {category && (
          <nav style={{ marginBottom: "1rem" }}>
            <Link href={`/${category}`} style={{ color: "#00bfa5", textDecoration: "none" }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </nav>
        )}

        <h1 style={{ marginBottom: "1rem" }}>{frontmatter.title}</h1>

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  let paths = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const slug = file.replace(".md", "");
      paths.push({
        params: { slug: [`${category}/${slug}`] },
      });
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug)
      ? params.slug.join("/")
      : params.slug;

    const fullPath = path.join(process.cwd(), "content", `${slugPath}.md`);

    if (!fs.existsSync(fullPath)) {
      console.error("❌ Datei nicht gefunden:", fullPath);
      return { notFound: true };
    }

    const raw = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    const html = marked(content);

    const parts = slugPath.split("/");
    const category = parts.length > 1 ? parts[0] : null;

    return { props: { frontmatter, html, category } };
  } catch (err) {
    console.error("❌ Fehler beim Lesen:", err);
    return { notFound: true };
  }
}
