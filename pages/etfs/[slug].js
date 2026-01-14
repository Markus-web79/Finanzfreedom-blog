import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
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

      <div className="article-wrapper">
        <Link href="/etfs" className="back-link">
          ← Zurück zu ETFs
        </Link>

        <h1>{frontmatter.title}</h1>

        {frontmatter.intro && <p className="article-intro">{frontmatter.intro}</p>}

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

/* ---------- STATIC PATHS ---------- */
export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/etfs");
  const files = fs.readdirSync(dir);

  return {
    paths: files.map((file) => ({
      params: { slug: file.replace(".md", "") },
    })),
    fallback: false,
  };
}

/* ---------- STATIC PROPS ---------- */
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
