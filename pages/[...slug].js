import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";

export default function ArticlePage({ frontmatter, html, category }) {
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
        <nav style={{ marginBottom: "1rem" }}>
          <Link href={`/${category}`} style={{ color: "#00bfa5" }}>
            ← Zur Kategorie {category}
          </Link>
        </nav>

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
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let paths = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const slug = file.replace(".md", "");

      paths.push({
        params: { slug: [`${category}`, slug] },
      });
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const [category, slug] = params.slug;

  const articlePath = path.join(
    process.cwd(),
    "content",
    category,
    `${slug}.md`
  );

  if (!fs.existsSync(articlePath)) {
    return { notFound: true };
  }

  const raw = fs.readFileSync(articlePath, "utf8");
  const { data, content } = matter(raw);
  const html = marked(content);

  return {
    props: {
      frontmatter: data,
      html,
      category,
    },
  };
}
