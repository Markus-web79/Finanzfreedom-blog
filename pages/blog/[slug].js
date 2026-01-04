import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";
import Link from "next/link";

export default function BlogPost({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta name="description" content={frontmatter.excerpt} />
      </Head>

      <main style={styles.page}>
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> → <Link href="/blog">Blog</Link>
        </nav>

        <article style={styles.article}>
          <h1>{frontmatter.title}</h1>

          {frontmatter.category && (
            <p style={styles.category}>Kategorie: {frontmatter.category}</p>
          )}

          <div
            style={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        <Link href="/blog" style={styles.back}>
          ← Zurück zum Blog
        </Link>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

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
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return {
    props: {
      frontmatter: data,
      content: processedContent.toString(),
    },
  };
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #020617, #000)",
    color: "#e5e7eb",
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.9rem",
    marginBottom: "20px",
    color: "#94a3b8",
  },
  article: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "40px",
  },
  category: {
    marginTop: "10px",
    color: "#2dd4bf",
    fontWeight: "600",
  },
  content: {
    marginTop: "30px",
    lineHeight: "1.8",
    fontSize: "1.05rem",
  },
  back: {
    display: "inline-block",
    marginTop: "40px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },
};
