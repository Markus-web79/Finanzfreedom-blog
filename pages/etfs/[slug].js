import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";

export default function EtfArticle({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || frontmatter.title}
        />
      </Head>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        {/* Zurück-Link */}
        <Link href="/etfs" style={{ color: "#2dd4bf" }}>
          ← Zurück zu ETFs
        </Link>

        {/* Titel */}
        <h1 style={{ marginTop: "1.5rem" }}>
          {frontmatter.title}
        </h1>

        {/* Intro */}
        {frontmatter.intro && (
          <p
            style={{
              opacity: 0.85,
              maxWidth: "800px",
              lineHeight: "1.7",
            }}
          >
            {frontmatter.intro}
          </p>
        )}

        {/* Inhalt */}
        <div
          style={{
            marginTop: "2.5rem",
            lineHeight: "1.7",
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

/* ---------- Static Generation ---------- */

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/etfs");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/etfs",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content: marked.parse(content),
    },
  };
}
