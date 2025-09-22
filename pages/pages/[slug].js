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

    return {
      params: { slug: data.slug || file.replace(/\.md$/, "") }
    };
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
        title: data.title || "Unbenannter Artikel",
        date: data.date || null,
        excerpt: data.excerpt || "",
        slug: data.slug || params.slug
      },
      content
    }
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && (
        <p style={{ color: "gray", fontSize: "0.9rem" }}>
          📅 {new Date(frontmatter.date).toLocaleDateString("de-DE")}
        </p>
      )}
      <article
        dangerouslySetInnerHTML={{ __html: marked(content) }}
        style={{ lineHeight: "1.6", marginTop: "2rem" }}
      />
    </div>
  );
}
