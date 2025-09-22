import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const contentHtml = marked(content);

  return {
    props: {
      frontmatter: {
        title: data.title || "Unbenannter Artikel",
        date: data.date || null,
        excerpt: data.excerpt || "",
      },
      contentHtml,
    },
  };
}

export default function PostPage({ frontmatter, contentHtml }) {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <article>
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <p style={{ color: "#666", fontSize: "0.9rem" }}>{frontmatter.date}</p>}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}
