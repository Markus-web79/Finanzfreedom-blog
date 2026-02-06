import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";

export default function VersicherungArticle({ frontmatter, content }) {
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
        <Link href="/versicherungen" style={{ color: "#2dd4bf" }}>
          ← Zurück zu Versicherungen
        </Link>

        <h1 style={{ marginTop: "1.5rem" }}>{frontmatter.title}</h1>

        {frontmatter.intro && (
          <p style={{ opacity: 0.85, maxWidth: "800px" }}>
            {frontmatter.intro}
          </p>
        )}

        {/* CONTENT */}
        <div
          style={{
            marginTop: "2.5rem",
            lineHeight: "1.7",
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* SAUBERES ENDE – KEINE AFFILIATE-LINKS */}
        <section
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid #1e293b",
            opacity: 0.8,
          }}
        >
          <p>
            👉 <Link href="/versicherungen">Zur Versicherungs-Übersicht</Link>
          </p>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/versicherungen");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/versicherungen",
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
