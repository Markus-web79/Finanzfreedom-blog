import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../styles/ArticlePage.module.css";

export default function Article({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || ""}
        />
      </Head>

      <main className={styles.container}>
        <h1>{frontmatter.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
      params: {
        slug: [file.replace(".md", "")],
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}
