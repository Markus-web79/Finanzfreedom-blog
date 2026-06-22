import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import ArticleLayout from "../../components/ArticleLayout";

export default function GirokontoArticle({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || frontmatter.title}
        />
      </Head>

      <ArticleLayout
        title={frontmatter.title}
        intro={frontmatter.intro}
        backLink={{
          href: "/girokonto",
          label: "Zurück zum Girokonto Vergleich",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ArticleLayout>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/girokonto");
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
    "content/girokonto",
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
