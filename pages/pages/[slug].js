import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith(".md"));

  const paths = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return { params: { slug } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: {
        title: data.title || "Automatischer Artikel",
        date: data.date || null,
      },
      content: marked(content),
    },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && <p><small>{frontmatter.date}</small></p>}
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
