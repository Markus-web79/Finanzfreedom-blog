import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content/investieren");
  const files = fs.readdirSync(contentDir);

  const paths = files.map((file) => ({
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

  const filePath = path.join(
    process.cwd(),
    "content/investieren",
    `${slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}

export default function Article({ frontmatter, content }) {
  return (
    <main style={{ maxWidth: "800px", margin: "60px auto", padding: "20px" }}>
      <h1>{frontmatter.title}</h1>
      <p style={{ opacity: 0.7 }}>{frontmatter.description}</p>

      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
