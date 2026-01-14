import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";
import styles from "../../styles/Article.module.css";

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

      <div className={styles.wrapper}>
        <Link href="/etfs" className={styles.back}>
          ← Zurück zu ETFs
        </Link>

        <h1>{frontmatter.title}</h1>

        {frontmatter.intro && (
          <p className={styles.intro}>{frontmatter.intro}</p>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/etfs");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return { paths, fallback: false };
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
