import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  const paths = files.map(filename => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      params: { slug: data.slug || filename.replace(/\.md$/, "") },
    };
  });

  return {
    paths,
    fallback: false,
  };
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
        date: data.date || "",
        excerpt: data.excerpt || "",
      },
      slug: params.slug,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && (
        <p style={{ color: "#555" }}>
          📅 {new Date(frontmatter.date).toLocaleDateString("de-DE")}
        </p>
      )}
      <article
        dangerouslySetInnerHTML={{ __html: marked(content) }}
        style={{ lineHeight: "1.7", marginTop: "2rem" }}
      />
    </div>
  );
}
