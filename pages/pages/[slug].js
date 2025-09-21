import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <Head>
        {/* ✅ SEO-Meta-Daten */}
        <title>{frontmatter.title} | FinanzFreedom Blog</title>
        <meta
          name="description"
          content={frontmatter.excerpt || "Artikel über Finanzen & passives Einkommen"}
        />
      </Head>

      <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
        <h1>{frontmatter.title}</h1>
        <small>{frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </>
  );
}
