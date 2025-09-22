import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const paths = files.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { params: { slug: data.slug || file.replace(/\.md$/, "") } };
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
      frontmatter: data,
      content,
    },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1>{frontmatter.title}</h1>
      <p><em>{frontmatter.date}</em></p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
