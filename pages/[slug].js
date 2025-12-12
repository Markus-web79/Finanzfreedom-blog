import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export default function ArticlePage({ frontmatter, html }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || "Finanzwissen einfach erklärt"}
        />
      </Head>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
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
    "content",
    `${params.slug}.md`
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    props: {
      frontmatter: data,
      html: marked(content),
    },
  };
}
