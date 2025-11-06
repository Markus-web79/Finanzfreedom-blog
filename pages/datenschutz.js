import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export default function Datenschutz({ html }) {
  return (
    <>
      <Head>
        <title>Datenschutz | FinanzFreedom</title>
      </Head>
      <main style={{ maxWidth: "800px", margin: "2rem auto", color: "white" }}>
        <h1>Datenschutz</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content", "datenschutz.md");

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  const html = marked(content);

  return { props: { html } };
}
