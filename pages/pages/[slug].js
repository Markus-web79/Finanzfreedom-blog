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

  return {
    paths,
    fallback: false, // nur bekannte Artikel werden gerendert
  };
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
      slug: params.slug,
    },
  };
}

export default function PostPage({ frontmatter, content, slug }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{frontmatter.title || "Unbenannter Artikel"}</h1>
      {frontmatter.date && (
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          📅 {new Date(frontmatter.date).toLocaleDateString("de-DE")}
        </p>
      )}
      <article
        dangerouslySetInnerHTML={{ __html: marked(content || "") }}
        style={{ lineHeight: "1.6", marginTop: "1rem" }}
      />
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#999" }}>
        👉 Dieser Artikel wurde automatisch für den FinanzFreedom-Blog erstellt.
      </p>
    </div>
  );
}
